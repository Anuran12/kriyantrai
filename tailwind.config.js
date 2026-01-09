/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0474BA',
        secondary: '#00A7E1',
        accent: '#FFA630',
        dark: '#4d6179',
        background: '#EBEBEB',
      },
    },
  },
  plugins: [],
}
