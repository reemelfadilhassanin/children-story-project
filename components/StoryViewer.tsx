import React, { useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { FullLibraryStory, Language } from '../types';
import { UI_TEXT } from '../constants';

interface StoryViewerProps {
    story: FullLibraryStory;
    onClose: () => void;
    language: Language;
}

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode, pageNumber: number }>((props, ref) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center" ref={ref} data-density="hard">
            <div className="w-full h-full flex flex-col">
                {props.children}
            </div>
        </div>
    );
});


export default function StoryViewer({ story, onClose, language }: StoryViewerProps) {
    const book = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const text = UI_TEXT[language];
    const viewerText = text.storyViewer;

    const handleFlip = useCallback((e: any) => {
        setCurrentPage(e.data);
    }, []);
    
    const totalPages = story.pages.length + 2; // cover + pages

    return (
        <div className="container mx-auto py-8 px-4 flex flex-col items-center">
             <button
                onClick={onClose}
                className="self-start mb-4 bg-slate-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-500 transition-colors"
            >
                &larr; {viewerText.backToLibrary}
            </button>
            <div className="w-full max-w-5xl aspect-[2/1.2]">
                <HTMLFlipBook
                    width={500}
                    height={600}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={420}
                    maxHeight={1350}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={handleFlip}
                    className="mx-auto"
                    ref={book}
                >
                    {/* Cover Page */}
                    <Page pageNumber={0}>
                         <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-8 rounded-lg">
                            <img src={story.coverImage} alt={story.title} className="w-4/5 h-auto object-contain rounded-md shadow-lg" />
                            <h1 className={`mt-6 text-3xl font-bold text-white ${language === 'ar' ? 'font-cairo' : ''}`}>{story.title}</h1>
                            <p className={`mt-2 text-md text-slate-300 ${language === 'ar' ? 'font-cairo' : ''}`}>{story.description}</p>
                        </div>
                    </Page>
                    
                    {/* Story Pages */}
                    {story.pages.map((page, index) => (
                        <Page key={index} pageNumber={index + 1}>
                             <div className="w-full flex-grow-0 h-3/5 mb-4 rounded-md overflow-hidden">
                                <img src={page.image} alt={`Page ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                            <div className={`text-slate-800 text-lg flex-grow text-center px-4 ${language === 'ar' ? 'font-cairo' : ''}`}>
                                {page.text}
                            </div>
                            <div className="text-slate-400 mt-auto pt-2">{index + 1}</div>
                        </Page>
                    ))}
                    
                    {/* Back Cover */}
                     <Page pageNumber={totalPages}>
                        <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-8 rounded-lg">
                             <h2 className={`text-3xl font-bold text-white ${language === 'ar' ? 'font-cairo' : ''}`}>The End</h2>
                             <p className={`mt-4 text-slate-300 ${language === 'ar' ? 'font-cairo' : ''}`}>We hope you enjoyed the story of {story.title}!</p>
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>

            <div className="flex items-center gap-4 mt-6">
                <button
                    onClick={() => book.current?.pageFlip().flipPrev()}
                    className="bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
                    disabled={currentPage === 0}
                >
                    {viewerText.previous}
                </button>
                <span className="text-white font-semibold">
                    Page {currentPage} of {totalPages - 1}
                </span>
                <button
                    onClick={() => book.current?.pageFlip().flipNext()}
                    className="bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
                    disabled={currentPage >= totalPages - 1}
                >
                    {viewerText.next}
                </button>
            </div>
        </div>
    );
}
