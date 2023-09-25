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
        '2xl': '1400px',
        '3xl': '1848px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl': '6.5rem',
      },
    },
    extend: {
      width: {
        '28/100': '28%',
      },
      fontSize: {
        '6.5xl': '4rem',
        '4.5xl': '40px',
        '3.5xl': '32px',
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