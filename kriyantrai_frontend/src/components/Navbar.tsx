"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isSpinning, setIsSpinning] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

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
                    <div className="flex items-center justify-end gap-3 sm:gap-5 text-sm font-medium text-black flex-1">
                        <Link href="/career" className="hidden md:block hover:text-primary transition-colors">Careers</Link>
                        <Link
                            href="/contact/sales"
                            className="hidden md:block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Contact sales
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg p-4 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <Link href="/products" className="py-2 text-black font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                                className="py-2 text-black font-medium flex items-center justify-between w-full text-left"
                            >
                                Solutions
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isMobileSolutionsOpen && (
                                <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 ml-2 animate-in slide-in-from-top-2 duration-200">
                                    <Link href="/solutions/artificial-intelligence" className="text-gray-600 hover:text-black text-sm" onClick={() => setIsMobileMenuOpen(false)}>Artificial Intelligence</Link>
                                    <Link href="/solutions/data-solutions" className="text-gray-600 hover:text-black text-sm" onClick={() => setIsMobileMenuOpen(false)}>Data Solutions</Link>
                                    <Link href="/solutions/process-automation" className="text-gray-600 hover:text-black text-sm" onClick={() => setIsMobileMenuOpen(false)}>Process Automation</Link>
                                    <Link href="/solutions/application-development" className="text-gray-600 hover:text-black text-sm" onClick={() => setIsMobileMenuOpen(false)}>Application Development</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/about" className="py-2 text-black font-medium hover:text-primary border-t border-gray-100 pt-4" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/career" className="py-2 text-black font-medium hover:text-primary md:hidden" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                        <Link href="/contact/sales" className="mt-2 py-3 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-800 transition-colors md:hidden" onClick={() => setIsMobileMenuOpen(false)}>Contact Sales</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
