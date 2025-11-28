import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Work", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const serviceLinks = [
    { name: "AI Solutions", href: "#" },
    { name: "Machine Learning", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Development", href: "#" }
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
    <footer className="bg-black text-white py-16 px-6 rounded-t-4xl">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold">Kriyantrai</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses with AI, Machine Learning, and Automation. We create intelligent solutions that drive innovation, efficiency, and growth.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

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
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <Mail size={18} />
            </div>
            <span>info@kriyantrai.com</span>
          </motion.a>

          <motion.a
            href="tel:+916289946256"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <Phone size={18} />
            </div>
            <span>+91 6289946256</span>
          </motion.a>

          <motion.div
            className="flex items-center gap-3 text-gray-400"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <span>Kolkata, India</span>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          © 2024 Kriyantrai. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}