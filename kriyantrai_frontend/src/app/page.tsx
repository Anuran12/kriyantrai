'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Leaf, Network, TrendingUp } from 'lucide-react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideImages = [
    '/data-modeling-architecture.jpg',
    '/modern-data-infrastructure.jpg',
    '/integrating-vision.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
      <main className="flex-1 w-full flex flex-col items-center justify-start pt-16 pb-0">

        <Hero />

        {/* Section 1: Intro */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-16 text-center tracking-tight leading-tight">
            Why you need Kriyantrai's Solutions?
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-slate-50 p-8 md:p-12 xl:p-16 rounded-[2.5rem] border border-slate-200/60 shadow-sm relative">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none"></div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-8 relative z-10"
            >
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="text-xl">
                  Traditional approaches are neither interactive nor personalized. We partner with forward-thinking businesses to build <span className="font-semibold text-emerald-600">sustainable futures</span>, <span className="font-semibold text-blue-600">empower teams</span>, and achieve <span className="font-semibold text-orange-600">measurable success</span> through innovative technology solutions.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 my-2 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-emerald-400"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  Kriyantrai is your modern tool for growth.
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  The result: <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">more efficiency, engagement and leads.</span>
                </p>
              </motion.div>

              {/* Three Logos/Icons */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-200/60 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Leaf className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-800 leading-tight">Sustainable<br />Futures</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 shadow-sm border border-blue-200/60 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Network className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-800 leading-tight">Empowered<br />Teams</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-orange-600 shadow-sm border border-orange-200/60 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <TrendingUp className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-800 leading-tight">Measurable<br />Success</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Sliding Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white z-10"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={slideImages[currentImageIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 5, ease: "linear" }
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Kriyantrai Solutions Gallery"
                />
              </AnimatePresence>

              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                {slideImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer hover:bg-white ${idx === currentImageIndex ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-2 bg-white/40 backdrop-blur-sm'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-20 text-center tracking-tight leading-tight">
            Create your digital foundation in weeks.<br className="hidden md:block" /> Headache-free.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-5/12 flex flex-col gap-10">
              <div className="pl-6 border-l-2 border-blue-600 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized attention</h3>
                <p className="text-gray-500">Unlike large consulting firms, we provide dedicated resources and direct access to senior experts for every client.</p>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agile & Responsive</h3>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Focus</h3>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Foundation</h3>
              </div>
            </div>
            <div className="w-full md:w-7/12 flex items-center justify-center">
              <div className="w-full rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <img src="/why-kriyantrai.jpg" alt="Create your digital foundation" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Solutions */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-20 text-center tracking-tight leading-tight">
            Integrate intelligent solutions and<br className="hidden md:block" /> share your vision with the world.
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-7/12 flex items-center justify-center">
              <div className="w-full rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <img src="/integrating-vision.jpg" alt="Integrate intelligent solutions" className="w-full h-auto object-contain" />
              </div>
            </div>
            <div className="w-full md:w-5/12 flex flex-col gap-10">
              <div className="pl-6 border-l-2 border-blue-600 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
                <p className="text-gray-500">Deploy production-ready models, computer vision systems, and predictive analytics that solve real business challenges.</p>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Solutions</h3>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Process Automation</h3>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Development</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Products */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Analyze your operations and<br className="hidden md:block" /> achieve record results.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-5/12 flex flex-col gap-10">
              <div className="pl-6 border-l-2 border-blue-600 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trucker Health System</h3>
                <p className="text-gray-500">A full-stack platform enabling driver registration, public health profiles, and operational analytics.</p>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Survey System</h3>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Offline Data Collection</h3>
              </div>
              <div className="pl-6 border-l-2 border-gray-200 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Deployment</h3>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <div className="w-full rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <img src="/analyze-operations.jpg" alt="Analyze your operations" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Partners / Testimonial */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            With Kriyantrai, our partners<br className="hidden md:block" /> make the impossible possible.
          </h2>

          <div className="w-full max-w-5xl bg-[#151c28] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <span className="text-white font-bold tracking-widest uppercase mb-8 text-sm">CHILD IN NEED INSTITUTE & COLLIDA STUDIO</span>
              <p className="text-2xl md:text-3xl text-white font-medium leading-tight mb-8">
                Our partners use Kriyantrai's solutions successfully. In short: It is the go-to partner for digital transformation in our ecosystem!
              </p>
              <span className="text-gray-400 font-medium">Partner Organizations</span>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative min-h-[300px] p-8">
              <div className="flex flex-col items-center gap-4">
                <div className="h-24 md:h-32 w-48 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <img src="/cini-logo-new.png" alt="Child In Need Institute" className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-300 font-medium text-sm md:text-base tracking-wide text-center">Child In Need Institute</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="h-24 md:h-32 w-48 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <img src="/collida-logo-new2.png" alt="Collida Studio" className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-300 font-medium text-sm md:text-base tracking-wide text-center">Collida Studio</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
