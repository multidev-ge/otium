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
    screens: {
      xs: '375px',
      sm: '580px',
      md: '700px',
      lg: '930px',
      xl: '1165px',
      '2xl': '1440px',
      '3xl': '1840px',
      '4xl': '2220px',
    },
    container: {
      screens: {
        xs: '360px',
        sm: '580px',
        md: '700px',
        lg: '930px',
        xl: '1165px',
        '2xl': '1376px',
        '3xl': '1740px',
        '4xl': '2180px',
      },
      padding: {
        DEFAULT: '0.5rem',
        xs: '0.5rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
      },
    },
    extend: {
      width: {
        '28/100': '28%',
      },
      fontSize: {
        '125': '125px',
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
    }
  }
}