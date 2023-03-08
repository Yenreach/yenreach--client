/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#00C885',
        'blue': '#076AFF',
        'orange': '#FF9900',
        'green2': '#083640',
        'graybg': '#e0e0e021',
        'orange-light': '#ffcc8954',
        'blue-light': '#076aff1a',
        'green-light': '#00c8851a',
        'gray-dark': '#273444',
        'footer-gray': '#69707D',
        'footer-bg': '#FAFAFA',
        'gray': '#c2c2c2',
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
        arialsans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/hero.svg')",
        'audience': "url('src/assets/audience.svg')",
        'new-job-listing': "url('src/assets/new-job-listing.svg')",
      },
      width: {
        '68': '17rem',
      },
      height: {
        '104': '26rem',
        '128': '32rem',
      },
      padding: {
        '22': '5.5rem',
      },
      gridTemplateColumns: {
        // Business grids
        'bus1': 'repeat(1, minmax(17rem, 1fr))',
        'bus2': 'repeat(2, minmax(17rem, 1fr))',
        'bus3': 'repeat(3, minmax(17rem, 1fr))',
        'bus4': 'repeat(4, minmax(17rem, 1fr))',
        'auto': 'repeat(autofit, minmax(24rem, 1fr))',

        // Complex site-specific column configuration
        'business-info': 'repeat(1, minmax(300px, 1fr))',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1.04)' },
          '50%': { transform: 'scale(0.96))' },
          '75%': { transform: 'scale(1.01)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(350%)' },
        },
        around: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        button_click: 'wiggle 200ms ease-in-out',
        slideIn: 'slideIn 0.3s linear infinite',
      }
    },
    
  },
  // plugins: [require('daisyui')],
}