/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
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
            fontFamily: {
                ppNeueMontrealThin: ["PPNeueMontreal-Thin", "sans-serif"],
                ppNeueMontrealBold: ["PPNeueMontreal-Bold", "sans-serif"],
                ppNeueMontrealBook: ["PPNeueMontreal-Book", "sans-serif"],
                ppNeueMontrealItalic: ["PPNeueMontreal-Italic", "sans-serif"],
                ppNeueMontrealMedium: ["PPNeueMontreal-Medium", "sans-serif"],
                ppNeueMontrealSemiBoldItalic: ["PPNeueMontreal-SemiBolditalic", "sans-serif"],
            },
        },
    },
    plugins: [],
};
