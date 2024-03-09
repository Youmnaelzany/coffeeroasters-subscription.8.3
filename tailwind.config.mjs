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
      backgroundImage: {
        'hero-img-mobile': "url('/images/home/mobile/image-hero-coffeepress.jpg')",
        'hero-img-tablet': "url('/images/home/tablet/image-hero-coffeepress.jpg')",
        'hero-img-desktop': "url('/images/home/desktop/image-hero-coffeepress.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}