import React, { useState, useCallback } from 'react';
import { Story, Language, StoryPage, LocalizedString } from '../types';
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
    onPreview: () => void;
}

const Spinner: React.FC = () => (
    <div className="absolute inset-0 bg-slate-200 bg-opacity-70 flex items-center justify-center rounded-lg">
        <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
);

const Step4Editor: React.FC<Step4EditorProps> = ({ story, setStory, onStartOver, language, characterDescription, onPreview }) => {
    const [activePage, setActivePage] = useState(0);
    const [isExporting, setIsExporting] = useState(false);
    const [activeEditorTab, setActiveEditorTab] = useState<'text' | 'prompt'>('text');
    const text = UI_TEXT[language];

    const handleTextChange = (pageIndex: number, newText: string) => {
        const updatedPages = story.pages.map((page, index) =>
            index === pageIndex ? { ...page, text: { ...page.text, [language]: newText } } : page
        );
        setStory({ ...story, pages: updatedPages as StoryPage[] });
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
            pages[pageIndex] = { ...pages[pageIndex], imageIsGenerating: true, imageUrl: undefined };
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
            format: [800, 600] // 4:3 aspect ratio
        });

        for (let i = 0; i < story.pages.length; i++) {
            const pageElement = document.getElementById(`pdf-page-${i}`);
            if (pageElement) {
                const canvas = await html2canvas(pageElement, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');
                
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                
                if (i > 0) {
                    pdf.addPage();
                }
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            }
        }
        
        pdf.save(`${story.title[language].replace(/\s/g, '-')}.pdf`);
        setIsExporting(false);
    };
    
    const handleStartOverClick = () => {
        onStartOver();
        window.location.hash = '#/home';
    };

    const currentPage = story.pages[activePage];
    const totalPages = story.pages.length;

    return (
        <div className="container mx-auto bg-slate-50 text-slate-800 p-4 sm:p-8 rounded-xl my-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold sm:text-4xl">{text.editorTitle}</h2>
                <p className="mt-2 text-lg text-slate-600">{text.editorDesc}</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button onClick={onPreview} className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 transition">
                        {text.previewAsBook}
                    </button>
                    <button onClick={handleExportPdf} disabled={isExporting} className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition disabled:bg-slate-400">
                        {isExporting ? 'Exporting...' : text.exportPdf}
                    </button>
                    <button onClick={handleStartOverClick} className="bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 transition">
                        {text.startOver}
                    </button>
                </div>
            </div>

            <div className="bg-slate-100 p-4 sm:p-8 rounded-2xl">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold font-serif text-slate-800">{story.title[language]}</h1>
                    <details className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
                        <summary className="cursor-pointer font-semibold">{text.characterDetails}</summary>
                        <p className="mt-1 bg-white p-3 rounded-md text-left rtl:text-right">{characterDescription}</p>
                    </details>
                </div>
                
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                    <button onClick={() => setActivePage(p => Math.max(0, p - 1))} disabled={activePage === 0} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition" aria-label="Previous Page">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <div className="flex-grow max-w-3xl w-full">
                        {/* Visible Page Viewer */}
                        <div className="bg-white p-2 sm:p-4 rounded-xl shadow-lg aspect-[4/3] flex flex-col">
                            <div className="flex-grow relative rounded-lg overflow-hidden bg-slate-200">
                                {currentPage.imageIsGenerating && <Spinner />}
                                {currentPage.imageUrl === 'error' && <div className="w-full h-full flex flex-col items-center justify-center bg-red-100 text-red-600 p-4 text-center"><p className="font-bold">{text.error}</p><p className="text-sm">{text.errorGeneratingImage}</p></div>}
                                {currentPage.imageUrl && currentPage.imageUrl !== 'error' && <img src={currentPage.imageUrl} alt={`Illustration for page ${activePage + 1}`} className="w-full h-full object-cover" />}
                            </div>
                            <div className={`w-full p-2 sm:pt-4 text-base sm:text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                                {currentPage.text[language]}
                            </div>
                        </div>

                        {/* Editor Controls */}
                        <div className="mt-4 bg-white p-4 rounded-xl shadow-lg">
                            <div className="flex border-b border-slate-200">
                                <button onClick={() => setActiveEditorTab('text')} className={`py-2 px-4 text-sm font-medium ${activeEditorTab === 'text' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-slate-500 hover:bg-slate-100'}`}>
                                    {text.editStory}
                                </button>
                                <button onClick={() => setActiveEditorTab('prompt')} className={`py-2 px-4 text-sm font-medium ${activeEditorTab === 'prompt' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-slate-500 hover:bg-slate-100'}`}>
                                    {text.imagePrompt}
                                </button>
                            </div>
                            <div className="mt-3">
                                {activeEditorTab === 'text' && (
                                     <textarea value={currentPage.text[language]} onChange={(e) => handleTextChange(activePage, e.target.value)} className={`w-full p-3 text-base bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none ${language === 'ar' ? 'text-right' : 'text-left'}`} rows={4} />
                                )}
                                {activeEditorTab === 'prompt' && (
                                    <div>
                                        <p className="text-xs text-slate-500 mb-2">{text.imagePromptDesc}</p>
                                        <div className="flex gap-2">
                                            <textarea value={currentPage.imagePrompt} onChange={(e) => handleImagePromptChange(activePage, e.target.value)} className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none font-mono" rows={4} />
                                            <button onClick={() => handleRegenerateImage(activePage)} className="p-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition" title={text.regenerateImage} disabled={currentPage.imageIsGenerating}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 17H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={() => setActivePage(p => Math.min(totalPages - 1, p + 1))} disabled={activePage === totalPages - 1} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition" aria-label="Next Page">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

                <div className="text-center mt-4 font-semibold text-slate-600">
                    {text.page} {activePage + 1} / {totalPages}
                </div>
            </div>
            
            <div id="pdf-render-container" className="absolute -left-[9999px] -top-[9999px]">
                {story.pages.map((page, index) => (
                    <div key={page.pageNumber} id={`pdf-page-${index}`} style={{width: '800px', height: '600px'}} className="bg-white p-8 flex flex-col">
                       <div className="flex-grow relative rounded-lg overflow-hidden bg-slate-200">
                           {page.imageUrl && page.imageUrl !== 'error' 
                               ? <img src={page.imageUrl} alt="" className="w-full h-full object-cover" />
                               : <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500">Image not available</div>
                           }
                       </div>
                       <div className={`w-full pt-6 text-2xl font-serif ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                           {page.text[language]}
                       </div>
                       <div className="text-center text-slate-500 mt-auto pt-2">{index + 1}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step4Editor;
