
import React from 'react';
import { GenerationProgress, Language } from '../types';
import { UI_TEXT } from '../constants';

interface Step3GeneratingProps {
  progress: GenerationProgress;
  language: Language;
}

const Step3Generating: React.FC<Step3GeneratingProps> = ({ progress, language }) => {
  const text = UI_TEXT[language];

  return (
    <div className="container mx-auto max-w-lg text-center flex flex-col items-center justify-center py-20">
        <svg className="animate-spin h-16 w-16 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h2 className="mt-6 text-3xl font-bold">{text.generatingTitle}</h2>
        <p className="mt-2 text-slate-600">{text.generatingDesc}</p>
        
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-8">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${progress.percentage}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
        <p className="mt-3 text-sm text-purple-700 font-medium">{progress.message}</p>
    </div>
  );
};

export default Step3Generating;
