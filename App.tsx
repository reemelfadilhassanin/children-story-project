import React, { useState, useEffect } from 'react';
import { Page, Language, FullLibraryStory } from './types';
import { FULL_LIBRARY_STORIES } from './constants';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CreateStoryWizard from './components/CreateStoryWizard';
import OurStoriesPage from './components/OurStoriesPage';
import StoryViewer from './components/StoryViewer';

const getPageFromHash = (): Page => {
    const hash = window.location.hash.replace('#/', '');
    if (hash === 'create' || hash === 'stories') {
        return hash;
    }
    return 'home';
};

export default function App() {
    const [page, setPage] = useState<Page>(getPageFromHash());
    const [language, setLanguage] = useState<Language>('en');
    const [viewingStory, setViewingStory] = useState<FullLibraryStory | null>(null);

    useEffect(() => {
        const handleHashChange = () => {
            setPage(getPageFromHash());
            setViewingStory(null); // Close story viewer on hash change
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSelectStory = (storyId: string) => {
        const story = FULL_LIBRARY_STORIES.find(s => s.id === storyId);
        if (story && story.pages.length > 0) {
            setViewingStory(story);
        } else {
            alert("This story is not available to read yet.");
        }
    };
    
    const handleCloseViewer = () => {
        setViewingStory(null);
    };

    const renderContent = () => {
        if (viewingStory) {
            return <StoryViewer story={viewingStory} onClose={handleCloseViewer} language={language} />;
        }

        switch (page) {
            case 'create':
                return <CreateStoryWizard language={language} setLanguage={setLanguage} />;
            case 'stories':
                return <OurStoriesPage language={language} onSelectStory={handleSelectStory} />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={`${language === 'ar' ? 'font-cairo' : 'font-nunito'} bg-slate-900 min-h-screen text-slate-300`}>
            <Header setPage={setPage} />
            <main>
                {renderContent()}
            </main>
        </div>
    );
}
