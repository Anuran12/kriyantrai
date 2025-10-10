"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceDetailSectionProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  direction: "left" | "right";
  index: number;
}

export default function ServiceDetailSection({
  title,
  description,
  features,
  icon: Icon,
  gradient,
  direction,
  index,
}: ServiceDetailSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [direction === "left" ? -100 : 100, 0]
  );

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          style={{ opacity, x }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            direction === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content Side */}
          <div
            className={`space-y-6 ${
              direction === "right" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
              >
                <Icon size={32} className="text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2342]">
                {title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-[#64748B] leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            <div className="space-y-4 mt-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-br ${gradient} mt-2 flex-shrink-0`}
                  />
                  <p className="text-[#64748B]">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-8 px-8 py-4 bg-gradient-to-r ${gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              Learn More
            </motion.button>
          </div>

          {/* Visual Side */}
          <div
            className={`relative ${
              direction === "right" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Placeholder for service visualization */}
              <div
                className={`w-full h-full bg-gradient-to-br ${gradient} opacity-20 flex items-center justify-center`}
              >
                <Icon size={120} className="text-white opacity-30" />
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              {/* Animated particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className={`absolute w-3 h-3 bg-white rounded-full`}
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + i * 8}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Decorative corner elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute -top-4 ${
                direction === "right" ? "-right-4" : "-left-4"
              } w-20 h-20 border-2 border-[#00D4FF] rounded-lg opacity-30`}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute -bottom-4 ${
                direction === "right" ? "-left-4" : "-right-4"
              } w-16 h-16 bg-[#FF6B35] rounded-full opacity-20`}
            />
          </div>
        </motion.div>
      </div>

      {/* Section number indicator */}
      <div
        className={`absolute top-10 ${
          direction === "right" ? "right-10" : "left-10"
        } text-8xl font-bold text-[#0A2342] opacity-5`}
      >
        0{index + 1}
      </div>
    </div>
  );
}
