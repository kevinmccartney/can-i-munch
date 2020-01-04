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
      primaryColor: 'var(--primary-color)'
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
    }
  },
  variants: {

  },
  plugins: [],
  important: true,
}

module.exports = config;
