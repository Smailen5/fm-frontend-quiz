/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pureWhite: "var(--clr-pureWhite)",
      lightGrey: "var(--clr-lightGrey)",
      lightBluish: "var(--clr-lightBluish)",
      greyNavy: "var(--clr-greyNavy)",
      navy: "var(--clr-navy)",
      darkNavy: "var(--clr-darkNavy)",
      purple: "var(--clr-purple)",
      purpleLight: "var(--clr-purple-light)",
      purpleUltraLight: "var(--clr-purple-ultraLight)",
      green: "var(--clr-green)",
      red: "var(--clr-red)",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
