/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#0F172A",
      }
    },
  },
  plugins: [],
}

