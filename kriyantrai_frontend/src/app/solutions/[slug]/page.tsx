"use client";

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer';

export default function SolutionPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Convert slug back to readable Title Case title
    const title = useMemo(() => {
        if (!slug) return 'Solution';
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }, [slug]);

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            {/* Main content centered with top padding for navbar */}
            <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 flex items-center justify-center bg-white/50 relative z-10 w-full">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center gap-8 bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">

                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#A1F9F3]/20 text-[#153776] font-bold text-sm mb-2 shadow-sm border border-[#A1F9F3]/30">
                        Kriyantrai Solutions
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-2 capitalize">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-8 font-medium">
                        Discover how our cutting-edge <span className="font-bold text-[#153776]">{title}</span> can transform your business workflows and drive unprecedented growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
                        {/* Dummy Feature Cards for visual completeness */}
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-[#153776]/10 rounded-full flex items-center justify-center text-[#153776]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-black">Fast Integration</h3>
                            <p className="text-gray-600 text-sm">Deploy rapidly with our perfectly structured APIs.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-[#A1F9F3]/30 rounded-full flex items-center justify-center text-[#153776]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-black">Highly Secure</h3>
                            <p className="text-gray-600 text-sm">Enterprise-grade security built directly into the core.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-[#F67112]/10 rounded-full flex items-center justify-center text-[#F67112]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-black">Scalable ROI</h3>
                            <p className="text-gray-600 text-sm">Solutions that strictly grow linearly with your business scale.</p>
                        </div>
                    </div>

                    <a href="/contact/sales" className="mt-8 bg-[#153776] hover:bg-[#0d2146] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                        Talk to an Expert
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>

                </div>
            </main>

            {/* Global identical footer */}
            <Footer />
        </div>
    );
}
