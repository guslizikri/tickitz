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
      },
      backgroundImage: {
        'hero-result': "url('/public/assets/img/bg-result.png')",
        'profile': "url('/public/assets/img/profile.png')",
        'loyalty': "url('/public/assets/img/loyalpoint.png')",
      },
      boxShadow: {
        'shadow-blur': "inset 0 0 0 2000px rgba(27, 27, 27, 0.5)",
      }
    },
  },
  plugins: [],
}

