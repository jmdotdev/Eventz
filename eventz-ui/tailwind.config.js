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
        paleOrange: '#FFA3A3',
        eventCardBackground: '#F3FAFF',
        eventsTitle: '#242565',
        eventsFilters: '#F2F4FF',
        lightPurple: '#EFECFC',
        paleWhite: '#F8F8F8',
        palegray: '#E0E0E0'
      },
      boxShadow: {
        'customWhite': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover-blue-white': {
          '&:hover': {
            backgroundColor: '#381ddb',
            color: '#ffffff',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}