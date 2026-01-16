"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter();
  const [showServices, setShowServices] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 5) {
      setShowNav(false);
      setShowMobileMenu(false);
    } else if (currentScrollY < lastScrollY - 5) {
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMobileMenu]);

  const navLinksLeft = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }
  ];

  const navLinksRight = [
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" }
  ];

  const allNavLinks = [...navLinksLeft, ...navLinksRight];

  const services = [
    { category: "Development" ,route: '/services/dev'},
    { category: "Data & Analytics", route: '/services/data' },
    { category: "AI & Automation", route: '/services/ai' },
    { category: "Machine Learning & Deep Learning", route: '/services/ml-dl' }
  ];

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <>
            {/* Desktop Navbar */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 hidden md:block"
            >
              <motion.nav
                className="bg-white border-b border-gray-200 shadow-lg px-8 py-4"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  {/* Logo on the left */}
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={()=>{router.push('/')}}
                  >
                    <img src="/logo.png" alt="Logo" className="h-12 w-auto"  />
                    <span className="text-[#4d6179] text-2xl font-semibold font-sans">Kriyantrai</span>
                  </motion.div>

                  {/* Navigation links on the right */}
                  <div className="flex items-center gap-8">
                    {navLinksLeft.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        className="text-[#4d6179] font-medium hover:text-[#0474BA] transition-colors relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.name}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFA630]"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.a>
                    ))}

                    <div
                      className="relative"
                      onMouseEnter={() => setShowServices(true)}
                      onMouseLeave={() => setShowServices(false)}
                    >
                      <motion.a
                        href="#"
                        className="text-[#4d6179] font-medium hover:text-[#0474BA] transition-colors relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Services
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFA630]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: showServices ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.a>

                      <AnimatePresence>
                        {showServices && (
                          <motion.div
                            className="absolute top-12 right-0 w-64"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-4">
                              <ul className="space-y-3">
                                {services.map((service, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 5 }}
                                  >
                                    <a
                                      href={service.route}
                                      className="text-[#173876] hover:text-[#F68F12] transition-colors font-medium block"
                                    >
                                      {service.category}
                                    </a>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {navLinksRight.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        className="text-[#4d6179] font-medium hover:text-[#0474BA] transition-colors relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.name}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFA630]"
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

            {/* Mobile Navbar */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden"
            >
              <div className="bg-white border-b border-gray-200 shadow-lg px-6 py-4">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <motion.div
                    className="flex items-center gap-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                    <span className="text-[#4d6179] text-lg font-semibold font-sans">Kriyantrai</span>
                  </motion.div>

                  {/* Menu Button */}
                  <motion.button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="w-10 h-10 bg-gradient-to-br from-[#0474BA] to-[#4d6179] rounded-full flex items-center justify-center shadow-lg"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <AnimatePresence mode="wait">
                      {showMobileMenu ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="text-white" size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className="text-white" size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0474BA]/20 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileMenu(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute inset-x-4 top-20 bottom-4 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-8">
                {/* Navigation Links */}
                <div className="space-y-4 mb-8">
                  {allNavLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="block text-[#4d6179] text-2xl font-semibold hover:text-[#FFA630] transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Services Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-[#173876]/20 pt-6"
                >
                  <h3 className="text-[#4d6179] text-xl font-bold mb-6">Services</h3>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <motion.a
                        key={index}
                        href={service.route}
                        className="block text-[#4d6179] text-lg font-medium hover:text-[#FFA630] transition-colors py-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {service.category}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}