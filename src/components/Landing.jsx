'use client'
import React, { useState } from 'react'
import { Instrument_Serif , Roboto_Serif, Archivo_Black} from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import {motion} from 'motion/react'
import dynamic from 'next/dynamic'
import LandingService1 from './LandingService1'
import LandingService2 from './LandingService2'
import Whyus from './Whyus'
import FeaturedWorks from './FeaturedWorks'
import Footer from './Footer'
import Navbar from './Navbar'
import { useRouter } from 'next/navigation'
import TrustedCompanies from './Partnership'

// Dynamically import ServicesSection with SSR disabled to prevent hydration errors
const ServicesSection = dynamic(() => import('./Services'), { ssr: false })


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
    <div className="fixed inset-0 bg-[#173876] z-50 flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

function Landing() {
  const router = useRouter();
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className='w-full z-5 relative bg-[#173876]'>
        {/* Preloader */}
        {!videoLoaded && <Preloader />}
        
        
    <div className= {` h-[110vh] w-full  flex flex-col justify-center items-center gap-3 relative overflow-hidden `}>
        
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
        <h1 className={`${roboto.className} text-xl md:text-2xl text-white text-center`} >
            Transforming Business with AI & Innovation
        </h1>
        <h1 className={`${instr.className} text-5xl md:text-7xl font-normal text-center leading-tight px-4 md:px-0 text-white`}>
            Build Faster. Automate Smarter.
        </h1>
        <p className={`${instr.className} text-lg md:text-xl w-[60%] text-center mt-20 text-white/90`}>
            We design and ship high‑quality websites, apps, dashboards, and AI automations that streamline operations and accelerate growth. Partner with our team to turn ideas into scalable, production‑ready products.
        </p>
        <motion.button
        className='bg-gradient-to-br from-white to-white min-w-fit px-6 md:px-8 h-14 md:h-16 rounded-full flex items-center gap-3 md:gap-4 relative hover:scale-105 transition-all duration-200 cursor-pointer'
        whileHover="hover"
        initial="initial"
        onClick={()=>{router.push('/contact')}}
    >
        <motion.span
            className={`${instr.className} text-[#173876] text-lg md:text-2xl whitespace-nowrap`}
        >
            Get In Touch
        </motion.span>

        <motion.div
            className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#173876] flex justify-center items-center overflow-hidden relative shrink-0 -mr-4'
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
        </div>
    </div>


{/* IMPORTANT : Uncomment the following line to make the partnered companies section visible */}


{/* <TrustedCompanies/> */}

<ServicesSection/>

<Whyus/>

{/* Featured Works to Footer Section with Light Background */}
<div className="bg-[#EBEBEB] relative">
  <FeaturedWorks/>
  <Footer/>
</div>

    </div>
  )
}

export default Landing