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
        background: "#FFFFFF",
        primary: "#5F6F52",
        light: "#A9B388",
      },
      fontFamily: {
        lexend: ['"Lexend"', 'sans-serif'], // Añadir la fuente Lexend
      },
    },
  },
  plugins: [],
};
