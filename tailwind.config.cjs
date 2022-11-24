/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#00C885',
        'color2': '#076AFF',
        'color3': '#FF9900',
        'dark-light': '#343741;',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontSize: {
        xsm: ['0.625rem', '0.8rem'],
        '25': ['1.3rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '3xlm': ['1.7rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
        '40': ['2.5rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/hero.svg')",
        'audience': "url('src/assets/audience.svg')",
      },
      width: {
        '68': '17rem',
      }
    },
    
  },
  // plugins: [require('daisyui')],
}