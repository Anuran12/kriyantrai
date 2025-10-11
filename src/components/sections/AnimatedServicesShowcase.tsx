"use client";

import { Brain, Cpu, Zap, BarChart3 } from "lucide-react";
import ServiceDetailSection from "./ServiceDetailSection";

const services = [
  {
    title: "Development",
    description:
      "We build robust, scalable, and user-friendly applications across multiple platforms to help businesses thrive in the digital world.",
    features: [
      "Web Development",
      "Mobile App Development",
      "Desktop Application Development",
      "Full-Stack Solutions",
      "API Integration",
    ],
    icon: Zap, // Reusing Zap icon for now, can be changed later if a more specific icon is available
    gradient: "from-[#00D4FF] to-[#0A2342]",
    direction: "right" as const,
  },
  {
    title: "Data & Analytics",
    description:
      "We transform raw data into actionable insights, helping businesses make informed decisions and gain competitive advantages.",
    features: [
      "Data Cleaning & Visualization",
      "Dashboard Development",
      "Business Intelligence Solutions",
      "Predictive Analytics",
      "Data Processing",
    ],
    icon: BarChart3, // Reusing BarChart3 icon for now
    gradient: "from-[#FF6B35] to-[#FF8C42]",
    direction: "left" as const,
  },
  {
    title: "AI & Automation",
    description:
      "We leverage artificial intelligence and automation technologies to streamline operations, enhance productivity, and create intelligent solutions.",
    features: [
      "Workflow Automation",
      "Chatbot Development",
      "AI-Powered Tools Integration",
      "NLP & Text Automation",
      "Image / Video Automation",
    ],
    icon: Brain, // Reusing Brain icon for now
    gradient: "from-[#0A2342] to-[#00D4FF]",
    direction: "right" as const,
  },
  {
    title: "Machine Learning & Deep Learning",
    description:
      "We develop advanced machine learning and deep learning solutions that solve complex problems and drive innovation.",
    features: [
      "Model Development & Training",
      "Computer Vision Projects",
      "Natural Language Processing",
      "Recommendation Systems",
      "Custom ML Solutions",
    ],
    icon: Cpu, // Reusing Cpu icon for now
    gradient: "from-[#FF8C42] to-[#FF6B35]",
    direction: "left" as const,
  },
];

export default function AnimatedServicesShowcase() {
  return (
    <div className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      {/* Animated Line - This will be overlaid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full"
          width="800"
          height="100%"
          style={{ minHeight: "3000px" }}
        >
          <defs>
            <linearGradient
              id="serviceLineGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#FF6B35" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0A2342" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#FF8C42" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.6" />
            </linearGradient>

            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection points/dots at each service section */}
          <circle cx="600" cy="550" r="8" fill="#00D4FF" opacity="0.8" />
          <circle cx="200" cy="1050" r="8" fill="#FF6B35" opacity="0.8" />
          <circle cx="600" cy="1550" r="8" fill="#0A2342" opacity="0.8" />
          <circle cx="200" cy="2050" r="8" fill="#FF8C42" opacity="0.8" />
        </svg>
      </div>

      {/* Service Sections */}
      <div className="relative z-10">
        {services.map((service, index) => (
          <ServiceDetailSection
            key={service.title}
            title={service.title}
            description={service.description}
            features={service.features}
            icon={service.icon}
            gradient={service.gradient}
            direction={service.direction}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
