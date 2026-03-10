'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';


const architectureLayers = [
    {
        id: 'data-sources',
        title: 'Data Sources Layer',
        subtitle: 'Raw Data Ingestion',
        color: 'bg-[#2563EB]',
        textbg: 'bg-[#2563EB]/20',
        textcolor: 'text-[#3B82F6]',
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>,
        cards: [
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>, title: 'Enterprise Systems', desc: 'ERP, CRM, and business apps' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>, title: 'Cloud Platforms', desc: 'AWS, Azure, GCP services' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>, title: 'APIs & Web Services', desc: 'RESTful, Streaming and GraphQL APIs' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>, title: 'File Systems', desc: 'CSV, JSON, Parquet files' }
        ],
        whyMatters: [
            'Foundation of all data operations', 'Multiple format compatibility', 'Real-time and batch ingestion', 'Source system connectivity', 'Data quality at source'
        ]
    },
    {
        id: 'data-ingestion',
        title: 'Data Ingestion Layer',
        subtitle: 'Collection & Streaming',
        color: 'bg-[#059669]',
        textbg: 'bg-[#059669]/20',
        textcolor: 'text-[#10B981]',
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>,
        cards: [
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>, title: 'Kafka Streams', desc: 'Real-time event streaming' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>, title: 'Apache Airflow', desc: 'Workflow orchestration' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>, title: 'Spark Streaming', desc: 'Distributed stream processing' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>, title: 'CDC Connectors', desc: 'Change data capture' }
        ],
        whyMatters: [
            'Real-time data streaming capabilities', 'Batch processing optimization', 'Change data capture (CDC)', 'High-volume data handling', 'Data pipeline orchestration'
        ]
    },
    {
        id: 'data-storage',
        title: 'Data Storage Layer',
        subtitle: 'Lakes & Warehouses',
        color: 'bg-[#EA580C]',
        textbg: 'bg-[#EA580C]/20',
        textcolor: 'text-[#F97316]',
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>,
        cards: [
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>, title: 'Data Lake', desc: 'Raw and structured data' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>, title: 'Data Warehouse', desc: 'Optimized for analytics' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>, title: 'Lakehouse', desc: 'Unified data platform' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>, title: 'VectorDB', desc: 'Text Embeddings & Vectors' }
        ],
        whyMatters: [
            'Scalable storage architecture', 'Data lake and warehouse hybrid', 'Cost-effective storage tiers', 'ACID transaction support', 'Petabyte-scale capacity'
        ]
    },
    {
        id: 'data-processing',
        title: 'Data Processing Layer',
        subtitle: 'Transform & Enrich',
        color: 'bg-[#9333EA]',
        textbg: 'bg-[#9333EA]/20',
        textcolor: 'text-[#A855F7]',
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
        cards: [
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>, title: 'Apache Spark', desc: 'Large-scale data processing' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>, title: 'dbt', desc: 'Analytics engineering' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>, title: 'Data Quality', desc: 'Validation and cleansing' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>, title: 'Indexing', desc: 'Faster data retrieval' }
        ],
        whyMatters: [
            'ETL/ELT pipeline execution', 'Data quality and validation', 'Complex transformation logic', 'Performance optimization', 'Automated data cleansing'
        ]
    },
    {
        id: 'data-governance',
        title: 'Data Governance Layer',
        subtitle: 'Security & Compliance',
        color: 'bg-[#DC2626]',
        textbg: 'bg-[#DC2626]/20',
        textcolor: 'text-[#EF4444]',
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
        cards: [
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>, title: 'Data Catalog', desc: 'Metadata management' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>, title: 'Access Control', desc: 'Role-based permissions' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>, title: 'Data Lineage', desc: 'End-to-end traceability' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>, title: 'Compliance Tools', desc: 'GDPR, HIPAA, SOX' }
        ],
        whyMatters: [
            'Data privacy and security', 'Regulatory compliance', 'Access control management', 'Audit trail maintenance', 'Data classification policies'
        ]
    },
    {
        id: 'data-analytics',
        title: 'Analytics Layer',
        subtitle: 'Insights & Intelligence',
        color: 'bg-[#0EA5E9]',
        textbg: 'bg-[#0EA5E9]/20',
        textcolor: 'text-[#38BDF8]',
        icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
        cards: [
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>, title: 'BI Dashboards', desc: 'Interactive visualizations' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>, title: 'Data Science', desc: 'ML model development' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, title: 'Self-Service BI', desc: 'Ad-hoc data exploration' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>, title: 'Reporting', desc: 'Automated data reports' }
        ],
        whyMatters: [
            'Actionable business intelligence', 'Data-driven decision making', 'KPI tracking and monitoring', 'Predictive analytics integration', 'Democratized data access'
        ]
    }
];


