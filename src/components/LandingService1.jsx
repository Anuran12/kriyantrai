"use client"
import React from "react"
import { Archivo_Black, Instrument_Serif, Archivo } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const archivob = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const instr = Instrument_Serif({ subsets: ["latin"], weight: ["400"] })


export default function LandingService1({
  title,
  description,
  items,
  buttonText,
  onButtonClick,
  roundedTop = false,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const fadeUpVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className={`w-full h-screen bg-black text-white flex flex-col pt-20 ${roundedTop ? "rounded-t-4xl" : ""}`}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
        className="text-6xl md:text-8xl font-black leading-tight mx-8 bg-linear-to-b from-white from-0% via-black via-90% to-transparent to-100% bg-clip-text text-transparent text-shadow-lg shadow-white/30"
      >
        {title}
      </motion.h1>

      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={descriptionVariants}
        className="text-lg md:text-xl w-[60%] mx-12 mt-4 text-white/90"
      >
        {description}
      </motion.p>

      <motion.ul 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="space-y-4 mt-6 ml-16"
      >
        {items.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
            className="text-lg text-white/80 pb-3 flex items-center gap-3 hover:text-white transition-all"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                transition: { 
                  delay: 0.6 + i * 0.15,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }
              }}
              className="w-2 h-2 rounded-full bg-white"
            />
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        onClick={onButtonClick}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={buttonVariants}
        className="bg-gradient-to-br from-white to-white/60 text-black w-[11%] h-14 rounded-full flex justify-evenly items-center hover:scale-105 transition-all duration-200 cursor-pointer ml-12 mt-8"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <motion.span 
          className={`text-lg flex justify-center items-center font-serif ${instr.className}`}
        >
          {buttonText}
        </motion.span>

        <motion.div
          className="w-[25%] aspect-square rounded-full bg-black flex justify-center items-center overflow-hidden"
          variants={{ initial: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="absolute"
            variants={{
              initial: { x: 0, opacity: 1 },
              hover: {
                x: [0, 50, -50, 0],
                opacity: [1, 0, 0, 1],
                transition: {
                  duration: 0.5,
                  times: [0, 0.25, 0.5, 1],
                  ease: "easeInOut",
                },
              },
            }}
          >
            <ArrowRight size={30} color="white" />
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  )
}