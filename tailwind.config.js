/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
    fontFamily: {
      Jost: ["Jost", "serif"],
      Lobster: ["Lobster", "serif"],
    },
    colors: {
      primary:"#F4E0AF",
    },
  },
  },
  plugins: [],
};

