
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';


const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1">
         <div className="text-3xl mb-4 text-indigo-400">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{children}</p>
    </div>
);

const HowItWorksStep = ({ num, title, children }: { num: string, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-500/10 border-2 border-indigo-500/30 rounded-full text-indigo-300 font-bold text-xl">
            {num}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-slate-400">{children}</p>
        </div>
    </div>
);

const TestimonialCard = ({ quote, author, role, avatar }: { quote: string, author: string, role: string, avatar: string }) => (
    <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 h-full flex flex-col backdrop-blur-sm">
        <p className="text-slate-300 flex-grow">"{quote}"</p>
        <div className="mt-4 flex items-center gap-4">
            <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <p className="font-bold text-white">{author}</p>
                <p className="text-sm text-slate-400">{role}</p>
            </div>
        </div>
    </div>
);

interface HomePageProps {
    language: Language;
}

export default function HomePage({ language }: HomePageProps) {
    const text = UI_TEXT[language];
    const homeText = text.home;

    const testimonialAvatars = [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    ];

    const DotPattern = () => (
         <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
                backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                backgroundSize: '1.5rem 1.5rem',
            }}
        />
    )

    return (
        <div className="bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="relative text-center py-20 px-4 overflow-hidden">
                <DotPattern />
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-slate-900 z-0"></div>
                <div className="container mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                        {homeText.heroTitle}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 block">
                             {homeText.heroTitleHighlight}
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
                        {homeText.heroSubtitle}
                    </p>
                    <a href="#/create" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 inline-block shadow-lg shadow-indigo-500/30">
                        {text.nav.createStory}
                    </a>
                    <div className="mt-16 max-w-4xl mx-auto px-4">
                        <div className="relative aspect-video rounded-xl shadow-2xl shadow-indigo-900/50 border border-slate-700 bg-slate-800">
                            <img
  src="/hero-image.jpg"
  alt="An illustration of a child reading a magical storybook"
  className="w-full h-full object-cover rounded-xl"
/>

                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">{homeText.howItWorksTitle}</h2>
                    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-12 text-left">
                        {homeText.steps.map((step: any, index: number) => (
                            <HowItWorksStep key={index} num={String(index + 1)} title={step.title}>
                                {step.description}
                            </HowItWorksStep>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-slate-900/70 backdrop-blur-md">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">{homeText.featuresTitle}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.684-2.684L11.25 18l1.938-.648a3.375 3.375 0 002.684-2.684L16.25 13l.648 1.938a3.375 3.375 0 002.684 2.684L21.5 18l-1.938.648a3.375 3.375 0 00-2.684 2.684z" /></svg>} title={homeText.features[0].title}>
                           {homeText.features[0].description}
                        </FeatureCard>
                        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>} title={homeText.features[1].title}>
                             {homeText.features[1].description}
                        </FeatureCard>
                        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>} title={homeText.features[2].title}>
                           {homeText.features[2].description}
                        </FeatureCard>
                    </div>
                </div>
            </section>
            
            {/* Testimonials */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold">{homeText.testimonialsTitle}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {homeText.testimonials.map((testimonial: any, index: number) => (
                             <TestimonialCard
                                key={index}
                                quote={testimonial.quote}
                                author={testimonial.author}
                                role={testimonial.role}
                                avatar={testimonialAvatars[index]}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-20 px-4">
                 <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        {homeText.ctaTitle}
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
                        {homeText.ctaSubtitle}
                    </p>
                    <a href="#/create" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 inline-block shadow-lg shadow-indigo-500/30">
                        {text.nav.createStory}
                    </a>
                </div>
            </section>
        </div>
    );
}
