
import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

const FaqItem = ({ faq, language }: { faq: any, language: Language }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-700 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
                <svg
                    className={`w-6 h-6 text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className={`mt-3 text-slate-300 ${language === 'ar' ? 'font-cairo' : ''}`}>
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};

const PlanCard = ({ plan, isYearly, isPopular, language }: { plan: any, isYearly: boolean, isPopular: boolean, language: Language }) => {
    const popularClass = isPopular ? 'border-indigo-500 border-2 relative' : 'border-slate-700 border';

    return (
        <div className={`bg-slate-800 p-8 rounded-2xl ${popularClass} flex flex-col`}>
            {isPopular && (
                 <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Most Popular
                </div>
            )}
            <h3 className="text-2xl font-bold text-white text-center">{plan.name}</h3>
            <div className="text-center my-6">
                <span className="text-5xl font-extrabold text-white">{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                <span className="text-slate-400">/{language === 'en' ? (isYearly ? 'year' : 'month') : (isYearly ? 'سنة' : 'شهر')}</span>
            </div>
            <p className="text-slate-400 text-center min-h-[40px]">{plan.description}</p>
            <a href="#/create" className={`w-full text-center mt-8 py-3 px-6 rounded-lg font-bold transition-colors ${isPopular ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                {plan.buttonText}
            </a>
            <ul className="mt-8 space-y-4 text-slate-300 flex-grow">
                {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function PricingPage({ language }: { language: Language }) {
    const [isYearly, setIsYearly] = useState(false);
    const text = UI_TEXT[language].pricing;

    if (!text) {
        return <div className="text-center p-8">Pricing information is not available for the selected language.</div>;
    }

    return (
        <div className="bg-slate-900 py-12 sm:py-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{text.title}</h1>
                    <p className="text-lg text-slate-400">{text.description}</p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-4 my-10">
                    <span className={`font-semibold ${!isYearly ? 'text-white' : 'text-slate-400'}`}>{text.monthly}</span>
                    <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            id="billing-toggle"
                            className="sr-only peer"
                            checked={isYearly}
                            onChange={() => setIsYearly(!isYearly)}
                        />
                        <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                    <span className={`font-semibold ${isYearly ? 'text-white' : 'text-slate-400'}`}>{text.yearly}</span>
                    <span className="bg-purple-500/20 text-purple-300 text-xs font-bold ml-2 px-2.5 py-1 rounded-full">{text.saveOffer}</span>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {text.plans.map((plan: any, index: number) => (
                        <PlanCard 
                            key={index} 
                            plan={plan} 
                            isYearly={isYearly} 
                            isPopular={index === 1}
                            language={language} 
                        />
                    ))}
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">{text.faqTitle}</h2>
                    <div className="space-y-4">
                        {text.faqs.map((faq: any, index: number) => (
                            <FaqItem key={index} faq={faq} language={language} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
