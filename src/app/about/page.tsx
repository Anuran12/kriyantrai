"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section with Background Image */}
        <section
          className="relative w-full h-[600px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: 'url("/api/placeholder/1920/600")' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:space-x-4 text-center">
            <div className="lg:flex-1 mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-red-500 text-white px-6 py-3 inline-block text-3xl sm:text-4xl lg:text-4xl font-bold rounded-lg">
                  <h1>RWE to reduce the size</h1>
                </div>
                <div className="bg-red-500 text-white px-6 py-3 inline-block text-3xl sm:text-4xl lg:text-4xl font-bold rounded-lg">
                  <h1>and duration of clinical trials</h1>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto py-8">
              <div className="flex flex-wrap">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Healthcare and AI collaboration"
                      width={600}
                      height={400}
                      className="w-full shadow-md rounded-lg"
                    />
                  </motion.div>
                </div>
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-4">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 pl-0 lg:pl-10">
                      Our Mission Matters
                    </h1>
                    <p className="text-base md:text-lg lg:text-lg leading-relaxed text-justify pl-0 lg:pl-10">
                      Healthcare deeply and meaningfully impacts every single
                      person on Earth. We believe we can make it better…a lot
                      better. We use AI to empower data-informed decisions that
                      make high-quality care personalization possible at scale.
                      We combine the latest advances in machine learning,
                      natural language processing, data science, and data
                      engineering with deep clinical and biomedical expertise to
                      build the tools that allow health systems, life sciences,
                      and payors to position—for the first time in
                      history—long-term patient wellbeing at the center of their
                      strategic objectives. The ambition of our mission and the
                      transformative potential of our technology is what drives
                      our commitment to success.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20" style={{ backgroundColor: "#15142c" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto py-16 px-4 md:px-8 lg:py-32 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
              <div className="text-white lg:w-3/5">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-4xl lg:text-5xl mb-6 mr-10 sm:mr-20 tracking-wider"
                >
                  A Home for Difference Makers
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-lg leading-relaxed text-justify mr-6 mt-10 sm:mr-20"
                >
                  Our culture encourages every team member to go beyond their
                  vertical of excellence and to curiously explore and understand
                  the interplay of technology, medicine, business, and humanity.
                  We demand excellence in the quality of our own work because
                  everything we do affects a fellow human&apos;s healthcare. Our
                  people are intelligent, imaginative, driven, and passionate.
                  If you&apos;re excited about surmounting challenges, learning
                  new things, honing skills, and making a dent in the universe,
                  you belong here.
                </motion.p>
              </div>
              <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center items-center relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/api/placeholder/400/400"
                    alt="Team collaboration and innovation"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
