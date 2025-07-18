import React, { useState } from 'react';
import { StoryTheme, Language } from '../types';
import { STORY_THEME_DEFINITIONS, UI_TEXT } from '../constants';

interface Step2ThemeProps {
    onThemeSelect: (theme: StoryTheme) => void;
    language: Language;
    error: string | null;
}

const ThemeCard: React.FC<{
    image: string;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ image, title, description, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
        >
            <div className="h-40 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={image} alt={title} />
            </div>
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <p className="mt-2 text-slate-500 text-sm">{description}</p>
            </div>
        </div>
    );
};

const Step2Theme: React.FC<Step2ThemeProps> = ({ onThemeSelect, language, error }) => {
    const [customTitle, setCustomTitle] = useState('');
    const [customPrompt, setCustomPrompt] = useState('');
    const text = UI_TEXT[language];
    const customThemeText = text.customTheme;

    const handleSelect = (themeDefinition: { id: string; image: string; }) => {
        const themeText = text.themes[themeDefinition.id];
        const fullTheme: StoryTheme = {
            id: themeDefinition.id,
            image: themeDefinition.image,
            title: themeText.title,
            description: themeText.description,
            promptSuggestion: themeText.promptSuggestion,
        };
        onThemeSelect(fullTheme);
    };

    const handleCustomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!customTitle.trim() || !customPrompt.trim()) return;

        const customTheme: StoryTheme = {
            id: 'custom',
            image: 'https://img.freepik.com/free-vector/magic-book-with-shining-light_1308-111394.jpg?w=1060', // Generic image
            title: customTitle,
            description: customPrompt.substring(0, 100) + '...',
            promptSuggestion: customPrompt,
        };
        onThemeSelect(customTheme);
    };

    return (
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{text.chooseTheme}</h2>
            <p className="mt-2 text-lg text-slate-600">{text.chooseThemeDesc}</p>

            {error && <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert"><p>{error}</p></div>}

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {STORY_THEME_DEFINITIONS.map(themeDef => {
                    const themeText = text.themes[themeDef.id];
                    return (
                        <ThemeCard
                            key={themeDef.id}
                            image={themeDef.image}
                            title={themeText.title}
                            description={themeText.description}
                            onClick={() => handleSelect(themeDef)}
                        />
                    );
                })}
            </div>

            {/* Custom Theme Section */}
            <div className="mt-16 pt-10 border-t-2 border-slate-200">
                <h3 className="text-2xl font-bold sm:text-3xl">{customThemeText.title}</h3>
                <p className="mt-2 text-md text-slate-500 max-w-2xl mx-auto">{customThemeText.description}</p>
                
                <form onSubmit={handleCustomSubmit} className="mt-8 max-w-2xl mx-auto text-left bg-white p-8 rounded-xl shadow-md">
                    <div className="mb-6">
                        <label htmlFor="customTitle" className="block text-sm font-bold text-slate-700 mb-2">{customThemeText.storyTitleLabel}</label>
                        <input
                            type="text"
                            id="customTitle"
                            value={customTitle}
                            onChange={(e) => setCustomTitle(e.target.value)}
                            placeholder={customThemeText.storyTitlePlaceholder}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                         <label htmlFor="customPrompt" className="block text-sm font-bold text-slate-700 mb-2">{customThemeText.promptLabel}</label>
                        <textarea
                            id="customPrompt"
                            value={customPrompt}
                            onChange={(e) => setCustomPrompt(e.target.value)}
                            placeholder={customThemeText.promptPlaceholder}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-y"
                            rows={4}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed" disabled={!customTitle.trim() || !customPrompt.trim()}>
                        {customThemeText.buttonText}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Step2Theme;
