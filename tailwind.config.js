/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"hsl(0, 0%, 17%)",
        secondary:"hsl(0, 0%, 59%)",
      },
      fontFamily:{
        'Rubik': ['Rubik','sans-serif'],
      },
      fontWeight:{
        normal:"400",
        medium:"500",
        bold:'700',
      },
      screens: {
        'sm':'375px',
        'lg':'1440px',
      }
    },
  },
  plugins: [],
}

