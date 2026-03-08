"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-transparent z-10">

            {/* Floating Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute left-[15%] top-10 flex items-center gap-1 z-20"
            >
                <div className="bg-red-100 text-red-900 border border-red-200 px-3 flex items-center gap-1 py-1 rounded-full text-xs font-bold shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-red-400" /> Aida
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute right-[20%] top-40 flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-md border border-gray-200 text-purple-700 z-20"
            >
                <span>✨</span> KRIYANTRAI
            </motion.div>

            <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.2] mb-6"
                >
                    The only thing more important<br />than moving fast is moving the needle
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-500"
                >
                    See how over 250,000 companies are getting great done in Kriyantrai
                </motion.p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-30">

                {/* PEPSICO Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl h-[450px] p-8 flex flex-col justify-between text-white shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                    <div>
                        <div className="text-5xl font-bold mb-2">3.6x</div>
                        <div className="text-lg font-medium opacity-90">faster time to market</div>
                    </div>
                    <div className="text-2xl font-black flex items-center gap-2 tracking-widest">
                        <span className="text-white">🌐</span> PEPSICO
                    </div>
                </motion.div>

                {/* ASOS Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl h-[450px] p-8 flex flex-col justify-between text-white shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                    <div>
                        <div className="text-5xl font-bold mb-2">50%</div>
                        <div className="text-lg font-medium opacity-90">shorter planning process</div>
                    </div>
                    <div className="text-4xl font-black tracking-tighter italic">asos</div>
                </motion.div>

                {/* KW Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-3xl h-[450px] p-8 flex flex-col justify-between text-white shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                    <div>
                        <div className="text-5xl font-bold mb-2">2x</div>
                        <div className="text-lg font-medium opacity-90">faster time to market</div>
                    </div>
                    <div className="text-4xl font-bold tracking-tighter">kw</div>
                </motion.div>

            </div>

            {/* Stats Section */}
            <div className="max-w-5xl mx-auto mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-200/50 pt-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="text-5xl font-medium italic text-foreground tracking-tight">100M+</div>
                    <div className="text-gray-500 font-medium">people collaborating on Kriyantrai</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="text-5xl font-medium italic text-foreground tracking-tight">250+</div>
                    <div className="text-gray-500 font-medium">apps and integrations</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="text-5xl font-medium italic text-foreground tracking-tight">6,000+</div>
                    <div className="text-gray-500 font-medium">templates</div>
                </motion.div>
            </div>

        </section>
    );
}
