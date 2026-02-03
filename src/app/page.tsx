'use client';

import Header from '@/components/Header';
import HouseLeaderboard from '@/components/HouseLeaderboard';
import EventCarousel from '@/components/EventCarousel';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />

      <div className="max-w-7xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4">

            {/* Pinned Section - Left on desktop, Top on mobile */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
              <HouseLeaderboard />
            </div>

            {/* Scrolling Results Section */}
            <div className="lg:col-span-7">
              <EventCarousel />

              {/* Additional Stats / Information */}
              <div className="mt-8 px-4">
                <div className="premium-card p-8 bg-white overflow-hidden relative group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Live Updates</h3>
                    <p className="text-[#B2A59B] text-sm">Real-time standings from KALASTRA 26. Stay tuned for the latest event results.</p>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black italic">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="py-12 px-4 text-center border-t border-[#E8E2D9] mt-12">
        <p className="text-[#B2A59B] text-xs font-semibold uppercase tracking-widest">
          Indira Gandhi Training College • ASTRA 2026
        </p>
      </footer>
    </main>
  );
}
