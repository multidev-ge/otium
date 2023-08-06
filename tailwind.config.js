/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      width: {
        '28/100': '28%',
      },
      fontSize:{
        '6.5xl': '4rem',

      },
      lineHeight:{
        '6.5xl': '1.1'
      }
    },
  },
  plugins: [],
};