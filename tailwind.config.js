/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundColor:{
        'black-col':  'rgba(255, 255, 255, 0.25)'
      }
    },
  },
  plugins: [
    require("tailwindcss/nesting")
  ],
}
