"use client";

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CareerPage() {

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            {/* Main content centered with top padding for navbar */}
            <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 flex flex-col items-center justify-start gap-12 bg-transparent relative z-10 w-full text-center">

                {/* Hero Card */}
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center gap-8 bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#153776]/10 text-[#153776] font-semibold text-sm mb-2">
                        Careers at Kriyantrai
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.0] font-bold text-black tracking-tighter mb-6">
                        Join the Makers
                    </h1>

                    <div className="flex flex-col gap-4 text-center max-w-4xl px-4 md:px-0 mx-auto">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                            At Kriyantrai, we don't just offer internships — we build innovators.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                            We're a fast-growing startup driven by curiosity, creativity, and cutting-edge technology. If you're someone who loves solving problems, building cool stuff, and thinking beyond limits — you'll feel right at home here.
                        </p>
                    </div>

                    <div className="w-full flex justify-center py-2 relative group">
                        <div className="inline-flex flex-col items-center">
                            <span className="text-xl md:text-2xl font-bold tracking-widest uppercase pb-2 bg-gradient-to-r from-[#14b8a6] via-[#153776] to-[#F67112] bg-clip-text text-transparent drop-shadow-sm">
                                START SMALL. THINK BIG. GROW LIMITLESS.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Core Career Information Card - Side by Side grid */}
                <div className="max-w-[80rem] w-full mx-auto flex flex-col gap-10 bg-transparent rounded-[2.5rem]">

                    {/* Top 3 Sections Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Why Join Us */}
                        <div className="bg-blue-50/50 border border-blue-100 p-8 md:p-10 rounded-3xl card-hover-effect group text-left">
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#153776] flex items-center gap-3 mb-6 font-serif">
                                <span className="text-3xl lg:text-4xl"></span> Why Join Us?
                            </h2>
                            <ul className="space-y-4 text-gray-700 font-medium">
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#F67112] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Real-world project exposure (no coffee-fetching internships)
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#F67112] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Work directly with founders & core team
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#F67112] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Freedom to experiment and innovate
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#F67112] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Skill acceleration &gt; slow growth
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#F67112] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Certificate + Letter of Recommendation (based on performance)
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#F67112] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Flexible & growth-focused environment
                                </li>
                            </ul>
                        </div>

                        {/* Who We're Looking For */}
                        <div className="bg-orange-50/50 border border-orange-100 p-8 md:p-10 rounded-3xl card-hover-effect group text-left">
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#153776] flex items-center gap-3 mb-6 font-serif">
                                <span className="text-3xl lg:text-4xl"></span> Who We’re Looking For
                            </h2>
                            <p className="text-gray-700 font-bold mb-3">We love people who are:</p>
                            <ul className="space-y-2 text-gray-700 font-medium mb-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#14b8a6] font-bold">•</span> Passionate about technology
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#14b8a6] font-bold">•</span> Self-driven & curious
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#14b8a6] font-bold">•</span> Problem-solvers
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#14b8a6] font-bold">•</span> Team players with leadership mindset
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#14b8a6] font-bold">•</span> Ready to take ownership (not just tasks, but impact)
                                </li>
                            </ul>

                            <p className="text-gray-700 font-bold mb-3">Whether you're into:</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">Web Dev</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">App Dev</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">AI / ML</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">UI/UX</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">Cloud / DevOps</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">Tech Marketing</span>
                            </div>

                            <p className="text-gray-800 font-bold italic">
                                If you’re hungry to grow — we’re ready to build with you.
                            </p>
                        </div>

                        {/* What You'll Gain */}
                        <div className="bg-teal-50/50 border border-teal-100 p-8 md:p-10 rounded-3xl card-hover-effect group text-left">
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#153776] flex items-center gap-3 mb-6 font-serif">
                                <span className="text-3xl lg:text-4xl"></span> What You’ll Gain
                            </h2>
                            <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                                At Kriyantrai, you won’t just add experience to your resume — you’ll build <span className="font-bold text-[#F67112]">confidence, capability, and clarity.</span>
                            </p>
                            <p className="text-gray-700 font-bold mb-3">You’ll learn:</p>
                            <ul className="space-y-3 text-gray-700 font-medium mb-6 mt-2">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#153776]"></div>
                                    How real startups operate
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#153776]"></div>
                                    How products are built from scratch
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#153776]"></div>
                                    How to communicate ideas effectively
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#153776]"></div>
                                    How to think like a founder
                                </li>
                            </ul>
                            <p className="text-gray-800 font-bold text-lg">
                                We believe in learning by building.
                            </p>
                        </div>
                    </div>

                    {/* Our Culture (Second line, full width) */}
                    <div className="w-full bg-indigo-50/50 border border-indigo-100 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-2">
                        <div className="flex-1 text-left">
                            <h2 className="text-3xl font-bold text-[#153776] flex items-center gap-3 mb-8 font-serif">
                                <span className="text-4xl"></span> Our Culture
                            </h2>
                            <ul className="space-y-4 font-medium text-lg text-gray-700">
                                <li className="flex items-center gap-4">
                                    <span className="text-[#14b8a6] font-bold text-2xl">&rarr;</span> No hierarchy ego.
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="text-[#14b8a6] font-bold text-2xl">&rarr;</span> Ideas &gt; titles.
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="text-[#14b8a6] font-bold text-2xl">&rarr;</span> Speed &gt; perfection.
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="text-[#14b8a6] font-bold text-2xl">&rarr;</span> Growth &gt; comfort zone.
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1 bg-white/60 border border-indigo-200/50 p-8 rounded-3xl flex items-center justify-center text-center h-full min-h-[16rem] shadow-sm">
                            <p className="font-bold text-2xl md:text-3xl leading-relaxed tracking-wide text-[#153776] italic">
                                We move fast.<br />
                                We learn faster.<br />
                                We grow together.
                            </p>
                        </div>
                    </div>

                    {/* Apply Now Button */}
                    <div className="w-full flex justify-center mt-6 mb-4">
                        <Link href="/career/apply" className="bg-[#F67112] hover:bg-[#e0620c] text-white font-bold py-5 px-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl flex items-center gap-3">
                            Apply Now
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Same global footer used on all pages */}
            <Footer />
        </div>
    );
}
