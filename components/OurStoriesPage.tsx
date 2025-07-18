

import React, { useState } from 'react';
import { Language, FullLibraryStory } from '../types';
import { FULL_LIBRARY_STORIES } from '../constants';
import StoryBookViewer from './StoryBookViewer';

const StoryCard: React.FC<{ story: FullLibraryStory; onClick: () => void; language: Language; }> = ({ story, onClick, language }) => {
    const title = story.title[language];
    return (
        <div 
            onClick={onClick}
            className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Read story: ${title}`}
            onKeyPress={(e) => { if (e.key === 'Enter') onClick() }}
        >
            <img src={story.coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <h3 className={`absolute bottom-0 p-4 text-white font-bold text-lg ${language === 'ar' ? 'right-0 left-auto text-right font-cairo' : 'left-0'}`}>{title}</h3>
        </div>
    );
};


interface OurStoriesPageProps {
    language: Language;
}

export default function OurStoriesPage({ language }: OurStoriesPageProps) {
    const [selectedStory, setSelectedStory] = useState<FullLibraryStory | null>(null);

    const text = language === 'en' 
        ? { title: "Our Story Library", description: "Explore a universe of magical stories created with AI. Click a book to read!" }
        : { title: "مكتبة قصصنا", description: "استكشف عالمًا من القصص السحرية التي تم إنشاؤها بالذكاء الاصطناعي. انقر على كتاب لقراءته!" };

    if (selectedStory) {
        return (
            <StoryBookViewer 
                story={selectedStory}
                onClose={() => setSelectedStory(null)}
                language={language}
            />
        );
    }

    return (
        <div className="container mx-auto text-center py-12 sm:py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{text.title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{text.description}</p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
                {FULL_LIBRARY_STORIES.map((story, index) => (
                    <StoryCard key={index} story={story} onClick={() => setSelectedStory(story)} language={language} />
                ))}
            </div>
        </div>
    );
}
