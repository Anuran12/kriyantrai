"use client";

import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const servicesMenu = [
  {
    title: "Development",
    href: "/services/development",
    items: [
      { label: "Web Development" },
      { label: "Mobile App Development" },
      { label: "Desktop Application Development" },
      { label: "Full-Stack Solutions" },
      { label: "API Integration" },
    ],
  },
  {
    title: "Data & Analytics",
    href: "/services/data-analytics",
    items: [
      { label: "Data Cleaning & Visualization" },
      { label: "Dashboard Development" },
      { label: "Business Intelligence Solutions" },
      { label: "Predictive Analytics" },
      { label: "Big Data Processing" },
    ],
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    items: [
      { label: "Workflow Automation" },
      { label: "Chatbot Development" },
      { label: "AI-Powered Tools Integration" },
      { label: "NLP & Text Automation" },
      { label: "Image / Video Automation" },
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    href: "/services/ml-dl",
    items: [
      { label: "Model Development & Training" },
      { label: "Computer Vision Projects" },
      { label: "Natural Language Processing" },
      { label: "Recommendation Systems" },
      { label: "Custom ML Solutions" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/96 backdrop-blur-xl shadow-2xl border-b border-gray-100/50"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white to-purple-50/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0.5 : 0.3 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10"
          >
            <Link href="/">
              <Logo size={42} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {navItems.map((item, index) => (
              <Fragment key={`nav-${item.name}`}>
                {item.name === "Work" && (
                  <motion.div
                    key="Services"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="relative group"
                  >
                    <div className="relative px-4 py-2 text-[#0A2342] hover:text-[#153776] transition-colors duration-200 font-medium rounded-lg overflow-hidden cursor-pointer select-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#153776]/10 to-[#00D4FF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="relative z-10">Services</span>
                      <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#153776] rounded-full group-hover:w-full transition-all duration-200 ease-out" />
                    </div>

                    {/* Dropdown */}
                    <div className="absolute right-0 top-full mt-2 w-[680px] max-w-[80vw] bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100/70 rounded-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-4 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="p-4 grid grid-cols-2 md:grid-cols-2 gap-4">
                        {servicesMenu.map((section) => (
                          <div key={section.title}>
                            <Link href={section.href} className="inline-flex">
                              <span className="px-3 py-2 text-sm font-semibold text-white bg-[#153776] rounded-md hover:bg-[#0f2b5c] transition-colors">
                                {section.title}
                              </span>
                            </Link>
                            <ul className="mt-2 space-y-1">
                              {section.items.map((sub) => (
                                <li
                                  key={sub.label}
                                  className="px-2 py-1 text-sm text-[#475569]"
                                >
                                  {sub.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-[#0A2342] hover:text-[#153776] transition-colors duration-200 font-medium rounded-lg group overflow-hidden"
                  >
                    {/* Background hover effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-[#153776]/10 to-[#00D4FF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>

                    {/* Animated underline */}
                    <motion.div className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#153776] rounded-full group-hover:w-full transition-all duration-200 ease-out" />
                  </Link>
                </motion.div>
              </Fragment>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X size={20} className="text-[#0A2342]" />
                ) : (
                  <Menu size={20} className="text-[#0A2342]" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -30,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200,
                  }}
                  exit={{
                    opacity: 0,
                    x: 30,
                    scale: 0.9,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group block relative"
                  />
                  <motion.div
                    className="flex items-center justify-between p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-[#0A2342] font-medium text-lg group-hover:text-[#153776] transition-colors duration-300">
                      {item.name}
                    </span>

                    {/* Animated arrow */}
                    <motion.div
                      className="text-[#153776] opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.div>
                  </motion.div>

                  {/* Subtle gradient line */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#153776] to-[#00D4FF] rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              ))}

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#153776]/10 to-[#00D4FF]/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
