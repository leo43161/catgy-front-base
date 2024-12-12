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
        background: "#FFFCF3",
        primary: "#102C57",
        light: "#E4D2BA",
      },
      fontFamily: {
        lexend: ['"Lexend"', 'sans-serif'], // Añadir la fuente Lexend
      },
    },
  },
  plugins: [],
};
