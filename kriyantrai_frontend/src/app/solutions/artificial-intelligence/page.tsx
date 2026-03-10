'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function ArtificialIntelligencePage() {
    const [activeSection, setActiveSection] = useState('core-ai');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['core-ai', 'generative-ai', 'advanced-ai', 'infrastructure', 'industry-ai'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // if top of section is within the top half of the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on load
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: "core-ai", name: "Core AI", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1 relative z-10"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> },
        { id: "generative-ai", name: "Generative AI", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1 relative z-10"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg> },
        { id: "advanced-ai", name: "Advanced AI", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1 relative z-10"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> },
        { id: "infrastructure", name: "Infrastructure", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1 relative z-10"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg> },
        { id: "industry-ai", name: "Industry AI", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1 relative z-10"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full">
            <main className="flex-1 w-full flex flex-col items-center justify-start pt-32 pb-16">

                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-8 mb-20 relative">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm mb-12 shadow-sm">
                        <svg className="w-4 h-4 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Enterprise AI & Machine Learning Solutions</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 relative z-10">
                        {/* Fake Code Block Left */}
                        <div className="hidden lg:flex flex-col items-start text-left bg-[#050038]/5 border border-[#153776]/20 p-5 rounded-2xl w-64 shadow-md font-mono text-xs backdrop-blur-md">
                            <span className="text-[#153776]/70">{'const AI = await train({'}</span>
                            <span className="text-gray-600 pl-4">{'model: \'neural-net\','}</span>
                            <span className="text-gray-600 pl-4">{'accuracy: 0.95'}</span>
                            <span className="text-[#153776]/70">{'});'}</span>
                        </div>

                        {/* Center Title */}
                        <div className="flex-1 max-w-4xl flex flex-col relative mt-8">
                            <h1 className="flex flex-col items-center justify-center font-bold tracking-tight text-center">
                                <span className="text-gray-900 text-4xl md:text-5xl lg:text-6xl mb-4">Transform with</span>
                                <span className="text-[#153776] text-6xl md:text-8xl lg:text-[7.5rem] leading-[1.0] tracking-tighter mb-2">Artificial</span>
                                <span className="text-[#153776] text-6xl md:text-8xl lg:text-[7.5rem] leading-[1.0] tracking-tighter mb-6 shadow-sm">Intelligence</span>
                                <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                                    <span className="text-[#153776] text-4xl md:text-5xl lg:text-6xl">that</span>
                                    <span className="text-[#A1F9F3] filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] px-5 py-2 bg-gradient-to-r from-[#153776] to-[#0d2146] rounded-2xl whitespace-nowrap text-4xl md:text-5xl lg:text-6xl">Delivers</span>
                                </div>
                            </h1>
                        </div>

                        {/* Stats Check List Right */}
                        <div className="hidden lg:flex flex-col items-start text-left bg-white/80 border border-gray-100 p-6 rounded-2xl w-72 shadow-xl backdrop-blur-md">
                            <div className="flex items-start gap-3 mb-4 text-sm text-[#F67112] font-extrabold tracking-wide">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                Model trained (98% accuracy)
                            </div>
                            <div className="flex items-start gap-3 mb-4 text-sm text-[#A1F9F3] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] font-extrabold tracking-wide">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                Inference ready
                            </div>
                            <div className="flex items-start gap-3 text-sm text-[#153776] font-extrabold tracking-wide">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                Deployed to edge
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        From machine learning models to intelligent automation systems. We deliver enterprise-grade AI solutions that transform operations and drive measurable results.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 mt-16 pt-12 border-t border-gray-300 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Decorative Line Dot */}
                        <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#153776]"></div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-5xl font-bold text-[#153776] mb-2">98%</span>
                            <span className="text-gray-600 font-medium tracking-wide">Client Satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-5xl font-bold text-[#153776] mb-2">100+</span>
                            <span className="text-gray-600 font-medium tracking-wide">AI Models Deployed</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center relative">
                            {/* Scroll Mouse Icon from Screenshot */}
                            <div className="hidden md:flex absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-12 border-2 border-gray-400 rounded-full items-start justify-center pt-2">
                                <div className="w-1.5 h-3 bg-[#A1F9F3] rounded-full animate-bounce"></div>
                            </div>
                            <span className="text-5xl font-bold text-[#153776] mb-2">10+</span>
                            <span className="text-gray-600 font-medium tracking-wide">Industries Served</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-5xl font-bold text-[#153776] mb-2">24/7</span>
                            <span className="text-gray-600 font-medium tracking-wide">AI Support</span>
                        </div>
                    </div>
                </section>

                {/* Sticky Section Navigation */}
                <div className="sticky top-12 z-40 w-full transition-all duration-300">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center py-4 overflow-x-auto hide-scrollbar">
                            <div className="flex items-center space-x-1 sm:space-x-2 mx-auto bg-gray-100/50 backdrop-blur-md rounded-full p-1 border border-white/60 shadow-inner w-max">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full px-5 py-2.5 h-auto transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-white/50 shadow-[0_0_0_transparent] hover:shadow-sm'}`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeStickyNavBadge-AI"
                                                    className="absolute inset-0 bg-[#153776] rounded-full shadow-md z-0"
                                                    initial={false}
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            {item.icon}
                                            <span className="relative z-10">{item.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Impact Section */}
                <section id="core-ai" className="w-full max-w-7xl mx-auto scroll-mt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-20 mb-20 bg-white/40 border border-gray-200 p-8 sm:p-16 rounded-[3rem] shadow-xl backdrop-blur-md">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white shadow-sm mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#A1F9F3]"></div>
                        <span className="text-sm font-bold text-[#153776]">Transformative AI Impact</span>
                        <div className="w-2 h-2 rounded-full bg-[#153776]"></div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-8 leading-tight tracking-tight max-w-4xl">
                        Real AI Solutions for<br />
                        <span className="text-[#A1F9F3] px-2 bg-gradient-to-r from-[#153776] to-[#0d2146] filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] rounded-xl mt-2 inline-block">Real Business Challenges</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-16 font-medium leading-relaxed">
                        Beyond the hype and buzzwords, we deliver <span className="text-[#153776] font-bold underline decoration-[#A1F9F3] underline-offset-4">practical AI implementations</span> that solve actual business problems and create measurable value for organizations across industries.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {/* Box 1 */}
                        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#4F46E5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-8 shadow-md">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#153776] transition-colors">Data Intelligence</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed font-medium">Transform raw data into actionable intelligence with advanced analytics, machine learning models, and real-time insights for strategic decision-making.</p>
                            <ul className="space-y-3 mb-8 w-full font-medium text-gray-700">
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Predictive Analytics</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Real-time Dashboards</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Pattern Recognition</li>
                            </ul>
                            <div className="mt-auto w-full pt-6 border-t border-gray-100 flex items-end justify-between">
                                <span className="text-4xl font-bold text-[#153776]">95%</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Data<br />Accuracy</span>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-8 shadow-md">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#153776] transition-colors">AI Automation</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed font-medium">Revolutionize workflows with intelligent automation that learns and adapts to handle complex business processes beyond simple rules.</p>
                            <ul className="space-y-3 mb-8 w-full font-medium text-gray-700">
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Process Automation</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Document Intelligence</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Workflow Optimization</li>
                            </ul>
                            <div className="mt-auto w-full pt-6 border-t border-gray-100 flex items-end justify-between">
                                <span className="text-4xl font-bold text-[#153776]">75%</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Time<br />Saved</span>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#F67112] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-[#F67112] flex items-center justify-center mb-8 shadow-md">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#153776] transition-colors">Market Advantage</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed font-medium">Gain sustainable competitive advantage through AI-powered innovation, enhanced customer experiences, and accelerated strategies.</p>
                            <ul className="space-y-3 mb-8 w-full font-medium text-gray-700">
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Customer Intelligence</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Product Innovation</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Market Prediction</li>
                            </ul>
                            <div className="mt-auto w-full pt-6 border-t border-gray-100 flex items-end justify-between">
                                <span className="text-4xl font-bold text-[#153776]">3.5x</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">ROI<br />Average</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Portfolio */}
                <section id="generative-ai" className="w-full max-w-7xl mx-auto scroll-mt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-20">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white shadow-sm mb-6">
                        <svg className="w-4 h-4 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        <span className="text-sm font-bold text-[#153776]">Complete AI Solutions Portfolio</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-8 leading-tight tracking-tight max-w-4xl">
                        Comprehensive AI Services <span className="text-[#153776]">Portfolio</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-12 font-medium">
                        From machine learning to generative AI, we offer end-to-end solutions that transform how you operate, compete, and grow in the AI-powered future.
                    </p>



                    {/* Detail Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {/* Machine Learning */}
                        <div className="bg-white border-2 border-gray-100 hover:border-[#4F46E5] hover:shadow-xl rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-16 h-16 bg-[#4F46E5]/10 rounded-2xl flex items-center justify-center border border-[#4F46E5]/20">
                                    <svg className="w-8 h-8 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </div>
                                <div className="text-right">
                                    <h4 className="font-bold text-[#A1F9F3] bg-[#153776] px-3 py-1 rounded-lg text-lg">Enterprise</h4>
                                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">Production Ready</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Machine Learning</h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#153776]/10 text-[#153776] text-sm font-bold mb-6 self-start">
                                <span className="w-2 h-2 rounded-full bg-[#153776]"></span> 40% Efficiency Boost
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1">
                                Deploy production-ready ML models that continuously learn and adapt. Our platform accelerates development while ensuring enterprise security.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-2xl font-bold text-[#153776]">500+</div>
                                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase">Models Deployed</div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-2xl font-bold text-[#153776]">2.3x</div>
                                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase">ROI Average</div>
                                </div>
                            </div>

                            <ul className="space-y-3 font-medium text-gray-700 text-sm">
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> AutoML & Model Optimization</li>
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Real-time Inference APIs</li>
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Custom Algorithm Development</li>
                            </ul>
                        </div>

                        {/* Computer Vision */}
                        <div className="bg-white border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center border border-emerald-200">
                                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </div>
                                <div className="text-right">
                                    <h4 className="font-bold text-white bg-emerald-600 px-3 py-1 rounded-lg text-lg">Real-time</h4>
                                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">Processing</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Computer Vision AI</h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-bold mb-6 self-start border border-emerald-100">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Real-time Processing
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1">
                                Advanced computer vision systems that process visual data with superhuman accuracy. Perfect for autonomous inspection and medical analysis.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-2xl font-bold text-emerald-600">1M+</div>
                                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase">Images/Hour</div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-2xl font-bold text-emerald-600">15ms</div>
                                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase">Processing Time</div>
                                </div>
                            </div>

                            <ul className="space-y-3 font-medium text-gray-700 text-sm">
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Object Detection & Tracking</li>
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Medical Image Analysis</li>
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Quality Control Automation</li>
                            </ul>
                        </div>

                        {/* Predictive Analytics */}
                        <div className="bg-white border-2 border-gray-100 hover:border-[#F67112] hover:shadow-xl rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-16 h-16 bg-[#F67112]/10 rounded-2xl flex items-center justify-center border border-[#F67112]/20">
                                    <svg className="w-8 h-8 text-[#F67112]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div className="text-right">
                                    <h4 className="font-bold text-[#A1F9F3] bg-[#153776] px-3 py-1 rounded-lg text-lg">Advanced</h4>
                                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">Forecasting</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Predictive Analytics</h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F67112]/10 text-[#F67112] text-sm font-bold mb-6 self-start border border-[#F67112]/20">
                                <span className="w-2 h-2 rounded-full bg-[#F67112]"></span> Future-Ready Analytics
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1">
                                Transform uncertainty into strategic advantage with AI-powered forecasting. Predict market trends and customer behavior with exceptional accuracy.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-2xl font-bold text-[#F67112]">50B+</div>
                                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase">Data Points</div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-2xl font-bold text-[#F67112]">365</div>
                                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase">Days Forecast</div>
                                </div>
                            </div>

                            <ul className="space-y-3 font-medium text-gray-700 text-sm">
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Demand Forecasting</li>
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Risk Assessment Models</li>
                                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Market Intelligence</li>
                            </ul>
                        </div>
                    </div>

                </section>

                {/* Advanced AI Capabilities Banner */}
                <section id="advanced-ai" className="w-full max-w-7xl mx-auto scroll-mt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-12 bg-[#153776] text-white p-12 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#153776] via-[#0d2146] to-[#153776] z-0"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: "url('/bg-pattern.png')", backgroundRepeat: "repeat", backgroundSize: "300px 300px" }}></div>
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A1F9F3]/10 rounded-full blur-3xl group-hover:bg-[#A1F9F3]/20 transition-all duration-700"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#F67112]/10 rounded-full blur-3xl group-hover:bg-[#F67112]/20 transition-all duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 shadow-sm text-white">
                            <span className="text-lg"></span>
                            <span className="text-sm font-bold tracking-wide">Next-Generation AI</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
                            Advanced AI Capabilities
                        </h2>

                        <p className="text-lg md:text-xl text-[#A1F9F3]/90 max-w-4xl mb-16 leading-relaxed font-medium">
                            At Kriyantrai, we don't just implement AI—we pioneer the future of intelligent business solutions. Our dedicated AI research teams continuously push the boundaries of what's possible, investing heavily in R&D and maintaining partnerships with leading academic institutions to ensure our clients always have access to the most advanced AI capabilities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/20 pt-16">
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">98.7%</span>
                                <span className="text-sm border-b border-[#A1F9F3]/30 pb-2 font-bold text-[#A1F9F3] uppercase tracking-widest mb-3">Client Satisfaction Rate</span>
                                <span className="text-white/70 text-sm font-medium">Consistently exceeding expectations</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0">
                                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">500+</span>
                                <span className="text-sm border-b border-[#A1F9F3]/30 pb-2 font-bold text-[#A1F9F3] uppercase tracking-widest mb-3">AI Models Deployed</span>
                                <span className="text-white/70 text-sm font-medium">Production-ready solutions</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0">
                                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">$50M+</span>
                                <span className="text-sm border-b border-[#A1F9F3]/30 pb-2 font-bold text-[#A1F9F3] uppercase tracking-widest mb-3">ROI Generated</span>
                                <span className="text-white/70 text-sm font-medium">Measurable business impact</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Across Industries Section */}
                <section id="industry-ai" className="w-full max-w-7xl mx-auto scroll-mt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-24 relative">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white shadow-sm mb-6">
                        <svg className="w-4 h-4 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-sm font-bold text-[#153776]">Global Industry Expertise</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-8 leading-tight tracking-tight max-w-4xl">
                        AI Across <span className="text-[#A1F9F3] px-2 bg-gradient-to-r from-[#153776] to-[#0d2146] filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] rounded-xl inline-block mt-2">Industries</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-16 font-medium leading-relaxed">
                        Tailored AI solutions that address the unique challenges and opportunities in your industry, backed by deep domain expertise and proven results.
                    </p>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {industries.map((ind, idx) => (
                            <div key={idx} className={`bg-white rounded-3xl p-8 flex flex-col group relative overflow-hidden ${ind.bgClass}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${ind.iconBgClass}`}>
                                    {ind.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#153776] transition-colors">{ind.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed font-medium flex-1">{ind.desc}</p>
                                <ul className="space-y-3 mb-8 w-full font-medium text-gray-700 text-sm">
                                    {ind.points.map((pt, pIdx) => (
                                        <li key={pIdx} className="flex items-center gap-3">
                                            <svg className="w-4 h-4 text-[#A1F9F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="mt-auto w-full py-4 border border-gray-200 rounded-xl text-center font-bold text-gray-700 group-hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors hover:text-[#153776] hover:border-gray-300">
                                    Explore Solutions
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our AI Implementation Journey */}
                <section id="infrastructure" className="w-full scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-24 bg-white/40 border border-gray-200 p-8 sm:p-16 rounded-[3rem] shadow-xl backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#153776]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A1F9F3]/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center text-center w-full">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white shadow-sm mb-6">
                            <span className="text-lg">🚀</span>
                            <span className="text-sm font-bold text-[#153776]">Proven Process</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-8 leading-tight tracking-tight max-w-4xl">
                            Our AI Implementation <span className="text-[#153776]">Journey</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-16 font-medium leading-relaxed">
                            A proven methodology that ensures successful AI adoption from concept to production deployment, delivering measurable results every step of the way.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative">
                            {/* Connecting Line */}
                            <div className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#A1F9F3] via-[#153776] to-[#A1F9F3] opacity-30 z-0"></div>

                            {[
                                { step: "01", title: "Discovery & Assessment", desc: "Deep dive into your business challenges, data landscape, and AI readiness to identify the highest-impact opportunities." },
                                { step: "02", title: "AI Strategy & Roadmap", desc: "Develop a comprehensive AI strategy with clear milestones, success metrics, and implementation timeline tailored to your goals." },
                                { step: "03", title: "Rapid Prototyping", desc: "Build and validate AI prototypes quickly to demonstrate value and refine approaches before full-scale development." },
                                { step: "04", title: "Production Deployment", desc: "Deploy robust, scalable AI systems with monitoring, maintenance, and continuous improvement capabilities." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center relative z-10 hover:-translate-y-2 transition-transform duration-300 group shadow-lg hover:shadow-2xl">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#A1F9F3] to-[#153776] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-8 shadow-md border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#153776] mb-4">{item.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-12 mb-24">
                    <div className="w-full bg-gradient-to-br from-[#0a1936] via-[#112d61] to-[#040f24] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group border border-[#153776]/30">
                        {/* Decorative background elements */}
                        <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[200%] bg-gradient-to-br from-[#A1F9F3]/10 to-transparent rotate-12 blur-3xl group-hover:rotate-45 transition-transform duration-1000"></div>
                        <div className="absolute bottom-[-50%] right-[-10%] w-[70%] h-[200%] bg-gradient-to-tl from-[#F67112]/5 to-transparent -rotate-12 blur-3xl group-hover:-rotate-45 transition-transform duration-1000"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-white/80">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                <span className="text-sm font-semibold tracking-wide">Ready to Unlock AI's Potential?</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
                                Build Tomorrow's AI
                                <br />
                                <span className="text-[#A1F9F3]">Solutions Today</span>
                            </h2>

                            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                                Transform your organization with our proven AI solutions. We've helped enterprises and innovative startups deliver measurable results across multiple industries, driving operational excellence and competitive advantage.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                                <a href="/contact/sales" className="bg-[#A1F9F3] hover:bg-white text-[#153776] border-2 border-[#A1F9F3] hover:border-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3">
                                    Book a demo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Same global footer used on all pages */}
            <Footer />
        </div>
    );
}

const industries = [
    {
        title: "Healthcare & Life Sciences",
        desc: "Transforming healthcare operations for hospitals, clinics, pharmaceutical manufacturers, and distributors",
        bgClass: "border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-emerald-500 text-white shadow-md shadow-emerald-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
        points: ["Hospital Operations", "Clinical Workflows", "Supply Chain Management", "Regulatory Compliance"],
    },
    {
        title: "Financial Services",
        desc: "Transforming finance with intelligent risk management, fraud detection, and algorithmic trading",
        bgClass: "border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-blue-500 text-white shadow-md shadow-blue-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
        points: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Customer Analytics"],
    },
    {
        title: "Manufacturing & Logistics",
        desc: "Optimizing operations with predictive maintenance, quality control, and supply chain intelligence",
        bgClass: "border-2 border-gray-100 hover:border-[#F67112] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-[#F67112] text-white shadow-md shadow-orange-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        points: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Demand Forecasting"],
    },
    {
        title: "Retail & E-commerce",
        desc: "Enhancing customer experience with personalization, recommendation engines, and inventory optimization",
        bgClass: "border-2 border-gray-100 hover:border-purple-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-purple-500 text-white shadow-md shadow-purple-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
        points: ["Recommendation Systems", "Dynamic Pricing", "Inventory Management", "Customer Segmentation"],
    },
    {
        title: "Energy & Utilities",
        desc: "Smart grid optimization, renewable energy forecasting, and infrastructure monitoring",
        bgClass: "border-2 border-gray-100 hover:border-[#fbbf24] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-[#fbbf24] text-white shadow-md shadow-amber-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        points: ["Smart Grid Analytics", "Energy Forecasting", "Asset Monitoring", "Demand Response"],
    },
    {
        title: "Transportation & Automotive",
        desc: "Autonomous systems, route optimization, and predictive maintenance for mobility solutions",
        bgClass: "border-2 border-gray-100 hover:border-teal-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-teal-500 text-white shadow-md shadow-teal-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
        points: ["Autonomous Driving", "Route Optimization", "Fleet Management", "Safety Systems"],
    },
    {
        title: "Private Equity & Investment",
        desc: "Advanced analytics for deal sourcing, due diligence, portfolio optimization, and market intelligence",
        bgClass: "border-2 border-gray-100 hover:border-indigo-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-indigo-500 text-white shadow-md shadow-indigo-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10zM8 14v3m4-3v3m4-3v3" /></svg>,
        points: ["Deal Sourcing", "Due Diligence Automation", "Portfolio Analytics", "Market Intelligence"],
    },
    {
        title: "Agriculture & AgTech",
        desc: "Smart farming solutions with precision agriculture, crop monitoring, and sustainable resource management",
        bgClass: "border-2 border-gray-100 hover:border-[#10b981] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-[#10b981] text-white shadow-md shadow-emerald-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
        points: ["Precision Agriculture", "Crop Monitoring", "Yield Prediction", "Resource Optimization"],
    },
    {
        title: "Technology & Software",
        desc: "AI-powered development tools, code optimization, automated testing, and intelligent software solutions",
        bgClass: "border-2 border-gray-100 hover:border-sky-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white",
        iconBgClass: "bg-sky-500 text-white shadow-md shadow-sky-200",
        icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        points: ["Code Generation", "Automated Testing", "Performance Optimization", "DevOps Intelligence"],
    }
];
