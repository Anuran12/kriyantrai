import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Development", href: "/services/dev" },
    { name: "Data & Analytics", href: "/services/data" },
    { name: "AI & Automation", href: "/services/ai" },
    { name: "ML & DL", href: "/services/ml-dl" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-white overflow-hidden -mt-1">
      {/* Top Wave SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className='w-full block rotate-180' preserveAspectRatio="none" style={{ display: 'block', height: 'auto' }}>
        <g fill="#173876">
          <path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path>
          <path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path>
          <path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path>
          <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path>
        </g>
      </svg>

      {/* Footer Content */}
      <div className="relative bg-gradient-to-b from-[#173876] to-[#0f2a5a] -mt-1">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          {/* Main Footer Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <motion.img 
                  src="/logo.png" 
                  alt="Kriyantrai Logo" 
                  className="h-12 w-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-3xl font-bold text-white font-sans">Kriyantrai</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Transforming businesses with AI, Machine Learning, and Automation. We create intelligent solutions that drive innovation, efficiency, and growth.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#F68F12] transition-colors group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F68F12] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F68F12] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            className="relative h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#F68F12] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:info@kriyantrai.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#F68F12] transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="text-sm">info@kriyantrai.com</span>
            </motion.a>

            <motion.a
              href="tel:+916289946256"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#F68F12] transition-all duration-300">
                <Phone size={18} />
              </div>
              <span className="text-sm">+91 6289946256</span>
            </motion.a>

            <motion.div
              className="flex items-center gap-3 text-white/70"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <span className="text-sm">Kolkata, India</span>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center text-white/50 text-sm pt-8 border-t border-white/10 pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>© 2024 Kriyantrai. All rights reserved.</p>
          </motion.div>
        </div>

        {/* Bottom Wave SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className='w-full block -mb-1' preserveAspectRatio="none" style={{ display: 'block', height: 'auto' }}>
          <g fill="#0f2a5a">
            <path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path>
            <path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path>
            <path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path>
            <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path>
          </g>
        </svg>
      </div>
    </footer>
  );
}