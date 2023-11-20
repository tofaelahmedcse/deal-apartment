module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily:{
        body: ['Montserrat']
      },

      height: {
        xxl: '650px',
       },

      fontSize: {
       'sxl': '14px',
       '1xl': '16px',
       '1xll': '18px',
       },

       lineHeight:{
        '12': '37px',
        '14': '61px',
        '16': '75px',
        '17': '26px',
        '11': '19px',
        '44': '44px',
       },

       backgroundColor: theme => ({
        ...theme('colors'),
        'black-50': 'rgba(0, 0, 0, 0.29)',
       }),
       maxWidth: {
        'secondery': '1440px',
       },
       screens: {
        'tab-potr': [
          {'min': '768', 'max': '991'},
        ],
        
        'tab-landscape': [
          {'min': '992', 'max': '1024'},
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
