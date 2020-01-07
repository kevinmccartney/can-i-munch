const config = {
  theme: {
    // https://material.io/design/layout/responsive-layout-grid.html#breakpoints
    screens: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    colors: {
      primary: 'var(--primary-color)',
      'primary-lighter': 'var(--primary-color-lighter)',
      'primary-darker': 'var(--primary-color-darker)',
      accent: 'var(--accent-color)',
      'accent-lighter': 'var(--accent-color-lighter)',
      'accent-darker': 'var(--accent-color-darker)',
      'white': 'var(--white-color)'
    },
    spacing: {
      '0': '0rem',
      '0.5': '0.5rem',
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      '4': '4rem', // 32px
      '5': '5rem',
      '6': '6rem',
      '7': '7rem', // 56px
      '8': '8rem',
      '9': '9rem',
      '10': '10rem',
      '11': '11rem',
      '12': '12rem'
    },
    flexGrow: {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      '11': 11,
      '12': 12,
    },
    fontSize: {
      // perfect fourth type scale
      // https://type-scale.com/
      'caption': '1.5rem',
      'base': '2rem',
      'sm': '2.666rem',
      'md': '3.554rem',
      'lg': '4.738rem',
      'xl': '6.314rem',
      'xxl': '8.418rem',
    },
    minWidth: {
      'xs': '10rem', // 80px
      'sm': '25rem', // 200px
      'md': '50rem', // 400px
      'lg': '75rem', // 600px
      'xl': '100rem' // 800px
    }
  },
  plugins: [],
  important: true,
}

module.exports = config;
