
import React, { useState, useCallback } from 'react';
import { Language, Story, StoryTheme, StoryPage, GenerationProgress } from '../types';
import { UI_TEXT } from '../constants';
import Step1Welcome from './Step1Welcome';
import Step2Style from './Step2Style';
import Step2Theme from './Step2Theme';
import Step3Generating from './Step3Generating';
import Step4Editor from './Step4Editor';
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
    setStep('generating');
    setError(null);

    try {
      // Step 1: Describe the hero from the photo
      setGenerationProgress({ message: 'Analyzing hero photo...', percentage: 10 });
      const description = await describeHero(childPhoto!);
      setCharacterDescription(description);

      // Step 2: Generate the story text and image prompts
      setGenerationProgress({ message: 'Writing the story...', percentage: 30 });
      const storyData = await generateStory(theme, description, childName, language, artStyle);
      
      const storyWithPlaceholders: Story = {
          ...storyData,
          pages: storyData.pages.map(p => ({ ...p, imageIsGenerating: true }))
      };
      setStory(storyWithPlaceholders);

      // Step 3: Generate images for each page sequentially to avoid rate-limiting
      const pagesToProcess = [...storyWithPlaceholders.pages];
      let processedPages: StoryPage[] = [];
      const totalPages = pagesToProcess.length;
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

      for (let i = 0; i < totalPages; i++) {
          const page = pagesToProcess[i];
          const percentage = 50 + Math.round(((i + 1) / totalPages) * 50);
          setGenerationProgress({ message: `Illustrating page ${i + 1} of ${totalPages}...`, percentage });

          let newImageUrl = 'error'; // Default to error
          try {
              newImageUrl = await generateImage(page.imagePrompt);
          } catch (imgError) {
              console.error(`Failed to generate image for page ${i + 1}:`, imgError);
          }
          
          const updatedPage = { ...page, imageUrl: newImageUrl, imageIsGenerating: false };
          processedPages.push(updatedPage);
          
          const currentPagesState = [...processedPages, ...pagesToProcess.slice(i + 1)];

          setStory(prev => ({
              ...prev!,
              pages: currentPagesState,
          }));
          
          if (i < totalPages - 1) {
              await delay(1000); // 1-second delay
          }
      }
      setStep('editor');
    } catch (err) {
      console.error(err);
      setError(text.errorGeneratingStory);
      setStep('theme'); // Go back to theme selection on error
    }
  }, [childPhoto, childName, language, artStyle, text.errorGeneratingStory, setLanguage]);

  const handleStartOver = () => {
    setStep('welcome');
    setChildName('');
    setChildPhoto(null);
    setCharacterDescription('');
    setArtStyle('');
    setStory(null);
    setError(null);
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
        return <Step4Editor story={story!} setStory={setStory} onStartOver={handleStartOver} language={language} characterDescription={characterDescription} />;
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
