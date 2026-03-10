'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function ApplicationDevelopmentPage() {
    const [activeSection, setActiveSection] = useState('application-development');
    const [activeIndustryTab, setActiveIndustryTab] = useState('healthcare');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['application-development', 'why-choose-us', 'services', 'technologies', 'industries', 'case-studies', 'development-journey'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
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
        { id: "why-choose-us", name: "Why Choose Us", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> },
        { id: "services", name: "Services", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
        { id: "technologies", name: "Technologies", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> },
        { id: "industries", name: "Industries", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> },
        { id: "case-studies", name: "Case Studies", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> },
        { id: "development-journey", name: "Development Journey", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> },
    ];

    return (
        <div className="flex flex-col min-h-screen relative w-full font-sans text-gray-800 bg-transparent">

            <main className="flex-1 w-full flex flex-col items-center justify-start pt-32 pb-16 relative z-10">
                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-8 mb-20 relative">

                    <div className="flex flex-col items-center justify-center w-full relative z-10 min-h-[400px]">
                        {/* Fake Code Block Left */}
                        <div className="hidden lg:flex flex-col items-start bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-mono text-[13px] text-gray-600 backdrop-blur-md leading-[1.6] w-fit absolute -top-8 xl:-left-12 2xl:-left-20 z-20 hover:-translate-y-1 transition-transform">
                            <span className="mb-0.5 text-[#3b82f6]">const App = () =&gt; {'{'}</span>
                            <span className="pl-6 mb-0.5 text-black">return &lt;Component /&gt;;</span>
                            <span className="pl-6 mb-0.5 text-gray-400">// Modern React</span>
                            <span className="text-[#3b82f6]">{'}'}</span>
                        </div>

                        {/* Title Section */}
                        <div className="flex-1 flex flex-col items-center px-4 relative z-10">
                            <h1 className="flex flex-col items-center justify-center font-bold tracking-tight text-center">
                                <span className="text-black text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-4 whitespace-nowrap">
                                    Transform with <span className="text-[#2DD4BF] bg-clip-text text-transparent bg-gradient-to-r from-[#2DD4BF] to-[#22c55e]">Application</span>
                                </span>
                                <span className="text-black text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-6 whitespace-nowrap">
                                    Solutions that <span className="text-[#2DD4BF] bg-clip-text text-transparent bg-gradient-to-r from-[#2DD4BF] to-[#22c55e]">Deliver</span>
                                </span>
                            </h1>

                            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                                From web and mobile applications to enterprise platforms. We deliver custom solutions that enhance user experiences and accelerate digital transformation.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full justify-center">
                                <a href="/contact/sales" className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center justify-center w-[280px] h-[60px] cursor-pointer text-lg tracking-wide">
                                    Book a demo
                                </a>
                            </div>
                        </div>

                        {/* Status List Right */}
                        <div className="hidden lg:flex flex-col items-start bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-bold gap-4 backdrop-blur-md w-[200px] absolute -top-8 xl:-right-12 2xl:-right-20 z-20 hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-3 w-full">
                                <span className="text-[#34D399] text-sm font-bold">✓</span>
                                <span className="text-gray-600 text-[13px] tracking-wide whitespace-nowrap">App Build Success</span>
                            </div>
                            <div className="flex items-center gap-3 w-full">
                                <span className="text-[#3b82f6] text-sm font-bold">✓</span>
                                <span className="text-gray-600 text-[13px] tracking-wide whitespace-nowrap">Tests Passing</span>
                            </div>
                            <div className="flex items-center gap-3 w-full">
                                <span className="text-[#a78bfa] text-sm font-bold">✓</span>
                                <span className="text-gray-600 text-[13px] tracking-wide whitespace-nowrap">Deploy Ready</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 w-full max-w-5xl mx-auto border-t border-gray-100 pt-16">
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-2">200+</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Projects Delivered</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-2">98%</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Client Satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-2">2-10 Weeks</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Delivery Time</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-2">24/7</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Support Available</span>
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
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const element = document.getElementById(item.id);
                                                if (element) {
                                                    const headerOffset = 100;
                                                    const elementPosition = element.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                                }
                                                setActiveSection(item.id);
                                            }}
                                            className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-[13px] md:text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full px-4 md:px-5 py-2 md:py-2.5 h-auto transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-white/50 shadow-[0_0_0_transparent] hover:shadow-sm'}`}

                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeStickyNavBadge-AppDev"
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

                {/* What is Custom Application Development Banner */}
                <section id="application-development" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center mt-20 mb-20 z-20 relative scroll-mt-32">
                    <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-gray-100 bg-white/50 mb-8 shadow-sm">
                        <svg className="w-4 h-4 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        <span className="text-sm font-semibold tracking-wider text-[#153776]">Quick Answer</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-6 leading-tight tracking-tight text-left">
                        What is Custom Application Development?
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl font-medium mt-2 mb-12 text-left leading-relaxed">
                        Custom application development creates tailored software solutions designed specifically for your business needs using modern frameworks like React, TypeScript, and Node.js. Our full-stack development services deliver scalable, secure applications with AI integration, cloud-native architecture, and enterprise-grade performance that transform operations and drive growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                        <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:border-[#2DD4BF]/50 transition-colors">
                            <span className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-2">200+</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Projects Delivered</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:border-[#3b82f6]/50 transition-colors">
                            <span className="text-4xl md:text-5xl font-bold text-[#3b82f6] mb-2">98%</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Client Satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:border-[#a78bfa]/50 transition-colors">
                            <span className="text-4xl md:text-5xl font-bold text-[#a78bfa] mb-2">2-10 Wks</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Delivery Time</span>
                        </div>
                    </div>
                </section>

                {/* Why Enterprises Choose Us */}
                <section id="why-choose-us" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-20 relative scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Enterprises Choose <span className="text-[#2DD4BF]">Kriyantrai</span></h2>
                        <p className="text-gray-600 text-lg">The only AI partner you need from strategy to operation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0 border border-[#3b82f6]/20">
                                    <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Full-Stack Development Excellence</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                End-to-end application development from concept to deployment. Modern frontend frameworks with robust backend systems. Scalable architecture designed for growth and performance
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#3b82f6] font-bold">✓</span> Full-stack expertise
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#3b82f6] font-bold">✓</span> Modern frameworks
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#3b82f6] font-bold">✓</span> Scalable architecture
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#3b82f6] font-bold">✓</span> Performance optimization
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] flex items-center justify-center flex-shrink-0 border border-[#22c55e]/20">
                                    <svg className="w-7 h-7 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Enterprise-Grade Solutions</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                20+ years combined development experience. Deep expertise in React, Node.js, TypeScript, and cloud platforms. Proven track record with Fortune 1000 clients
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#22c55e] font-bold">✓</span> 20+ years experience
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#22c55e] font-bold">✓</span> Modern tech stack
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#22c55e] font-bold">✓</span> Enterprise clients
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#22c55e] font-bold">✓</span> Proven results
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f5f3ff] flex items-center justify-center flex-shrink-0 border border-[#a78bfa]/20">
                                    <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Rapid Development & Deployment</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                Agile development methodologies with continuous integration. Faster time-to-market with quality assurance. DevOps practices for seamless deployment and scaling
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#8b5cf6] font-bold">✓</span> Agile methodology
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#8b5cf6] font-bold">✓</span> CI/CD pipelines
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#8b5cf6] font-bold">✓</span> Quality assurance
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#8b5cf6] font-bold">✓</span> Fast deployment
                                </li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 border border-[#f43f5e]/20">
                                    <svg className="w-7 h-7 text-[#f43f5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Innovation & Technology Flexibility</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                Stack-agnostic approach with cutting-edge technologies and development patterns. We choose the right tools for your project, not force-fit our preferences. Modern architecture with cloud-native solutions tailored to your needs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#f43f5e] font-bold">✓</span> Framework agnostic
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#f43f5e] font-bold">✓</span> Right-tech selection
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#f43f5e] font-bold">✓</span> Modern architecture
                                </li>
                                <li className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                    <span className="text-[#f43f5e] font-bold">✓</span> Tailored solutions
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50/50 mt-10 rounded-[3rem] border border-gray-100 mb-24 z-20 relative scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Complete AI <span className="text-[#2DD4BF]">Transformation Suite</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            From strategy to implementation - we handle every aspect of your AI journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#2DD4BF]/30 group">
                            <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#0ea5e9] transition-colors">Web Application Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Modern web applications using React, TypeScript, and Next.js. Progressive Web Apps (PWAs) with offline capabilities. Responsive design that works seamlessly across all devices.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#0ea5e9]">✓</span> React & TypeScript</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#0ea5e9]">✓</span> Progressive Web Apps</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#0ea5e9]">✓</span> Responsive design</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#0ea5e9]">✓</span> Cross-platform</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#2DD4BF]/30 group">
                            <div className="w-12 h-12 rounded-xl bg-[#ccfbf1] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#14b8a6] transition-colors">Mobile App Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Native iOS and Android applications with React Native. Cross-platform solutions for maximum reach. App Store optimization and deployment assistance.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#14b8a6]">✓</span> React Native</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#14b8a6]">✓</span> iOS & Android</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#14b8a6]">✓</span> Cross-platform</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#14b8a6]">✓</span> App Store deployment</li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#2DD4BF]/30 group">
                            <div className="w-12 h-12 rounded-xl bg-[#fee2e2] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#ef4444] transition-colors">Backend & API Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Robust backend systems with Node.js and TypeScript. RESTful APIs and GraphQL endpoints. Database design and optimization for performance.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#ef4444]">✓</span> Node.js & TypeScript</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#ef4444]">✓</span> REST & GraphQL APIs</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#ef4444]">✓</span> Database optimization</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#ef4444]">✓</span> Scalable backend</li>
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#2DD4BF]/30 group">
                            <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#8b5cf6] transition-colors">Cloud & DevOps Solutions</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Cloud deployment on AWS, Azure, and Google Cloud. CI/CD pipelines for automated testing and deployment. Container orchestration with Docker and Kubernetes.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#8b5cf6]">✓</span> Multi-cloud deployment</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#8b5cf6]">✓</span> CI/CD automation</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#8b5cf6]">✓</span> Container orchestration</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#8b5cf6]">✓</span> Infrastructure scaling</li>
                            </ul>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#2DD4BF]/30 group">
                            <div className="w-12 h-12 rounded-xl bg-[#ecfccb] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#84cc16]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#84cc16] transition-colors">Enterprise Business Solutions</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Custom enterprise platforms with integrated payment systems, CRM and ERP solutions tailored to your business operations. Comprehensive analytics dashboards.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#84cc16]">✓</span> Enterprise platforms</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#84cc16]">✓</span> Payment integration</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#84cc16]">✓</span> CRM & ERP systems</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#84cc16]">✓</span> Business analytics</li>
                            </ul>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#2DD4BF]/30 group">
                            <div className="w-12 h-12 rounded-xl bg-[#ffedd5] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#f97316] transition-colors">Maintenance & Support</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                24/7 application monitoring and support. Performance optimization and security updates. Feature enhancements and technology upgrades.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#f97316]">✓</span> 24/7 monitoring</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#f97316]">✓</span> Performance optimization</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#f97316]">✓</span> Security updates</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-[#f97316]">✓</span> Feature enhancements</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section id="technologies" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24 z-20 relative scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Enterprise-Grade <span className="text-[#2DD4BF]">Development Approach</span></h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Technology-agnostic development with enterprise-grade security, compliance frameworks, and best practices. We architect solutions using the optimal technology stack - whether it's modern frontend frameworks, robust backend systems, or scalable databases - selected specifically for your requirements and business goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* 1 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[#1e40af] flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-center text-black mb-2">Technology Assessment</h3>
                            <p className="text-center text-gray-500 text-sm mb-6">We analyze your needs before choosing technologies</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Requirements Analysis</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Stack Evaluation</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Performance Needs</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Future Scaling</div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[#16a34a] flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-center text-black mb-2">Flexible Implementation</h3>
                            <p className="text-center text-gray-500 text-sm mb-6">Custom architecture with the right technology combination</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Modern Frontends</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Scalable Backends</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Optimal Databases</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Best-Fit Stack</div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[#dc2626] flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-center text-black mb-2">Security & Compliance</h3>
                            <p className="text-center text-gray-500 text-sm mb-6">Enterprise-grade security and compliance</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Enterprise Security</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">OWASP Standards</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Compliance Ready</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Audit Trails</div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[#c026d3] flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-center text-black mb-2">Deployment Agnostic</h3>
                            <p className="text-center text-gray-500 text-sm mb-6">Deploy anywhere - cloud, on-premise, or hybrid</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Cloud</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">On-Premise</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Hybrid</div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-semibold text-gray-700">Multi-Cloud</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section id="industries" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50/50 mt-10 rounded-[3rem] border border-gray-100 mb-24 z-20 relative scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Deep Domain Expertise <span className="text-[#2DD4BF]">Across Industries</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Specialized AI solutions tailored to your industry's unique challenges
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Industry 1 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] flex items-center justify-center flex-shrink-0 border border-[#22c55e]/20">
                                    <svg className="w-7 h-7 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Healthcare & Life Sciences</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                AI-driven sepsis monitoring & clinical decision support. Drug discovery acceleration & bioactive molecule screening. Medical imaging analysis & diagnostic assistance. Patient compliance prediction & medication adherence
                            </p>
                            <div className="bg-[#f0fdf4] rounded-lg py-2.5 px-4 mb-8">
                                <span className="text-[#16a34a] font-semibold text-sm">99% detection accuracy achieved</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Sepsis monitoring</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Drug discovery</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Medical imaging</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Patient compliance</span>
                                </div>
                            </div>
                        </div>

                        {/* Industry 2 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#f0f9ff] flex items-center justify-center flex-shrink-0 border border-[#0ea5e9]/20">
                                    <svg className="w-7 h-7 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Financial Services & Banking</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Credit risk assessment & fraud detection systems. Algorithmic trading & portfolio optimization. Regulatory compliance automation. Customer behavior analytics & personalization
                            </p>
                            <div className="bg-[#f0f9ff] rounded-lg py-2.5 px-4 mb-8">
                                <span className="text-[#0284c7] font-semibold text-sm">Real-time fraud detection</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Credit risk assessment</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Algorithmic trading</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Compliance automation</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Customer analytics</span>
                                </div>
                            </div>
                        </div>

                        {/* Industry 3 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0 border border-[#3b82f6]/20">
                                    <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Manufacturing & Industrial</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Predictive maintenance & equipment optimization. Computer vision for quality control (99% accuracy achieved). Supply chain optimization & demand forecasting. Production efficiency & yield optimization
                            </p>
                            <div className="bg-[#eff6ff] rounded-lg py-2.5 px-4 mb-8">
                                <span className="text-[#1d4ed8] font-semibold text-sm">99% quality control accuracy</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Predictive maintenance</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Quality control</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Supply chain optimization</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Production efficiency</span>
                                </div>
                            </div>
                        </div>

                        {/* Industry 4 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#faf5ff] flex items-center justify-center flex-shrink-0 border border-[#a855f7]/20">
                                    <svg className="w-7 h-7 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">Pharmaceuticals & Biotech</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                AI-enabled demand forecasting across distribution networks. Clinical trial optimization & patient recruitment. Regulatory compliance & documentation automation. Research & development acceleration
                            </p>
                            <div className="bg-[#faf5ff] rounded-lg py-2.5 px-4 mb-8">
                                <span className="text-[#7e22ce] font-semibold text-sm">2.5x faster drug discovery</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Demand forecasting</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Clinical trial optimization</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>Compliance automation</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>R&D acceleration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section id="case-studies" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24 z-20 relative scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Real Solutions, <span className="text-[#2DD4BF]">Real Impact</span>, Real Results
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            See how we've transformed enterprises across industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Case Study 1 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all shadow-sm flex flex-col hover:-translate-y-2 hover:border-[#2DD4BF]/30">
                            <h3 className="text-xl font-bold text-black mb-6">Pharma Supply Chain Optimization</h3>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Challenge:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Demand forecasting across 100+ distribution centers</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Solution:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">AI-enabled predictive analytics with real-world data integration</p>
                            </div>

                            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    <h4 className="font-semibold text-[#16a34a] text-sm">Impact:</h4>
                                </div>
                                <p className="text-[#15803d] text-sm font-medium">25% reduction in inventory costs, 40% improvement in fulfillment</p>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all shadow-sm flex flex-col hover:-translate-y-2 hover:border-[#2DD4BF]/30">
                            <h3 className="text-xl font-bold text-black mb-6">Content Generation & Marketing AI</h3>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Challenge:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Scaling personalized content creation for 10M+ customers</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Solution:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Gen-AI platform for automated content generation with brand consistency</p>
                            </div>

                            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    <h4 className="font-semibold text-[#16a34a] text-sm">Impact:</h4>
                                </div>
                                <p className="text-[#15803d] text-sm font-medium">500% increase in content output, 60% improvement in engagement rates</p>
                            </div>
                        </div>

                        {/* Case Study 3 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all shadow-sm flex flex-col hover:-translate-y-2 hover:border-[#2DD4BF]/30">
                            <h3 className="text-xl font-bold text-black mb-6">Manufacturing Quality Excellence</h3>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Challenge:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Automated quality control for complex production lines</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Solution:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Computer vision AI with deep learning algorithms</p>
                            </div>

                            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    <h4 className="font-semibold text-[#16a34a] text-sm">Impact:</h4>
                                </div>
                                <p className="text-[#15803d] text-sm font-medium">99% defect detection accuracy, 60% reduction in manual inspection</p>
                            </div>
                        </div>

                        {/* Case Study 4 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all shadow-sm flex flex-col hover:-translate-y-2 hover:border-[#2DD4BF]/30">
                            <h3 className="text-xl font-bold text-black mb-6">Intelligent Document Processing Platform</h3>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Challenge:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Manual document processing causing 70% of workflow delays</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Solution:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Gen-AI powered document understanding with NLP and OCR integration</p>
                            </div>

                            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    <h4 className="font-semibold text-[#16a34a] text-sm">Impact:</h4>
                                </div>
                                <p className="text-[#15803d] text-sm font-medium">90% reduction in processing time, 95% accuracy in data extraction</p>
                            </div>
                        </div>

                        {/* Case Study 5 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all shadow-sm flex flex-col hover:-translate-y-2 hover:border-[#2DD4BF]/30">
                            <h3 className="text-xl font-bold text-black mb-6">AI-Powered Customer Service Revolution</h3>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Challenge:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">24/7 customer support with personalized responses across channels</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Solution:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Multi-modal Gen-AI chatbot with context-aware conversation management</p>
                            </div>

                            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    <h4 className="font-semibold text-[#16a34a] text-sm">Impact:</h4>
                                </div>
                                <p className="text-[#15803d] text-sm font-medium">85% query resolution without human intervention, 40% cost reduction</p>
                            </div>
                        </div>

                        {/* Case Study 6 */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all shadow-sm flex flex-col hover:-translate-y-2 hover:border-[#2DD4BF]/30">
                            <h3 className="text-xl font-bold text-black mb-6">Clinical Decision Support Revolution</h3>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Challenge:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">Real-time sepsis detection and patient risk stratification</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="font-semibold text-gray-800 text-sm">Solution:</h4>
                                </div>
                                <p className="text-gray-600 text-sm">AI-driven monitoring system using biomarker analysis</p>
                            </div>

                            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    <h4 className="font-semibold text-[#16a34a] text-sm">Impact:</h4>
                                </div>
                                <p className="text-[#15803d] text-sm font-medium">Enhanced patient outcomes with 99% detection accuracy</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Development by Industry (Tabbed) */}
                < section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24 z-20 relative scroll-mt-32" id="industry-tabs" >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Application Development <span className="text-[#2DD4BF]">by Industry</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                            Custom applications tailored to your industry's unique challenges and requirements
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                            <button
                                onClick={() => setActiveIndustryTab('healthcare')}
                                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${activeIndustryTab === 'healthcare'
                                    ? 'bg-[#2DD4BF] text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-100 hover:border-[#2DD4BF]/50 hover:bg-gray-50'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                Healthcare
                            </button>
                            <button
                                onClick={() => setActiveIndustryTab('financial-services')}
                                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${activeIndustryTab === 'financial-services'
                                    ? 'bg-[#2DD4BF] text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-100 hover:border-[#2DD4BF]/50 hover:bg-gray-50'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                Financial Services
                            </button>
                            <button
                                onClick={() => setActiveIndustryTab('e-commerce')}
                                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${activeIndustryTab === 'e-commerce'
                                    ? 'bg-[#2DD4BF] text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-100 hover:border-[#2DD4BF]/50 hover:bg-gray-50'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                E-commerce
                            </button>
                            <button
                                onClick={() => setActiveIndustryTab('manufacturing')}
                                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${activeIndustryTab === 'manufacturing'
                                    ? 'bg-[#2DD4BF] text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-100 hover:border-[#2DD4BF]/50 hover:bg-gray-50'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Manufacturing
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm w-full mx-auto min-h-[400px]">
                        {/* Tab Content: Healthcare */}
                        {activeIndustryTab === 'healthcare' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-black">
                                        <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        Healthcare
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Patient portal and telehealth applications
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Clinical workflow management systems
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Medical device integration platforms
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Healthcare analytics dashboards
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            HIPAA-compliant mobile apps
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        <span className="font-bold text-black">Key Metrics & Benefits</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">100% HIPAA Compliance</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">50% Faster Development</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">30% Improved Patient Engagement</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">99.9% Uptime</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab Content: Financial Services */}
                        {activeIndustryTab === 'financial-services' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-black">
                                        <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        Financial Services
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Trading platforms and investment apps
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Digital banking and payment solutions
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Loan origination systems
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Risk management dashboards
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Compliance and regulatory reporting tools
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                            <span className="font-bold text-black">Key Metrics & Benefits</span>
                                        </div>
                                        <div className="space-y-4 mb-6">
                                            <div className="bg-white rounded-xl p-3 border border-gray-100 text-xs font-semibold text-gray-800 shadow-sm">SOC 2 Compliant</div>
                                            <div className="bg-white rounded-xl p-3 border border-gray-100 text-xs font-semibold text-gray-800 shadow-sm">Real-time Processing</div>
                                            <div className="bg-white rounded-xl p-3 border border-gray-100 text-xs font-semibold text-gray-800 shadow-sm">Bank-Grade Security</div>
                                            <div className="bg-white rounded-xl p-3 border border-gray-100 text-xs font-semibold text-gray-800 shadow-sm">99.99% Availability</div>
                                        </div>
                                    </div>
                                    <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                                        <div className="font-bold text-gray-800 mb-1 text-sm">Success Story</div>
                                        <div className="text-xs text-gray-500 mb-2">Regional Bank</div>
                                        <div className="text-sm font-semibold text-[#0d9488]">70% faster loan processing with custom origination platform</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab Content: E-commerce */}
                        {activeIndustryTab === 'e-commerce' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-black">
                                        <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        E-commerce
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Multi-vendor marketplace platforms
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Inventory and order management systems
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Customer loyalty and rewards apps
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Payment gateway integrations
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Real-time analytics dashboards
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        <span className="font-bold text-black">Key Metrics & Benefits</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">40% Increase in Sales</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">2-10 Week Delivery</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">Mobile-First Design</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">Seamless Integrations</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab Content: Manufacturing */}
                        {activeIndustryTab === 'manufacturing' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-black">
                                        <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                                        Manufacturing
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Production planning and scheduling systems
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Quality management applications
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Supply chain visibility platforms
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Equipment monitoring dashboards
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Vendor management portals
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        <span className="font-bold text-black">Key Metrics & Benefits</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">30% Efficiency Gains</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">Real-time Monitoring</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">IoT Integration</div>
                                        <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-800 shadow-sm">Cloud-Native Architecture</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Development Journey */}
                <section id="development-journey" className="w-full bg-[#153776] text-white py-24 z-20 relative scroll-mt-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your App Development <span className="text-[#A1F9F3]">Journey</span>
                        </h2>
                        <p className="text-xl text-blue-100 font-medium leading-relaxed">
                            From concept to deployment, experience our streamlined development process that turns your vision into reality
                        </p>
                    </div>

                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-[88px] left-0 w-full h-[2px] bg-blue-400/30 hidden lg:block z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full border border-blue-400/30 bg-transparent flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-[#3b82f6] text-white flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                </div>
                                <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full text-center hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="text-[#3b82f6] font-bold text-2xl mb-2">01</h3>
                                    <h4 className="text-xl font-bold text-white mb-3">Discovery &<br />Planning</h4>
                                    <p className="text-sm text-blue-100 mb-6 line-clamp-4">We analyze your requirements, define scope, and create a detailed roadmap</p>
                                    <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">Week 1-2</span>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full border border-blue-400/30 bg-transparent flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-[#d946ef] text-white flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                                <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full text-center hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="text-[#d946ef] font-bold text-2xl mb-2">02</h3>
                                    <h4 className="text-xl font-bold text-white mb-3">Design &<br />Prototyping</h4>
                                    <p className="text-sm text-blue-100 mb-6 line-clamp-4">UI/UX design, wireframes, and interactive prototypes for validation</p>
                                    <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">Week 2-3</span>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full border border-blue-400/30 bg-transparent flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-[#22c55e] text-white flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                </div>
                                <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full text-center hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="text-[#22c55e] font-bold text-2xl mb-2">03</h3>
                                    <h4 className="text-xl font-bold text-white mb-3">Development<br />Sprint</h4>
                                    <p className="text-sm text-blue-100 mb-6 line-clamp-4">Agile development with modern frameworks, testing, and code reviews</p>
                                    <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">Week 3-8</span>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full border border-blue-400/30 bg-transparent flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-[#eab308] text-white flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                </div>
                                <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full text-center hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="text-[#eab308] font-bold text-2xl mb-2">04</h3>
                                    <h4 className="text-xl font-bold text-white mb-3">Testing &<br />QA</h4>
                                    <p className="text-sm text-blue-100 mb-6 line-clamp-4">Comprehensive testing, performance optimization, and security audits</p>
                                    <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">Week 8-9</span>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full border border-blue-400/30 bg-transparent flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-[#f43f5e] text-white flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3v6a2 2 0 01-1.5 1.9L16 12l2.5 1.5a2 2 0 011.5 1.9v6l-7.5-7.5M10.5 13.5L3 21v-6a2 2 0 011.5-1.9L8 12 5.5 10.5a2 2 0 01-1.5-1.9V3l7.5 7.5M12 12v.01"></path></svg>
                                    </div>
                                </div>
                                <div className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full text-center hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="text-[#f43f5e] font-bold text-2xl mb-2">05</h3>
                                    <h4 className="text-xl font-bold text-white mb-3">Deployment &<br />Launch</h4>
                                    <p className="text-sm text-blue-100 mb-6 line-clamp-4">Production deployment, monitoring setup, and go-live support</p>
                                    <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">Week 9-10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-20 relative">
                    <div className="w-full bg-white border border-gray-200 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-md transition-shadow">
                        <div className="text-center mb-12 flex flex-col items-center justify-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                                Related <span className="text-[#2DD4BF]">Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Explore our complementary solutions to build a comprehensive digital transformation strategy
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Solution 1 */}
                            <a href="/solutions/artificial-intelligence" className="bg-white border border-gray-200 hover:border-[#3b82f6]/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4 flex-grow">
                                    <div className="w-10 h-10 rounded-xl bg-[#eff6ff] shrink-0 flex items-center justify-center mt-1">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-black group-hover:text-[#3b82f6] leading-tight transition-colors mb-2">Artificial Intelligence</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            Advanced machine learning, computer vision, and natural language processing for intelligent automation
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto flex items-center text-sm font-semibold text-[#3b82f6]">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </a>

                            {/* Solution 2 */}
                            <a href="/solutions/data-solutions" className="bg-white border border-gray-200 hover:border-[#16a34a]/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4 flex-grow">
                                    <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] shrink-0 flex items-center justify-center mt-1">
                                        <svg className="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-black group-hover:text-[#16a34a] leading-tight transition-colors mb-2">Data Solutions</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            Enterprise data architecture, engineering, and analytics to transform raw data into actionable insights
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto flex items-center text-sm font-semibold text-[#16a34a]">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </a>

                            {/* Solution 3 */}
                            <a href="/solutions/process-automation" className="bg-white border border-gray-200 hover:border-[#a855f7]/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4 flex-grow">
                                    <div className="w-10 h-10 rounded-xl bg-[#faf5ff] shrink-0 flex items-center justify-center mt-1">
                                        <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-black group-hover:text-[#a855f7] leading-tight transition-colors mb-2">Process Automation</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            Comprehensive BPA, RPA, and IPA solutions to automate workflows and reduce operational costs
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto flex items-center text-sm font-semibold text-[#a855f7]">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <div className="w-full flex-1 z-20 bg-white border-t border-gray-100">
                <Footer />
            </div>
        </div>
    );
}
