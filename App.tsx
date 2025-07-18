

import React, { useState, useEffect } from 'react';
import { Page, Language } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CreateStoryWizard from './components/CreateStoryWizard';
import OurStoriesPage from './components/OurStoriesPage';
import PricingPage from './components/PricingPage';

const getPageFromHash = (): Page => {
    const hash = window.location.hash.replace('#/', '');
    if (hash === 'create' || hash === 'stories' || hash === 'pricing') {
        return hash;
    }
    return 'home';
};

export default function App() {
    const [language, setLanguage] = useState<Language>('en');
    const [page, setPage] = useState<Page>(getPageFromHash());

    useEffect(() => {
        const handleHashChange = () => {
            setPage(getPageFromHash());
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        switch (page) {
            case 'create':
                return <CreateStoryWizard language={language} setLanguage={setLanguage} />;
            case 'stories':
                return <OurStoriesPage language={language} />;
            case 'pricing':
                return <PricingPage language={language} />;
            case 'home':
            default:
                return <HomePage language={language} />;
        }
    };

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={`${language === 'ar' ? 'font-cairo' : 'font-nunito'} bg-slate-900 min-h-screen text-slate-300`}>
            <Header setPage={setPage} language={language} setLanguage={setLanguage} />
            <main>
                {renderPage()}
            </main>
        </div>
    );
}
