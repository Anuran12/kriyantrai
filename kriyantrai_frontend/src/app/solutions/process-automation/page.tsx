'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const bpaImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80"
];

const rpaImages = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80"
];

const ipaImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1620712948343-0008ece88852?auto=format&fit=crop&w=400&q=80"
];

const ImageSlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden mt-auto">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
                </div>
            ))}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, idx) => (
                    <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`} />
                ))}
            </div>
        </div>
    );
};

const comparisonData = [
    { feature: 'Best For', bpa: 'Structured workflows', rpa: 'High-volume repetitive tasks', ipa: 'Complex decision-making' },
    { feature: 'AI Required', bpa: false, rpa: false, ipa: true },
    { feature: 'Cost Reduction', bpa: '30-40%', rpa: '60-85%', ipa: '70-90%' },
    { feature: 'Implementation Time', bpa: '2-4 weeks', rpa: '4-8 weeks', ipa: '8-16 weeks' },
    { feature: 'Accuracy Rate', bpa: '85-90%', rpa: '95-99%', ipa: '92-96%' },
    { feature: 'Handles Unstructured Data', bpa: false, rpa: false, ipa: true },
    { feature: 'Learning Capability', bpa: false, rpa: false, ipa: true },
    { feature: '24/7 Operation', bpa: true, rpa: true, ipa: true },
    { feature: 'Integration Complexity', bpa: 'Low', rpa: 'Medium', ipa: 'High' },
    { feature: 'Best ROI Timeline', bpa: '6-8 months', rpa: '4-6 months', ipa: '8-12 months' }
];

const implementationSteps = [
    {
        num: 1, title: 'Discovery & Assessment', time: 'Weeks 1-2',
        activities: ['Process mining and analysis', 'Automation readiness scoring', 'ROI calculation and prioritization', 'Stakeholder interviews'],
        deliverable: 'Automation roadmap with guaranteed ROI projections'
    },
    {
        num: 2, title: 'Solution Design', time: 'Weeks 3-4',
        activities: ['Technical architecture design', 'Workflow optimization', 'Integration mapping', 'Security and compliance planning'],
        deliverable: 'Detailed solution blueprint'
    },
    {
        num: 3, title: 'Development', time: 'Weeks 5-10',
        activities: ['Agile development sprints', 'Bot/workflow creation', 'Integration development', 'User acceptance testing'],
        deliverable: 'Fully functional automation solution'
    },
    {
        num: 4, title: 'Deployment', time: 'Weeks 11-12',
        activities: ['Phased rollout approach', 'Change management and training', 'Performance monitoring setup', 'Go-live support'],
        deliverable: 'Production-ready automation'
    },
    {
        num: 5, title: 'Optimization', time: 'Ongoing',
        activities: ['Continuous monitoring and improvement', 'Quarterly business reviews', 'Scaling to additional processes', 'Advanced analytics and insights'],
        deliverable: 'Monthly performance reports'
    }
];

export default function ProcessAutomationPage() {
    const [activeSection, setActiveSection] = useState('automation-solutions');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['automation-solutions', 'bpa-capabilities', 'rpa-capabilities', 'ipa-capabilities', 'implementation'];
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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: "automation-solutions", name: "Automation Solutions", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> },
        { id: "bpa-capabilities", name: "BPA Capabilities", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> },
        { id: "rpa-capabilities", name: "RPA Capabilities", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg> },
        { id: "ipa-capabilities", name: "IPA Capabilities", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> },
        { id: "implementation", name: "Implementation", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> }
    ];

    return (
        <div className="flex flex-col min-h-screen relative w-full font-sans text-gray-800 bg-transparent">

            <main className="flex-1 w-full flex flex-col items-center justify-start pt-32 pb-16 relative z-10">
                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-8 mb-20 relative">

                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-100 bg-white/80 backdrop-blur-sm mb-12 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-gray-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        <span className="text-sm font-semibold tracking-wider">Enterprise Process Automation</span>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full relative z-10 min-h-[400px]">
                        <div className="hidden lg:flex flex-col items-start text-left bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-mono text-[13px] text-gray-600 backdrop-blur-md leading-[1.6] w-fit absolute -top-8 lg:-left-2 xl:-left-12 2xl:-left-20 z-20 hover:-translate-y-1 transition-transform">
                            <span className="mb-0.5"><span className="text-[#2DD4BF] font-bold">AUTOMATE</span><span className="text-gray-600"> tasks, </span><span className="text-[#3b82f6] font-bold">ACCELERATE</span><span className="text-gray-600"> outcomes</span></span>
                            <span className="pl-6 mb-0.5 text-gray-600">from BPA to RPA to IPA</span>
                            <span className="pl-6 mb-0.5 text-gray-600">orchestrate workflows</span>
                            <span className="text-[#2DD4BF] font-bold">scale with confidence</span>
                        </div>

                        <div className="flex-1 flex flex-col items-center px-4 relative z-10">
                            <h1 className="flex flex-col items-center justify-center font-bold tracking-tight text-center">
                                <span className="text-black text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-4 whitespace-nowrap">
                                    Lead the Future with
                                </span>
                                <span className="text-[#2DD4BF] text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-6 flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2DD4BF] to-[#22c55e]">
                                    Intelligent Automation
                                </span>
                                <span className="text-[#3b82f6] text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-6 flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#818cf8]">
                                    Solution
                                </span>
                            </h1>

                            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                                From Business Process Automation (BPA) and Robotic Process Automation (RPA) to Intelligent Process Automation (IPA). We deliver enterprise-grade automation solutions that reduce operational costs by 40-70%.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full justify-center">
                                <a href="/contact/sales" className="bg-[#153776] hover:bg-[#102A5E] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center justify-center w-[280px] h-[60px] cursor-pointer text-lg tracking-wide border border-[#153776]/50">
                                    Book a demo
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col items-center bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-bold gap-4 backdrop-blur-md w-[200px] absolute -top-8 lg:-right-2 xl:-right-12 2xl:-right-20 z-20 hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-3 w-full pr-2">
                                <span className="text-[#34D399] text-sm font-bold">✓</span>
                                <span className="text-gray-600 text-[13px] tracking-wide whitespace-nowrap">Bots Deployed</span>
                            </div>
                            <div className="flex items-center gap-3 w-full relative -left-[14px]">
                                <span className="text-[#3b82f6] text-sm font-bold">✓</span>
                                <span className="text-gray-600 text-[13px] tracking-wide whitespace-nowrap">Workflows Running</span>
                            </div>
                            <div className="flex items-center gap-3 w-full pr-2">
                                <span className="text-[#a78bfa] text-sm font-bold">✓</span>
                                <span className="text-gray-600 text-[13px] tracking-wide whitespace-nowrap">Insights Streaming</span>
                            </div>
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
                                                    layoutId="activeStickyNavBadge-ProcessAutomation"
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

                {/* What is Process Automation Banner */}
                <section id="automation-solutions" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center mt-20 mb-20 z-20 relative scroll-mt-32">
                    <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-gray-100 bg-white/50 mb-8 shadow-sm">
                        <svg className="w-4 h-4 text-[#153776]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        <span className="text-sm font-semibold tracking-wider text-[#153776]">Quick Answer</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight tracking-tight text-left">
                        What is <span className="text-[#2DD4BF]">Process Automation?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl font-medium mt-2 mb-12 text-left leading-relaxed">
                        Process Automation encompasses BPA (Business Process Automation), RPA (Robotic Process Automation), and IPA (Intelligent Process Automation) solutions that automate repetitive tasks, streamline workflows, and leverage AI for complex decision-making. Our comprehensive automation services reduce operational costs by 30-50% while achieving 3-5x ROI within the first year.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                        <div className="flex flex-col items-center justify-center text-center bg-white rounded-3xl p-8 card-hover-effect group">
                            <span className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-2">30-50%</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Cost Reduction</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-white rounded-3xl p-8 card-hover-effect group">
                            <span className="text-4xl md:text-5xl font-bold text-[#3b82f6] mb-2">3-5x</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Average ROI</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-white rounded-3xl p-8 card-hover-effect group">
                            <span className="text-4xl md:text-5xl font-bold text-[#a78bfa] mb-2">85%</span>
                            <span className="text-gray-600 font-medium tracking-wide text-sm">Faster Processing</span>
                        </div>            </div>
                </section>

                {/* BPA vs RPA vs IPA Comparison */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-20 relative pt-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">BPA vs RPA vs IPA: Which is Right for You?</h2>
                        <p className="text-gray-600 text-lg">Compare automation approaches to find the perfect fit for your business needs and complexity level</p>
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className="w-full border-collapse min-w-[800px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                            <thead>
                                <tr className="bg-white border-b border-gray-100">
                                    <th className="py-6 px-8 text-left text-black font-bold text-lg w-1/4">Feature</th>
                                    <th className="py-6 px-8 text-center w-1/4 border-l border-gray-100">
                                        <div className="inline-block px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-bold mb-2">BPA</div>
                                        <div className="text-gray-600 font-semibold">Business Process Automation</div>
                                    </th>
                                    <th className="py-6 px-8 text-center w-1/4 border-l border-gray-100">
                                        <div className="inline-block px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold mb-2">RPA</div>
                                        <div className="text-gray-600 font-semibold">Robotic Process Automation</div>
                                    </th>
                                    <th className="py-6 px-8 text-center w-1/4 border-l border-gray-100">
                                        <div className="inline-block px-3 py-1 rounded-full bg-[#a78bfa]/10 text-[#a78bfa] text-xs font-bold mb-2">IPA</div>
                                        <div className="text-gray-600 font-semibold">Intelligent Process Automation</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <td className="py-5 px-8 font-bold text-black">{row.feature}</td>
                                        <td className="py-5 px-8 text-center text-gray-600 font-medium border-l border-gray-100">
                                            {typeof row.bpa === 'boolean' ? (row.bpa ? <span className="text-green-500 font-bold inline-block w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">✓</span> : <span className="text-red-500 font-bold inline-block w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">✕</span>) : row.bpa}
                                        </td>
                                        <td className="py-5 px-8 text-center text-gray-600 font-medium border-l border-gray-100">
                                            {typeof row.rpa === 'boolean' ? (row.rpa ? <span className="text-green-500 font-bold inline-block w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">✓</span> : <span className="text-red-500 font-bold inline-block w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">✕</span>) : row.rpa}
                                        </td>
                                        <td className="py-5 px-8 text-center text-gray-600 font-medium border-l border-gray-100">
                                            {typeof row.ipa === 'boolean' ? (row.ipa ? <span className="text-green-500 font-bold inline-block w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">✓</span> : <span className="text-red-500 font-bold inline-block w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">✕</span>) : row.ipa}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="w-full text-center mt-12 mb-20 bg-white py-16 border-y border-gray-100">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Comprehensive Automation Solutions</h2>
                    <p className="text-gray-600 text-lg">Choose the Right Level of Automation for Your Needs</p>
                </div>

                {/* BPA Capabilities */}
                <section id="bpa-capabilities" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-20 relative scroll-mt-32">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col-reverse lg:flex-row gap-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-full lg:w-[55%] flex flex-col z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 mb-2 inline-block uppercase tracking-wider">BPA</span>
                                    <h3 className="text-3xl font-bold text-black">Business Process Automation</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm font-bold tracking-wide uppercase mb-2">Ideal for:</p>
                            <p className="text-black text-xl font-bold mb-6">Structured workflows and rule-based processes</p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                Transform repetitive tasks into efficient, automated workflows that handle your day-to-day operations seamlessly.
                            </p>
                            <p className="text-black font-bold mb-4 text-lg">What We Automate:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0 border border-[#3b82f6]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Invoice processing (reduce from hours to minutes)
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0 border border-[#3b82f6]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Employee onboarding (3 days to 4 hours)
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0 border border-[#3b82f6]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Purchase order management
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0 border border-[#3b82f6]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Document approval workflows
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-[45%] flex flex-col justify-center bg-white rounded-2xl p-8 border border-gray-100 z-10">
                            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                Expected Results
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#3b82f6] mb-2 tracking-tight">75%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Efficiency Impr.</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#2DD4BF] mb-2 tracking-tight">90%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Error Reduction</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#a78bfa] mb-2 tracking-tight">60%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Time Savings</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#f43f5e] mb-2 tracking-tight">24/7</span>
                                    <span className="text-gray-600 text-sm font-semibold">Operations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RPA Capabilities */}
                <section id="rpa-capabilities" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-20 relative scroll-mt-32">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2DD4BF]/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-full lg:w-[45%] flex flex-col justify-center bg-white rounded-2xl p-8 border border-gray-100 z-10">
                            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                Expected Results
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#3b82f6] mb-2 tracking-tight">85%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Cost Reduction</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#2DD4BF] mb-2 tracking-tight">99%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Accuracy Rate</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#a78bfa] mb-2 tracking-tight">250%</span>
                                    <span className="text-gray-600 text-sm font-semibold">ROI First Year</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span className="text-4xl font-black text-[#f43f5e] mb-2 tracking-tight">24/7</span>
                                    <span className="text-gray-600 text-sm font-semibold">Operations</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[55%] flex flex-col z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2DD4BF]/10 text-[#042F2E] border border-[#2DD4BF]/30 mb-2 inline-block uppercase tracking-wider">RPA</span>
                                    <h3 className="text-3xl font-bold text-black">Robotic Process Automation</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm font-bold tracking-wide uppercase mb-2">Ideal for:</p>
                            <p className="text-black text-xl font-bold mb-6">High-volume, repetitive tasks across multiple systems</p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                Deploy intelligent bots that replicate human actions, eliminating tedious tasks and reducing operational costs significantly.
                            </p>
                            <p className="text-black font-bold mb-4 text-lg">What We Automate:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF] shrink-0 border border-[#2DD4BF]/30"><svg className="w-3 h-3 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    ERP data entry and migration
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF] shrink-0 border border-[#2DD4BF]/30"><svg className="w-3 h-3 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Report generation and distribution
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF] shrink-0 border border-[#2DD4BF]/30"><svg className="w-3 h-3 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Claims processing
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF] shrink-0 border border-[#2DD4BF]/30"><svg className="w-3 h-3 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Email management and routing
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* IPA Capabilities */}
                <section id="ipa-capabilities" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-20 relative scroll-mt-32">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col-reverse lg:flex-row gap-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#a78bfa]/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-full lg:w-[55%] flex flex-col z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </div>
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#a78bfa]/10 text-[#8b5cf6] border border-[#a78bfa]/20 mb-2 inline-block uppercase tracking-wider">IPA</span>
                                    <h3 className="text-3xl font-bold text-black">Intelligent Process Automation</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm font-bold tracking-wide uppercase mb-2">Ideal for:</p>
                            <p className="text-black text-xl font-bold mb-6">Complex decisions requiring AI, machine learning, and autonomous agents</p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                Combine RPA with artificial intelligence and agentic AI to handle unstructured data, make autonomous decisions, and continuously adapt workflows with self-improving algorithms that learn from patterns and exceptions.
                            </p>
                            <p className="text-black font-bold mb-4 text-lg">What We Automate:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#a78bfa]/10 flex items-center justify-center text-[#8b5cf6] shrink-0 border border-[#a78bfa]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Agentic AI systems that collaborate and make autonomous decisions
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#a78bfa]/10 flex items-center justify-center text-[#8b5cf6] shrink-0 border border-[#a78bfa]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Document understanding and extraction
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#a78bfa]/10 flex items-center justify-center text-[#8b5cf6] shrink-0 border border-[#a78bfa]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Predictive maintenance with self-learning algorithms
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#a78bfa]/10 flex items-center justify-center text-[#8b5cf6] shrink-0 border border-[#a78bfa]/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                                    Customer sentiment analysis and response generation
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-[45%] flex flex-col justify-center bg-white rounded-2xl p-8 border border-gray-100 z-10 shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                Expected Results
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                    <span className="text-4xl font-black text-[#8b5cf6] mb-2 tracking-tight">70%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Processing Time Reduction</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                    <span className="text-4xl font-black text-[#2DD4BF] mb-2 tracking-tight">94%</span>
                                    <span className="text-gray-600 text-sm font-semibold">Accuracy Rate</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                    <span className="text-4xl font-black text-[#3b82f6] mb-2 tracking-tight">8-12x</span>
                                    <span className="text-gray-600 text-sm font-semibold">ROI 24 Months</span>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-black text-[#f43f5e] mb-2 tracking-tight">$500K-2M</span>
                                    <span className="text-gray-600 text-sm font-semibold">Annual Savings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation Methodology */}
                <section id="implementation" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 z-20 relative pt-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Implementation <span className="text-[#2DD4BF]">Methodology</span></h2>
                        <p className="text-gray-600 text-xl font-medium">Our Proven 5-Step Methodology</p>
                    </div>

                    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
                        {implementationSteps.map((step, idx) => (
                            <div key={idx} className="bg-white border-2 border-transparent hover:border-[#2DD4BF]/30 rounded-[2rem] p-8 shadow-xl flex flex-col md:flex-row items-stretch gap-8 transition-colors group">
                                <div className="flex flex-col items-start gap-3 w-full md:w-1/2">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-16 h-16 rounded-full bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                            <span className="text-3xl font-bold text-black">{step.num}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2DD4BF] transition-colors">{step.title}</h3>
                                    </div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#2DD4BF]/10 text-[#042F2E] text-sm font-bold border border-[#2DD4BF]/20 self-end md:self-auto ml-auto md:ml-0 md:absolute md:top-8 md:right-8">
                                        {step.time}
                                    </span>
                                    <div className="mt-4 w-full">
                                        <p className="text-black font-bold mb-3">Key Activities:</p>
                                        <ul className="space-y-2">
                                            {step.activities.map((act, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                                    <span className="text-[#2DD4BF] font-bold">✓</span> {act}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 bg-white rounded-2xl p-6 flex flex-col justify-center border border-gray-100">
                                    <p className="text-[#2DD4BF] font-bold mb-3">Deliverable:</p>
                                    <div className="bg-white border border-[#2DD4BF]/30 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-[#2DD4BF]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        </div>
                                        <p className="text-black font-semibold">{step.deliverable}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Our Automation Solutions */}
                <section className="w-full bg-[#153776] text-white py-24 z-20 relative">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Why Choose Our <span className="text-[#A1F9F3]">Automation Solutions?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-12">
                            Join forward-thinking enterprises achieving significant cost reduction and operational excellence through our proven automation solutions
                        </p>
                    </div>
                </section>

                {/* Related Solutions Section */}
                <section className="w-full bg-white py-24 z-20 relative border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                Related <span className="text-[#2DD4BF]">Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Explore our complementary solutions to build a comprehensive digital transformation strategy
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Business Process Automation */}
                            <div className="bg-white rounded-[2rem] p-8 card-hover-effect flex flex-col h-full cursor-pointer group">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[#eff6ff] shrink-0 flex items-center justify-center shadow-sm border border-[#3b82f6]/20">
                                        <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">Business Process Automation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                                    Streamline workflows with customer service chatbots, scheduling systems, and automated document processing
                                </p>
                                <ImageSlider images={bpaImages} />
                            </div>

                            {/* Card 2: Robotic Process Automation */}
                            <div className="bg-white rounded-[2rem] p-8 card-hover-effect flex flex-col h-full cursor-pointer group">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[#f0fdf4] shrink-0 flex items-center justify-center shadow-sm border border-[#22c55e]/20">
                                        <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">Robotic Process Automation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                                    Deploy intelligent bots for data entry, report generation, and system integration with 99.9% accuracy
                                </p>
                                <ImageSlider images={rpaImages} />
                            </div>

                            {/* Card 3: Intelligent Process Automation */}
                            <div className="bg-white rounded-[2rem] p-8 card-hover-effect flex flex-col h-full cursor-pointer group">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[#f5f3ff] shrink-0 flex items-center justify-center shadow-sm border border-[#a78bfa]/20">
                                        <svg className="w-8 h-8 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">Intelligent Process Automation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                                    AI-powered automation with computer vision, NLP, and machine learning for complex decision-making
                                </p>
                                <ImageSlider images={ipaImages} />
                            </div>
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
