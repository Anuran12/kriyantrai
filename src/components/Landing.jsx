'use client'
import React, { useState } from 'react'
import { Instrument_Serif , Roboto_Serif, Archivo_Black} from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import {motion} from 'motion/react'
import LandingService1 from './LandingService1'
import LandingService2 from './LandingService2'
import Whyus from './Whyus'
import FeaturedWorks from './FeaturedWorks'
import Footer from './Footer'
import Navbar from './Navbar'

const instr = Instrument_Serif({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-instr',
})

const roboto = Roboto_Serif({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-roboto',
})

// Preloader Component
const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

function Landing() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className='w-full'>
        {/* Preloader */}
        {!videoLoaded && <Preloader />}
        
        <Navbar/>
    <div className= {` h-screen w-full  flex flex-col justify-center items-center gap-3 relative overflow-hidden `}>
        
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            onCanPlayThrough={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        
        
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-3 w-full">
        <h1 className={`${roboto.className} text-xl md:text-2xl text-white`} >
            Transforming Business with AI & Innovation
        </h1>
        <h1 className={`${instr.className} text-5xl md:text-7xl font-normal text-center leading-tight px-4 md:px-0 text-white`}>
            Build Faster. Automate Smarter.
        </h1>
        <p className={`${instr.className} text-lg md:text-xl w-[60%] text-center mt-20 text-white/90`}>
            We design and ship high‑quality websites, apps, dashboards, and AI automations that streamline operations and accelerate growth. Partner with our team to turn ideas into scalable, production‑ready products.
        </p>
        <motion.button 
    className='bg-linear-to-br from-white to-zinc-200 w-[14%] h-16 rounded-full flex justify-evenly items-center relative hover:scale-105 transition-all duration-200 cursor-pointer'
    whileHover="hover"
    initial="initial"
>
    <motion.span 
        className={`${instr.className} w-[65%] h-[90%] text-black text-2xl flex justify-center items-center`}
    >
        Get In Touch
    </motion.span>
    
    <motion.div 
        className='w-[25%] aspect-square rounded-full bg-black flex justify-center items-center overflow-hidden relative'
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
            <ArrowRight size={30} />
        </motion.div>
    </motion.div>
</motion.button>
        </div>
    </div>
    <LandingService1
  title="DEVELOPMENT"
  description="We build robust, scalable, and user-friendly applications across multiple platforms."
  items={[
    "Web Development",
    "Mobile App Development",
    "Desktop Application Development",
    "Full-Stack Solutions",
    "API Integration",
  ]}
  buttonText="Learn more"
  onButtonClick={() => console.log("Clicked!")}
  
/>

<LandingService2
 title="DATA & ANALYTICS"
  description="We transform raw data into actionable insights, helping businesses make informed decisions and gain competitive advantages."
  items={[
    "Data Cleaning & Visualization",
    "Dashboard Development",
    "Business Intelligence Solutions",
    "Predictive Analytics",
    "Data Processing",
  ]}
  buttonText="Learn more"
  onButtonClick={() => console.log("Clicked!")}
  
/>
    <LandingService1
  title="AI & AUTOMATION"
  description="We leverage artificial intelligence and automation technologies to streamline operations, enhance productivity, and create intelligent solutions."
  items={[
  "Workflow Automation",
  "Chatbot Development",
  "AI-Powered Tools Integration",
  "NLP & Text Automation",
  "Image / Video Automation"
]}
  buttonText="Learn more"
  onButtonClick={() => console.log("Clicked!")}

/>

<LandingService2
 title="Machine Learning &"
 title2='Deep Learning'
  description="We develop advanced machine learning and deep learning solutions that solve complex problems and drive innovation."
  items={[
  "Model Development & Training",
  "Computer Vision Projects",
  "Natural Language Processing",
  "Recommendation Systems",
  "Custom ML Solutions"
]
}
  buttonText="Learn more"
  onButtonClick={() => console.log("Clicked!")}
  
/>

<Whyus/>
<FeaturedWorks/>
<Footer/>

    </div>
  )
}

export default Landing