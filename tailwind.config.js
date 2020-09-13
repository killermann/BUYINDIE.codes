module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
    },
    opacity: {
      '15': '.15',
    },
    fontSize: {
      'xs': '.56rem',
      'sm': '.75rem',
      'base': '1rem',
      'lg': '1.333rem',
      'xl': '1.777rem',
      '2xl': '2.369rem',
      '3xl': '3.157rem',
      '4xl': '4.209rem',
      '5xl': '5.610rem',
      '6xl': '7.478rem',
    },
    borderRadius: {
      'lg': '2.5em',
    },
    extend: {
      maxHeight: {
        "24": "6rem",
        "48": "12rem",
        "80vh": "80vh",
        "90vh": "90vh",
        none: "none",
      },
      colors: {
        gray: {
          '100': '#F8F7F9',
          '200': '#ECEAEF',
          '300': '#E1E0E3',
          '400': '#D8D7DB',
          '500': '#CCCAD0',
          '600': '#9393A9',
          '700': '#747490',
          '800': '#525364',          
          '900': '#2B2C42',
        },
        yellow: {
          '100': '#FFFCD9',
          '200': '#FFF9AA',
          '300': '#F7EC5A',
          '400': '#EADB18',
          '500': '#D8B628',
          '600': '#B48C08',
          '700': '#926D07',
          '800': '#7C5621',          
          '900': '#553913',
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
