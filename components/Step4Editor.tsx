import React, { useState, useCallback, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Story, Language, StoryPage } from '../types';
import { UI_TEXT } from '../constants';
import { generateImage } from '../services/geminiService';

declare const jspdf: any;
declare const html2canvas: any;

interface Step4EditorProps {
    story: Story;
    setStory: React.Dispatch<React.SetStateAction<Story | null>>;
    onStartOver: () => void;
    language: Language;
    characterDescription: string;
}

const Spinner: React.FC = () => (
    <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center rounded-lg">
        <svg className="animate-spin h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
);

const PageCover = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center" ref={ref} data-density="hard">
            <div className="w-full h-full flex flex-col items-center justify-center p-8 rounded-lg">
                {props.children}
            </div>
        </div>
    );
});

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode, pageNumber: number }>((props, ref) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col text-center" ref={ref} data-density="soft">
            <div className="w-full h-full flex flex-col">
                {props.children}
            </div>
        </div>
    );
});


const Step4Editor: React.FC<Step4EditorProps> = ({ story, setStory, onStartOver, language, characterDescription }) => {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [isExporting, setIsExporting] = useState(false);
    const book = useRef<any>(null);

    const text = UI_TEXT[language];

    const handleFlip = useCallback((e: any) => {
        setActivePageIndex(Math.max(0, e.data - 1));
    }, []);

    const handleTextChange = (pageIndex: number, newText: string) => {
        const updatedPages = story.pages.map((page, index) =>
            index === pageIndex ? { ...page, text: newText } : page
        );
        setStory({ ...story, pages: updatedPages });
    };
    
    const handleImagePromptChange = (pageIndex: number, newPrompt: string) => {
        const updatedPages = story.pages.map((page, index) =>
            index === pageIndex ? { ...page, imagePrompt: newPrompt } : page
        );
        setStory({ ...story, pages: updatedPages });
    };

    const handleRegenerateImage = useCallback(async (pageIndex: number) => {
        const pageToUpdate = story.pages[pageIndex];
        
        setStory(prev => {
            if (!prev) return null;
            const pages = [...prev.pages];
            pages[pageIndex] = { ...pages[pageIndex], imageIsGenerating: true };
            return { ...prev, pages };
        });

        try {
            const newImageUrl = await generateImage(pageToUpdate.imagePrompt);
            setStory(prev => {
                if (!prev) return null;
                const pages = [...prev.pages];
                pages[pageIndex] = { ...pages[pageIndex], imageUrl: newImageUrl, imageIsGenerating: false };
                return { ...prev, pages };
            });
        } catch (error) {
            console.error("Failed to regenerate image", error);
            setStory(prev => {
                 if (!prev) return null;
                const pages = [...prev.pages];
                pages[pageIndex] = { ...pages[pageIndex], imageUrl: 'error', imageIsGenerating: false };
                return { ...prev, pages };
            });
            alert(text.errorGeneratingImage);
        }
    }, [story.pages, setStory, text.errorGeneratingImage]);

    const handleExportPdf = async () => {
        setIsExporting(true);
        const { jsPDF } = jspdf;
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [800, 600]
        });

        const coverElement = document.getElementById('pdf-cover-page');
        if(coverElement) {
            const canvas = await html2canvas(coverElement, { scale: 2 });
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        }

        for (let i = 0; i < story.pages.length; i++) {
            const pageElement = document.getElementById(`pdf-page-${i}`);
            if (pageElement) {
                const canvas = await html2canvas(pageElement, { scale: 2 });
                pdf.addPage();
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
            }
        }
        
        pdf.save(`${story.title.replace(/\s/g, '-')}.pdf`);
        setIsExporting(false);
    };

    const handleStartOverClick = () => {
        onStartOver();
        window.location.hash = '#/home';
    };
    
    const currentPage = story.pages[activePageIndex];

    return (
        <div className="container mx-auto p-4 sm:p-8 flex flex-col items-center">
            {/* Header section */}
            <div className="text-center mb-8 w-full max-w-5xl">
                <h2 className="text-3xl font-bold sm:text-4xl text-white">{text.editorTitle}</h2>
                <p className="mt-2 text-lg text-slate-400">{text.editorDesc}</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button onClick={handleExportPdf} disabled={isExporting} className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 transition disabled:bg-slate-400">
                        {isExporting ? 'Exporting...' : text.exportPdf}
                    </button>
                    <button onClick={handleStartOverClick} className="bg-slate-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-slate-600 transition">
                        {text.startOver}
                    </button>
                </div>
            </div>

            {/* Book viewer section */}
            <div className="w-full max-w-3xl mb-8">
                <HTMLFlipBook
                    width={500}
                    height={450}
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={270}
                    maxHeight={900}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={handleFlip}
                    className="mx-auto"
                    ref={book}
                    style={{}}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    <PageCover>
                         <h1 className={`text-3xl font-bold text-white ${language === 'ar' ? 'font-cairo' : 'font-serif'}`}>{story.title}</h1>
                         <p className="mt-4 text-slate-300">A story for {characterDescription.split(' ')[2]}.</p>
                    </PageCover>
                    
                    {story.pages.map((page, index) => (
                        <Page key={index} pageNumber={index + 1}>
                             <div className="w-full flex-grow-0 h-3/5 mb-4 rounded-md overflow-hidden bg-slate-200 relative">
                                {page.imageIsGenerating && <Spinner />}
                                {page.imageUrl === 'error' && <div className="w-full h-full flex items-center justify-center bg-red-100 text-red-600 p-2 text-center text-sm">Image failed</div>}
                                {page.imageUrl && page.imageUrl !== 'error' && <img src={page.imageUrl} alt={`Page ${index + 1}`} className="w-full h-full object-cover" />}
                            </div>
                            <div className={`text-slate-800 text-base md:text-lg flex-grow px-2 ${language === 'ar' ? 'font-cairo text-right' : 'text-left'}`}>
                                {page.text}
                            </div>
                            <div className="text-slate-400 mt-auto pt-2 text-sm">{index + 1}</div>
                        </Page>
                    ))}
                    
                     <PageCover>
                         <h2 className={`text-3xl font-bold text-white ${language === 'ar' ? 'font-cairo' : 'font-serif'}`}>The End</h2>
                    </PageCover>
                </HTMLFlipBook>
                 <div className="flex items-center justify-center gap-4 mt-4">
                    <button onClick={() => book.current?.pageFlip().flipPrev()} className="bg-slate-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-slate-600 transition">
                        {text.storyViewer.previous}
                    </button>
                    <button onClick={() => book.current?.pageFlip().flipNext()} className="bg-slate-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-slate-600 transition">
                        {text.storyViewer.next}
                    </button>
                </div>
            </div>

            {/* Editor Panel section */}
            <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg text-slate-800">
               {currentPage && (
                 <>
                    <h3 className="text-xl font-bold mb-1">{text.page} {currentPage.pageNumber}</h3>
                    
                    <div className="mt-4">
                         <label className="block text-sm font-bold text-slate-700 mb-2">{text.editStory}</label>
                        <textarea 
                            value={currentPage.text} 
                            onChange={(e) => handleTextChange(activePageIndex, e.target.value)} 
                            className={`w-full p-3 text-base bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-y ${language === 'ar' ? 'text-right' : 'text-left'}`} 
                            rows={5} 
                        />
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-bold text-slate-700 mb-2">{text.imagePrompt}</label>
                        <p className="text-xs text-slate-500 mb-2">{text.imagePromptDesc}</p>
                        <div className="flex flex-col gap-2">
                            <textarea 
                                value={currentPage.imagePrompt} 
                                onChange={(e) => handleImagePromptChange(activePageIndex, e.target.value)} 
                                className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-y font-mono" 
                                rows={5} 
                            />
                            <button 
                                onClick={() => handleRegenerateImage(activePageIndex)} 
                                className="w-full bg-indigo-100 text-indigo-700 font-bold py-2 px-4 rounded-lg hover:bg-indigo-200 transition flex items-center justify-center gap-2 disabled:opacity-50"
                                disabled={currentPage.imageIsGenerating}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 17H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
                                {text.regenerateImage}
                            </button>
                        </div>
                    </div>
                 </>
               )}
            </div>

            {/* Hidden container for PDF rendering */}
            <div className="absolute -left-[9999px] -top-[9999px]">
                 <div id="pdf-cover-page" style={{width: '800px', height: '600px'}} className="bg-slate-800 p-8 flex flex-col items-center justify-center text-center">
                    <h1 className={`text-5xl font-bold text-white ${language === 'ar' ? 'font-cairo' : 'font-serif'}`}>{story.title}</h1>
                 </div>
                {story.pages.map((page, index) => (
                    <div key={page.pageNumber} id={`pdf-page-${index}`} style={{width: '800px', height: '600px'}} className="bg-white p-8 flex flex-col">
                       <div className="flex-grow relative rounded-lg overflow-hidden bg-slate-200">
                           {page.imageUrl && page.imageUrl !== 'error' 
                               ? <img src={page.imageUrl} alt="" className="w-full h-full object-cover" />
                               : <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500">Image not available</div>
                           }
                       </div>
                       <div className={`w-full pt-6 text-2xl ${language === 'ar' ? 'font-cairo text-right' : 'font-serif text-left'}`}>
                           {page.text}
                       </div>
                       <div className="text-center text-slate-500 mt-auto pt-2">{index + 1}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step4Editor;
