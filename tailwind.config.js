/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".animate-marquee": {
      animation: "marquee 20s linear infinite",
    },
    ".animate-marquee-reverse": {
      animation: "marquee-reverse 20s linear infinite",
    },
  });
});

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // optional if you still use src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
        lumanosimo: ['"Lumanosimo"', "cursive"],
        figtree: ["Figtree", "serif"],
      },
      colors: {
        blueCustomColor: "#0c2b3b",
        greenCustomColor: "#068f36",
        greenCustomColor2: "#008567",
        CustomHeading: "#000000",
        CustomContent: "#727573",
        greenButton: "#27e600",
      },
      animation: {
        slide: "slide 20s linear infinite",
        "slide-reverse": "slide-reverse 20s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [Myclass],
};