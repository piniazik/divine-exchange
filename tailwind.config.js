/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  'white': '#FFFFFF',
  'blue': '#18C8FF',
  'violet': '#933FFE',
  'violet-light': '#B982FF',
  'black-500': '#16161E;',
  'black-light': '#2B2C3B',
  'gray': '#898CA9',
  'dark-gray': '#565976',
  'violet-dark': '#6439f5',
  'turquoise': '#5cf9e2',
  'green': '#0DBB7C',
  'red' : '#FF8282'
}
module.exports = {
  content: ['./src/**/*.{vue,js}'],
  theme: {
    colors: colors,
    textColor: colors,
    fill: colors,
    borderColor: colors,
    extend: { 
      spacing: {
        '4.375': '1.09375rem',
        '5.5': '1.375rem',
        '8.25': '2.0625rem',
        '11.5': '2.875rem',
        '35': '8.75rem',
        '57.5': '14.375rem',
    },
    container: {
      center: true,
      padding: '0.9375rem',
      screens: {
        sm: '100%',
        md: '728px',
        lg: '984px',
        xl: '1280px',
      },
    },
    screens: {
      'xl': {'max': '1399.98px'},
      // => @media (max-width: 1399.98px) { ... }
      'lg': {'max': '1199.98px'},
      // => @media (max-width: 1199.98px) { ... }
      'lg': {'max': '1199.98px'},
      // => @media (max-width: 1199.98px) { ... }
      'md': {'max': '991.98px'},
      // => @media (max-width: 991.98px) { ... }
      'sm': {'max': '767.98px'},
      // => @media (max-width: 767.98px) { ... }
      'xs': {'max': '575.98px'},
      // => @media (max-width: 575.98px) { ... }
    },
    fontSize: {
      extra_xs: ['12px', '150%'],
      xs: ['14px', '100%'],
      base: ['16px', '100%'],
      base_s: ['16px', '150%'],
      lg: ['32px', '130%'],
      xl: ['48px', '64px'],
      xlg: ['50px', '130%'],
      xxl: ['85px', '130%'],
    },
    minHeight: {
      '10': '2.5rem',
      '10.5': '2.625rem',
      '14': '3.5rem',
      '20': '5rem',
      '86.5': '21.625rem',
      '112': '28rem',
      '177.75': '44.4375rem',
      '222.75': '55.6875rem',
      '360': '90rem',
    },
    maxHeight: {
     
    },
    maxWidth: {
      '76': '19rem',
      '145': '36.25rem',
      '195': '48.75rem',
      '360': '90rem',
    },
    minWidth: {

    },
    height: {
      '13.5': '3.375rem',
      '14': '3.5rem',
    },
    width: {
      '13.5': '3.375rem',
      '76': '19rem',
    },
    boxShadow: {
      'custom': 'inset 0px 0px 30px rgba(255, 255, 255, 0.05), inset 0px 2px 2px rgba(255, 255, 255, 0.15)',

    },
    gridTemplateColumns: {
      'cards-responsive': 'repeat(auto-fit, minmax(23.75rem, 1fr))',
      'cards-mobile': 'repeat(auto-fit, minmax(20rem, 1fr))',
    },
    padding: {
      'fluid-video': '56.25%',
      'fluid-video-responsive': '16.25%'
    },
    borderRadius: {
      'la': '0.625rem',
      'big': '1.5625rem',
      
    },
    backgroundImage: {
      'btn-pattern': 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%);',
      'bg-header': 'url("/images/bg-header-area.png")',
      'bg-access': 'url("/images/spiral.png")',
      'bg-footer': 'url("/images/bg-footer.png")',
    },
    backgroundPosition: {
      'top-4': 'left top -5rem',
    },
  },
},
  plugins: [],
}
