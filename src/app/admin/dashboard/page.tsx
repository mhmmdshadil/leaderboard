'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Award } from 'lucide-react';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'houses' | 'events'>('houses');

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            <Header />

            <main className="max-w-7xl mx-auto py-12 px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-[#2D2D2D]">Admin Dashboard</h1>
                        <p className="text-[#B2A59B] font-medium mt-1">Manage points and event standings</p>
                    </div>

                    <div className="flex items-center bg-white p-1 rounded-2xl border border-[#E8E2D9] soft-shadow">
                        <button
                            onClick={() => setActiveTab('houses')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'houses' ? 'bg-[#2D2D2D] text-white' : 'text-[#B2A59B] hover:text-[#2D2D2D]'}`}
                        >
                            Houses
                        </button>
                        <button
                            onClick={() => setActiveTab('events')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === 'events' ? 'bg-[#2D2D2D] text-white' : 'text-[#B2A59B] hover:text-[#2D2D2D]'}`}
                        >
                            Events
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {activeTab === 'houses' ? (
                        <div className="premium-card overflow-hidden">
                            <div className="p-6 border-b border-[#E8E2D9] bg-white flex items-center justify-between">
                                <h3 className="font-bold text-[#2D2D2D] flex items-center gap-2">
                                    <Award size={18} className="text-[#B2A59B]" />
                                    House Rankings
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-[#F8F5F0] text-[#B2A59B] text-[10px] font-bold uppercase tracking-widest">
                                        <tr>
                                            <th className="px-6 py-4">House Name</th>
                                            <th className="px-6 py-4">Current Points</th>
                                            <th className="px-6 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#E8E2D9]">
                                        {['Red House', 'Green House', 'Blue House'].map((house) => (
                                            <tr key={house} className="bg-white hover:bg-[#FDFBF7] transition-colors">
                                                <td className="px-6 py-4 font-bold text-[#2D2D2D]">{house}</td>
                                                <td className="px-6 py-4 font-bold text-xl">500</td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="p-2 text-[#B2A59B] hover:text-[#2D2D2D] transition-colors">
                                                        <Edit2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="premium-card">
                            <div className="p-6 border-b border-[#E8E2D9] bg-white flex items-center justify-between">
                                <h3 className="font-bold text-[#2D2D2D]">Event Management</h3>
                                <button className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                                    <Plus size={16} /> Add Result
                                </button>
                            </div>
                            <div className="p-12 text-center">
                                <p className="text-[#B2A59B] text-sm font-medium italic">Select an event to add or edit results.</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
