'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from './Footer';

const instr = {
  className: 'font-serif'
};

function AboutClient() {
  const router = {
    push: (path) => console.log('Navigate to:', path)
  };

  const timelineItems = [
    {
      title: "Our Mission",
      description: "To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.",
      side: "left"
    },
    {
      title: "Our Vision",
      description: "To be a global leader in digital transformation, recognized for our expertise, integrity, and commitment to client success.",
      side: "right"
    },
    {
      title: "Our Values",
      description: "Innovation, Excellence, Collaboration, Integrity, and Customer Centricity are at the core of everything we do.",
      side: "left"
    },
  ];

  return (
    <section className='bg-[#F9FAFB]'>
      {/* Hero Section */}
      <div className='md:min-h-screen w-full flex flex-col md:flex-row bg-[#F9FAFB]'>
        {/* Title Section */}
        <div className='title w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-20 md:px-16 lg:px-24 md:min-h-screen'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='max-w-2xl w-full'
          >
            <motion.h1
              className={`${instr.className} text-4xl md:text-5xl lg:text-6xl text-[#0A2342] mb-6 leading-tight`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Kriyantrai
            </motion.h1>
            
            <motion.p
              className={`${instr.className} text-md md:text-lg lg:text-xl text-gray-700 mb-10`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For over five years, we have partnered with forward-thinking businesses across industries to transform their digital landscape through innovative technology solutions. From startups to established enterprises, we help build sustainable futures, empower teams, and drive measurable success—all while contributing to technological advancement in our community.

              With a workforce of industry-leading experts and cutting-edge specialists, we continue to redefine what&apos;s possible by delivering transformative results. Progress that stems from combining deep technical expertise with strategic insight, powered by the strength of collaboration.

              At Kriyantrai, our purpose is to create meaningful impact that matters—for our clients, our people, and the technology ecosystem we serve.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                      className='bg-gradient-to-br from-[#173876] to-[#204da0] min-w-fit px-6 md:px-8 h-14 md:h-16 rounded-full flex items-center gap-3 md:gap-4 relative hover:scale-105 transition-all duration-200 cursor-pointer'
                      whileHover="hover"
                      initial="initial"
                      onClick={()=>{router.push('/contact')}}
                  >
                      <motion.span
                          className={`${instr.className} text-white text-lg md:text-2xl whitespace-nowrap`}
                      >
                          Get In Touch
                      </motion.span>
              
                      <motion.div
                          className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F68F12] flex justify-center items-center overflow-hidden relative shrink-0 -mr-4'
                          variants={{
                              initial: { scale: 1 },
                              hover: { scale: 1.05 }
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                          <motion.div
                              className='absolute text-white'
                              variants={{
                                  initial: { x: 0, opacity: 1 },
                                  hover: {
                                      x: [0, 50, -50, 0],
                                      opacity: [1, 0, 0, 1],
                                      transition: {
                                          duration: 0.5,
                                          times: [0, 0.25, 0.5, 1],
                                          ease: "easeInOut"
                                      }
                                  }
                              }}
                          >
                              <ArrowRight size={20} className="md:w-[30px] md:h-[30px]" />
                          </motion.div>
                      </motion.div>
                  </motion.button>
            </motion.div> */}
          </motion.div>
        </div>

        {/* SVG Section - Hidden on mobile */}
        <div className='svg hidden md:flex h-screen w-full md:w-1/2 p-8 items-center justify-center'>
          <motion.div
            className='h-full w-full max-h-[600px]'
            style={{
              backgroundImage: 'url("/about.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className='trusted-partners-section w-full bg-white py-16 md:py-20 px-6 md:px-12'>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className={`${instr.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0A2342] mb-4`}>
              Trusted by Leading Companies and Partners
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with renowned organizations and industry leaders to deliver exceptional solutions and drive positive impact.
            </p>
            <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* CINI Partner */}
            <motion.a
              href="https://cini.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F66F13]/30"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* CINI Logo */}
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg p-2">
                  <img
                    src="/CINI logo.png"
                    alt="CINI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2342] mb-2 group-hover:text-[#F66F13] transition-colors">
                    Child in Need Institute
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Partnering with CINI to support community development and child welfare initiatives through innovative technology solutions.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Collida Studio Partner */}
            <motion.a
              href="https://www.collidastudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F66F13]/30"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Collida Studio Logo Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">COLLIDA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2342] mb-2 group-hover:text-[#F66F13] transition-colors">
                    Collida Studio
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Collaborating with Collida Studio on creative design and multimedia projects to enhance user experiences and brand storytelling.
                  </p>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className='our-story-timeline min-h-screen w-full bg-gray-50 py-16 md:py-20 px-6 md:px-12'>
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className={`${instr.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2342] mb-4`}>
              Our Story
            </h2>
            <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 md:-translate-x-px">
              <motion.div
                className="w-full bg-[#173876]"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start ${
                    item.side === "right" 
                      ? "md:flex-row-reverse md:text-right" 
                      : "md:flex-row"
                  } flex-row`}
                >
                  {/* Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center shrink-0 z-10"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F66F13] rounded-full flex items-center justify-center border-4 border-gray-50 shadow-lg">
                      <svg width="6" height="6" viewBox="0 0 8 8" className="fill-white md:w-2 md:h-2">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 ${
                    item.side === "left" 
                      ? "md:pl-[calc(50%+3rem)] md:mr-0"
                      : "md:pr-[calc(50%+3rem)] md:ml-0" 
                  } w-full`}>
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className={`inline-flex items-center gap-2 mb-3 ${
                        item.side === "right" ? "md:justify-end md:ml-auto" : ""
                      }`}
                    >
                      <div className="w-2 h-2 bg-[#F66F13] rounded-full"></div>
                    </motion.div>

                    {/* Title */}
                    <h3 className={`${instr.className} text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2342] mb-3`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className='py-16 md:py-20 px-6 md:px-12 w-full bg-[#F9FAFB]'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
            {/* Image - Hidden on mobile, shown on desktop */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='hidden md:block md:w-1/2 h-80 lg:h-96' 
              style={{
                backgroundImage: 'url("/journey.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
              }} 
            />
            
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='w-full md:w-1/2 flex flex-col gap-6'
            >
              <h1 className={`${instr.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#f66f13]`}>
                Our Journey So Far
              </h1>
              <p className={`${instr.className} text-base md:text-lg lg:text-xl leading-relaxed text-[#0A2342]`}>
                Founded in 2024, Kriyantrai began with a vision to bridge the gap between complex technological advancements and practical business applications. Over the years, we have grown into a team of passionate experts dedicated to delivering exceptional results and fostering long-term partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className='team-section min-h-screen w-full py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-white'>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className={`${instr.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2342] mb-4`}>
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full"></div>
          </motion.div>

          {/* Team Members */}
          <div className="space-y-16 md:space-y-24">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
            >
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/souvagya-das.webp")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className={`${instr.className} text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2`}>
                  Souvagya Das
                </h3>
                <p className="text-[#F66F13] font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
                  CEO & Founder
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  Souvagya is a visionary leader with over 4 years of experience in the tech industry. His passion for innovation drives Kriyantrai&apos;s strategic direction.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 - Reversed Layout */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12"
            >
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/souvik-makur.webp")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain'
                }}>
                </div>
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className={`${instr.className} text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2`}>
                  Souvik Makur
                </h3>
                <p className="text-[#F66F13] font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
                  Head of Development
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  Souvik is an expert in full-stack development, ensuring our solutions are robust, scalable, and user-friendly.
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
            >
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/anuran-das.webp")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain'
                }}>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className={`${instr.className} text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2`}>
                  Anuran Das
                </h3>
                <p className="text-[#F66F13] font-semibold text-base md:text-lg mb-4 uppercase tracking-wide">
                  Chief Technology Officer
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  Anuran leads our technology initiatives, bringing a wealth of expertise in AI, machine learning, and software architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  );
}

export default AboutClient;