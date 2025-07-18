

import React from 'react';
import { Page, Language } from '../types';
import { UI_TEXT } from '../constants';

interface HeaderProps {
    setPage: (page: Page) => void;
    language: Language;
    setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage, language, setLanguage }) => {
    const text = UI_TEXT[language];
    const navText = text.nav;

    return (
        <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
            <div className="container mx-auto flex justify-between items-center p-4 text-white">
                <a href="#/home" className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h1 className="text-xl font-bold">StorySpark AI</h1>
                </a>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#/home" onClick={() => setPage('home')} className="text-slate-300 hover:text-white transition">{navText.home}</a>
                        <a href="#/stories" onClick={() => setPage('stories')} className="text-slate-300 hover:text-white transition">{navText.ourStories}</a>
                        <a href="#/pricing" onClick={() => setPage('pricing')} className="text-slate-300 hover:text-white transition">{navText.pricing}</a>
                    </nav>
                    
                    <div className="hidden md:flex items-center gap-2 bg-slate-800 rounded-full p-1">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 text-sm rounded-full ${language === 'en' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
                        >
                            EN
                        </button>
                        <button
                             onClick={() => setLanguage('ar')}
                             className={`px-3 py-1 text-sm rounded-full ${language === 'ar' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
                        >
                            AR
                        </button>
                    </div>

                    <a href="#/create" onClick={() => setPage('create')} className="bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-600 transition-transform transform hover:scale-105">
                        {navText.createStory}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
