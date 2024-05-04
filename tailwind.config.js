/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderWidth: {
        0.25: "0.25px",
      },
      colors: {
        "green-custom": "#70F0B3",
        "yellow-custom": "#EFFF6B",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
        "libre-franklin": ['"Libre Franklin"', "sans-serif"],
      },
      width: {
        100: "25rem", // 400px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
