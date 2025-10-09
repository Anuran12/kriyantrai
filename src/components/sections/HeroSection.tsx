"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Geometric patterns */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
        >
          <div className="w-full h-full border-2 border-[#00D4FF] rounded-lg transform rotate-45"></div>
        </motion.div>

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-20 right-20 w-24 h-24 opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full"></div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-[#00D4FF] rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00D4FF]/10 to-[#FF6B35]/10 rounded-full border border-[#00D4FF]/20"
            >
              <span className="text-[#0A2342] font-medium text-sm">
                Transforming Business with AI & Innovation
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-r from-[#9fefe7] to-[#d8f8f5] text-gray-700 px-6 py-3 inline-block text-2xl sm:text-3xl lg:text-4xl font-bold rounded-lg">
                <h1>Build Faster. Automate Smarter.</h1>
              </div>
              <div className="bg-gradient-to-r from-[#9fefe7] to-[#d8f8f5] text-gray-700 px-6 py-3 inline-block text-xl sm:text-xl lg:text-2xl font-bold rounded-lg">
                <h1>Web, Data & AI Solutions for Growth</h1>
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-[#64748B] leading-relaxed"
            >
              We design and ship high‑quality websites, apps, dashboards, and AI
              automations that streamline operations and accelerate growth.
              Partner with our team to turn ideas into scalable,
              production‑ready products.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-[#153776] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/api/placeholder/600/500"
                alt="AI and ML Solutions Animation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#00D4FF] rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#FF6B35] rounded-lg opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
