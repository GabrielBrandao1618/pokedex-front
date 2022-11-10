/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        gray: {
          900: '#161618',
          800: '#1E1E23',
          500: '#676785',
          300: '#A8A8BB',
          200: '#BEBED3',
          100: '#F8F8FF'
        },
        purple: {
          700: '#7A08ED',
          400: '#A363E2'
        },
        blue: {
          700: '#3608ED',
          400: '#7251F3'
        },
        rose: {
          700: '#ED085A',
          400: '#F55F95'
        }
      }
    },
  },
  plugins: [],
}
