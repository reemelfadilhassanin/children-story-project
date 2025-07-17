import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Story, StoryPage, StoryTheme, Language } from '../types';
import { GOOGLE_AI_API_KEY, HUGGING_FACE_API_KEY } from '../constants';

if (!GOOGLE_AI_API_KEY || GOOGLE_AI_API_KEY.startsWith("YOUR")) {
    throw new Error("Google AI API Key not found. Please add it to constants.ts");
}

const ai = new GoogleGenAI({ apiKey: GOOGLE_AI_API_KEY });

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

export async function describeHero(photo: File): Promise<string> {
    try {
        const imagePart = await fileToGenerativePart(photo);
        const prompt = "Describe the child in this photo to create a consistent cartoon character. Focus on gender, hair color, hairstyle, and a simple clothing description. Be concise. Example: 'a young boy with short brown hair wearing a red t-shirt'.";
        
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, { text: prompt }] },
            config: {
                temperature: 0.1,
                thinkingConfig: { thinkingBudget: 0 } // faster response for description
            }
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error describing hero:", error);
        throw new Error("Failed to analyze the hero's photo.");
    }
}


export async function generateStory(theme: StoryTheme, characterDescription: string, childName: string, language: Language, artStyle: string): Promise<Story> {
    const langInstruction = language === 'ar' ? 'The story text must be in Arabic.' : 'The story text must be in English.';

    const systemInstruction = `You are a creative storyteller for children aged 3-7.
Your task is to generate a complete story based on a theme.
The story will have a title and exactly 10 pages.
The main character's name is ${childName}. Always use this name.
The character's appearance is: "${characterDescription}". This description MUST be incorporated into every image prompt.
Each page must have 'text' and an 'imagePrompt'.
The 'text' should be simple, positive, and age-appropriate. ${langInstruction}
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
                            type: Type.STRING,
                            description: "The story's title."
                        },
                        pages: {
                            type: Type.ARRAY,
                            description: "The 10 pages of the story.",
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    text: {
                                        type: Type.STRING,
                                        description: "The text for one page of the story."
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

        const storyData = JSON.parse(response.text);

        // Manually add page numbers and validate structure.
        if (!storyData.title || !storyData.pages || !Array.isArray(storyData.pages) || storyData.pages.length === 0) {
            throw new Error("AI returned an invalid story structure. Missing title or pages.");
        }

        const pagesWithNumbers: StoryPage[] = storyData.pages.map((page: any, index: number) => ({
            pageNumber: index + 1,
            text: page.text,
            imagePrompt: page.imagePrompt,
        }));

        return {
            title: storyData.title,
            pages: pagesWithNumbers
        };

    } catch (error) {
        console.error("Error generating story:", error);
        if (error instanceof SyntaxError) {
             throw new Error("The AI returned a malformed story. Please try again.");
        }
        throw new Error("The AI failed to create a story. Please try a different theme.");
    }
}

// *** New function using Hugging Face ***
export async function generateImage(prompt: string): Promise<string> {
    if (!HUGGING_FACE_API_KEY || HUGGING_FACE_API_KEY.startsWith("YOUR")) {
        throw new Error("Hugging Face API Key not found. Please add it to constants.ts");
    }

    const HUGGING_FACE_MODEL_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

    try {
        const response = await fetch(
			HUGGING_FACE_MODEL_URL,
			{
				headers: { 
                    "Authorization": `Bearer ${HUGGING_FACE_API_KEY}`,
                    "Content-Type": "application/json"
                },
				method: "POST",
				body: JSON.stringify({
					inputs: prompt,
				}),
			}
		);

        if (!response.ok) {
            const errorBody = await response.text();
            console.error("Hugging Face API Error:", errorBody);
            throw new Error(`Hugging Face API responded with status ${response.status}: ${errorBody}`);
        }

        const imageBlob = await response.blob();
        
        // Convert Blob to Base64 Data URL
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result as string);
            };
            reader.onerror = reject;
            reader.readAsDataURL(imageBlob);
        });

    } catch (error) {
        console.error("Error generating image with Hugging Face:", error);
        throw new Error("Failed to generate image.");
    }
}
