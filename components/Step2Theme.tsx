import React from 'react';
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
            className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
        >
            <div className="h-40 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={image} alt={title} />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <p className="mt-2 text-slate-500 text-sm">{description}</p>
            </div>
        </div>
    );
};

const Step2Theme: React.FC<Step2ThemeProps> = ({ onThemeSelect, language, error }) => {
    const text = UI_TEXT[language];

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
        </div>
    );
};

export default Step2Theme;