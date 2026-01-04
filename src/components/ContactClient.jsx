"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Loader, AlertTriangle, Clock, Globe } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";

const instr = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ContactClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [submissionState, setSubmissionState] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionState === "loading") return;

    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    setSubmissionState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionState("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", organization: "", message: "" });
        setTimeout(() => setSubmissionState("idle"), 4000);
      } else {
        setSubmissionState("error");
        setTimeout(() => setSubmissionState("idle"), 5000);
      }
    } catch (error) {
      setSubmissionState("error");
      setTimeout(() => setSubmissionState("idle"), 5000);
    }
  };

  const isButtonDisabled = ["loading", "success"].includes(submissionState);

  let buttonContent;
  let buttonColorClass;

  switch (submissionState) {
    case "loading":
      buttonContent = (
        <>
          <Loader size={20} className="animate-spin" />
          Sending...
        </>
      );
      buttonColorClass = "bg-[#153776] cursor-not-allowed opacity-80";
      break;
    case "success":
      buttonContent = (
        <>
          <Check size={20} />
          Message Sent!
        </>
      );
      buttonColorClass = "bg-green-600 cursor-not-allowed";
      break;
    case "error":
      buttonContent = (
        <>
          <AlertTriangle size={20} />
          Failed. Try again.
        </>
      );
      buttonColorClass = "bg-red-600 hover:bg-red-700";
      break;
    default:
      buttonContent = (
        <>
          Send message
          <Send size={18} />
        </>
      );
      buttonColorClass = "bg-[#153776] hover:bg-[#1a4489]";
      break;
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen w-full">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#153776] via-[#1a4489] to-[#153776] py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0' style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-8`}>
              Get in touch
            </h1>
            <motion.div 
              className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea odio amet reprehenderit mollitia quis nulla aliquid eligendi repellat beatae corrupti, in dignissimos, ipsam sunt dolorum. Sequi officiis eum non vitae.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Left Side - Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`${instr.className} text-3xl font-bold text-[#153776] mb-6`}>
                Send a message
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-[#153776] font-semibold min-w-[80px]">Website:</div>
                  <a href="https://www.kriyantrai.com/" className="text-[#F67C0E] hover:underline">
                    www.kriyantrai.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#153776] font-semibold min-w-[80px]">Phone:</div>
                  <div className="text-gray-700">+91 6289946256</div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#153776] font-semibold min-w-[80px]">Email:</div>
                  <a href="mailto:info@kriyantrai.com" className="text-gray-700 hover:text-[#F67C0E]">
                    info@kriyantrai.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-[#153776] font-semibold min-w-[80px]">Address:</div>
                  <a 
                    href="https://maps.google.com/?q=21+West+34th+Street,+New+York,+NY+10001" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#F67C0E]"
                  >
                    21 West 34th Street, New York, NY 10001
                  </a>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="mt-8 space-y-4">
                
                {/* Request Meeting Button */}
              <motion.button
                className="w-full mt-8 bg-[#F67C0E] hover:bg-[#e56d00] text-white font-semibold py-4 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all"
                whileHover={{ y: -2, shadow: "0 10px 25px rgba(246, 124, 14, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <Clock size={20} />
                Request a Meeting
              </motion.button>

              {/* Additional Info Cards */}
              <div className="mt-8 space-y-4">
                <motion.div
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#153776]/10 flex items-center justify-center">
                      <Clock className="text-[#153776]" size={20} />
                    </div>
                    <h3 className="font-semibold text-[#153776]">Business Hours</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-13">Monday - Friday: 8:00 AM - 5:00 PM IST</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#F67C0E]/10 flex items-center justify-center">
                      <Globe className="text-[#F67C0E]" size={20} />
                    </div>
                    <h3 className="font-semibold text-[#153776]">Global Reach</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-13">Serving clients worldwide with innovative solutions</p>
                </motion.div>
              </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <div className="space-y-6">
                  
                  {/* Name Fields Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        First name <span className="text-[#F67C0E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={isButtonDisabled}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#153776] focus:ring-2 focus:ring-[#153776]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Last name <span className="text-[#F67C0E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={isButtonDisabled}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#153776] focus:ring-2 focus:ring-[#153776]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Email <span className="text-[#F67C0E]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isButtonDisabled}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#153776] focus:ring-2 focus:ring-[#153776]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isButtonDisabled}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#153776] focus:ring-2 focus:ring-[#153776]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Organization <span className="text-[#F67C0E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      disabled={isButtonDisabled}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#153776] focus:ring-2 focus:ring-[#153776]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isButtonDisabled}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#153776] focus:ring-2 focus:ring-[#153776]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                    className={`w-full py-3 px-6 flex items-center justify-center gap-2 text-white font-semibold rounded-lg transition-all ${buttonColorClass}`}
                  >
                    {buttonContent}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}