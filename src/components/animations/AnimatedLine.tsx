"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedLine() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to path drawing
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 top-0 w-1 h-full pointer-events-none z-20"
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0A2342" stopOpacity="0.8" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main animated path */}
        <motion.path
          d="M 0 0 L 0 400 L 300 550 L 300 850 L -300 1000 L -300 1300 L 300 1450 L 300 1750 L -300 1900 L -300 2200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{ pathLength }}
        />

        {/* Animated dot at the end of the line */}
        <motion.circle
          r="6"
          fill="#00D4FF"
          filter="url(#glow)"
          style={{
            offsetPath:
              "path('M 0 0 L 0 400 L 300 550 L 300 850 L -300 1000 L -300 1300 L 300 1450 L 300 1750 L -300 1900 L -300 2200')",
            offsetDistance: pathLength,
          }}
        />
      </svg>
    </div>
  );
}
