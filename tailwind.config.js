/** @type {import('tailwindcss').Config} */
// const url = require("url");
module.exports = {
  mode: 'jit',
  content: [
    "./assets/**/*.{js,ts,jsx,tsx}",
      "./templates/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-headerImage": "url('./assets/Images/img-1.jpg')",
      }
    },
  },
  plugins: [],
}

