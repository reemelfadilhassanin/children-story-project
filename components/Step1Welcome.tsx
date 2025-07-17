
import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface Step1WelcomeProps {
    onStart: (name: string, photo: File, lang: Language) => void;
    language: Language;
    setLanguage: (lang: Language) => void;
}

const Step1Welcome: React.FC<Step1WelcomeProps> = ({ onStart, language, setLanguage }) => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const text = UI_TEXT[language];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !photo) {
            setError('Please provide a name and a photo.');
            return;
        }
        onStart(name, photo, language);
    };

    return (
        <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold text-purple-600 sm:text-5xl">{text.title}</h2>
            <p className="mt-4 text-lg text-slate-600">{text.tagline}</p>
            
            <form onSubmit={handleSubmit} className="mt-10 bg-white p-8 rounded-2xl shadow-lg text-start">
                {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert"><p>{error}</p></div>}
                
                <div className="mb-6">
                    <label htmlFor="language-toggle" className="block text-sm font-bold text-slate-700 mb-2">{text.selectLanguage}</label>
                    <div className="flex rounded-md shadow-sm">
                        <button type="button" onClick={() => setLanguage('en')} className={`px-4 py-2 text-sm font-medium ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'} border border-slate-300 rounded-l-md flex-1`}>English</button>
                        <button type="button" onClick={() => setLanguage('ar')} className={`px-4 py-2 text-sm font-medium ${language === 'ar' ? 'bg-purple-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'} border-t border-b border-r border-slate-300 rounded-r-md flex-1`}>العربية</button>
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="childName" className="block text-sm font-bold text-slate-700 mb-2">{text.childName}</label>
                    <input
                        type="text"
                        id="childName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={text.childNamePlaceholder}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        required
                    />
                </div>

                <div className="mb-8">
                    <label className="block text-sm font-bold text-slate-700 mb-2">{text.uploadPhoto}</label>
                    <div
                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md cursor-pointer hover:border-purple-400 transition"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {photoPreview ? (
                            <div className="text-center">
                                <img src={photoPreview} alt="Child preview" className="mx-auto h-32 w-32 object-cover rounded-full shadow-md" />
                                <button type="button" className="mt-4 text-sm text-purple-600 hover:text-purple-800 font-semibold">{text.changePhoto}</button>
                            </div>
                        ) : (
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-sm text-slate-600">{text.uploadPhotoDesc}</p>
                            </div>
                        )}
                    </div>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/png, image/jpeg" className="hidden" />
                </div>
                
                <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed" disabled={!name || !photo}>
                    {text.start}
                </button>
            </form>
        </div>
    );
};

export default Step1Welcome;
