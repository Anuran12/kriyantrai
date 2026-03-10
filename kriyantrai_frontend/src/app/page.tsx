'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
      <main className="flex-1 w-full flex flex-col items-center justify-start pt-16 pb-0">

        <Hero />

        {/* Section 1: Intro */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Why you need Kriyantrai's Solutions?
          </h2>
          <div className="w-full rounded-3xl border border-gray-200 shadow-sm overflow-hidden bg-[#0f172a]">
            <img src="/media-uploaded-new.jpg" alt="Why you need Kriyantrai's Solutions" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight leading-tight">
            Create your digital foundation in weeks.<br /> Headache-free.
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
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight leading-tight">
            Integrate intelligent solutions and<br /> share your vision with the world.
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Analyze your operations and<br /> achieve record results.
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            With Kriyantrai, our partners<br /> make the impossible possible.
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
