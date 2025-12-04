"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Check, Loader, AlertTriangle } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";

const instr = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [submissionState, setSubmissionState] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionState === "loading") return;

    if (!formData.fullName || !formData.email || !formData.message) {
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
        setFormData({ fullName: "", email: "", company: "", message: "" });
        setTimeout(() => setSubmissionState("idle"), 4000);
      } else {
        let errorMessage = "Something went wrong.";

        try {
          const errorData = await response.json();
          if (errorData?.message) errorMessage = errorData.message;
        } catch {
          errorMessage = response.statusText || errorMessage;
        }

        console.error("Submission failed:", errorMessage);
        setSubmissionState("error");
        setTimeout(() => setSubmissionState("idle"), 5000);
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
      setSubmissionState("error");
      setTimeout(() => setSubmissionState("idle"), 5000);
    }
  };

  const whyChooseItems = [
    "Expert team with 10+ years of experience",
    "24/7 support and consultation",
    "Custom solutions tailored to your needs",
    "Proven track record of successful projects",
  ];

  const isButtonDisabled = ["loading", "success"].includes(submissionState);

  let buttonContent;
  let buttonColorClass;

  switch (submissionState) {
    case "loading":
      buttonContent = (
        <>
          <Loader size={24} className="animate-spin" />
          Sending...
        </>
      );
      buttonColorClass = "bg-[#173876] cursor-not-allowed";
      break;
    case "success":
      buttonContent = (
        <>
          <Check size={24} />
          Message Sent!
        </>
      );
      buttonColorClass = "bg-green-500 cursor-not-allowed";
      break;
    case "error":
      buttonContent = (
        <>
          <AlertTriangle size={24} />
          Failed. Try again.
        </>
      );
      buttonColorClass = "bg-red-500 hover:bg-red-600";
      break;
    default:
      buttonContent = (
        <>
          Send Message
          <Send size={20} />
        </>
      );
      buttonColorClass =
        "bg-[#F66F13] hover:bg-[#d45a0a] hover:shadow-lg";
      break;
  }

  return (
    <section className="bg-[#F9FAFB] min-h-screen w-full">
      {/* Hero */}
      <div className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-6 py-12">
        
        {/* Left Content */}
        <motion.div
          className="max-w-4xl w-full text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`${instr.className} text-5xl md:text-6xl font-bold text-[#0A2342] mb-6`}
          >
            Get in <span className="text-[#F66F13]">Touch</span>
          </h1>
          <p
            className={`${instr.className} text-xl md:text-2xl text-gray-700 mb-8`}
          >
            Let's build something amazing together
          </p>
          <div className="w-24 h-1 bg-[#F66F13] mx-auto md:mx-0 rounded-full" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-10 text-black"
          >
            <h2 className={`${instr.className} text-3xl font-bold text-[#0A2342] mb-4`}>
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              We’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {["fullName", "email", "company"].map((field, i) => (
                <div key={i}>
                  <label className="block text-[#0A2342] font-semibold mb-2 capitalize">
                    {field === "company" ? (
                      <>Company <span className="text-gray-400">(Optional)</span></>
                    ) : (
                      <>
                        {field.replace("Name", " Name")} <span className="text-[#F66F13]">*</span>
                      </>
                    )}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== "company"}
                    disabled={isButtonDisabled}
                    placeholder={
                      field === "fullName"
                        ? "John Doe"
                        : field === "email"
                        ? "john@example.com"
                        : "Your Company Name"
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F66F13]"
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-[#0A2342] font-semibold mb-2">
                  Message <span className="text-[#F66F13]">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isButtonDisabled}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F66F13]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-full py-4 flex items-center justify-center gap-3 text-white font-semibold rounded-xl transition ${buttonColorClass}`}
              >
                {buttonContent}
              </button>
            </form>
          </motion.div>

          {/* Info + Why us */}
          <div className="space-y-8">

            {/* Contact Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[#0A2342] to-[#173876] rounded-3xl shadow-2xl p-10 text-white"
            >
              <h2 className={`${instr.className} text-3xl font-bold mb-4`}>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F66F13] rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">info@kriyantrai.com</p>
                    <p className="text-sm text-gray-400">Email anytime</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F66F13] rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">+91 6289946256</p>
                    <p className="text-sm text-gray-400">Mon–Fri 8am–5pm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why choose us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-10"
            >
              <h2 className={`${instr.className} text-3xl font-bold text-[#0A2342] mb-6`}>
                Why Choose Us?
              </h2>

              <div className="space-y-4">
                {whyChooseItems.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 bg-[#F66F13] rounded-full mt-2" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      <Footer />
    </section>
  );
}
