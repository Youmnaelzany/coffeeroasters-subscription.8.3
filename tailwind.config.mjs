/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      "Barlow": ["Barlow", "sans-serif"],
      "Fraunces": ["Fraunces", "sans-serif"],
    },
    screens: {
      'sm': "375px",
      'md': "768px",
      'lg': "1024px",
      'xl': '1280px',
      '2xl': '1442px',
    },
    extend: {

    },
  },
  plugins: [require("tailwindcss-animate")],
}