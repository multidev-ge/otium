/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@vueform/slider/tailwind'),

  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '580px',
        md: '700px',
        lg: '930px',
        xl: '1165px',
        '2xl': '1400px'
      }
    },
    extend: {
      width: {
        '28/100': '28%',
      },
      fontSize: {
        '6.5xl': '4rem',

      },
      lineHeight: {
        '6.5xl': '1.1',
      },
      fontFamily: {
        sans: ['PP Neue Montreal', "sans-serif"]
      },
    },

  }
}