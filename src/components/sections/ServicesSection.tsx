"use client";

import { motion } from "framer-motion";
import {
  AIIcon,
  MLIcon,
  AutomationIcon,
  AnalyticsIcon,
} from "@/components/icons/CustomIcons";

const services = [
  {
    title: "AI",
    description:
      "Intelligent algorithms that drive smarter decisions and automate complex processes.",
    icon: AIIcon,
    gradient: "from-[#00D4FF] to-[#0A2342]",
    hoverGradient: "from-[#00D4FF]/20 to-[#0A2342]/20",
  },
  {
    title: "Machine Learning",
    description:
      "Predictive analytics and learning models that uncover insights from your data.",
    icon: MLIcon,
    gradient: "from-[#FF6B35] to-[#FF8C42]",
    hoverGradient: "from-[#FF6B35]/20 to-[#FF8C42]/20",
  },
  {
    title: "Automation",
    description:
      "Streamline workflows and eliminate repetitive tasks with intelligent automation.",
    icon: AutomationIcon,
    gradient: "from-[#0A2342] to-[#00D4FF]",
    hoverGradient: "from-[#0A2342]/20 to-[#00D4FF]/20",
  },
  {
    title: "Analytics",
    description:
      "Data-driven strategies and comprehensive analytics for measurable business growth.",
    icon: AnalyticsIcon,
    gradient: "from-[#FF8C42] to-[#FF6B35]",
    hoverGradient: "from-[#FF8C42]/20 to-[#FF6B35]/20",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A2342] mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            We specialize in cutting-edge technologies that transform businesses
            and drive innovation. From AI-powered solutions to comprehensive
            analytics, we deliver excellence in every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <service.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-[#0A2342] mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#0A2342] group-hover:to-[#00D4FF] transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#00D4FF]/10 to-[#FF6B35]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#00D4FF]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#64748B] mb-6">
            Ready to transform your business with our expertise?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#0A2342] to-[#00D4FF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
