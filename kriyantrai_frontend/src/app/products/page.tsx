'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const productImages = [
    "/survey-dashboard-1.png",
    "/survey-dashboard-2.png",
    "/survey-dashboard-3.png"
];

const truckerImages = [
    "/trucker-1.png",
    "/trucker-2.png",
    "/trucker-3.png",
    "/trucker-4.png",
    "/trucker-5.png",
    "/trucker-6.png"
];

const ImageSlider = ({
    images,
    containerClassName = "relative w-full aspect-video md:aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100 group bg-white",
    imageClassName = "w-full h-full object-contain bg-white"
}: { images: string[], containerClassName?: string, imageClassName?: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length, isHovered]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div
            className={containerClassName}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <img src={img} alt={`Dashboard Screenshot ${idx + 1}`} className={imageClassName} />
                </div>
            ))}

            {/* Manual Controls */}
            <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#14b8a6]' : 'bg-gray-300 hover:bg-white/80'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen relative z-10 w-full bg-transparent">
            <main className="flex-1 w-full flex flex-col items-center justify-start pt-32 pb-16">

                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-12 mb-20 relative">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm mb-12 shadow-sm">
                        <svg className="w-4 h-4 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Revolutionary AI Analytics Suite</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 relative z-10">
                        {/* Fake Code Block Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:flex flex-col items-start text-left bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-mono text-sm max-w-xs backdrop-blur-md"
                        >
                            <span className="text-[#14b8a6] font-bold mb-1">DataXpert Query:</span>
                            <span className="text-gray-600 mb-2">"Show revenue trends"</span>
                            <span className="text-[#10b981] flex items-center gap-2 font-semibold">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                Processed in 0.3s
                            </span>
                        </motion.div>

                        {/* Center Title */}
                        <div className="flex-1 max-w-4xl flex flex-col items-center relative z-20">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center font-bold tracking-tight text-center"
                            >
                                <span className="text-gray-900 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-2">Analytics That</span>
                                <span className="text-[#14b8a6] bg-clip-text text-transparent bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1]">Speaks Your</span>
                                <span className="text-[#14b8a6] bg-clip-text text-transparent bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1]">Language</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
                            >
                                Transform complex data into actionable insights with AI-powered analytics.
                                Ask questions in plain English, get answers in seconds, and make data-driven decisions faster than ever.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center w-full mt-10"
                            >
                                <a href="#" className="bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-lg">
                                    Get Early Access
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            </motion.div>
                        </div>

                        {/* KPI Stats Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:flex flex-col items-start bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-mono text-sm gap-3 backdrop-blur-md w-64"
                        >
                            <span className="text-[#6366f1] font-bold mb-1 border-b border-gray-100 pb-2 w-full text-left">Real-Time Metrics</span>
                            <div className="flex items-center gap-3 w-full">
                                <span className="text-[#10b981] font-bold">↑</span>
                                <span className="text-gray-700 tracking-wide font-semibold text-sm">Revenue: +18.5%</span>
                            </div>
                            <div className="flex items-center gap-3 w-full">
                                <span className="text-[#3b82f6] font-bold">✓</span>
                                <span className="text-gray-700 tracking-wide font-semibold text-sm">Satisfaction: 94.2%</span>
                            </div>
                        </motion.div>
                    </div>


                </section>

                {/* Products Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-20 mb-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full text-left"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>

                        {/* Trucker Health Monitoring System Card */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 text-left card-hover-effect group shadow-[0_0_20px_rgba(0,0,0,0.02)] max-w-7xl mx-auto relative overflow-hidden w-full mb-12">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f97316]/5 to-[#ef4444]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <div className="flex flex-col relative z-10 w-full">
                                {/* Top Content Area */}
                                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center w-full">
                                    {/* Left Content */}
                                    <div className="flex-1 flex flex-col w-full">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f97316]/10 to-[#ea580c]/10 flex items-center justify-center shrink-0 border border-[#f97316]/20 group-hover:from-[#f97316]/20 group-hover:to-[#ea580c]/20 transition-all duration-300 shadow-sm">
                                                <svg className="w-8 h-8 text-[#f97316] group-hover:text-[#ea580c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 mt-1 lg:mt-2 group-hover:text-[#f97316] transition-colors text-center md:text-left">Trucker Health Monitoring System</h3>
                                        </div>
                                        <p className="text-gray-600 text-base lg:text-lg font-medium mb-4 text-center md:text-left">A full-stack platform enabling camp-based driver registration, health checkups, QR-powered public health profiles, and operational analytics.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-2">
                                            {/* Deliverables Section */}
                                            <div>
                                                <h4 className="text-[#f97316] font-bold mb-2 uppercase text-xs tracking-wider">🚀 What It Delivers</h4>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed">Digital driver onboarding & health records</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed">QR-based public profile access</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed">Camp workflow management</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed">Real-time operational dashboards</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed">Secure, scalable containerized deployment</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tech Stack Section */}
                                            <div>
                                                <h4 className="text-[#3b82f6] font-bold mb-2 uppercase text-xs tracking-wider">🛠 Built With</h4>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed"><span className="font-bold">Backend:</span> Node.js, TypeScript, Express, PostgreSQL, Redis</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed"><span className="font-bold">Web:</span> Next.js 14, React 18, Tailwind</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed"><span className="font-bold">Mobile:</span> Expo (React Native)</p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                        </div>
                                                        <p className="text-gray-700 font-medium text-sm leading-relaxed"><span className="font-bold">Infra:</span> Docker, Nginx, MinIO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-start">
                                            <div className="text-[#f97316] text-sm font-bold flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                                Scalable Health Monitoring Platform
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Image Slider */}
                                    <div className="w-full lg:w-[45%] flex flex-col justify-center items-center">
                                        <ImageSlider
                                            images={truckerImages}
                                            containerClassName="relative w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px] aspect-[9/19.5] rounded-[2rem] overflow-hidden shadow-2xl border-[4px] border-gray-900 group bg-gray-900 mx-auto"
                                            imageClassName="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Bottom Button Row */}
                                <div className="w-full flex justify-center mt-8 pt-6 border-t border-gray-100">
                                    <a href="/contact/sales" className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 inline-flex items-center justify-center text-base w-full sm:w-auto">
                                        Book a demo
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Digital Survey & Monitoring System Card */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 text-left card-hover-effect group shadow-[0_0_20px_rgba(0,0,0,0.02)] max-w-7xl mx-auto relative overflow-hidden w-full">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14b8a6]/5 to-[#3b82f6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            <div className="flex flex-col relative z-10 w-full">
                                {/* Top Content Area */}
                                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center w-full">
                                    {/* Left Content */}
                                    <div className="flex-1 flex flex-col w-full">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                                            <div className="w-16 h-16 rounded-2xl bg-[#eff6ff] flex items-center justify-center shrink-0 border border-[#3b82f6]/20 group-hover:bg-[#153776] transition-colors shadow-sm">
                                                <svg className="w-8 h-8 text-[#3b82f6] group-hover:text-[#A1F9F3] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#153776] transition-colors text-center md:text-left">Digital Survey & Monitoring System</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mt-2">
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Empowers field teams with an offline-first Surveyor App for reliable data collection</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Captures 60–80 structured indicators with photo and GPS validation</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Designed for rural and low-connectivity environments</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Enables supervisors and administrators to monitor performance in real time</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Strengthens transparency, accountability, and data accuracy</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Reduces paperwork, manual errors, and reporting delays</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Provides actionable insights through dashboards, KPIs, and exportable reports</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#14b8a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-[#14b8a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <p className="text-gray-700 font-medium text-sm leading-relaxed">Scalable architecture suitable for district, state, or national deployment</p>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-start">
                                            <div className="text-[#3b82f6] text-sm font-bold flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                                Enterprise-grade system
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Image Slider */}
                                    <div className="w-full lg:w-[45%] flex flex-col justify-center">
                                        <ImageSlider images={productImages} />
                                    </div>
                                </div>

                                {/* Bottom Button Row */}
                                <div className="w-full flex justify-center mt-8 pt-6 border-t border-gray-100">
                                    <a href="/contact/sales" className="bg-[#153776] hover:bg-[#102A5E] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 inline-flex items-center justify-center text-base w-full sm:w-auto">
                                        Book a demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div >
    );
}
