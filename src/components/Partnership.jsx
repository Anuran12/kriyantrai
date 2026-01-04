import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedCompanies() {
  // Demo company logos (using text for now - you can replace with actual logo images)
  const companies = [
    { name: 'Amazon Prime', color: '#00A8E1', icon: '🛒' },
    { name: 'CheckoutChamp', color: '#FF6B35', icon: '✓' },
    { name: '29NEXT', color: '#0066CC', icon: 'N' },
    { name: 'VriO', color: '#1a1a1a', icon: 'V' },
    { name: 'sticky.io', color: '#FF4785', icon: 'S' },
    { name: 'Swell', color: '#000000', icon: '~' },
    { name: 'Pinpoint Payments', color: '#003d7a', icon: 'P' },
    { name: 'The Fulfillment Lab', color: '#E31837', icon: '📦' },
    { name: 'SaveTrack', color: '#0080FF', icon: '💾' },
    { name: 'Venkel Ltd', color: '#C41E3A', icon: 'V' },
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#153776] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by leading companies and partners
        </motion.h2>

        {/* Grid Container with borders */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 border border-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="relative bg-white border-r border-b border-gray-200 last:border-r-0 p-8 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
              style={{
                borderRight: (index + 1) % 5 === 0 ? 'none' : undefined,
                borderBottom: index >= 5 ? 'none' : undefined,
              }}
            >
              {/* Logo placeholder */}
              <div className="text-center">
                <div 
                  className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: company.color }}
                >
                  {company.icon}
                </div>
                <div 
                  className="text-xs font-semibold"
                  style={{ color: company.color }}
                >
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Optional subtitle */}
        <motion.p
          className="text-center text-gray-600 mt-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Join hundreds of companies that trust our solutions
        </motion.p>
      </div>
    </div>
  );
}