import React from 'react';
import { Language } from '../types';
import { UI_TEXT, FULL_LIBRARY_STORIES } from '../constants';
import StoryCard from './StoryCard';

interface OurStoriesPageProps {
    language: Language;
    onSelectStory: (storyId: string) => void;
}

export default function OurStoriesPage({ language, onSelectStory }: OurStoriesPageProps) {
    const text = UI_TEXT[language];
    const libraryText = text.library;

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{libraryText.title}</h1>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">{libraryText.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {FULL_LIBRARY_STORIES.map(story => {
                    return (
                        <StoryCard 
                            key={story.id}
                            id={story.id}
                            image={story.coverImage}
                            title={story.title}
                            description={story.description}
                            readNowText={libraryText.readStory}
                            onRead={() => onSelectStory(story.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
