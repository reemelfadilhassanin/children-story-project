import React, { useRef, useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { FullLibraryStory, Language } from '../types';
import { UI_TEXT } from '../constants';

interface StoryBookViewerProps {
    story: FullLibraryStory;
    onClose: () => void;
    language: Language;
}

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode, pageNumber: number }>((props, ref) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col" ref={ref} data-density="hard">
            <div className="w-full h-full flex flex-col">
                {props.children}
            </div>
        </div>
    );
});


export default function StoryBookViewer({ story, onClose, language }: StoryBookViewerProps) {
    const book = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const isRtl = language === 'ar';

    const text = UI_TEXT[language];
    const viewerText = text.storyViewer;
    
    const totalPages = story.pages.length + 2; // cover + pages + back cover

    const titleText = story.title[language];
    const descriptionText = story.description[language];
    
    const handleFlip = useCallback((e: any) => {
        setCurrentPage(e.data);
    }, []);

    const handlePrev = () => {
        if (isRtl) {
            book.current?.pageFlip().flipNext();
        } else {
            book.current?.pageFlip().flipPrev();
        }
    };

    const handleNext = () => {
        if (isRtl) {
            book.current?.pageFlip().flipPrev();
        } else {
            book.current?.pageFlip().flipNext();
        }
    };


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, isRtl]);


    const storyPageCount = story.pages.length;
    let pageIndicatorContent;

    if (currentPage > 0 && currentPage <= storyPageCount) {
        const pageNumber = isRtl ? (storyPageCount + 1 - currentPage) : currentPage;
        pageIndicatorContent = viewerText.pageIndicator
            .replace('{current}', String(pageNumber))
            .replace('{total}', String(storyPageCount));
    } else {
        pageIndicatorContent = ' ';
    }

    return (
        <div className="container mx-auto py-8 px-4 flex flex-col items-center">
             <button
                onClick={onClose}
                className="self-start mb-4 bg-slate-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-500 transition-colors"
            >
                &larr; {viewerText.backToLibrary}
            </button>
            <div className="w-full max-w-5xl" style={{aspectRatio: '2 / 1.1'}}>
                <HTMLFlipBook
                    width={550}
                    height={650}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1200}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={handleFlip}
                    className="mx-auto shadow-2xl"
                    ref={book}
                >
                    {/* Cover Page */}
                    <Page pageNumber={0}>
                         <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-8 rounded-lg text-center">
                            <img src={story.coverImage} alt={titleText} className="w-3/5 h-auto object-contain rounded-md shadow-lg border-4 border-slate-500" />
                            <h1 className={`mt-6 text-3xl font-bold text-white ${language === 'ar' ? 'font-cairo' : ''}`}>{titleText}</h1>
                            <p className={`mt-2 text-md text-slate-300 ${language === 'ar' ? 'font-cairo' : ''}`}>{descriptionText}</p>
                        </div>
                    </Page>
                    
                    {/* Story Pages */}
                    {story.pages.map((page, index) => (
                        <Page key={index} pageNumber={index + 1}>
                            <div className="w-full flex-grow-0 h-3/5 mb-4 rounded-md overflow-hidden bg-slate-200">
                                <img src={page.imageUrl} alt={`Page ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                            <div className={`text-slate-800 text-base md:text-lg flex-grow ${language === 'ar' ? 'font-cairo text-right' : 'text-left'}`}>
                                {page.text[language]}
                            </div>
                            <div className="text-slate-400 mt-auto pt-2 text-center">{index + 1}</div>
                        </Page>
                    ))}
                    
                    {/* Back Cover */}
                     <Page pageNumber={totalPages - 1}>
                        <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-8 rounded-lg text-center">
                             <h2 className={`text-3xl font-bold text-white ${language === 'ar' ? 'font-cairo' : ''}`}>{viewerText.theEnd}</h2>
                             <p className={`mt-4 text-slate-300 ${language === 'ar' ? 'font-cairo' : ''}`}>{viewerText.enjoyedStory.replace('{title}', titleText)}</p>
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>

            <div className="flex items-center gap-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isRtl ? currentPage === totalPages - 1 : currentPage === 0}
                >
                    {viewerText.previous}
                </button>
                <span className="text-white font-semibold w-28 text-center">
                   {pageIndicatorContent}
                </span>
                <button
                    onClick={handleNext}
                    className="bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isRtl ? currentPage === 0 : currentPage === totalPages - 1}
                >
                    {viewerText.next}
                </button>
            </div>
        </div>
    );
}
