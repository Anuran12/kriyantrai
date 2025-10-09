"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyDescriptionSection() {
  return (
    <section className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A2342] mb-6">
              Transforming Businesses with
              <span className="block bg-gradient-to-r from-[#00D4FF] via-[#0A2342] to-[#FF6B35] bg-clip-text text-transparent">
                AI, ML & Automation
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-[#64748B] mb-8">
              Kriyantrai is your trusted partner in digital transformation. We
              specialize in creating intelligent solutions that combine
              cutting-edge AI algorithms, machine learning models, and seamless
              automation to drive innovation, efficiency, and measurable
              business growth.
            </p>
            <p className="text-lg leading-relaxed text-[#64748B]">
              From concept to deployment, we provide comprehensive services that
              cover every aspect of your digital transformation journey,
              ensuring scalable, reliable, and future-proof solutions that
              evolve with your business needs.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/api/placeholder/600/500"
                alt="AI, ML & Automation Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#00D4FF] rounded-lg opacity-20"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FF6B35] rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