export default function DataSolutionsPage() {
    const [activeSection, setActiveSection] = useState('core-services');
    const [activeArchitectureLayer, setActiveArchitectureLayer] = useState('data-sources');
    const [activeServiceTab, setActiveServiceTab] = useState('data-governance');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['core-services', 'data-solutions', 'ai-engineering', 'technology-stack', 'our-process'];
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
        { id: "core-services", name: "Core Services", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7V4h16v3M9 20h6M12 4v16"></path></svg> },
        { id: "data-solutions", name: "Data Solutions", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path></svg> },
        { id: "ai-engineering", name: "AI Engineering", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path></svg> },
        { id: "technology-stack", name: "Technology Stack", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> },
        { id: "our-process", name: "Our Process", icon: <svg className="w-4 h-4 mr-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative w-full font-sans text-gray-200">

            <main className="flex-1 w-full flex flex-col items-center justify-start pt-32 pb-16 relative z-10">

                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-8 mb-20 relative">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-100 bg-white/80 backdrop-blur-sm mb-12 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-gray-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        <span className="text-sm font-semibold tracking-wider">Enterprise Data Solutions & Analytics</span>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full relative z-10 min-h-[400px]">
                        {/* Fake Code Block Left */}
                        <div className="hidden lg:flex flex-col items-start text-left bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-mono text-[13px] text-gray-700 backdrop-blur-md leading-[1.6] w-fit absolute top-0 lg:-left-2 xl:-left-12 2xl:-left-20 z-20 hover:-translate-y-1 transition-transform">
                            <span className="mb-0.5"><span className="text-gray-500">{'SELECT '}</span><span className="text-[#38BDF8]">{'insights '}</span><span className="text-gray-500">{'FROM '}</span><span className="text-[#34D399]">{'data'}</span></span>
                            <span className="pl-6 mb-0.5 text-gray-600">{'WHERE quality = \'high\''}</span>
                            <span className="pl-6 mb-0.5 text-gray-600">{'GROUP BY business_value'}</span>
                            <span className="text-gray-600">{'ORDER BY impact DESC;'}</span>
                        </div>

                        {/* Title Section */}
                        <div className="flex-1 flex flex-col items-center px-4 relative z-10">
                            <h1 className="flex flex-col items-center justify-center font-bold tracking-tight text-center">
                                <span className="text-black text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-4 whitespace-nowrap">
                                    Transform with <span className="text-[#153776]">Data</span>
                                </span>
                                <span className="text-black text-5xl md:text-7xl lg:text-7xl leading-[1.15] tracking-tighter mb-6 whitespace-nowrap flex flex-wrap items-center justify-center gap-3 md:gap-4">
                                    Solutions that <span className="inline-flex items-center justify-center bg-[#153776] text-[#A1F9F3] px-6 py-1.5 md:px-8 md:py-2 rounded-2xl md:rounded-[1.5rem] shadow-xl relative -top-1">Deliver</span>
                                </span>
                            </h1>

                            <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                                From data architecture to advanced analytics systems. We deliver enterprise-grade data solutions that transform operations and drive measurable results.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full justify-center">
                                <a href="/contact/sales" className="bg-[#153776] hover:bg-[#102A5E] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center justify-center w-[280px] h-[60px] cursor-pointer text-lg tracking-wide border border-[#153776]/50">
                                    Book a demo
                                </a>
                            </div>
                        </div>

                        {/* Status List Right */}
                        <div className="hidden lg:flex flex-col items-center bg-white border border-gray-100 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] font-bold gap-4 backdrop-blur-md w-[200px] absolute top-8 lg:-right-2 xl:-right-12 2xl:-right-20 z-20 hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-3 w-full pr-2">
                                <span className="w-1.5 h-3.5 rounded-full bg-[#F67112] opacity-80 shrink-0"></span>
                                <span className="text-[#F67112] text-[13px] tracking-wide whitespace-nowrap">Data Pipeline Active</span>
                            </div>
                            <div className="flex items-center gap-3 w-full relative -left-[14px]">
                                <span className="w-2 h-2 rounded-full bg-[#153776] opacity-80 shrink-0"></span>
                                <span className="text-[#153776] text-[13px] tracking-wide whitespace-nowrap">ETL Processing</span>
                            </div>
                            <div className="flex items-center gap-3 w-full pr-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F67112] opacity-80 shrink-0"></span>
                                <span className="text-[#F67112] text-[13px] tracking-wide whitespace-nowrap">Analytics Ready</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 mt-8 pt-8 border-t border-gray-200 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-4xl md:text-5xl font-bold text-black mb-2">25+</span>
                        <span className="text-gray-600 font-medium tracking-wide text-sm">Data Projects Delivered</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-4xl md:text-5xl font-bold text-black mb-2">98%</span>
                        <span className="text-gray-600 font-medium tracking-wide text-sm">Data Accuracy Achieved</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-4xl md:text-5xl font-bold text-[#34D399] mb-2">75%</span>
                        <span className="text-gray-600 font-medium tracking-wide text-sm">Cost Reduction Average</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</span>
                        <span className="text-gray-600 font-medium tracking-wide text-sm">Data Monitoring</span>
                    </div>
                </div>

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
                                                    layoutId="activeStickyNavBadge-Data"
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

                {/* Transform Your Data Banner */}
                <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-12 z-20 relative">
                    <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#042F2E] bg-[#0F3532]/50 mb-8 shadow-sm">
                        <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        <span className="text-sm font-semibold tracking-wider text-[#2DD4BF]">Enterprise Solutions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-black mb-6 leading-tight tracking-tight">
                        Transform <span className="text-[#2DD4BF]">Your Data</span>
                        <br />
                        <span className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-medium tracking-normal">Into Strategic Assets</span>
                    </h2>

                    <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl font-medium mt-4">
                        Comprehensive solutions designed to address your most complex data challenges and unlock the full potential of your data assets across every layer of your organization.
                    </p>
                </section>

                {/* Tabbed Interface Body */}
                <section id="core-services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-24 z-20 relative scroll-mt-32">
                    {/* Tab List */}
                    <div className="flex items-center justify-center w-full overflow-x-auto hide-scrollbar mb-8">
                        <div className="flex items-center p-1 bg-[#f4f5f5] border border-gray-200/60 rounded-2xl min-w-max mx-auto md:mx-0">
                            {[
                                { id: 'data-governance', label: 'Data Governance Framework', icon: <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> },
                                { id: 'modern-data-infrastructure', label: 'Modern Data Infrastructure', icon: <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg> },
                                { id: 'enterprise-data', label: 'Enterprise Data Management', icon: <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> },
                                { id: 'data-modeling', label: 'Data Modeling & Architecture', icon: <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> },
                                { id: 'data-quality', label: 'Data Quality & Observability', icon: <svg className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveServiceTab(tab.id)}
                                    className={`relative flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2 rounded-[14px] font-semibold whitespace-nowrap transition-colors cursor-pointer text-[12px] md:text-[13px] ${activeServiceTab === tab.id ? 'text-white' : 'text-[#5a6b7c] hover:text-gray-900'}`}
                                >
                                    {activeServiceTab === tab.id && (
                                        <motion.div
                                            layoutId="activeCoreServiceTab"
                                            className="absolute inset-0 bg-[#153776] rounded-[14px] shadow-md z-0"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    {tab.icon}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Data Governance Framework Content */}
                    {activeServiceTab === 'data-governance' && (
                        <div className="bg-[#f8f9fc] border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-black">Data Governance Framework</h3>
                                    <p className="text-[#2DD4BF] font-medium mt-1">Comprehensive Data Governance: Ensuring Quality, Compliance, and Strategic Value</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg mb-12 max-w-4xl">
                                Establish robust data governance practices that ensure data quality, regulatory compliance, and strategic alignment across your entire organization.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-12 w-full">
                                {/* Left Side Feature Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        <span className="font-bold text-black text-lg">Key Components</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Component 1 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Quality Management & Monitoring</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Continuous validation, SLAs, and incident workflows keep trust high.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 2 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Regulatory Compliance (GDPR, HIPAA, SOX)</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Policies, audit trails, masking and retention aligned with regulations.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 3 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Master Data Management (MDM)</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Golden records and governance across domains and systems.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 4 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Cataloging & Metadata Management</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Searchable data assets with lineage, ownership and context.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 5 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Role-based Access Controls</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Least-privilege access with fine-grained policies.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 6 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Stewardship & Ownership Model</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Defined roles, accountability, and clear data stewardship workflows.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Image Box */}
                                <div className="w-full lg:w-[400px] flex-shrink-0 flex items-start justify-center">
                                    <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 bg-[#f8f9fc]">
                                        <img src="/ai-bg-new.png" alt="AI Data Governance" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modern Data Infrastructure Content */}
                    {activeServiceTab === 'modern-data-infrastructure' && (
                        <div className="bg-[#f8f9fc] border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-black">Modern Data Infrastructure</h3>
                                    <p className="text-[#2DD4BF] font-medium mt-1">Cloud-Native Data Platforms: Scalable, Secure, and Future-Ready</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg mb-12 max-w-4xl">
                                Build next-generation data infrastructure leveraging cloud technologies, microservices, and containerization for maximum scalability and performance.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-12 w-full">
                                {/* Left Side Feature Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        <span className="font-bold text-black text-lg">Key Components</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Component 1 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Cloud Data Warehouses (Snowflake, BigQuery, Redshift)</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Elastic, fast analytics with governed access and cost controls.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 2 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Lakes & Lake Houses Architecture</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Combine raw and curated zones for flexible analytics.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 3 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Kubernetes-based Data Processing</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Portable, scalable compute for pipelines and ML workloads.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 4 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Serverless Computing Integration</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Auto-scaling, event-driven data transformations.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 5 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Multi-cloud & Hybrid Deployments</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Resilience and choice without lock-in.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 6 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Cost Optimization & FinOps Practices</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Monitor, allocate, and right-size spend across platforms.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Image Box */}
                                <div className="w-full lg:w-[400px] flex-shrink-0 flex items-start justify-center">
                                    <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 bg-[#f8f9fc]">
                                        <img src="/modern-data-infrastructure.jpg" alt="Modern Data Infrastructure" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Enterprise Data Management Content */}
                    {activeServiceTab === 'enterprise-data' && (
                        <div className="bg-[#f8f9fc] border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-black">Enterprise Data Management</h3>
                                    <p className="text-[#2DD4BF] font-medium mt-1">End-to-End Data Management: From Ingestion to Insights</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg mb-12 max-w-4xl">
                                Comprehensive data management solutions that handle the complete data lifecycle from ingestion and storage to processing and analytics.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-12 w-full">
                                {/* Left Side Feature Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        <span className="font-bold text-black text-lg">Key Components</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Component 1 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Ingestion & Collection Frameworks</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Streaming and batch ingestion with connectors and CDC.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 2 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Real-time & Batch Processing Systems</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Low-latency insights alongside scheduled transformations.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 3 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Storage Optimization</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Tiering, partitioning and compression for performance/cost.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 4 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Automated Data Quality Checks</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Rules and anomaly detection baked into pipelines.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 5 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Performance Monitoring & Optimization</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Observability dashboards and tuning for reliability.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 6 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Access APIs & Data Services</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Reliable, secure APIs to deliver curated datasets to apps and teams.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Image Box */}
                                <div className="w-full lg:w-[400px] flex-shrink-0 flex items-start justify-center">
                                    <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 bg-[#f8f9fc]">
                                        <img src="/enterprise-data-management.jpg" alt="Enterprise Data Management" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Data Modeling & Architecture Content */}
                    {activeServiceTab === 'data-modeling' && (
                        <div className="bg-[#f8f9fc] border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-black">Data Modeling & Architecture</h3>
                                    <p className="text-[#2DD4BF] font-medium mt-1">Strategic Data Models: Optimized for Performance and Scalability</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg mb-12 max-w-4xl">
                                Design and implement sophisticated data models that optimize storage, improve query performance, and support complex analytical workloads.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-12 w-full">
                                {/* Left Side Feature Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        <span className="font-bold text-black text-lg">Key Components</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Component 1 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Dimensional & Star Schema Design</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Analyst-friendly models for BI and reporting.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 2 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data Vault Modeling</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Auditability and agility for enterprise scale.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 3 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Graph Database Architecture</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Model complex relationships for connected insights.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 4 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Time-series Data Modeling</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Efficient storage and queries over time-bound data.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 5 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">NoSQL & Polyglot Persistence</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Use the right store for each workload.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 6 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Semantic Layer & Metrics Store</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Consistent business definitions and reusable metrics for BI.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Image Box */}
                                <div className="w-full lg:w-[400px] flex-shrink-0 flex items-start justify-center">
                                    <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 bg-[#f8f9fc]">
                                        <img src="/data-modeling-architecture.jpg" alt="Data Modeling & Architecture" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Data Quality & Observability Content */}
                    {activeServiceTab === 'data-quality' && (
                        <div className="bg-[#f8f9fc] border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-black">Data Quality & Observability</h3>
                                    <p className="text-[#2DD4BF] font-medium mt-1">Trustworthy data through proactive monitoring and remediation</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg mb-12 max-w-4xl">
                                Ensure reliable analytics with automated data validation, lineage, and SLAs across your pipelines.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-12 w-full">
                                {/* Left Side Feature Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        <span className="font-bold text-black text-lg">Key Components</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Component 1 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Automated quality checks & SLAs</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Define thresholds, track SLAs, and alert on drift.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 2 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Anomaly detection and alerts</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Detect outliers early to prevent data incidents.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 3 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Data lineage and impact analysis</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Trace data flows to speed up root-cause analysis.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 4 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Freshness, completeness, accuracy KPIs</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Trust metrics visible to all stakeholders.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 5 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Observability dashboards and reports</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Unified health view across platforms and pipelines.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Component 6 */}
                                        <div className="bg-white border border-gray-200 hover:border-gray-100 rounded-2xl p-6 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0F3532] border border-[#2DD4BF]/30 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-black font-bold mb-2">Incident Management & Runbooks</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed">Standardized playbooks to triage and resolve data issues quickly.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Image Box */}
                                <div className="w-full lg:w-[400px] flex-shrink-0 flex items-start justify-center">
                                    <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 bg-[#f8f9fc]">
                                        <img src="/data-quality-observability.jpg" alt="Data Quality & Observability" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Data Engineering Section */}
                <section id="data-solutions" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16 z-20 relative scroll-mt-32">
                    <div className="flex flex-col items-center justify-center text-center w-full mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#042F2E] bg-[#0F3532]/50 mb-6 shadow-sm">
                            <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            <span className="text-sm font-semibold tracking-wider text-[#2DD4BF]">AI-Ready Infrastructure</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-black leading-tight tracking-tight mb-4">
                            Data <span className="text-[#34D399]">Engineering</span>
                            <br />
                            <span className="text-gray-800">for AI Excellence</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl font-medium mt-6">
                            Build the data foundation that powers intelligent systems. Our AI-focused data engineering creates the scalable, high-quality data infrastructure essential for successful machine learning and AI deployments.
                        </p>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center card-hover-effect group">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#0F3532] border border-[#2DD4BF]/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">ML-Ready Pipelines</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Feature stores, model training data, and real-time inference pipelines built for scale
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center card-hover-effect group">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#0F3532] border border-[#2DD4BF]/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">Real-Time Processing</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Stream processing for live model predictions and continuous learning systems
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center card-hover-effect group">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#0F3532] border border-[#2DD4BF]/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">Vector Databases</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Optimized storage for embeddings, similarity search, and RAG applications
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center card-hover-effect group">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#0F3532] border border-[#2DD4BF]/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">AI Governance</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Data lineage, model versioning, and compliance for responsible AI deployment
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI Challenges vs Technology Stack Section */}
                <section id="technology-stack" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24 z-20 relative scroll-mt-32">
                    <div className="flex flex-col lg:flex-row gap-12 w-full">

                        {/* Left Column: Challenges */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">AI Data Challenges We Solve</h3>
                            </div>

                            {/* Challenge 1 */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-6">
                                <h4 className="text-black font-bold mb-2">Data Quality & Consistency</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">AI models require clean, consistent data at scale. We implement automated validation, standardization, and quality monitoring.</p>
                            </div>

                            {/* Challenge 2 */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-6">
                                <h4 className="text-black font-bold mb-2">Feature Engineering Automation</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Transform raw data into ML-ready features with automated pipelines that handle complex transformations and temporal dependencies.</p>
                            </div>

                            {/* Challenge 3 */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-6">
                                <h4 className="text-black font-bold mb-2">Model Training Infrastructure</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Scalable compute resources, distributed training capabilities, and efficient data loading for large-scale model development.</p>
                            </div>
                        </div>

                        {/* Right Column: Tech Stack */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-black">AI-Optimized Technology Stack</h3>
                            </div>

                            {/* Tech Category 1 */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path></svg>
                                    <h4 className="text-black font-bold">ML Data Platforms</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Apache Spark MLlib</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Databricks MLflow</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Kubeflow Pipelines</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Apache Airflow</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Prefect</span>
                                </div>
                            </div>

                            {/* Tech Category 2 */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                    <h4 className="text-black font-bold">Vector & Embedding Storage</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Pinecone</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Weaviate</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Chroma</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Qdrant</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">pgvector (PostgreSQL)</span>
                                </div>
                            </div>

                            {/* Tech Category 3 */}
                            <div className="bg-white border border-gray-200 rounded-3xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <h4 className="text-black font-bold">Real-Time ML Serving</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Apache Kafka</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Redis Streams</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Apache Pulsar</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">AWS Kinesis</span>
                                    <span className="px-3 py-1.5 bg-[#0F3532] border border-[#2DD4BF]/20 text-[#2DD4BF] rounded-full text-xs font-semibold">Google Cloud Pub/Sub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Implementation Methodology Section */}
                <section id="our-process" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24 z-20 relative scroll-mt-32">
                    <div className="flex flex-col items-center justify-center text-center w-full mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#042F2E] bg-[#0F3532]/50 mb-6 shadow-sm">
                            <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            <span className="text-sm font-semibold tracking-wider text-[#2DD4BF]">Proven Methodology</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-black leading-tight tracking-tight mb-4">
                            Data <span className="text-[#34D399]">Implementation</span>
                            <br />
                            <span className="text-gray-800">Methodology</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl font-medium mt-6">
                            A proven, structured approach to data transformation that ensures successful outcomes and measurable ROI through systematic implementation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {/* Box 1 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col card-hover-effect group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 relative">
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold text-[#042F2E]">01</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mt-2">Data Discovery & Assessment</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                Comprehensive audit of existing data assets, quality assessment, and identification of key business requirements and opportunities.
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-black font-bold text-sm">Key Deliverables</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Data Asset Inventory</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Quality Assessment Report</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Business Requirements Analysis</span>
                                </div>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col card-hover-effect group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 relative">
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold text-[#042F2E]">02</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mt-2">Architecture Design & Planning</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                Design scalable data architecture aligned with business objectives, including technology selection and implementation roadmap.
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-black font-bold text-sm">Key Deliverables</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Architecture Blueprint</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Technology Stack Selection</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Implementation Roadmap</span>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col card-hover-effect group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 relative">
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold text-[#042F2E]">03</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mt-2">Data Engineering & Development</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                Build robust data pipelines, implement data processing workflows, and establish automated data quality frameworks.
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-black font-bold text-sm">Key Deliverables</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Data Pipelines</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Quality Frameworks</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Processing Workflows</span>
                                </div>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col card-hover-effect group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 relative">
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold text-[#042F2E]">04</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mt-2">Integration & Visualization</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                Connect data across platforms and develop intuitive dashboards and reporting layers for business stakeholders to leverage.
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-black font-bold text-sm">Key Deliverables</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">API Integrations</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">BI Dashboards</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Reporting Models</span>
                                </div>
                            </div>
                        </div>

                        {/* Box 5 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col card-hover-effect group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 relative">
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold text-[#042F2E]">05</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mt-2">Optimization & Support</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                Fine-tune data infrastructure for cost-efficiency and performance, accompanied by reliable ongoing operational support.
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-black font-bold text-sm">Key Deliverables</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Performance Tuning</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Cost Optimization</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">SLA Monitoring</span>
                                </div>
                            </div>
                        </div>

                        {/* Box 6 */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col card-hover-effect group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 relative">
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold text-[#042F2E]">06</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mt-2">Enablement & Continuous Improvement</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                                Empower your teams with new tools while establishing a culture of ongoing continuous data capability improvement over time.
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg className="w-4 h-4 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="text-black font-bold text-sm">Key Deliverables</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Team Training</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Documentation</span>
                                    <span className="px-3 py-1.5 bg-[#1F2937]/50 border border-gray-100 text-gray-800 rounded-full text-xs font-medium">Maturity Scaling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* Interactive Data Architecture Section */}
                <section id="ai-engineering" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24 z-20 relative scroll-mt-32">
                    <div className="flex flex-col flex-wrap text-center items-center justify-center mb-12">
                        <h2 className="text-4xl text-black font-bold mb-4 tracking-tight">Interactive Data Architecture</h2>
                        <p className="text-gray-600 max-w-3xl leading-relaxed">
                            Explore our data architecture layers in an interactive view. Each layer represents a critical component of the enterprise data ecosystem, from source systems to analytics platforms.
                        </p>
                    </div>


                    <div className="border border-gray-200 rounded-[2rem] bg-[#f8f9fc] overflow-hidden flex flex-col md:flex-row shadow-2xl min-h-[600px]">
                        {/* Left Side Menu List */}
                        <div className="w-full md:w-[400px] border-b md:border-b-0 md:border-r border-gray-200 p-6 flex flex-col gap-4">
                            <div className="mb-2">
                                <h3 className="text-2xl font-bold text-black mb-2">Data Architecture Layers</h3>
                                <p className="text-gray-600 text-sm">Click any layer to explore its components and capabilities</p>
                            </div>

                            {architectureLayers.map((layer) => (
                                <button
                                    key={layer.id}
                                    onClick={() => setActiveArchitectureLayer(activeArchitectureLayer === layer.id ? '' : layer.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeArchitectureLayer === layer.id ? 'bg-[#f8f9fc] border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.1)]' : 'bg-[#f8f9fc] border border-gray-200 hover:border-gray-300'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center`}>
                                            {layer.icon}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-black font-bold">{layer.title}</h4>
                                            <p className="text-gray-600 text-xs">{layer.subtitle}</p>
                                        </div>
                                    </div>
                                    <svg className={`w-5 h-5 transition-transform ${activeArchitectureLayer === layer.id ? 'text-[#2DD4BF] rotate-0' : 'text-gray-600 -rotate-90'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                            ))}
                        </div>

                        {/* Right Side Detail Content */}
                        <div className="flex-1 p-8 bg-white relative min-h-[500px]">
                            {activeArchitectureLayer ? (() => {
                                const layer = architectureLayers.find(l => l.id === activeArchitectureLayer);
                                if (!layer) return null;
                                return (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col">
                                        <div className="flex items-start justify-between mb-8 cursor-pointer" onClick={() => setActiveArchitectureLayer('')}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center`}>
                                                    {layer.icon}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-2xl font-bold text-black">{layer.title}</h3>
                                                    </div>
                                                    <p className="text-gray-600">{layer.subtitle}</p>
                                                </div>
                                            </div>
                                            <button onClick={(e) => { e.stopPropagation(); setActiveArchitectureLayer(''); }} className="p-2 text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-gray-800">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                            {layer.cards.map((card, idx) => (
                                                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className={`w-8 h-8 rounded-lg ${layer.textbg} flex items-center justify-center ${layer.textcolor}`}>
                                                            {card.icon}
                                                        </div>
                                                        <h4 className="font-bold text-black">{card.title}</h4>
                                                    </div>
                                                    <p className="text-gray-500 text-sm">{card.desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            <h4 className="text-lg font-bold text-black mb-4">Why This Layer Matters</h4>
                                            <div className="space-y-3 text-gray-600">
                                                {layer.whyMatters.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 p-3 bg-[#f8f9fc] rounded-xl border border-gray-200 hover:border-gray-100 transition-colors">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] flex-shrink-0"></div>
                                                        <span className="text-sm font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })() : (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 rounded-3xl bg-[#2DD4BF] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                                        <svg className="w-12 h-12 text-[#042F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-black mb-4">Data Architecture Core</h3>
                                    <p className="text-gray-600 max-w-sm mb-12">Select a layer from the left to explore its components, tools, and capabilities in detail.</p>

                                    <div className="flex items-center gap-12 border-t border-gray-200 pt-8 mt-auto w-full justify-center">
                                        <div>
                                            <h4 className="text-3xl font-bold text-[#2DD4BF]">6</h4>
                                            <p className="text-xs text-gray-500 font-medium">Architecture Layers</p>
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-bold text-[#2DD4BF]">24</h4>
                                            <p className="text-xs text-gray-500 font-medium">Total Components</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Related Solutions Section */}
                <section className="w-full py-16 z-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="w-full bg-white border border-gray-200 shadow-sm rounded-[2rem] p-8 md:p-12 hover:shadow-md transition-shadow">
                            <div className="text-center mb-12 flex flex-col items-center justify-center">
                                <h2 className="text-4xl font-bold text-black mb-6">
                                    Related <span className="text-[#2DD4BF]">Solutions</span>
                                </h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Explore our complementary solutions to build a comprehensive digital transformation strategy
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Card 1: AI Solutions */}
                                <a href="/solutions/artificial-intelligence" className="bg-white border border-gray-200 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex items-start gap-4 flex-grow">
                                        <div className="w-10 h-10 rounded-xl bg-[#262039] shrink-0 flex items-center justify-center shadow-sm mt-1">
                                            <svg className="w-5 h-5 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-black group-hover:text-indigo-600 leading-tight transition-colors mb-2">Artificial Intelligence</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                Advanced machine learning, computer vision, and natural language processing for intelligent automation
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </div>
                                </a>

                                {/* Card 2: Application Development */}
                                <a href="/solutions/application-development" className="bg-white border border-gray-200 hover:border-teal-500/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex items-start gap-4 flex-grow">
                                        <div className="w-10 h-10 rounded-xl bg-[#14262E] shrink-0 flex items-center justify-center shadow-sm mt-1">
                                            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-black group-hover:text-teal-600 leading-tight transition-colors mb-2">Application Development</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                Full-stack custom software development with modern frameworks and cloud-native architecture
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </div>
                                </a>

                                {/* Card 3: Process Automation */}
                                <a href="/solutions/process-automation" className="bg-white border border-gray-200 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex items-start gap-4 flex-grow">
                                        <div className="w-10 h-10 rounded-xl bg-[#372323] shrink-0 flex items-center justify-center shadow-sm mt-1">
                                            <svg className="w-5 h-5 text-[#F87171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-black group-hover:text-red-600 leading-tight transition-colors mb-2">Process Automation</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                Comprehensive BPA, RPA, and IPA solutions to automate workflows and reduce operational costs
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-center text-sm font-semibold text-red-600 group-hover:text-red-700 transition-colors">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="w-full flex-1 mt-auto z-20 bg-white">
                <Footer />
            </div>
        </div>
    );
}
