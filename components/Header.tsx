
import React, { useState, useEffect } from 'react';
import { Page, Language } from '../types';
import { UI_TEXT } from '../constants';

interface HeaderProps {
    setPage: (page: Page) => void;
    language: Language;
    setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage, language, setLanguage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const text = UI_TEXT[language];
    const navText = text.nav;

    const handleLinkClick = (page: Page) => {
        setPage(page);
        setIsMenuOpen(false); // Close menu on navigation
    };

    // Close menu if window is resized to be larger
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
            <div className="container mx-auto flex justify-between items-center p-4 text-white">
                <a href="#/home" className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h1 className="text-xl font-bold">StorySpark AI</h1>
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        <a href="#/home" onClick={() => handleLinkClick('home')} className="text-slate-300 hover:text-white transition">{navText.home}</a>
                        <a href="#/stories" onClick={() => handleLinkClick('stories')} className="text-slate-300 hover:text-white transition">{navText.ourStories}</a>
                        <a href="#/pricing" onClick={() => handleLinkClick('pricing')} className="text-slate-300 hover:text-white transition">{navText.pricing}</a>
                    </nav>
                    
                    <div className="flex items-center gap-2 bg-slate-800 rounded-full p-1">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${language === 'en' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
                        >
                            EN
                        </button>
                        <button
                             onClick={() => setLanguage('ar')}
                             className={`px-3 py-1 text-sm rounded-full transition-colors ${language === 'ar' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
                        >
                            AR
                        </button>
                    </div>

                    <a href="#/create" onClick={() => handleLinkClick('create')} className="bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-600 transition-transform transform hover:scale-105">
                        {navText.createStory}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                     <a href="#/create" onClick={() => handleLinkClick('create')} className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition text-sm mr-4">
                        {navText.createStory}
                    </a>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-800/95 backdrop-blur-lg border-t border-slate-700">
                    <nav className="flex flex-col items-center gap-4 p-5">
                        <a href="#/home" onClick={() => handleLinkClick('home')} className="text-slate-300 hover:text-white transition text-lg">{navText.home}</a>
                        <a href="#/stories" onClick={() => handleLinkClick('stories')} className="text-slate-300 hover:text-white transition text-lg">{navText.ourStories}</a>
                        <a href="#/pricing" onClick={() => handleLinkClick('pricing')} className="text-slate-300 hover:text-white transition text-lg">{navText.pricing}</a>
                        
                        <div className="flex items-center gap-2 bg-slate-700 rounded-full p-1 mt-4">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-4 py-1 text-base rounded-full ${language === 'en' ? 'bg-indigo-500 text-white' : 'text-slate-300'}`}
                            >
                                EN
                            </button>
                            <button
                                 onClick={() => setLanguage('ar')}
                                 className={`px-4 py-1 text-base rounded-full ${language === 'ar' ? 'bg-indigo-500 text-white' : 'text-slate-300'}`}
                            >
                                AR
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
