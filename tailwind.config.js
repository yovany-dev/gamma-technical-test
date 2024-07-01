/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'v-white': '#ffffff',
        'v-black': '#60627f',
        'v-light-gray': '#eaebf1',
        'v-gray': '#cccedf',
        'v-blue': '#616fed',
        'v-bg': 'rgba(0, 0, 0, .6)',
      },
      screens: {
        'v-1000': {max: '1000px'},
        'v-780': {max: '780px'},
        'v-450': {max: '450px'},
      }
    },
  },
  plugins: [],
}

