"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";

type SalesFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  useCase: string;
  message: string;
};

const initialFormState: SalesFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  useCase: "",
  message: "",
};

export default function ContactSalesPage() {
  const [formData, setFormData] = useState<SalesFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((current) => ({ ...current, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact-sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send inquiry right now.");
      }

      setSubmitMessage("Your inquiry has been sent. Our team will contact you shortly.");
      setFormData(initialFormState);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Unable to send inquiry right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center bg-white/50 relative z-10 w-full">
        <div className="w-full max-w-6xl flex flex-col gap-8">
          <div className="w-full relative flex flex-col md:flex-row gap-8 my-auto">
            <div className="flex-1 flex flex-col gap-8 justify-start">
              <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 hover:-translate-y-2 transition-transform duration-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                  Talk to our Sales team
                </h2>
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
                      Watch Kriyantrai&apos;s technology in action with a live demo tailored to your specific industry needs.
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

              <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 tracking-tight">Let&apos;s connect</h3>
                <div className="space-y-4 text-gray-700 text-base sm:text-[17px] leading-relaxed">
                  <p>
                    At Kriyantrai, we begin by understanding your challenges from the ground level. We carefully listen to your problem and design the solution for you.
                  </p>
                  <p>
                    Our team commits the best resources and expertise to solve your problems in a way that aligns with your vision. With Kriyantrai, you get solutions built around your choice, precise, practical, and performance-driven.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-teal-100/60 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-teal-200/50 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 leading-tight max-w-md">
                Fill out this quick form and we&apos;ll get back to you shortly
              </h3>

              <form id="sales-form" className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                    <input type="text" id="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" id="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="email">Work Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm" placeholder="+91 6289946256" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="useCase">Solution <span className="text-red-500">*</span></label>
                  <select id="useCase" required value={formData.useCase} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors shadow-sm">
                    <option value="">Please select...</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="data">Data Solutions</option>
                    <option value="automation">Process Automation</option>
                    <option value="appdev">Application Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="message">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-white/60 bg-white/80 text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none resize-none transition-colors shadow-sm" placeholder="Your space to ask questions, tell us your goals, or anything else you need from us."></textarea>
                </div>

                {submitMessage ? <p className="text-sm font-medium text-green-700">{submitMessage}</p> : null}
                {submitError ? <p className="text-sm font-medium text-red-600">{submitError}</p> : null}

                <div className="pt-2 flex flex-col gap-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="flex items-center h-5">
                      <input 
                        type="checkbox" 
                        required 
                        className="w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer shadow-sm transition-colors group-hover:border-blue-500"
                      />
                    </div>
                    <span className="text-sm text-gray-700 leading-tight pt-0.5">
                      I have read and agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">Terms and Conditions</a>
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="flex items-center h-5">
                      <input 
                        type="checkbox" 
                        required 
                        className="w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer shadow-sm transition-colors group-hover:border-blue-500"
                      />
                    </div>
                    <span className="text-sm text-gray-700 leading-tight pt-0.5">
                      I have read and agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">Privacy Policy</a>, <a href="/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">Cookies Policy</a>, and <a href="/sla" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">Service Level Agreement (SLA)</a>
                    </span>
                  </label>

                  <button type="submit" disabled={isSubmitting} className="mt-2 px-8 py-3.5 bg-black hover:bg-gray-800 disabled:bg-gray-500 text-white font-semibold rounded-lg shadow-md transition-colors w-full sm:w-auto">
                    {isSubmitting ? "Sending..." : "Contact Sales"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-10 bg-transparent pb-16 pt-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight flex items-center justify-center gap-3">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                Fast response. Real solutions. Global reach.
              </p>
            </div>

            <div className="w-full max-w-[1000px] bg-sky-50/50 backdrop-blur-sm rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-sky-100 p-6 sm:p-8 flex flex-col md:flex-row gap-6 lg:gap-8 relative my-4">
              {/* Left Side: Contact Methods Container */}
              <div className="flex-1 flex flex-col gap-6">
                
                {/* Status Pill */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 bg-green-100/50 rounded-full border border-green-200/50">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 font-bold text-sm">Available now</span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium">We&apos;re available when your business needs us most</span>
                </div>

                {/* Grid for 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 h-full">
                  {/* Website Card */}
                  <a href="https://www.kriyantrai.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center justify-center p-3 sm:p-2 md:p-4 lg:p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-100 bg-white shadow-sm flex items-center justify-center text-gray-700 mb-4 lg:mb-6 group-hover:scale-110 group-hover:text-blue-600 transition-all">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </div>
                    <span className="text-gray-900 font-bold text-[11px] xl:text-[13px] mb-2 whitespace-nowrap w-full">www.kriyantrai.com</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">Visit Website</span>
                  </a>

                  {/* Phone Card */}
                  <a href="tel:+916289946256" className="flex flex-col items-center text-center justify-center p-3 sm:p-2 md:p-4 lg:p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-100 bg-white shadow-sm flex items-center justify-center text-gray-700 mb-4 lg:mb-6 group-hover:scale-110 group-hover:text-blue-600 transition-all">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <span className="text-gray-900 font-bold text-[11px] xl:text-[13px] mb-2 whitespace-nowrap w-full">+91 6289946256</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">Give Us a Call</span>
                  </a>

                  {/* Email Card */}
                  <a href="mailto:info@kriyantrai.com" className="flex flex-col items-center text-center justify-center p-3 sm:p-2 md:p-4 lg:p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-100 bg-white shadow-sm flex items-center justify-center text-gray-700 mb-4 lg:mb-6 group-hover:scale-110 group-hover:text-blue-600 transition-all">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="text-gray-900 font-bold text-[11px] xl:text-[13px] mb-2 whitespace-nowrap w-full">info@kriyantrai.com</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">Send an Email</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Office Address Card */}
              <div className="w-full md:w-[320px] bg-[#f8fbff] border border-gray-100 rounded-2xl overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 flex-shrink-0">
                <div className="h-32 w-full relative bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Office Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-white">
                    <svg className="w-8 h-8 text-red-500 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center p-1">
                    <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-gray-500 text-sm font-medium flex items-center gap-2 mb-4 mt-2">
                    Visit Office
                  </h4>
                  <p className="text-[#0e1726] font-semibold text-base leading-relaxed tracking-wide">
                    68/88 AMARPALLY,<br />JESSORE ROAD,<br />KOLKATA, 700074
                  </p>
                </div>
              </div>
            </div>

            {/* Checkmarks / Guarantees */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2.5 rounded-full border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md text-gray-800 font-semibold text-[15px] hover:-translate-y-0.5 transition-transform duration-300">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span>24h response guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2.5 rounded-full border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md text-gray-800 font-semibold text-[15px] hover:-translate-y-0.5 transition-transform duration-300">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span>Free consultation call</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2.5 rounded-full border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md text-gray-800 font-semibold text-[15px] hover:-translate-y-0.5 transition-transform duration-300">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span>Industry experts onboard</span>
              </div>
            </div>

            {/* Request a Meeting Button */}
            <div className="mt-8">
              <button 
                onClick={(e) => { e.preventDefault(); document.getElementById('sales-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="relative group overflow-hidden bg-gradient-to-r from-[#F67112] via-[#A1F9F3] to-[#153776] text-black font-bold py-4 px-10 rounded-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(246,113,18,0.3)] hover:shadow-[0_10px_40px_rgba(246,113,18,0.5)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="relative z-10 text-lg">Request a Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
