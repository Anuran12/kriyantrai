"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 5) {
      setShowNav(false);
    } else if (currentScrollY < lastScrollY - 5) {
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinksLeft = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" }
  ];

  const navLinksRight = [
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const services = [
    {
      category: "Development",
      items: [
        "Web Development",
        "Mobile App Development",
        "Desktop Application Development",
        "Full-Stack Solutions",
        "API Integration"
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        "Data Cleaning & Visualization",
        "Dashboard Development",
        "Business Intelligence Solutions",
        "Predictive Analytics",
        "Big Data Processing"
      ]
    },
    {
      category: "AI & Automation",
      items: [
        "Workflow Automation",
        "Chatbot Development",
        "AI-Powered Tools Integration",
        "NLP & Text Automation",
        "Image / Video Automation"
      ]
    },
    {
      category: "Machine Learning & Deep Learning",
      items: [
        "Model Development & Training",
        "Computer Vision Projects",
        "Natural Language Processing",
        "Recommendation Systems",
        "Custom ML Solutions"
      ]
    }
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-2"
        >
          <motion.nav
            className="bg-white/50 backdrop-blur-lg border border-white/20 rounded-full shadow-2xl px-8 py-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-3 items-center text-center">

              <div className="flex justify-start gap-8 ml-12">
                {navLinksLeft.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-[#173876] font-medium hover:text-[#0f2a5a] transition-colors relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F68F12]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#173876] to-[#0f2a5a] rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </motion.div>

              <div className="flex justify-end gap-8">

                <div
                  className="relative"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <motion.a
                    href="#"
                    className="text-[#173876] font-medium hover:text-[#0f2a5a] transition-colors relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Service
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F68F12]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: showServices ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>

                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        className="absolute top-12 right-0 w-[750px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6">
                          <div className="grid grid-cols-2 gap-6">
                            {services.map((service, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="bg-[#173876] text-white rounded-2xl px-4 py-2 mb-3 inline-block">
                                  <h4 className="text-sm font-bold">{service.category}</h4>
                                </div>
                                <ul className="space-y-2">
                                  {service.items.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      whileHover={{ x: 5 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <a className="text-gray-700 hover:text-[#173876] transition-colors text-sm">
                                        {item}
                                      </a>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinksRight.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-[#173876] font-medium hover:text-[#0f2a5a] transition-colors relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F68F12]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}

              </div>

            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}