"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isSpinning, setIsSpinning] = useState(false);

    // Spin on initial load/refresh
    useEffect(() => {
        setIsSpinning(true);
        const timer = setTimeout(() => setIsSpinning(false), 1000); // 1 second spin
        return () => clearTimeout(timer);
    }, []);

    // Handle click spin
    const handleLogoClick = () => {
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 1000);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">

            {/* Glassmorphism Navbar */}
            <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 transition-all duration-300">
                <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo - left */}
                    <div className="flex items-center flex-1">
                        <Link href="/" className="flex items-center gap-2 group" onClick={handleLogoClick}>
                            <img
                                src="/logo.png"
                                alt="Kriyantrai Logo"
                                className={`h-10 w-auto transition-transform duration-1000 ${isSpinning ? 'rotate-[360deg]' : 'rotate-0'}`}
                            />
                            <span className="font-bold text-xl text-black">
                                Kriyantrai
                            </span>
                        </Link>
                    </div>

                    {/* Nav links - center */}
                    <div className="hidden lg:flex items-center justify-center gap-6 text-sm font-medium text-black flex-1">
                        <Link href="/products" className="hover:text-primary transition-colors flex items-center gap-1">
                            Products
                        </Link>
                        <div className="relative group">
                            <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                                Solutions
                                <span className="transition-transform duration-200 group-hover:-rotate-180">
                                    <svg
                                        className="w-3 h-3"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </Link>
                            <div className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white/95 shadow-lg border border-gray-200 py-3 px-3 text-sm text-gray-800 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                                <div className="flex flex-col gap-1.5 text-left">
                                    <Link href="/solutions/artificial-intelligence" className="block w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 hover:text-[#153776] transition-colors">Artificial Intelligence</Link>
                                    <Link href="/solutions/data-solutions" className="block w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 hover:text-[#153776] transition-colors">Data Solutions</Link>
                                    <Link href="/solutions/process-automation" className="block w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 hover:text-[#153776] transition-colors">Process Automation</Link>
                                    <Link href="/solutions/application-development" className="block w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 hover:text-[#153776] transition-colors">Application Development</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className="hover:text-primary transition-colors">
                            About Us
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center justify-end gap-5 text-sm font-medium text-black flex-1">
                        <Link href="/career" className="hidden md:block hover:text-primary transition-colors">Careers</Link>
                        <Link
                            href="/contact/sales"
                            className="hidden md:block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Contact sales
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}
