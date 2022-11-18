const { yellow } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1240px'
    },
    extend: {
      backgroundImage: {
        'home': "url('/public/Asset/Home_bg.jpg')",
        'about': "url('/public/Asset/About_bg.jpg')",
        'contact': "url('/public/Asset/Contact_bg.jpg')"
      },
      colors:{
        primary: '#FF9A62',
        secondary: '#FBE202',
        nav: '#1F3D43'
      },
      height:{
        '128': '44.8rem',
        '130': '46rem',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}