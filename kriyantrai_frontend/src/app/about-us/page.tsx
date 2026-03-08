'use client';
import React from 'react';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full">
            <main className="flex-1 w-full flex flex-col items-center justify-start pt-32 pb-0">

                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-8 mb-24 relative">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm mb-12 shadow-sm">
                        <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Our Story</span>
                    </div>

                    <h1 className="flex flex-col items-center justify-center font-bold tracking-tight text-center mb-10">
                        <span className="text-[#153776] text-5xl md:text-7xl lg:text-[6rem] leading-[1.0] tracking-tighter shadow-sm">About Kriyantrai</span>
                    </h1>

                    <div className="max-w-5xl mx-auto bg-gray-50/50 border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium text-left md:text-center">
                            For over three years, we’ve partnered with forward-thinking businesses—from startups to enterprises—to transform their digital landscape through innovative technology solutions. We help organizations build sustainable futures, empower teams, and achieve measurable success while driving meaningful technological progress.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium text-left md:text-center mt-6">
                            At Kriyantrai, our industry-leading experts combine deep technical expertise with strategic insight to deliver transformative results. Fueled by collaboration and innovation, we’re committed to creating impact that truly matters—for our clients, our people, and the technology ecosystem we serve.
                        </p>
                    </div>
                </section>

                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pb-24">
                    <h2 className="text-[#3b597b] text-4xl font-bold mb-4 font-serif">
                        Trusted by Leading Companies and Partners
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-base font-medium">
                        We collaborate with renowned organizations and industry leaders to deliver exceptional solutions and drive positive impact.
                    </p>
                    <div className="w-16 h-1 bg-[#F67112] mx-auto mb-16 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <a href="https://cini.org.uk/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center card-hover-effect group block">
                            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 p-2 transition-transform group-hover:-translate-y-1">
                                <img src="/cini-logo-new.png" alt="CINI" className="w-full h-auto object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-[#3b597b] mb-4 group-hover:text-[#F67112] transition-colors">Child in Need Institute</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                Partnering with CINI to support community development and child welfare initiatives through innovative technology solutions.
                            </p>
                        </a>
                        <a href="https://www.collidastudio.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center card-hover-effect group block">
                            <div className="w-20 h-20 rounded-2xl bg-[#d926a9] text-white flex items-center justify-center mb-6 shadow-md shadow-[#d926a9]/30 transition-transform group-hover:-translate-y-1">
                                <span className="font-bold text-sm tracking-wider">COLLIDA</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#3b597b] mb-4 group-hover:text-[#F67112] transition-colors">Collida Studio</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                Collaborating with Collida Studio on creative design and multimedia projects to enhance user experiences and brand storytelling.
                            </p>
                        </a>
                    </div>
                </section>

                {/* Section Wrapper */}
                <div className="w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                    {/* Our Purpose Section */}
                    <section className="w-full max-w-7xl mx-auto flex flex-col items-center mb-32 pt-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center tracking-tight">Our Purpose</h2>
                        <p className="text-gray-600 font-medium text-lg mb-16 text-center">What drives us every day</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {/* Mission */}
                            <div className="bg-white rounded-3xl p-10 flex flex-col card-hover-effect group text-left">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                                            <circle cx="12" cy="12" r="6" strokeWidth="2"></circle>
                                            <circle cx="12" cy="12" r="2" strokeWidth="2"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                    To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-white rounded-3xl p-10 flex flex-col card-hover-effect group text-left">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#22c55e] to-[#15803d] rounded-xl flex items-center justify-center shadow-md shadow-green-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                    To be a global leader in digital transformation, recognized for our expertise, integrity, and commitment to client success.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="bg-white rounded-3xl p-10 flex flex-col card-hover-effect group text-left">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-black">Our Values</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                    Innovation, Excellence, Collaboration, Integrity, and Customer Centricity are at the core of everything we do.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Why Partner With Us */}
                    <section className="w-full max-w-7xl mx-auto flex flex-col items-center mb-32">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center tracking-tight">Why Partner With Us</h2>
                        <p className="text-gray-600 font-medium text-lg mb-16 text-center">Six compelling reasons to choose Kriyantrai as your AI transformation partner</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            <div className="bg-white p-8 card-hover-effect group rounded-3xl text-left flex flex-col">
                                <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 text-[#153776] text-xs font-bold rounded-full mb-6 self-start">Strategic Foundation</span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Consulting-Led PoC Approach</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">We start with understanding your business challenges and create focused Proof of Concepts that demonstrate clear value and ROI.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 card-hover-effect group rounded-3xl text-left flex flex-col">
                                <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 text-[#153776] text-xs font-bold rounded-full mb-6 self-start">Cross-Domain Knowledge</span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Industry Deep-Dive Expertise</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">Our team combines management consulting, statistical modeling, data science, and programming with years of industry-specific experience.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 card-hover-effect group rounded-3xl text-left flex flex-col">
                                <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 text-[#153776] text-xs font-bold rounded-full mb-6 self-start">Complete Solution</span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">End-to-End Transformation</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">From discovery to deployment and maintenance, we partner with you throughout your entire data & AI transformation journey.</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 card-hover-effect group rounded-3xl text-left flex flex-col">
                                <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 text-[#153776] text-xs font-bold rounded-full mb-6 self-start">Future-Ready Tech</span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Modern Technology Stack</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">Cloud-first approach, low-code/no-code platforms, and cutting edge frameworks designed to scale with your business needs.</p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white p-8 card-hover-effect group rounded-3xl text-left flex flex-col">
                                <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 text-[#153776] text-xs font-bold rounded-full mb-6 self-start">Trusted Expertise</span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Proven Track Record</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">100+ successful projects and countless enterprise deployments that have delivered tangible business value across the globe.</p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white p-8 card-hover-effect group rounded-3xl text-left flex flex-col">
                                <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-100 text-[#153776] text-xs font-bold rounded-full mb-6 self-start">Enterprise-Grade</span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Scalable & Secure Solutions</h3>
                                </div>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">Modular architecture with elastic scaling capabilities, uncompromising data security, and enterprise regulatory compliance.</p>
                            </div>
                        </div>
                    </section>

                    {/* Small Firm, Big Advantages */}
                    <section className="w-full max-w-7xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center tracking-tight">Small Firm, Big Advantages</h2>
                        <p className="text-gray-600 font-medium text-lg mb-16 text-center">Why smaller consulting firms deliver superior value compared to large corporations</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Advantage 1 */}
                            <div className="bg-white border-2 border-gray-100 hover:border-[#2DD4BF] hover:-translate-y-2 hover:shadow-xl rounded-3xl p-8 transition-all duration-300 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-1">Personalized Attention</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed font-medium">Unlike large consulting firms, we provide dedicated resources and direct access to senior experts for every client.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mt-4 text-sm font-medium text-gray-700 border-t border-gray-100 pt-6">
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Direct access to founders</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Dedicated project teams</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Customized solutions</li>
                                </ul>
                            </div>

                            {/* Advantage 2 */}
                            <div className="bg-white border-2 border-gray-100 hover:border-[#2DD4BF] hover:-translate-y-2 hover:shadow-xl rounded-3xl p-8 transition-all duration-300 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-1">Agile & Responsive</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed font-medium">Smaller team means faster decision-making, quicker pivots, and rapid implementation of changes.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mt-4 text-sm font-medium text-gray-700 border-t border-gray-100 pt-6">
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Faster turnaround times</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Quick decision making</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Flexible engagement models</li>
                                </ul>
                            </div>

                            {/* Advantage 3 */}
                            <div className="bg-white border-2 border-gray-100 hover:border-[#2DD4BF] hover:-translate-y-2 hover:shadow-xl rounded-3xl p-8 transition-all duration-300 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-1">Cost-Effective Solutions</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed font-medium">Lower overhead costs mean better value for your investment without compromising on quality.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mt-4 text-sm font-medium text-gray-700 border-t border-gray-100 pt-6">
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Competitive pricing</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Better ROI</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> No bureaucratic overhead</li>
                                </ul>
                            </div>

                            {/* Advantage 4 */}
                            <div className="bg-white border-2 border-gray-100 hover:border-[#2DD4BF] hover:-translate-y-2 hover:shadow-xl rounded-3xl p-8 transition-all duration-300 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-1">Innovation Focus</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed font-medium">We stay at the cutting edge of technology, implementing the latest AI advancements for maximum impact.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mt-4 text-sm font-medium text-gray-700 border-t border-gray-100 pt-6">
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Latest technology stack</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Innovative approaches</li>
                                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#14b8a6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Future-ready solutions</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Meet Our Team Section */}
                    <section className="w-full max-w-7xl mx-auto flex flex-col items-center mt-12 mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#153776] mb-20 text-center tracking-tight font-serif">Meet our team</h2>

                        <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto px-4">

                            {/* Member 1 - Image Left, Text Right */}
                            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
                                <div className="w-full md:w-1/3 shrink-0 flex items-center justify-center md:justify-start">
                                    <div className="w-full max-w-[320px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform hover:-translate-y-2 duration-500">
                                        <img src="/souvagya.jpg" alt="Souvagya Das" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 flex">
                                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left h-full justify-center w-full">
                                        <h3 className="text-4xl font-bold text-[#153776] mb-2 font-serif">Souvagya Das</h3>
                                        <p className="text-[#F67112] font-bold text-sm tracking-widest uppercase mb-6">CEO & FOUNDER</p>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                            Souvagya Das is a mission-driven founder building scalable technology that solves real-world problems. With hands-on expertise in product development and systems architecture, he transforms bold ideas into high-impact digital platforms. He leads with clarity, speed, and a relentless focus on innovation and long-term vision.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 2 - Image Left, Text Right */}
                            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
                                <div className="w-full md:w-1/3 shrink-0 flex items-center justify-center md:justify-start">
                                    <div className="w-full max-w-[320px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform hover:-translate-y-2 duration-500">
                                        <img src="/souvik.jpg" alt="Souvik Makur" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 flex">
                                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left h-full justify-center w-full">
                                        <h3 className="text-4xl font-bold text-[#153776] mb-2 font-serif">Souvik Makur</h3>
                                        <p className="text-[#F67112] font-bold text-sm tracking-widest uppercase mb-6">HEAD OF DEVELOPMENT</p>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                            Souvik is a skilled full-stack developer focused on building robust, scalable, and user-centric solutions. With strong expertise across frontend and backend systems, he transforms complex requirements into seamless, high-performance digital experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 3 - Image Left, Text Right */}
                            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
                                <div className="w-full md:w-1/3 shrink-0 flex items-center justify-center md:justify-start">
                                    <div className="w-full max-w-[320px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 transition-transform hover:-translate-y-2 duration-500">
                                        <img src="/anuran.jpg" alt="Anuran Das" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 flex">
                                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left h-full justify-center w-full">
                                        <h3 className="text-4xl font-bold text-[#153776] mb-2 font-serif">Anuran Das</h3>
                                        <p className="text-[#F67112] font-bold text-sm tracking-widest uppercase mb-6">CHIEF TECHNOLOGY OFFICER</p>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                            Anuran leads our technology initiatives with deep expertise in AI, machine learning, and software architecture. He designs intelligent, scalable systems that power innovation and ensure our platforms are future-ready, high-performing, and resilient.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

            </main>
            <Footer />
        </div>
    );
}
