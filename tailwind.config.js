/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#FFE5D5',
          200: '#FEBF96',
          300: '#FEAA73',
          400: '#FE9450',
          500: '#D46A26',
          600: '#F2761B'
        }
      },
      fontSize: {
        xs: '12px',
        sm: '14px'
      },
      fontFamily: {
        'sans-light': ['General Sans light'],
        'sans-medium': ['General Sans Medium'],
        'sans-regular': ['General Sans Regular'],
        'sans-semibold': ['General Sans Semibold'],
        'sans-bold': ['General Sans Bold']
      },
    },
  },
  plugins: [],
}
