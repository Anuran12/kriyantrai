"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustSection() {
    return (
        <section className="relative py-24 px-6 overflow-hidden bg-transparent z-10">

            {/* Floating Elements (Canvas style) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute left-[20%] top-10 flex flex-col items-center gap-1"
            >
                <div className="bg-yellow-300 px-3 py-1 text-yellow-900 rounded-lg shadow-sm text-sm font-bold rotate-[-12deg]">
                    Drew
                </div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-white translate-x-3 -translate-y-2" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="hidden md:block absolute right-[15%] top-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]"
            >
                <div className="flex items-center gap-2 mb-2 text-xs text-blue-600 font-bold border-b pb-2">
                    <span>📄</span> Document
                </div>
                <div className="font-bold text-sm mb-3">A Letter to Our Teams: The Future Belongs to Us, Together</div>
                <div className="space-y-1.5 opacity-50">
                    <div className="h-2 w-full bg-purple-100 rounded-full" />
                    <div className="h-2 w-[80%] bg-purple-100 rounded-full" />
                    <div className="h-2 w-[50%] bg-purple-100 rounded-full" />
                </div>

                {/* Andrey cursor */}
                <div className="absolute -top-3 -right-6 flex items-center gap-1 z-20">
                    <div className="w-5 h-5 rounded-full bg-blue-400 border border-white" />
                    <div className="bg-blue-100 text-blue-900 px-2 text-xs font-bold rounded-full border border-blue-200 shadow-sm">Andrey</div>
                </div>
            </motion.div>

            <div className="max-w-4xl mx-auto text-center mt-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12"
                >
                    More than 100M users and <span className="font-bold">250,000</span><br />
                    companies are collaborating on the canvas
                </motion.h2>

                {/* Example Logos Grid */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold font-sans">workday.</span>
                    <span className="text-xl font-black font-sans">Deloitte.</span>
                    <span className="text-xl font-bold text-blue-400 flex items-center gap-1">
                        <div className="w-6 h-4 bg-blue-400 rounded-full" /> salesforce
                    </span>
                    <span className="text-xl font-bold text-blue-800 italic">PayPal</span>
                    <span className="text-xl font-black tracking-widest">SONY</span>
                    <span className="text-xl font-semibold flex items-center gap-1 tracking-tighter">
                        <div className="w-4 h-4 border-2 border-current rounded-sm rotate-45" /> PERPLEXITY
                    </span>
                    <span className="text-2xl font-black tracking-tighter">NEC</span>
                    <span className="text-2xl font-bold text-blue-600 rounded-full border-2 border-blue-600 w-10 h-10 flex items-center justify-center">hp</span>
                    <span className="text-xl font-bold tracking-tighter">servicenow</span>
                </div>
            </div>

        </section>
    );
}
