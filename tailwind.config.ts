import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f4f8",
          100: "#d9e6f0",
          200: "#b3cde1",
          300: "#8db4d2",
          400: "#679bc3",
          500: "#4182b4",
          600: "#346890",
          700: "#2a5474",
          800: "#204058",
          900: "#0a2342",
        },
        secondary: {
          50: "#e0f7ff",
          100: "#b3eaff",
          200: "#80ddff",
          300: "#4dd0ff",
          400: "#1ac3ff",
          500: "#00d4ff",
          600: "#00a8cc",
          700: "#007d99",
          800: "#005266",
          900: "#002733",
        },
        accent: {
          50: "#fff5f0",
          100: "#ffe6d9",
          200: "#ffccb3",
          300: "#ffb38d",
          400: "#ff9a67",
          500: "#ff6b35",
          600: "#e55a2b",
          700: "#cc4921",
          800: "#b33817",
          900: "#8c270d",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
