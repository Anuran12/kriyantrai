"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABannerSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#0A2342] via-[#00D4FF]/20 to-[#FF6B35]/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 opacity-10 hidden md:block"
        >
          <div className="w-full h-full border-2 border-[#00D4FF] rounded-lg transform rotate-45"></div>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-24 h-24 opacity-10 hidden md:block"
        >
          <div className="w-full h-full bg-[#FF6B35] rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI, ML, and automation solutions can
            drive innovation and growth for your organization.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <button className="group inline-flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-white text-[#0A2342] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Get In Touch
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
