'use client';

import { motion } from 'framer-motion';

interface HouseData {
    id: string;
    name: string;
    points: number;
    color: string;
    rank: number;
}

const houses: HouseData[] = [
    { id: '1', name: 'RED HOUSE', points: 450, color: '#EF4444', rank: 2 },
    { id: '2', name: 'GREEN HOUSE', points: 520, color: '#10B981', rank: 1 },
    { id: '3', name: 'BLUE HOUSE', points: 380, color: '#3B82F6', rank: 3 },
];

export default function HouseLeaderboard() {
    // Sort for podium display: [2, 1, 3] layout
    const sortedHouses = [...houses].sort((a, b) => {
        if (a.rank === 2) return -1;
        if (b.rank === 2) return 1;
        return a.rank - b.rank;
    });

    return (
        <section className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-sm font-semibold tracking-widest text-[#B2A59B] uppercase mb-12">
                    House Standings
                </h2>

                <div className="flex items-end justify-center gap-4 md:gap-8 h-[300px] md:h-[400px]">
                    {sortedHouses.map((house) => (
                        <div key={house.id} className="flex flex-col items-center flex-1 max-w-[120px] md:max-w-[160px]">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${(house.points / 600) * 100}%` }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="w-full rounded-t-3xl relative flex flex-col items-center justify-end pb-8 soft-shadow"
                                style={{ backgroundColor: house.color }}
                            >
                                <span className="text-white font-bold text-2xl md:text-3xl mb-2">#{house.rank}</span>
                                <div className="absolute -top-12 md:-top-16 text-center w-full">
                                    <span className="block font-bold text-lg md:text-xl text-[#2D2D2D]">{house.points}</span>
                                    <span className="text-[10px] md:text-xs font-semibold text-[#B2A59B] uppercase tracking-wider">Points</span>
                                </div>
                            </motion.div>
                            <span className="mt-4 font-bold text-xs md:text-sm text-[#2D2D2D] whitespace-nowrap">
                                {house.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
