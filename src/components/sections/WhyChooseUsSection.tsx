"use client";

import { motion } from "framer-motion";
import {
  InnovationIcon,
  ScalabilityIcon,
  SolutionsIcon,
} from "@/components/icons/CustomIcons";
import { type LucideIcon } from "lucide-react";

interface ReasonItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const reasons: ReasonItem[] = [
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology, delivering cutting-edge solutions that set industry standards and drive competitive advantage.",
    icon: InnovationIcon as LucideIcon,
    color: "#00D4FF",
  },
  {
    title: "Scalability",
    description:
      "Our solutions are built to grow with your business, ensuring long-term success and seamless expansion as your needs evolve.",
    icon: ScalabilityIcon as LucideIcon,
    color: "#FF6B35",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From concept to deployment, we provide comprehensive services that cover every aspect of your digital transformation journey.",
    icon: SolutionsIcon as LucideIcon,
    color: "#0A2342",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-[#0A2342] mb-4 md:mb-6">
            Why Choose Kriyantrai?
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto px-2">
            We&apos;re not just service providers – we&apos;re your technology
            partners. Here&apos;s what sets us apart in delivering exceptional
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-center">
                    {/* Icon with animated background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative mx-auto mb-4 md:mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                    >
                      <div
                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ backgroundColor: reason.color }}
                      ></div>
                      <div
                        className="relative z-10"
                        style={{ color: reason.color }}
                      >
                        <IconComponent
                          size={32}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#0A2342] mb-2 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#0A2342] group-hover:to-[#00D4FF] transition-all duration-300">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-[#64748B] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] rounded-full mt-4 md:mt-6 mx-auto max-w-20 md:max-w-24"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Expert Team Members" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl lg:text-4xl font-display font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-[#64748B] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
