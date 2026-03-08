"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GettingStartedSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden z-10 max-w-[1400px] mx-auto">

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]"
                >
                    Need help getting started?
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1: Pricing */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-200 flex flex-col h-[400px] relative hover:shadow-md transition-shadow cursor-pointer group overflow-hidden card-hover-effect"
                >
                    <div className="flex justify-between items-start mb-6 z-10">
                        <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                            Pricing
                        </div>
                        <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center transform group-hover:bg-primary transition-colors">
                            ↗
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium text-foreground mb-auto z-10">Select a plan</h3>

                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-50 rounded-3xl transform rotate-12 opacity-80 group-hover:scale-105 transition-transform" />
                    <div className="absolute bottom-10 right-10 text-green-500 font-bold text-9xl leading-none z-10 group-hover:scale-110 transition-transform">
                        ✓<span className="opacity-50 absolute top-8 -left-4 text-8xl">✓</span>
                    </div>
                </motion.div>

                {/* Card 2: Templates */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-200 flex flex-col h-[400px] relative hover:shadow-md transition-shadow cursor-pointer group overflow-hidden card-hover-effect"
                >
                    <div className="flex justify-between items-start mb-6 z-10">
                        <div className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
                            Templates
                        </div>
                        <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center transform group-hover:bg-primary transition-colors">
                            ↗
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium text-foreground mb-auto z-10">Get started fast</h3>

                    <div className="absolute -bottom-10 -left-10 w-[120%] h-48 bg-gray-50 rounded-t-3xl border border-gray-100 z-10 group-hover:translate-y-[-10px] transition-transform flex p-4 gap-2">
                        <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow-sm" />
                        <div className="w-2/3 bg-white border border-gray-200 rounded-lg shadow-sm p-3 relative">
                            <div className="flex gap-1 mb-2">
                                <div className="w-2 h-2 rounded-full bg-blue-300" />
                                <div className="w-2 h-2 rounded-full bg-pink-300" />
                                <div className="w-2 h-2 rounded-full bg-yellow-300" />
                            </div>
                            <div className="absolute right-3 bottom-3 w-8 h-12 bg-yellow-300 rounded shadow-sm" />
                            <div className="absolute right-12 bottom-3 w-8 h-12 bg-yellow-300 rounded shadow-sm opacity-50" />
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: Solution Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-200 flex flex-col h-[400px] relative hover:shadow-md transition-shadow cursor-pointer group overflow-hidden card-hover-effect"
                >
                    <div className="flex justify-between items-start mb-6 z-10">
                        <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">
                            Solution Partners
                        </div>
                        <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center transform group-hover:bg-primary transition-colors">
                            ↗
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium text-foreground mb-auto z-10">Explore the network</h3>

                    <div className="absolute bottom-10 w-[120%] -left-10 flex items-center justify-center gap-4 z-10 group-hover:scale-105 transition-transform">
                        <div className="w-28 h-28 bg-[#0b3c8f] rounded-3xl flex items-center justify-center text-white font-bold text-4xl shadow-md border-4 border-white">
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full border-[6px] border-white bg-transparent" />
                                <div className="w-12 h-12 rounded-full border-[6px] border-white bg-transparent" />
                            </div>
                        </div>
                        <div className="w-28 h-28 bg-[#2563eb] rounded-3xl flex items-center justify-center text-white font-bold text-sm text-center shadow-md border-4 border-white leading-tight">
                            DESIGN<br />SPRINT<br />ACADEMY
                        </div>
                    </div>
                </motion.div>

                {/* Card 4: Community */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-200 flex flex-col h-[400px] relative hover:shadow-md transition-shadow cursor-pointer group overflow-hidden card-hover-effect"
                >
                    <div className="flex justify-between items-start mb-6 z-10">
                        <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                            Community
                        </div>
                        <div className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center transform group-hover:bg-primary transition-colors">
                            ↗
                        </div>
                    </div>
                    <h3 className="text-3xl font-medium text-foreground mb-auto z-10 leading-tight">Connect with<br />Kriyantrai users</h3>

                    <div className="absolute bottom-10 w-[110%] -left-5 flex items-center justify-center z-10 group-hover:scale-105 transition-transform">
                        <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white shadow-md overflow-hidden relative z-10">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                        <div className="w-32 h-32 bg-gray-400 rounded-full border-4 border-white shadow-md -ml-8 overflow-hidden z-20">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&h=200&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Slider Controls Placeholder */}
            <div className="flex justify-end gap-3 mt-8 pr-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">‹</div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-800 cursor-pointer hover:bg-gray-50">›</div>
            </div>
        </section>
    );
}
