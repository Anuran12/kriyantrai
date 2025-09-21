"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  InnovationIcon,
  IntegrityIcon,
  ClientSuccessIcon,
  FutureFirstIcon,
} from "@/components/icons/CustomIcons";
import Image from "next/image";

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that redefine industry standards.",
    icon: InnovationIcon,
    color: "#00D4FF",
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparent communication, honest practices, and delivering on our promises.",
    icon: IntegrityIcon,
    color: "#FF6B35",
  },
  {
    title: "Client Success",
    description:
      "Your success is our success. We are committed to delivering exceptional results that drive your business forward.",
    icon: ClientSuccessIcon,
    color: "#0A2342",
  },
  {
    title: "Future-First Approach",
    description:
      "We build solutions that not only solve today's challenges but are designed to evolve with tomorrow's opportunities.",
    icon: FutureFirstIcon,
    color: "#FF8C42",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Visionary leader with 15+ years in AI and machine learning, previously at Google and Microsoft.",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "Technical expert specializing in scalable architectures and cloud solutions, ex-Amazon architect.",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning with expertise in deep learning and computer vision applications.",
    image: "/api/placeholder/300/300",
  },
  {
    name: "Emily Zhang",
    role: "Lead Developer",
    bio: "Full-stack developer with passion for creating seamless user experiences and robust backend systems.",
    image: "/api/placeholder/300/300",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-[#0A2342] via-[#00D4FF]/10 to-[#FF6B35]/10 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-10 w-32 h-32 opacity-10"
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                About Kriyantrai
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where innovation meets transformation. We're on a mission to
                revolutionize businesses through the power of AI, machine
                learning, and intelligent automation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A2342] mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-[#64748B] leading-relaxed">
                  <p>
                    Founded in 2020, Kriyantrai emerged from a simple yet
                    powerful idea: that every business, regardless of size,
                    deserves access to world-class AI and automation solutions.
                    Our name, derived from Sanskrit meaning "action" or
                    "creation," reflects our commitment to turning innovative
                    ideas into tangible results.
                  </p>
                  <p>
                    What started as a small team of passionate technologists has
                    grown into a full-service technology partner. We've helped
                    hundreds of businesses across industries transform their
                    operations, reduce costs, and unlock new growth
                    opportunities through intelligent automation and data-driven
                    insights.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of the AI
                    revolution, combining cutting-edge technology with deep
                    industry expertise to deliver solutions that don't just work
                    today, but evolve and scale with your business tomorrow.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/api/placeholder/600/400"
                    alt="Kriyantrai team collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-display font-bold mb-2">
                      Innovation in Action
                    </h3>
                    <p className="text-gray-200">
                      Our team working on cutting-edge AI solutions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A2342] mb-6">
                Our Values
              </h2>
              <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
                These core principles guide everything we do, from how we work
                with clients to the solutions we build and the impact we create.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${value.color}20` }}
                        >
                          <value.icon
                            size={24}
                            style={{ color: value.color }}
                          />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-[#0A2342] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#0A2342] group-hover:to-[#00D4FF] transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-[#64748B] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A2342] mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of
                experience in AI, software development, and business
                transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-[#0A2342] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#0A2342] group-hover:to-[#00D4FF] transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#00D4FF] font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#00D4FF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our
                expertise in AI, ML, and automation solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A2342] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
