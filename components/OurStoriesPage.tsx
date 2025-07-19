import React, { useState } from 'react';
import { Language, FullLibraryStory, StoryCategory } from '../types';
import { FULL_LIBRARY_STORIES } from '../constants';
import StoryBookViewer from './StoryBookViewer';
import StoryCard from './StoryCard';

interface OurStoriesPageProps {
    language: Language;
}

const STORY_CATEGORIES: { id: StoryCategory | 'all', name: { en: string; ar: string } }[] = [
    { id: 'all', name: { en: 'All Stories', ar: 'كل القصص' } },
    { id: 'adventure', name: { en: 'Adventure', ar: 'مغامرة' } },
    { id: 'fantasy', name: { en: 'Fantasy', ar: 'خيال' } },
    { id: 'bedtime', name: { en: 'Bedtime', ar: 'وقت النوم' } },
    { id: 'educational', name: { en: 'Educational', ar: 'تعليمية' } },
];


export default function OurStoriesPage({ language }: OurStoriesPageProps) {
    const [selectedStory, setSelectedStory] = useState<FullLibraryStory | null>(null);
    const [activeCategory, setActiveCategory] = useState<StoryCategory | 'all'>('all');

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
    
    const filteredStories = activeCategory === 'all'
        ? FULL_LIBRARY_STORIES
        : FULL_LIBRARY_STORIES.filter(story => story.category === activeCategory);

    return (
        <div className="container mx-auto text-center py-12 sm:py-20 px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{text.title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{text.description}</p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-8" role="toolbar" aria-label="Story Categories">
                {STORY_CATEGORIES.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-200 ${
                            activeCategory === category.id
                                ? 'bg-indigo-500 text-white shadow-lg'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                        aria-pressed={activeCategory === category.id}
                    >
                        {category.name[language]}
                    </button>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
                {filteredStories.map((story, index) => (
                    <StoryCard key={index} story={story} onClick={() => setSelectedStory(story)} language={language} />
                ))}
            </div>
        </div>
    );
}
