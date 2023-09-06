/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.html", "./dist/components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#FEC740",
        primary: "#7EB23D",
        danger: "#FC4B4E",
        hover: "#",
        background: "#F4F5F5",
        dark: "#264653",
        darkBold: "#05172C",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      pt: ['"PT Sans"', "sans-serif"],
      viga: ["Viga", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
