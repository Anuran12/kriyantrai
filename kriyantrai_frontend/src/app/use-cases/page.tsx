'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UseCasesUnderMaintenance() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-24">
                <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 max-w-2xl w-full flex flex-col items-center">
                    <div className="w-24 h-24 mb-8 bg-[#153776]/10 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Under Maintenance</h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        Sorry for the inconvenience.
                    </p>
                    <a href="/" className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md">
                        Return to Home
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
