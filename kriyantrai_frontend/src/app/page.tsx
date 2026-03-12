'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Leaf, Network, TrendingUp } from 'lucide-react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideImages = [
    '/indian_sustainable_future.png',
    '/indian_empowered_teams.png',
    '/indian_measurable_success.png',
  ];

  const [activeWhyChooseUsIndex, setActiveWhyChooseUsIndex] = useState(0);
  const [currentWhyImageIndex, setCurrentWhyImageIndex] = useState(0);

  const [activeSolutionsIndex, setActiveSolutionsIndex] = useState(0);
  const [currentSolutionsImageIndex, setCurrentSolutionsImageIndex] = useState(0);

  const [activeProductsIndex, setActiveProductsIndex] = useState(0);
  const [currentProductsImageIndex, setCurrentProductsImageIndex] = useState(0);

  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const [currentSocialImageIndex, setCurrentSocialImageIndex] = useState(0);

  const whyChooseUsData = [
    {
      title: 'Personalized attention',
      desc: 'Unlike large consulting firms, we provide dedicated resources and direct access to senior experts for every client.'
    },
    {
      title: 'Agile & Responsive',
      desc: 'We adapt quickly to changing requirements, ensuring your digital transformation stays on track without delays.'
    },
    {
      title: 'Innovation Focus',
      desc: 'Leveraging the latest technologies like Generative AI and scalable frameworks to future-proof your business.'
    },
    {
      title: 'Strategic Foundation',
      desc: 'We build solid architectural foundations that allow your systems to scale up smoothly as your company grows.'
    }
  ];

  const solutionsData = [
    {
      title: 'Artificial Intelligence',
      desc: 'Deploy production-ready models, computer vision systems, and predictive analytics that solve real business challenges.'
    },
    {
      title: 'Data Solutions',
      desc: 'Build robust data pipelines, implement advanced analytics, and leverage data lakes for actionable insights.'
    },
    {
      title: 'Process Automation',
      desc: 'Streamline workflows, reduce manual tasks, and optimize operations using intelligent RPA architectures.'
    },
    {
      title: 'Application Development',
      desc: 'Design and build scalable, secure, and intuitive full-stack applications tailored perfectly to your evolving needs.'
    }
  ];

  const productsData = [
    {
      title: 'Trucker Health System',
      desc: 'A full-stack platform enabling driver registration, public health profiles, and operational analytics.'
    },
    {
      title: 'Digital Survey System',
      desc: 'Customizable digital survey tools designed for complex data gathering and seamless offline analysis.'
    },
    {
      title: 'Offline Data Collection',
      desc: 'Robust edge-computing solutions allowing reliable data collection in remote areas without internet connectivity.'
    },
    {
      title: 'Secure Deployment',
      desc: 'Enterprise-grade security protocols ensuring your sensitive operational data remains protected across all environments.'
    }
  ];

  const socialSectorData = [
    {
      title: 'Empowering Communities',
      desc: 'Leveraging data and technology to amplify the impact of social initiatives and community programs.'
    },
    {
      title: 'Accessible Health & Education',
      desc: 'Developing digital platforms that bridge the gap and provide essential services to underserved populations.'
    },
    {
      title: 'Sustainable Development',
      desc: 'Creating solutions that align with sustainable development goals for long-lasting positive change.'
    },
    {
      title: 'Non-profit Optimization',
      desc: 'Providing cost-effective, scalable tech solutions to help non-profits maximize their outreach and efficiency.'
    }
  ];

  const whyChooseUsImages = [
    '/indian_digital_foundation_1.png',
    '/indian_digital_foundation_2.png',
    '/indian_digital_foundation_3.png'
  ];

  const solutionsImages = [
    '/indian_solutions_ai_1.png',
    '/indian_solutions_data_2.png'
  ];

  const productsImages = [
    '/indian_analytics_dashboard.png',
    '/indian_team_meeting.png',
    '/indian_data_analysis.png'
  ];

  const socialSectorImages = [
    '/indian_social_impact.png',
    '/indian_education_tech.png',
    '/indian_healthcare_tech.png'
  ];

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    const timer2 = setInterval(() => {
      setActiveWhyChooseUsIndex((prev) => (prev + 1) % whyChooseUsData.length);
    }, 4000);
    const timer3 = setInterval(() => {
      setCurrentWhyImageIndex((prev) => (prev + 1) % whyChooseUsImages.length);
    }, 5000);
    const timer4 = setInterval(() => {
      setActiveSolutionsIndex((prev) => (prev + 1) % solutionsData.length);
    }, 4000);
    const timer5 = setInterval(() => {
      setCurrentSolutionsImageIndex((prev) => (prev + 1) % solutionsImages.length);
    }, 5000);
    const timer6 = setInterval(() => {
      setActiveProductsIndex((prev) => (prev + 1) % productsData.length);
    }, 4000);
    const timer7 = setInterval(() => {
      setCurrentProductsImageIndex((prev) => (prev + 1) % productsImages.length);
    }, 5000);
    const timer8 = setInterval(() => {
      setActiveSocialIndex((prev) => (prev + 1) % socialSectorData.length);
    }, 4000);
    const timer9 = setInterval(() => {
      setCurrentSocialImageIndex((prev) => (prev + 1) % socialSectorImages.length);
    }, 5000);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      clearInterval(timer6);
      clearInterval(timer7);
      clearInterval(timer8);
      clearInterval(timer9);
    };
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
            <div className="w-full md:w-5/12 flex flex-col gap-8 md:gap-10">
              {whyChooseUsData.map((item, index) => {
                const isActive = index === activeWhyChooseUsIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveWhyChooseUsIndex(index)}
                    className={`pl-6 border-l-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-blue-600 opacity-100' : 'border-gray-200 opacity-50 hover:opacity-100'
                      }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="text-gray-500 overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="w-full md:w-7/12 flex items-center justify-center p-2">
              <motion.div
                className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-slate-50 bg-slate-100"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentWhyImageIndex}
                    src={whyChooseUsImages[currentWhyImageIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 6, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Why Choose Kriyantrai ${currentWhyImageIndex + 1}`}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {whyChooseUsImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentWhyImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-out hover:bg-white ${idx === currentWhyImageIndex ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/50 backdrop-blur-sm'}`}
                      aria-label={`Go to image slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Solutions */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-20 text-center tracking-tight leading-tight">
            Integrate intelligent solutions and<br className="hidden md:block" /> share your vision with the world.
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-7/12 flex items-center justify-center p-2">
              <motion.div
                className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-slate-50 bg-slate-100"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSolutionsImageIndex}
                    src={solutionsImages[currentSolutionsImageIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 6, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Core Solutions ${currentSolutionsImageIndex + 1}`}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {solutionsImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSolutionsImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-out hover:bg-white ${idx === currentSolutionsImageIndex ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/50 backdrop-blur-sm'}`}
                      aria-label={`Go to image slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-5/12 flex flex-col gap-8 md:gap-10">
              {solutionsData.map((item, index) => {
                const isActive = index === activeSolutionsIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveSolutionsIndex(index)}
                    className={`pl-6 border-l-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-blue-600 opacity-100' : 'border-gray-200 opacity-50 hover:opacity-100'
                      }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="text-gray-500 overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Products */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Analyze your operations and<br className="hidden md:block" /> achieve record results.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-5/12 flex flex-col gap-8 md:gap-10">
              {productsData.map((item, index) => {
                const isActive = index === activeProductsIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveProductsIndex(index)}
                    className={`pl-6 border-l-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-blue-600 opacity-100' : 'border-gray-200 opacity-50 hover:opacity-100'
                      }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="text-gray-500 overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="w-full md:w-7/12 flex items-center justify-center p-2">
              <motion.div
                className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-slate-50 bg-slate-100"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProductsImageIndex}
                    src={productsImages[currentProductsImageIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 6, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Products Showcase ${currentProductsImageIndex + 1}`}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {productsImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProductsImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-out hover:bg-white ${idx === currentProductsImageIndex ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/50 backdrop-blur-sm'}`}
                      aria-label={`Go to image slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4.5: Social Sector */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Driving meaningful impact in the<br className="hidden md:block" /> social sector with technology.
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-7/12 flex items-center justify-center p-2">
              <motion.div
                className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-slate-50 bg-slate-100"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSocialImageIndex}
                    src={socialSectorImages[currentSocialImageIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 6, ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`Social Sector Impact ${currentSocialImageIndex + 1}`}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {socialSectorImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSocialImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-out hover:bg-white ${idx === currentSocialImageIndex ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/50 backdrop-blur-sm'}`}
                      aria-label={`Go to image slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-5/12 flex flex-col gap-8 md:gap-10">
              {socialSectorData.map((item, index) => {
                const isActive = index === activeSocialIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveSocialIndex(index)}
                    className={`pl-6 border-l-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-emerald-600 opacity-100' : 'border-gray-200 opacity-50 hover:opacity-100'
                      }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="text-gray-500 overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
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
