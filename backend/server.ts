

import express, { Request as ExpressRequest, Response as ExpressResponse, Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { GoogleGenAI, Type, GenerateContentResponse, Part } from "@google/genai";

// --- Type Definitions ---
// These types are defined here to make the backend self-contained.
// They should not be imported from the frontend project.
export type LocalizedString = {
    en: string;
    ar: string;
};

export interface StoryTheme {
  id: string;
  title: string;
  description: string;
  image: string;
  promptSuggestion: string;
}

export interface StoryPage {
  pageNumber: number;
  text: LocalizedString;
  imagePrompt: string;
  imageUrl?: string;
  imageIsGenerating?: boolean;
}

export interface Story {
  title: LocalizedString;
  pages: StoryPage[];
}

dotenv.config();

const app: Express = express();
const port = 3001;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Setup Multer for file uploads ---
// Store files in memory to be processed
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// --- Google GenAI Client Initialization ---
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY not found in .env file. Please create one.");
}
const ai = new GoogleGenAI({ apiKey });


// --- API Endpoints ---

// 1. Describe Hero from Photo
app.post('/api/describe-hero', upload.single('photo'), async (req: ExpressRequest, res: ExpressResponse) => {
    // The `file` property is added by Multer.
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No photo uploaded.' });
    }

    try {
        const imagePart: Part = {
            inlineData: {
                data: file.buffer.toString('base64'),
                mimeType: file.mimetype,
            },
        };

        const prompt = "Describe the child in this photo to create a consistent cartoon character. Focus on gender, hair color, hairstyle, and a simple clothing description. Be concise. Example: 'a young boy with short brown hair wearing a red t-shirt'.";
        
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [imagePart, { text: prompt }] }], // Corrected: contents must be an array
            config: {
                temperature: 0.1,
                thinkingConfig: { thinkingBudget: 0 }
            }
        });

        const description = response.text?.trim();
        if (!description) {
            console.error('Error in /api/describe-hero: Gemini API returned no text.');
            return res.status(500).json({ error: "Failed to analyze photo: AI returned no description." });
        }

        res.json({ description });

    } catch (error) {
        console.error('Error in /api/describe-hero:', error);
        res.status(500).json({ error: "Failed to analyze the hero's photo." });
    }
});


// 2. Generate Story
app.post('/api/generate-story', async (req: ExpressRequest, res: ExpressResponse) => {
    const { theme, characterDescription, childName, artStyle } = req.body as {
        theme: StoryTheme;
        characterDescription: string;
        childName: string;
        artStyle: string;
    };

    if (!theme || !characterDescription || !childName || !artStyle) {
        return res.status(400).json({ error: 'Missing required fields for story generation.' });
    }
    
    const systemInstruction = `You are a creative storyteller for children aged 3-7.
Your task is to generate a complete story based on a theme.
The story will have a title and exactly 10 pages. The title and page text must be provided in both English and Arabic.
The main character's name is ${childName}. Always use this name.
The character's appearance is: "${characterDescription}". This description MUST be incorporated into every image prompt.
Each page must have a 'text' object (with 'en' and 'ar' strings) and an 'imagePrompt' string.
The 'imagePrompt' must ALWAYS be in English. It should be a vivid description of the scene for an AI image generator.
Every 'imagePrompt' must end with this exact phrase: ", ${artStyle}".
Your entire output must be a single JSON object matching the provided schema.`;
    
    const contents = `Generate a story with the theme: "${theme.title}". A story idea is: "${theme.promptSuggestion}".`;

    try {
         const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: {
                            type: Type.OBJECT,
                            description: "The story's title, in both English and Arabic.",
                            properties: {
                                en: { type: Type.STRING, description: "The English version of the title." },
                                ar: { type: Type.STRING, description: "The Arabic version of the title." }
                            },
                            required: ["en", "ar"]
                        },
                        pages: {
                            type: Type.ARRAY,
                            description: "The 10 pages of the story.",
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    text: {
                                        type: Type.OBJECT,
                                        description: "The text for the page, in both English and Arabic.",
                                        properties: {
                                            en: { type: Type.STRING, description: "The English text." },
                                            ar: { type: Type.STRING, description: "The Arabic text." }
                                        },
                                        required: ["en", "ar"]
                                    },
                                    imagePrompt: {
                                        type: Type.STRING,
                                        description: "The English prompt for generating the page's image."
                                    }
                                },
                                required: ["text", "imagePrompt"]
                            }
                        }
                    },
                    required: ["title", "pages"]
                }
            },
        });

        const responseText = response.text;
        if (!responseText) {
             console.error('Error in /api/generate-story: Gemini API returned no text.');
             return res.status(500).json({ error: 'The AI failed to create a story: no data returned.' });
        }
        
        const storyData = JSON.parse(responseText);

        if (!storyData.title || !storyData.pages || !Array.isArray(storyData.pages)) {
            throw new Error("AI returned an invalid story structure.");
        }

        const pagesWithNumbers: StoryPage[] = storyData.pages.map((page: any, index: number) => ({
            pageNumber: index + 1,
            text: page.text,
            imagePrompt: page.imagePrompt,
        }));

        const finalStory: Story = {
            title: storyData.title,
            pages: pagesWithNumbers
        };

        res.json(finalStory);

    } catch (error) {
        console.error('Error in /api/generate-story:', error);
        res.status(500).json({ error: 'The AI failed to create a story. Please try a different theme.' });
    }
});


// 3. Generate Image
app.post('/api/generate-image', async (req: ExpressRequest, res: ExpressResponse) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required to generate an image.' });
    }

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '4:3',
            },
        });

        const imageBytes = response.generatedImages?.[0]?.image?.imageBytes;
        
        if (imageBytes) {
            const imageUrl = `data:image/jpeg;base64,${imageBytes}`;
            res.json({ imageUrl });
        } else {
            console.error("Image generation failed. The prompt may have violated safety policies or an API error occurred. Prompt:", prompt);
            // Provide a more specific error message to the frontend.
            res.status(400).json({ error: "The image could not be created. The prompt may have been too complex or violated safety policies. Please try editing the image prompt." });
        }

    } catch (error) {
        console.error('Error in /api/generate-image:', error);
        res.status(500).json({ error: 'An internal server error occurred while generating the image.' });
    }
});


app.listen(port, () => {
    console.log(`Backend server listening on http://localhost:${port}`);
});
