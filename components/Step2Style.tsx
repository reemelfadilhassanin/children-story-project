import React from 'react';
import { ArtStyle, Language } from '../types';
import { ART_STYLES, UI_TEXT } from '../constants';

interface Step2StyleProps {
    onStyleSelect: (stylePrompt: string) => void;
    language: Language;
}

const StyleCard: React.FC<{ style: ArtStyle; onClick: () => void; }> = ({ style, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
        >
            <div className="h-40 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={style.image} alt={style.name} />
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800">{style.name}</h3>
            </div>
        </div>
    );
};


const Step2Style: React.FC<Step2StyleProps> = ({ onStyleSelect, language }) => {
    const text = UI_TEXT[language];

    return (
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{text.chooseStyle}</h2>
            <p className="mt-2 text-lg text-slate-600">{text.chooseStyleDesc}</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {ART_STYLES.map(style => (
                    <StyleCard key={style.id} style={style} onClick={() => onStyleSelect(style.prompt)} />
                ))}
            </div>
        </div>
    );
};

export default Step2Style;
