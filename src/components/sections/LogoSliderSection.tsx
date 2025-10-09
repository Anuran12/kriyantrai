"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const logos = [
  { name: "Microsoft", src: "/api/placeholder/120/40", alt: "Microsoft Logo" },
  { name: "Google", src: "/api/placeholder/120/40", alt: "Google Logo" },
  { name: "Amazon", src: "/api/placeholder/120/40", alt: "Amazon Logo" },
  { name: "Meta", src: "/api/placeholder/120/40", alt: "Meta Logo" },
  { name: "Apple", src: "/api/placeholder/120/40", alt: "Apple Logo" },
  { name: "Tesla", src: "/api/placeholder/120/40", alt: "Tesla Logo" },
  { name: "Netflix", src: "/api/placeholder/120/40", alt: "Netflix Logo" },
];

export default function LogoSliderSection() {
  const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 5));

  const rotateLeft = () => {
    const newLogos = [...logos];
    const last = newLogos.pop();
    if (last) newLogos.unshift(last);
    setVisibleLogos(newLogos.slice(0, 5));
  };

  const rotateRight = () => {
    const newLogos = [...logos];
    const first = newLogos.shift();
    if (first) newLogos.push(first);
    setVisibleLogos(newLogos.slice(0, 5));
  };

  return (
    <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We&apos;re proud to partner with leading companies across various
            industries, delivering innovative AI, ML, and automation solutions.
          </p>
        </motion.div>

        <div className="flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={rotateLeft}
            className="p-3 text-white hover:text-[#00D4FF] transition-colors duration-300 focus:outline-none"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="flex transition-all duration-500 ease-in-out mx-8 overflow-hidden">
            {visibleLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mx-6 flex-shrink-0"
              >
                <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-[#00D4FF]/50 transition-all duration-300">
                  <span className="text-white font-semibold text-sm">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={rotateRight}
            className="p-3 text-white hover:text-[#00D4FF] transition-colors duration-300 focus:outline-none"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Additional partner logos grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { name: "Tech Corp", color: "#00D4FF" },
            { name: "Innovate Ltd", color: "#FF6B35" },
            { name: "Future Inc", color: "#0A2342" },
            { name: "Digital Co", color: "#FF8C42" },
          ].map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className="w-full h-16 rounded-lg flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
                style={{ backgroundColor: `${partner.color}20` }}
              >
                <span className="text-white font-medium">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
