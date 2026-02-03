'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full glass soft-shadow px-4 py-3 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                {/* College & Union Logos */}
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="relative h-10 w-10 md:h-14 md:w-14">
                        <Image
                            src="/images/College Name and Logo.jpg"
                            alt="Indira Gandhi Training College"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative h-10 w-10 md:h-14 md:w-14">
                        <Image
                            src="/images/Astra College union logo.jpg"
                            alt="ASTRA College Union"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Fest Title */}
                <div className="flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-3xl font-bold tracking-widest text-[#2D2D2D]"
                    >
                        KALASTRA <span className="text-[#B2A59B]">26</span>
                    </motion.h1>
                    <div className="h-[2px] w-12 bg-[#B2A59B] mt-1 rounded-full" />
                </div>

                {/* Fest Logos */}
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="relative h-10 w-10 md:h-14 md:w-14 hidden sm:block">
                        <Image
                            src="/images/Kalastra logo hindi.jpg"
                            alt="KALASTRA Hindi"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative h-10 w-10 md:h-14 md:w-14">
                        <Image
                            src="/images/Kalastra Arts Fest Logo.jpg"
                            alt="KALASTRA Arts Fest"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
