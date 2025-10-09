"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@kriyantrai.com",
    description: "Send us an email anytime",
    color: "#00D4FF",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
    color: "#FF6B35",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "24/7 Support",
    description: "We're here when you need us",
    color: "#FF8C42",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[calc(40vh)] flex items-center justify-center bg-gradient-to-br from-[#0A2342] via-[#00D4FF]/10 to-[#FF6B35]/10 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-32 h-32 opacity-10"
            >
              <div className="w-full h-full border-2 border-[#00D4FF] rounded-lg transform rotate-45"></div>
            </motion.div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Ready to transform your business with AI and automation? Let's
                discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A2342] mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-[#64748B] text-lg">
                    We'd love to hear from you. Fill out the form below and
                    we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="text-green-800 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#0A2342] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent transition-all duration-300 ${
                          errors.name
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300 hover:border-[#00D4FF]"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#0A2342] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent transition-all duration-300 ${
                          errors.email
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300 hover:border-[#00D4FF]"
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#0A2342] mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent hover:border-[#00D4FF] transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#0A2342] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent transition-all duration-300 ${
                        errors.message
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300 hover:border-[#00D4FF]"
                      }`}
                      placeholder="Tell us about your project or how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-[#0A2342] to-[#00D4FF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A2342] mb-4">
                    Contact Information
                  </h2>
                  <p className="text-[#64748B] text-lg">
                    Prefer to reach out directly? Here are all the ways you can
                    get in touch with our team.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${info.color}15` }}
                        >
                          <info.icon
                            size={24}
                            style={{ color: info.color }}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-display font-bold text-[#0A2342] mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#0A2342] group-hover:to-[#00D4FF] transition-all duration-300">
                            {info.title}
                          </h3>
                          <p className="text-[#0A2342] font-semibold mb-1">
                            {info.content}
                          </p>
                          <p className="text-[#64748B] text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 p-6 bg-gradient-to-r from-[#00D4FF]/5 to-[#FF6B35]/5 rounded-xl border border-[#00D4FF]/20"
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare size={20} className="text-[#00D4FF] mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-[#0A2342] mb-2">
                        Why Choose Us?
                      </h3>
                      <ul className="text-[#64748B] space-y-1 text-sm">
                        <li>• Expert team with 10+ years of experience</li>
                        <li>• 24/7 support and consultation</li>
                        <li>• Custom solutions tailored to your needs</li>
                        <li>• Proven track record of successful projects</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
