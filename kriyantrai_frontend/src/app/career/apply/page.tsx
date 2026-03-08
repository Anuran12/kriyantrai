"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';

export default function ApplyPage() {
    const [submitted, setSubmitted] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        cvFile: null as File | null,
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        location: '',
        companiesWorked: '',
        skills: '',
        noticePeriod: '',
        currentCtc: '',
        expectedCtc: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({
                ...formData,
                cvFile: e.target.files[0]
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            {/* Main content centered with top padding for navbar */}
            <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 flex flex-col items-center justify-start gap-8 bg-transparent relative z-10 w-full">

                <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center text-center gap-4 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#153776]/10 text-[#153776] font-semibold text-sm mb-2">
                        Job Application
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-2">
                        Apply for Internship
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto font-medium">
                        Fill in your details to apply for this position. Upload your CV and we'll automatically extract key information. You can edit any field before submitting.
                    </p>
                </div>

                {/* Form Container */}
                <div className="max-w-3xl w-full mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col gap-8 mb-16">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* CV Upload */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="cvFile">Upload CV/Resume <span className="text-red-500">*</span></label>
                                <input
                                    type="file"
                                    id="cvFile"
                                    accept=".pdf,.doc,.docx"
                                    required
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#153776]/10 file:text-[#153776] hover:file:bg-[#153776]/20 cursor-pointer"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="fullName">Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="Full Name"
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="email@example.com"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="+91 6289946256"
                                    />
                                </div>

                                {/* Total Experience */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="experience">Total Experience</label>
                                    <input
                                        type="text"
                                        id="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="e.g., 5 years"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="City, Country"
                                    />
                                </div>

                                {/* Number of Companies Worked For */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="companiesWorked">Number of Companies Worked For</label>
                                    <select
                                        id="companiesWorked"
                                        value={formData.companiesWorked}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all appearance-none"
                                    >
                                        <option value="" disabled>Select...</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="skills">Skills (comma separated)</label>
                                <input
                                    type="text"
                                    id="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                    placeholder="Python, React, Machine Learning, Data Science"
                                />
                            </div>

                            <hr className="my-2 border-gray-100" />
                            <h3 className="text-xl font-bold text-gray-900">Additional Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Notice Period */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="noticePeriod">Notice Period</label>
                                    <input
                                        type="text"
                                        id="noticePeriod"
                                        value={formData.noticePeriod}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="e.g., 30 days, Immediate"
                                    />
                                </div>

                                {/* Current CTC */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="currentCtc">Current CTC</label>
                                    <input
                                        type="text"
                                        id="currentCtc"
                                        value={formData.currentCtc}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="e.g., ₹800,000"
                                    />
                                </div>

                                {/* Expected CTC */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="expectedCtc">Expected CTC</label>
                                    <input
                                        type="text"
                                        id="expectedCtc"
                                        value={formData.expectedCtc}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#153776] outline-none transition-all"
                                        placeholder="e.g., ₹1000,000"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#153776] hover:bg-[#0d2146] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center gap-3"
                                >
                                    Submit Application
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                        </form>
                    ) : (
                        /* Success Message UI */
                        <div className="w-full flex flex-col items-center text-center p-8 animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-sm border-4 border-white ring-4 ring-green-50">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Application Submitted!</h3>
                            <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-lg mb-8">
                                Thank you for applying to Kriyantrai. We've received your details and our team will review your application shortly.
                            </p>
                            <button
                                onClick={() => window.location.href = '/career'}
                                className="bg-[#F67112] hover:bg-[#e0620c] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                Back to Careers
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
