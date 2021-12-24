module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
}

const colors = require("tailwindcss/colors")
module.exports = {
  // mode: 'jit',
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [],
}
