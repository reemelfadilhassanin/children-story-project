import React from 'react';

interface StoryCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    readNowText: string;
    onRead: (id: string) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ id, image, title, description, readNowText, onRead }) => {
    return (
        <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col group transition-all duration-300 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="overflow-hidden">
                <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{description}</p>
                <button 
                    onClick={() => onRead(id)}
                    className="mt-auto w-full bg-slate-700 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                    {readNowText}
                </button>
            </div>
        </div>
    );
};

export default StoryCard;
