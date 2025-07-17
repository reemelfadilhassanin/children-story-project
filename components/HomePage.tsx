import React from 'react';

const FeatureCard = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <div className="text-3xl mb-4 text-indigo-400">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{children}</p>
    </div>
);

const HowItWorksStep = ({ num, title, children }: { num: string, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-800 border-2 border-indigo-500 rounded-full text-indigo-400 font-bold text-xl">
            {num}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-slate-400">{children}</p>
        </div>
    </div>
);

const TestimonialCard = ({ quote, author, role, avatar }: { quote: string, author: string, role: string, avatar: string }) => (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-full flex flex-col">
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


export default function HomePage() {
    return (
        <div className="bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Create Magical, Personalized <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                            AI-Powered Stories
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
                        Turn your child into the hero of their own illustrated adventure. Create a unique, print-ready storybook in minutes.
                    </p>
                    <a href="#/create" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 inline-block">
                        Create Your Story Now
                    </a>
                    <div className="mt-16">
                        <img src="https://picsum.photos/seed/herobook/800/500" alt="Storybook example" className="rounded-xl shadow-2xl mx-auto" />
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works in 3 Easy Steps</h2>
                    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-10 text-left">
                        <HowItWorksStep num="1" title="Personalize Your Hero">
                            Upload a photo of your child and tell us their name. Our AI creates a unique character description to guide the illustrations.
                        </HowItWorksStep>
                        <HowItWorksStep num="2" title="Choose an Adventure">
                            Select from a variety of themes like space exploration, magical forests, or superhero missions to set the stage for your story.
                        </HowItWorksStep>
                        <HowItWorksStep num="3" title="Generate & Edit Your Story">
                            Watch as the AI writes and illustrates a 10-page story. Then, tweak the text and regenerate images until it's perfect.
                        </HowItWorksStep>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Create Magic</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard icon="🎨" title="AI-Powered Illustrations">
                            Bring your story to life with beautiful, custom images generated to match the story's text and your child's character.
                        </FeatureCard>
                        <FeatureCard icon="✏️" title="Complete Customization">
                            You are the author. Edit every word of the story and fine-tune the image prompts to create the perfect tale.
                        </FeatureCard>
                        <FeatureCard icon="📚" title="Print-Ready Exports">
                            Download your finished story as a high-quality PDF, perfectly formatted to be printed as a physical storybook keepsake.
                        </FeatureCard>
                    </div>
                </div>
            </section>
            
            {/* Testimonials */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold">Loved by Parents & Kids Alike</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="My daughter's face lit up when she saw herself as the main character. This is the most special gift I've ever given her."
                            author="Sarah J."
                            role="Parent"
                            avatar="https://i.pravatar.cc/150?img=1"
                        />
                         <TestimonialCard
                            quote="The process was so simple and fun. We had a finished, beautiful story in less than 15 minutes. The illustrations are just gorgeous."
                            author="Michael B."
                            role="Parent"
                            avatar="https://i.pravatar.cc/150?img=2"
                        />
                         <TestimonialCard
                            quote="As a teacher, I love how this sparks creativity. The ability to edit the story makes it a fantastic tool for encouraging reading and writing."
                            author="Emily R."
                            role="Educator"
                            avatar="https://i.pravatar.cc/150?img=3"
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-20 px-4">
                 <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Ready to Create Your Own Adventure?
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
                        Start crafting a unique and personal story that your child will cherish forever.
                    </p>
                    <a href="#/create" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-600 transition-transform transform hover:scale-105 inline-block">
                        Start Creating for Free
                    </a>
                </div>
            </section>
        </div>
    );
}
