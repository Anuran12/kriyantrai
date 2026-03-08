import React from 'react';
import Footer from '@/components/Footer';

export default function ContactSalesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center bg-white/50 relative z-10 w-full">
                <div className="w-full max-w-6xl flex flex-col gap-8">
                    <div className="bg-white rounded-2xl w-full relative shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row my-auto">
                        {/* Left Side: Content */}
                        <div className="flex-1 p-8 md:p-14 flex flex-col justify-center bg-white">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Talk to our Sales team</h2>

                            <ul className="space-y-6 mb-12">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A1F9F3] flex items-center justify-center text-gray-900 mt-0.5">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        Learn how your team can ramp up productivity with better collaboration.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A1F9F3] flex items-center justify-center text-gray-900 mt-0.5">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        Watch Miro in action with your own live demo, customized for your business.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A1F9F3] flex items-center justify-center text-gray-900 mt-0.5">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        See what scaling without friction looks like when you use kriyantrai Enterprise to fit your exact needs.
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-2 pt-10 border-t border-gray-100 pr-10">
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

                        {/* Right Side: Form */}
                        <div className="flex-1 bg-[#A1F9F3] p-8 md:p-14 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight max-w-md">
                                Fill out this quick form and we'll get back to you shortly
                            </h3>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="email">Work Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="+91 0000000000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="useCase">Use Case</label>
                                    <select id="useCase" defaultValue="" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors">
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
                                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none resize-none transition-colors" placeholder="Your space to ask questions, tell us your goals, or anything else you need from us."></textarea>
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
                            <div className="bg-white rounded-xl card-hover-effect p-8 flex flex-col justify-center gap-4 h-[160px] md:h-[180px] group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1a2b4b] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1a2b4b]">Business Hours</h4>
                                </div>
                                <p className="text-gray-600 ml-14">Monday - Friday: 8:00 AM - 5:00 PM IST</p>
                            </div>

                            {/* Global Reach Card */}
                            <div className="bg-white rounded-xl card-hover-effect p-8 flex flex-col justify-center gap-4 h-[160px] md:h-[180px] group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#153776] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1a2b4b]">Global Reach</h4>
                                </div>
                                <p className="text-gray-600 ml-14">Serving clients worldwide with innovative solutions</p>
                            </div>
                        </div>

                        {/* Contact Details Section Underneath */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12 w-full flex flex-col items-center justify-center gap-8 text-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-bold text-[#1a2b4b] text-sm uppercase tracking-wider">Website:</span>
                                    <a href="https://www.kriyantrai.com" className="text-[#153776] font-medium hover:underline">www.kriyantrai.com</a>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-bold text-[#1a2b4b] text-sm uppercase tracking-wider">Phone:</span>
                                    <span className="text-gray-700 font-medium">+91 6289946256</span>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-bold text-[#1a2b4b] text-sm uppercase tracking-wider">Email:</span>
                                    <a href="mailto:info@kriyantrai.com" className="text-[#153776] font-medium hover:underline">info@kriyantrai.com</a>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-bold text-[#1a2b4b] text-sm uppercase tracking-wider">Address:</span>
                                    <span className="text-gray-700 leading-relaxed font-medium">
                                        68/88 AMARPALLY JESSORE ROAD KOLKATA,<br />KOLKATA, 700074
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button className="bg-[#153776] hover:bg-[#0d2146] transition-colors text-white font-bold py-3.5 px-8 rounded-lg flex items-center justify-center gap-2 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
