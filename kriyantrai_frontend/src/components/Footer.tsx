import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden text-white pt-12 pb-8 px-6 sm:px-12 transition-all duration-700 ease-in-out"
            style={{
                background: "#153776"
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8 pt-6">
                {/* Top Section: Logo/Info & Links */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    <div className="md:col-span-2 flex flex-col gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                        <Link
                            href="/"
                            onClick={(e) => {
                                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <img src="/logo-original.png" alt="Kriyantrai Logo" className="h-10 w-auto" />
                            <span className="font-bold text-2xl text-white">Kriyantrai</span>
                        </Link>
                        <p className="text-white text-sm leading-relaxed max-w-sm font-medium">
                            Transforming businesses with AI, Machine Learning, and Automation. We create intelligent solutions that drive innovation, efficiency, and growth.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/kriyantrai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F67112] hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg group">
                                <svg className="w-5 h-5 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://github.com/KRIYANTRAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F67112] hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg group">
                                <svg className="w-5 h-5 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-start">
                        <h4 className="font-bold text-lg mb-2 text-white">Company</h4>
                        <a href="/products" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Products</a>
                        <a href="/about" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">About Us</a>
                        <a href="/career" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Careers</a>
                        <a href="/contact/sales" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Contact sales</a>
                    </div>

                    <div className="flex flex-col gap-4 items-start">
                        <h4 className="font-bold text-lg mb-2 text-white">Services</h4>
                        <a href="/solutions/artificial-intelligence" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Artificial Intelligence</a>
                        <a href="/solutions/data-solutions" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Data Solutions</a>
                        <a href="/solutions/process-automation" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Process Automation</a>
                        <a href="/solutions/application-development" className="text-white font-medium hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-sm inline-block">Application Development</a>
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex flex-col gap-6 items-start">
                        <div className="flex items-center gap-4 group/item hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#F67112] group-hover/item:text-white transition-all duration-300 shadow-md">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <span className="text-sm">+91 6289946256</span>
                        </div>

                        <div className="flex items-center gap-4 group/item hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#F67112] group-hover/item:text-white transition-all duration-300 shadow-md">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <a href="mailto:info@kriyantrai.com" className="text-sm transition-colors duration-300">info@kriyantrai.com</a>
                        </div>

                        <div className="flex items-center gap-4 group/item hover:text-[#F67112] hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#F67112] group-hover/item:text-white transition-all duration-300 shadow-md">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <span className="text-sm max-w-[200px]">68/88 AMARPALLY JESSORE ROAD KOLKATA, KOLKATA, 700074</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="text-center text-sm text-white font-semibold pt-8 pb-4 border-t border-white/10">
                    © 2025-26 Kriyantrai. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
