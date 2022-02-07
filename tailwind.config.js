module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#287271",
          light: "#2a9d8f",
          dark: "#264653"
        }
    }
   
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
