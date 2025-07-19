import React from 'react';
import { FullLibraryStory, Language } from '../types';

interface StoryCardProps {
    story: FullLibraryStory;
    onClick: () => void;
    language: Language;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick, language }) => {
    const title = story.title[language];
    const readStoryText = language === 'ar' ? 'اقرأ القصة' : 'Read Story';

    return (
        <div
            onClick={onClick}
            className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer focus-within:ring-4 focus-within:ring-indigo-500"
            role="button"
            tabIndex={0}
            aria-label={`Read story: ${title}`}
            onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
        >
            <img src={story.coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    className="bg-white text-slate-900 font-bold py-2 px-5 rounded-lg hover:bg-slate-200 transition-transform transform hover:scale-105"
                    // Prevent the parent div's onClick from firing when the button is clicked
                    onClick={(e) => { e.stopPropagation(); onClick(); }}
                >
                    {readStoryText}
                </button>
            </div>

            <h3 className={`absolute bottom-0 p-4 text-white font-bold text-lg transition-opacity duration-300 group-hover:opacity-0 ${language === 'ar' ? 'right-0 text-right font-cairo' : 'left-0 text-left'}`}>
                {title}
            </h3>
        </div>
    );
};

export default StoryCard;
