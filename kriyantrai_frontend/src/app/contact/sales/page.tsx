import React from 'react';
import Footer from '@/components/Footer';

export default function ContactSalesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center bg-white/50 relative z-10 w-full">
                <div className="w-full max-w-6xl flex flex-col gap-8">
                    <div className="w-full relative flex flex-col md:flex-row gap-8 my-auto">
                        {/* Left Side: Content Cards */}
                        <div className="flex-1 flex flex-col gap-8 justify-start">
                            {/* Card 1: Talk to our Sales team */}
                            <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 lg:p-12 hover:-translate-y-2 transition-transform duration-300">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">Talk to our Sales team</h2>

                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] mt-1">
                                            <svg className="w-4 h-4 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-gray-700 text-lg leading-relaxed">
                                            Learn how our AI and automation solutions can accelerate your business growth.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] mt-1">
                                            <svg className="w-4 h-4 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-gray-700 text-lg leading-relaxed">
                                            Watch Kriyantrai's technology in action with a live demo tailored to your specific industry needs.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] mt-1">
                                            <svg className="w-4 h-4 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-gray-700 text-lg leading-relaxed">
                                            Discover how enterprise-grade digital transformation can perfectly fit and resolve your operational friction.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: Let's connect */}
                            <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 lg:p-12 hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">Let's connect</h3>
                                <div className="space-y-4 text-gray-700 text-[17px] leading-relaxed">
                                    <p>
                                        At Kriyantrai, we begin by understanding your challenges from the ground level. We carefully listen to your problem and design the solution for you.
                                    </p>
                                    <p>
                                        Our team commits the best resources and expertise to solve your problems in a way that aligns with your vision. With Kriyantrai, you get solutions built around your choice — precise, practical, and performance-driven.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="flex-1 bg-teal-100/60 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-teal-200/50 p-8 md:p-10 lg:p-12 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 leading-tight max-w-md">
                                Fill out this quick form and we'll get back to you shortly
                            </h3>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="email">Work Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="+91 0000000000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="useCase">Use Case</label>
                                    <select id="useCase" defaultValue="" className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm">
                                        <option value="" disabled>Please select...</option>
                                        <option value="ai">Artificial Intelligence</option>
                                        <option value="data">Data Solutions</option>
                                        <option value="automation">Process Automation</option>
                                        <option value="generative">Generative AI Services</option>
                                        <option value="bi">Business Intelligence</option>
                                        <option value="appdev">Application Development</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="message">Message (required)</label>
                                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none resize-none transition-colors shadow-sm" placeholder="Your space to ask questions, tell us your goals, or anything else you need from us."></textarea>
                                </div>

                                <div className="pt-2">
                                    <p className="text-sm text-gray-800 mb-6">
                                        By clicking submit you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                    <button type="submit" className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition-colors w-full sm:w-auto">
                                        Contact Sales
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Details Row */}
                    <div className="w-full flex flex-col gap-8 bg-transparent pb-10">
                        {/* Info Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Business Hours Card */}
                            <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col justify-center gap-4 h-[160px] md:h-[180px] group hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#153776] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#153776] transition-colors">Business Hours</h4>
                                </div>
                                <p className="text-gray-600 ml-16 font-medium">Monday - Friday: 8:00 AM - 5:00 PM IST</p>
                            </div>

                            {/* Global Reach Card */}
                            <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col justify-center gap-4 h-[160px] md:h-[180px] group hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#14b8a6] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#14b8a6] transition-colors">Global Reach</h4>
                                </div>
                                <p className="text-gray-600 ml-16 font-medium">Serving clients worldwide with innovative solutions</p>
                            </div>
                        </div>

                        {/* Contact Details Section Underneath */}
                        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 lg:p-12 w-full flex flex-col items-center justify-center gap-10 text-center relative overflow-hidden">
                            {/* Decorative Top Line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#14b8a6] via-[#153776] to-[#F67112] rounded-b-full"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-6xl mt-2 text-left">
                                {/* Website */}
                                <div className="flex items-center gap-4 justify-start bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <a href="https://www.kriyantrai.com" className="text-[#153776] font-bold hover:text-[#14b8a6] transition-colors truncate">www.kriyantrai.com</a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 justify-start bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-700 font-bold truncate">+91 6289946256</span>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 justify-start bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <a href="mailto:info@kriyantrai.com" className="text-[#153776] font-bold hover:text-[#14b8a6] transition-colors truncate">info@kriyantrai.com</a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4 justify-start bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors sm:col-span-2 lg:col-span-1">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-700 text-sm leading-relaxed font-semibold">
                                            68/88 AMARPALLY JESSORE ROAD,<br />KOLKATA, 700074
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 w-full flex justify-center border-t border-gray-100 pt-10">
                                <button className="bg-[#153776] hover:bg-[#0d2146] transition-all duration-300 transform hover:-translate-y-1 text-white font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(21,55,118,0.39)] hover:shadow-[0_6px_20px_rgba(21,55,118,0.23)]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    Request a Meeting
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Animated Gradient Footer */}
            <Footer />
        </div>
    );
}
