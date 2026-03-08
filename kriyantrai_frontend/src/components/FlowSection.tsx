"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FlowSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden z-10">

            <div className="max-w-4xl mx-auto text-center mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
                >
                    Flow from idea<br />to outcome in seconds
                </motion.h2>
            </div>

            {/* Interactive sticky note elements simulating canvas */}
            <div className="max-w-6xl mx-auto relative h-[600px] bg-white/40 border border-gray-200/50 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden p-8">

                {/* Tom cursor top left */}
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute left-10 top-10 flex items-center gap-2 z-30"
                >
                    <div className="bg-red-100 text-red-900 border border-red-200 px-3 flex items-center gap-1 py-1 rounded-full text-xs font-bold shadow-sm">
                        <div className="w-4 h-4 rounded-full bg-red-400" /> Tom
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-10 h-full relative">

                    {/* Left Canvas Element: Travel App Planning */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex-1 relative z-20"
                    >
                        <div className="text-xs text-gray-400 font-bold mb-4 tracking-wider">INSIGHTS</div>
                        <div className="text-sm font-bold mb-6">Travel App</div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Simulated Sticky Notes */}
                            <div className="w-24 h-24 bg-green-300 rounded-sm shadow text-xs p-2 font-medium text-green-900 rotate-2">
                                Group Planner
                            </div>
                            <div className="w-28 h-28 bg-yellow-300 rounded-sm shadow text-xs p-2 font-medium text-yellow-900 -rotate-3 ml-4 mt-6">
                                Adventure Tracker
                                {/* Brie cursor targeting it */}
                                <div className="absolute -bottom-4 right-0 z-30 flex items-center gap-1">
                                    <div className="bg-teal-100 text-teal-900 border border-teal-200 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-teal-500" /> Brie
                                    </div>
                                </div>
                            </div>
                            <div className="w-24 h-24 bg-orange-300 rounded-sm shadow text-xs p-2 font-medium text-orange-900 rotate-1 mt-4">
                                AR City Explorer
                            </div>
                        </div>

                        {/* Design Assistant Badge */}
                        <div className="absolute -bottom-6 right-4 z-40">
                            <div className="bg-white border-2 border-purple-500 text-purple-700 font-bold px-3 py-1.5 rounded-full text-sm shadow-lg flex items-center gap-2">
                                ✨ Design Assistant
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Line */}
                    <div className="hidden md:flex flex-1 items-center justify-center relative translate-y-[-50px]">
                        <svg className="w-full h-24 stroke-primary/40 stroke-2 fill-none">
                            <path d="M0,40 Q100,50 200,40" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" className="fill-primary/60" />
                                </marker>
                            </defs>
                        </svg>

                        {/* Floating Drew Cursor */}
                        <motion.div
                            animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute z-20 translate-y-8"
                        >
                            <div className="bg-yellow-100 text-yellow-900 border border-yellow-200 px-3 flex items-center gap-1 py-1 rounded-full text-xs font-bold shadow-sm">
                                <div className="w-4 h-4 rounded-full bg-yellow-400" /> Drew
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Canvas Element: PRD Document */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-md border border-gray-100 flex-1 h-[80%] my-auto flex flex-col relative z-20"
                    >
                        <div className="border-b border-gray-100 p-4 flex items-center justify-between text-xs text-blue-600 font-bold">
                            <span>📄 Create a PRD Doc</span>
                            <div className="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center">→</div>
                        </div>
                        <div className="p-6">
                            <div className="text-lg font-bold text-gray-400 mb-1">Untitled doc</div>
                            <div className="text-xs text-gray-400 mb-6">Press '/' for options or start writing</div>

                            <div className="space-y-3">
                                <div className="text-xs font-bold mb-2">Choose a starting template</div>
                                <div className="text-xs flex items-center gap-2 text-gray-500"><span className="text-[10px]">📄</span> Retrospective Summary</div>
                                <div className="text-xs flex items-center gap-2 text-gray-500"><span className="text-[10px]">📄</span> Product Brief</div>
                                <div className="text-xs flex items-center gap-2 text-gray-500"><span className="text-[10px]">📄</span> Research Synthesis</div>
                                <div className="text-xs flex items-center gap-2 text-gray-500"><span className="text-[10px]">📄</span> Meeting Notes</div>
                            </div>
                        </div>

                        {/* Product Marketer Badge */}
                        <div className="absolute top-[40%] -right-12 xl:-right-32 z-40">
                            <div className="bg-white border-2 border-purple-500 text-purple-700 font-bold px-3 py-1.5 rounded-full text-sm shadow-lg flex items-center gap-2">
                                ✨ Product Marketer
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
