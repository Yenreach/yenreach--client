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
        'dark-light': '#343741',
        'gray-dark': '#273444',
        'footer-gray': '#69707D',
        'gray': '#D3DAE6',
        'gray-light': '#E5E5E5',
      },
      fontSize: {
        xsm: ['0.625rem', '0.8rem'],
        smm: ['0.8125rem', '1.15rem'],
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
      },
      height: {
        '104': '26rem',
        '128': '32rem',
      },
    },
    
  },
  // plugins: [require('daisyui')],
}