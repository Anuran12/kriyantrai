"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function InnovationWorkspaceSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden z-10">

            <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-16 relative">

                {/* Left Side: Sticky Title */}
                <div className="xl:w-1/4 xl:sticky top-32 h-fit mb-12 xl:mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]"
                    >
                        Experience<br />the Innovation<br />Workspace
                    </motion.h2>
                </div>

                {/* Right Side: Cards Grid */}
                <div className="xl:w-3/4 flex flex-col gap-10">

                    {/* Top Big Card: AI Canvas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#f0f2f5] rounded-[2rem] p-10 relative overflow-hidden flex flex-col card-hover-effect group"
                    >
                        {/* Header Area */}
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 relative z-10">
                            <h3 className="text-4xl font-medium leading-tight max-w-lg">
                                Bring <span className="font-black italic tracking-tight">TEAM</span>
                                <span className="inline-flex mx-2 -space-x-2 align-middle">
                                    <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white" />
                                    <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-white" />
                                    <div className="w-8 h-8 rounded-full bg-orange-300 border-2 border-white" />
                                </span>
                                <span className="font-black italic">&amp;</span> artificial<br />intelligence together
                            </h3>

                            {/* Brie Cursor Badge */}
                            <div className="absolute top-0 right-0 lg:static flex items-center gap-1">
                                <div className="bg-teal-100 text-teal-900 border border-teal-200 px-3 flex items-center gap-1 py-1 rounded-full text-xs font-bold shadow-sm">
                                    <div className="w-4 h-4 rounded-full bg-teal-500" /> Brie
                                </div>
                            </div>
                        </div>

                        {/* Inner Cards row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {/* Fake AI Canvas Container Box */}
                            <div className="absolute -inset-4 border-2 border-purple-200 bg-white rounded-2xl z-0" />
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-white px-3 text-purple-600 font-bold italic tracking-wide text-sm z-20">
                                AI CANVAS
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 text-center flex flex-col items-center z-10 mt-6 relative card-hover-effect group">
                                <h4 className="font-bold text-purple-700 italic tracking-wide mb-2">SIDEKICKS</h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">chat-based AI agents<br />to collaborate with<br />on the canvas</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 text-center flex flex-col items-center z-10 mt-6 relative card-hover-effect group">
                                <h4 className="font-bold text-purple-700 italic tracking-wide mb-2">FLOWS</h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">streamline processes<br />with visual<br />AI workflows</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 text-center flex flex-col items-center z-10 mt-6 relative card-hover-effect group">
                                <h4 className="font-bold text-purple-700 italic tracking-wide mb-2">KNOWLEDGE</h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">bring in enterprise<br />knowledge to make<br />better decisions</p>
                            </div>
                        </div>

                        <div className="mt-8 text-center text-xs text-gray-400 font-semibold tracking-wider relative z-10 flex items-center justify-center gap-3">
                            <span className="text-purple-600 italic font-bold">AI TRUST</span>
                            <span className="px-2">Security</span> | <span className="px-2">Governance</span> | <span className="px-2">Privacy</span>
                        </div>

                    </motion.div>

                    {/* Bottom Grid: 2 Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Intelligent Canvas Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6 w-full card-hover-effect group rounded-3xl"
                        >
                            <div className="bg-[#f0f2f5] rounded-3xl h-[300px] relative overflow-hidden flex items-center justify-center">
                                {/* Infinite loop graphic placeholder */}
                                <div className="text-3xl font-black italic tracking-tighter text-center max-w-sm px-4">
                                    DISCOVER, DEFINE &amp; DELIVER<br />
                                    <span className="text-lg font-medium opacity-60 not-italic tracking-normal mt-4 block">as one team on one canvas</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Intelligent Canvas</h3>
                                <p className="text-gray-500 text-sm mb-6 max-w-xs">Empower teamwork on one, infinite, multiplayer canvas</p>
                                <button className="bg-foreground text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">Learn more</button>
                            </div>
                        </motion.div>

                        {/* Formats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6 w-full card-hover-effect group rounded-3xl"
                        >
                            <div className="bg-[#f0f2f5] rounded-3xl h-[300px] relative overflow-hidden flex flex-col items-center justify-center p-8">
                                <h3 className="text-3xl lg:text-4xl font-medium text-center leading-tight mb-8">
                                    Move work forward with<br />
                                    <span className="font-black italic tracking-tighter">FORMATS</span> you know
                                </h3>
                                <div className="flex gap-4">
                                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm w-24">
                                        <div className="w-8 h-10 border-2 border-primary rounded-md mb-2" />
                                        <span className="text-primary font-bold text-xs">Prototype</span>
                                    </div>
                                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm w-24">
                                        <div className="text-red-500 text-2xl mb-2">▶</div>
                                        <span className="text-red-500 font-bold text-xs">Slides</span>
                                    </div>
                                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm w-24">
                                        <div className="text-blue-500 text-2xl mb-2">📄</div>
                                        <span className="text-blue-500 font-bold text-xs">Doc</span>
                                    </div>
                                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm w-24">
                                        <div className="text-green-500 text-2xl mb-2">▦</div>
                                        <span className="text-green-500 font-bold text-xs">Table</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Formats</h3>
                                <p className="text-gray-500 text-sm mb-6 max-w-sm">Move quickly from ideas to structured plans and work with Docs, Tables, Slides, Diagrams and more</p>
                                <button className="bg-foreground text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">Learn more</button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
