/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        deepBlue: '#381ddb',
        navBarBackground: '#08012B',
        paleOrange: '#FFA3A3'
      },
      boxShadow: {
        'customWhite': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }
    },
  },
  plugins: [],
}