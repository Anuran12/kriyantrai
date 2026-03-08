"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SecurityIntegrationsSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden z-10 max-w-[1400px] mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Security Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="bg-[#f0f2f5] rounded-3xl h-[400px] relative overflow-hidden flex flex-col items-center justify-center border border-gray-100 p-8 shadow-sm card-hover-effect group/card">

                        <h3 className="text-4xl font-medium leading-tight text-center z-10 -mt-10 mb-8">
                            Your data is<br />
                            <span className="font-black italic tracking-tight">SECURED.</span><br />
                            Period.
                        </h3>

                        {/* Minimalistic isometric layers representation */}
                        <div className="relative w-48 h-32 mt-10 z-0">
                            <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-xl transform -skew-x-[20deg] rotate-[-10deg] shadow-lg flex items-center justify-center group-hover/card:-translate-y-4 transition-transform duration-500">
                                <div className="flex gap-2 rotate-[20deg] skew-x-[10deg]">
                                    <div className="h-4 w-12 bg-[#111] skew-x-[30deg]" />
                                    <div className="h-4 w-12 bg-[#111] skew-x-[30deg]" />
                                    <div className="h-4 w-12 bg-[#111] skew-x-[30deg]" />
                                </div>
                            </div>
                            <div className="absolute top-12 left-0 w-full h-full bg-pink-400 rounded-xl transform -skew-x-[20deg] rotate-[-10deg] shadow-lg opacity-80 grid gap-2 p-2 group-hover/card:translate-y-4 transition-transform duration-500">
                                <div className="w-full h-full border-2 border-white/40 border-dashed rounded" />
                            </div>
                            <div className="absolute top-24 left-0 w-full h-full bg-orange-400 rounded-xl transform -skew-x-[20deg] rotate-[-10deg] shadow-lg opacity-90 flex items-center justify-center gap-2 pb-4 group-hover/card:translate-y-8 transition-transform duration-500">
                                <div className="w-6 h-6 rounded-full border-2 border-white/60" />
                                <div className="w-6 h-6 rounded-full border-2 border-white/60" />
                                <div className="w-6 h-6 rounded-full border-2 border-white/60" />
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Enterprise Security & Scale</h3>
                        <p className="text-gray-500 mb-6 max-w-sm">Secure and scalable collaboration on an enterprise-grade platform you can trust</p>
                        <button className="bg-foreground text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">Learn more</button>
                    </div>
                </motion.div>

                {/* Integrations Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col gap-6"
                >
                    <div className="bg-[#f0f2f5] rounded-3xl h-[400px] relative overflow-hidden flex flex-col items-center justify-center border border-gray-100 p-8 shadow-sm card-hover-effect group">

                        <h3 className="text-4xl font-medium leading-tight text-center z-10 mb-10 w-full">
                            Connect Kriyantrai to <span className="font-black italic tracking-tighter text-5xl">250+</span><br />
                            of your top tools
                        </h3>

                        {/* Brie Cursor Badge */}
                        <div className="absolute top-16 right-32 flex items-center gap-1 z-20">
                            <div className="bg-teal-100 text-teal-900 border border-teal-200 px-3 flex items-center gap-1 py-1 rounded-full text-xs font-bold shadow-sm">
                                <div className="w-4 h-4 rounded-full bg-teal-500" /> Brie
                            </div>
                        </div>

                        {/* Simulated App Icons Grid */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm w-[90%] flex flex-wrap justify-center gap-4">
                            {/* 1st Row */}
                            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold">git</div>
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white"><span className="rotate-45 block transform font-bold">▶▶</span></div>
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-black text-xl">C</div>
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">||</div>
                            <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white rounded-full">O</div>
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-2xl" />
                            <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-2xl" />
                            {/* 2nd Row */}
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-black blur-[1px]">F</div>
                            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center border-4 border-blue-500 text-transparent">o</div>
                            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold">T</div>
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-black">📹</div>
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black">G</div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                                    <div className="bg-green-500 rounded-sm" /><div className="bg-blue-500 rounded-sm" />
                                    <div className="bg-yellow-500 rounded-sm" /><div className="bg-red-500 rounded-sm" />
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 border-4 border-white rounded-full" />
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Integrations</h3>
                        <p className="text-gray-500 mb-6 max-w-sm">Connects with 250+ apps so teams stay aligned and productive in one scalable, secure workspace.</p>
                        <button className="bg-foreground text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">Learn more</button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
