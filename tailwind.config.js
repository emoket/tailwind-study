module.exports = {
  purge: {
    // enabled: true,
    content: ['./src/**/*.jsx', './index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // CASE A.
        // brand: '#0fa9e6',
        // 'brand-light': '#3fbaeb',
        // 'brand-dark': '#0c87b8',

        // CASE better
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6', // using just type "brand"
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif', // font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
