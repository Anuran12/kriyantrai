"use client"
import React from "react"
import { Archivo_Black, Instrument_Serif, Archivo } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const archivob = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const instr = Instrument_Serif({ subsets: ["latin"], weight: ["400"] })

export default function ServiceSectionRight({
  title,
  title2 = "",
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
      x: 30,
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

  return (
    <div
      className={`w-full min-h-[110vh] bg-white text-[#173876] flex flex-col items-end pt-20 ${
        roundedTop ? "rounded-t-4xl" : ""
      } -mt-6 z-20 relative`}
    >
      <div className="mx-8 text-right">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className={`${archivob.className} text-4xl md:text-8xl font-normal leading-tight
          bg-linear-to-b from-[#173876] from-0% via-white via-90% to-transparent to-100% bg-clip-text text-transparent text-shadow-lg shadow-[#173876]/30`}
        >
          {title}
        </motion.h1>

        {title2 && (
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
            className={`${archivob.className} text-4xl md:text-8xl font-normal leading-tight
           bg-linear-to-b from-[#173876] from-0% via-white via-90% to-transparent to-100% bg-clip-text text-transparent text-shadow-lg shadow-[#173876]/30`}
          >
            {title2}
          </motion.h1>
        )}
      </div>

      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={descriptionVariants}
        className={`${archivo.className} text-lg md:text-xl w-[60%] mr-12 mt-4 text-[#173876]/90 text-right`}
      >
        {description}
      </motion.p>

      <motion.ul 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="space-y-4 mt-6 mr-16"
      >
        {items.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover={{ x: -10, transition: { duration: 0.2 } }}
            className="text-lg text-[#173876]/80 pb-3 flex items-center gap-3 justify-end hover:text-[#173876] transition-all"
          >
            {item}
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
              className="w-2 h-2 rounded-full bg-[#F68F12]"
            />
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        onClick={onButtonClick}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={buttonVariants}
        className={`bg-gradient-to-br from-[#173876] to-[#0f2a5a] text-white w-fit px-6 md:px-8 h-12 md:h-14 rounded-full flex items-center gap-3 md:gap-4 hover:scale-105 transition-all duration-200 cursor-pointer mr-6 md:mr-12 mt-8 ${title2?'mb-10':'mb-0'}`}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <motion.span className={`${instr.className} text-base md:text-lg flex justify-center items-center whitespace-nowrap`}>
          {buttonText}
        </motion.span>

        <motion.div
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ffffff] flex justify-center items-center overflow-hidden shrink-0 relative -mr-4 md:-mr-6 text-[#173876]"
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
            <ArrowRight size={20} className="md:w-[26px] md:h-[26px]" color="#173876" />
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  )
}