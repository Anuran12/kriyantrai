import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  className = "",
  showText = true,
}) => {
  return (
    <motion.div
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo Image */}
      <motion.div
        className="relative overflow-hidden"
        style={{ width: size, height: size }}
        whileHover={{
          rotate: [0, -5, 5, 0],
          scale: 1.1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/logo.png"
          alt="Kriyantrai Logo"
          fill
          className="object-contain"
          priority
        />
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.span
          className="font-display font-bold text-[#153776] tracking-wide"
          style={{ fontSize: size * 0.6 }}
          whileHover={{
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Kriyantrai
        </motion.span>
      )}
    </motion.div>
  );
};

export default Logo;
