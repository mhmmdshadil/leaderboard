'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EventResult {
    rank: number;
    name: string;
    house: string;
    points: number;
    category: string;
}

const individualEvents: EventResult[] = [
    { rank: 1, name: 'Anandu K S', house: 'Green House', points: 10, category: 'Elocution' },
    { rank: 2, name: 'Meera Nair', house: 'Red House', points: 7, category: 'Elocution' },
    { rank: 3, name: 'Rahul V', house: 'Blue House', points: 5, category: 'Elocution' },
    { rank: 1, name: 'Sneha John', house: 'Red House', points: 10, category: 'Light Music' },
    { rank: 2, name: 'Arjun P', house: 'Green House', points: 7, category: 'Light Music' },
];

const groupEvents: EventResult[] = [
    { rank: 1, name: 'Red House Team', house: 'Red House', points: 20, category: 'Group Dance' },
    { rank: 2, name: 'Blue House Team', house: 'Blue House', points: 15, category: 'Group Dance' },
    { rank: 3, name: 'Green House Team', house: 'Green House', points: 10, category: 'Group Dance' },
];

export default function EventCarousel() {
    const [mode, setMode] = useState<'Individual' | 'Group'>('Individual');
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setMode((prev) => prev === 'Individual' ? 'Group' : 'Individual');
            setDirection(1);
        }, 30000);
        return () => clearInterval(timer);
    }, []);

    const toggleMode = (newMode: 'Individual' | 'Group', dir: number) => {
        setDirection(dir);
        setMode(newMode);
    };

    const currentData = mode === 'Individual' ? individualEvents : groupEvents;

    return (
        <section className="w-full py-8 px-4 md:px-8 bg-[#F8F5F0]">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-[#2D2D2D]">Latest Results</h2>
                        <span className="text-sm font-medium text-[#B2A59B]">Top Performers</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => toggleMode('Individual', -1)}
                            className={`p-2 rounded-full transition-all ${mode === 'Individual' ? 'bg-[#2D2D2D] text-white' : 'bg-white text-[#2D2D2D] hover:bg-gray-100'}`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => toggleMode('Group', 1)}
                            className={`p-2 rounded-full transition-all ${mode === 'Group' ? 'bg-[#2D2D2D] text-white' : 'bg-white text-[#2D2D2D] hover:bg-gray-100'}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={mode}
                            custom={direction}
                            initial={{ x: direction * 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -direction * 100, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="space-y-3"
                        >
                            <div className="flex items-center justify-between px-6 py-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B2A59B]">{mode} Events</span>
                            </div>

                            {currentData.map((item, index) => (
                                <div key={index} className="premium-card p-4 flex items-center gap-4 transition-transform hover:scale-[1.01]">
                                    <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center font-bold text-lg ${item.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                                            item.rank === 2 ? 'bg-gray-100 text-gray-600' :
                                                'bg-orange-100 text-orange-700'
                                        }`}>
                                        {item.rank}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-[#2D2D2D] truncate">{item.name}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-[#B2A59B] font-bold uppercase tracking-tighter">
                                                {item.category}
                                            </span>
                                            <span className={`text-[10px] font-bold uppercase ${item.house === 'Red House' ? 'text-[#EF4444]' :
                                                    item.house === 'Green House' ? 'text-[#10B981]' :
                                                        'text-[#3B82F6]'
                                                }`}>
                                                {item.house}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <span className="text-xl font-bold text-[#2D2D2D]">{item.points}</span>
                                        <span className="block text-[8px] font-bold text-[#B2A59B] uppercase">Points</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
