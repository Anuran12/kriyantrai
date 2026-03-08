"use client";

import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const cursorRef = useRef({ x: 0, y: 0, active: false });

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        cursorRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
        };
    }, []);

    const onMouseLeave = useCallback(() => {
        cursorRef.current.active = false;
    }, []);

    return (
        <section
            className="relative min-h-screen pt-0 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >

            {/* Floating Elements (Background) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute right-[15%] top-[70%] flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-md border border-gray-200 text-gray-800"
            >
                <span className="text-primary">✨</span> KRIYANTRAI
            </motion.div>

            {/* Main Content + Card, vertically centered in viewport */}
            <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center gap-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="tracking-tight mb-8 flex flex-col items-center justify-center text-center w-full leading-[1.2]"
                >
                    <span className="text-3xl md:text-4xl font-bold text-black mb-2 uppercase tracking-wide">
                        POWERING THE NEXT ERA OF
                    </span>
                    <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F67112] to-[#2DD4BF] animate-slow-pulse mb-6 pb-2">
                        AI EXCELLENCE
                    </span>
                    <span className="text-8xl md:text-5xl font-bold text-black mb-2">
                        BUILD FASTER...
                    </span>
                    <span className="text-8xl md:text-5xl font-bold text-black">
                        AUTOMATE SMARTER...
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto text-center"
                >
                    Talk to us today for empowering businesses to harness the transformative power of artificial intelligence. From strategy to implementation, we deliver intelligent solutions that drive real results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a href="/solutions/artificial-intelligence" className="px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-md transition-colors inline-block text-center cursor-pointer">
                        Start Your AI Journey
                    </a>
                    <a href="/#solutions" className="px-8 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm text-gray-900 hover:bg-white shadow-sm transition-colors inline-block text-center cursor-pointer">
                        Explore Solutions
                    </a>
                </motion.div>

            </div>

        </section>
    );
}
