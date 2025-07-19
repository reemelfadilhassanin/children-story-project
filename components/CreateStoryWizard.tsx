import React, { useState, useCallback } from 'react';
import { Language, Story, StoryTheme, StoryPage, GenerationProgress, LocalizedString, FullLibraryStory } from '../types';
import { UI_TEXT } from '../constants';
import Step1Welcome from './Step1Welcome';
import Step2Style from './Step2Style';
import Step2Theme from './Step2Theme';
import Step3Generating from './Step3Generating';
import Step4Editor from './Step4Editor';
import StoryBookViewer from './StoryBookViewer';
import { describeHero, generateStory, generateImage } from '../services/geminiService';

type WizardStep = 'welcome' | 'style' | 'theme' | 'generating' | 'editor';

interface CreateStoryWizardProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

export default function CreateStoryWizard({ language, setLanguage }: CreateStoryWizardProps) {
  const [step, setStep] = useState<WizardStep>('welcome');
  const [childName, setChildName] = useState<string>('');
  const [childPhoto, setChildPhoto] = useState<File | null>(null);
  const [characterDescription, setCharacterDescription] = useState<string>('');
  const [artStyle, setArtStyle] = useState<string>('');
  const [story, setStory] = useState<Story | null>(null);
  const [generationProgress, setGenerationProgress] = useState<GenerationProgress>({ message: '', percentage: 0 });
  const [error, setError] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<StoryTheme | null>(null);
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);

  const text = UI_TEXT[language];

  const handleStart = (name: string, photo: File, lang: Language) => {
    if (name && photo) {
      setChildName(name);
      setChildPhoto(photo);
      setLanguage(lang);
      setStep('style');
      setError(null);
    }
  };

  const handleStyleSelect = (stylePrompt: string) => {
    setArtStyle(stylePrompt);
    setStep('theme');
  };

  const handleThemeSelect = useCallback(async (theme: StoryTheme) => {
    setSelectedTheme(theme);
    setStep('generating');
    setError(null);

    try {
      // Step 1: Describe the hero from the photo
      setGenerationProgress({ message: 'Analyzing hero photo...', percentage: 10 });
      const description = await describeHero(childPhoto!);
      setCharacterDescription(description);

      // Step 2: Generate the story text and image prompts
      setGenerationProgress({ message: 'Writing the story...', percentage: 30 });
      const storyData = await generateStory(theme, description, childName, artStyle);
      
      const storyWithPlaceholders = {
          ...storyData,
          pages: storyData.pages.map(p => ({ ...p, imageIsGenerating: true }))
      };
      setStory(storyWithPlaceholders);

      // Step 3: Generate images for each page
      const totalPages = storyData.pages.length;
      const pagesWithImages: StoryPage[] = [];

      for (let i = 0; i < totalPages; i++) {
        const page = storyData.pages[i];
        const percentage = 50 + Math.round((i / totalPages) * 50);
        setGenerationProgress({ message: `Illustrating page ${i + 1} of ${totalPages}...`, percentage });
        
        try {
            const imageUrl = await generateImage(page.imagePrompt);
            pagesWithImages.push({ ...page, imageUrl, imageIsGenerating: false });
        } catch (imgError) {
            console.error(`Failed to generate image for page ${i + 1}:`, imgError);
            pagesWithImages.push({ ...page, imageUrl: 'error', imageIsGenerating: false }); // Mark as error
        }
        
        setStory(prev => ({
            ...prev!,
            pages: prev!.pages.map(p => p.pageNumber === page.pageNumber ? pagesWithImages.find(pi => pi.pageNumber === p.pageNumber) || p : p)
        }));
      }

      setStory(prev => ({ ...prev!, pages: pagesWithImages }));
      setStep('editor');
    } catch (err) {
      console.error(err);
      setError(text.errorGeneratingStory);
      setStep('theme'); // Go back to theme selection on error
    }
  }, [childPhoto, childName, artStyle, text.errorGeneratingStory]);

  const handleStartOver = () => {
    setStep('welcome');
    setChildName('');
    setChildPhoto(null);
    setCharacterDescription('');
    setArtStyle('');
    setStory(null);
    setError(null);
    setSelectedTheme(null);
    setIsPreviewing(false);
  };

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return <div className="bg-slate-50 text-slate-800 p-4 sm:p-8 my-8 rounded-xl"><Step1Welcome onStart={handleStart} language={language} setLanguage={setLanguage} /></div>;
      case 'style':
        return <div className="bg-slate-50 text-slate-800 p-4 sm:p-8 my-8 rounded-xl"><Step2Style onStyleSelect={handleStyleSelect} language={language} /></div>;
      case 'theme':
        return <div className="bg-slate-50 text-slate-800 p-4 sm:p-8 my-8 rounded-xl"><Step2Theme onThemeSelect={handleThemeSelect} language={language} error={error} /></div>;
      case 'generating':
        return <div className="bg-slate-50 text-slate-800 p-4 sm:p-8 my-8 rounded-xl"><Step3Generating progress={generationProgress} language={language} /></div>;
      case 'editor':
        if (isPreviewing && story && selectedTheme) {
            let descriptionObject: LocalizedString;

            if (selectedTheme.id === 'custom') {
                descriptionObject = {
                    en: selectedTheme.description,
                    ar: selectedTheme.description,
                };
            } else {
                descriptionObject = {
                    en: UI_TEXT.en.themes[selectedTheme.id].description,
                    ar: UI_TEXT.ar.themes[selectedTheme.id].description,
                };
            }
            
            const storyForViewer: FullLibraryStory = {
                title: story.title,
                pages: story.pages,
                coverImage: story.pages[0]?.imageUrl && story.pages[0].imageUrl !== 'error' ? story.pages[0].imageUrl : selectedTheme.image,
                description: descriptionObject,
                category: 'adventure' // Default category for generated stories
            };
            
            return (
                <StoryBookViewer 
                    story={storyForViewer}
                    onClose={() => setIsPreviewing(false)}
                    language={language}
                />
            );
        }
        return <Step4Editor 
            story={story!} 
            setStory={setStory} 
            onStartOver={handleStartOver} 
            language={language} 
            characterDescription={characterDescription} 
            onPreview={() => setIsPreviewing(true)}
        />;
      default:
        return <div className="bg-slate-50 text-slate-800 p-4 sm:p-8 my-8 rounded-xl"><Step1Welcome onStart={handleStart} language={language} setLanguage={setLanguage} /></div>;
    }
  };

  return (
    <div className="p-4 sm:p-8">
      {renderStep()}
    </div>
  );
}
