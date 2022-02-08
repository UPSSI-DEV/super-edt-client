module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /* Custom colors */
      colors: {
        primary: {
          /*base: "#287271",
          light: "#2a9d8f",
          dark: "#264653",*/

          /*base: "#d45113",
          light: "#f9a03f",
          dark: "#813405",*/

          /*base: "#0077b6",
          light: "#00b4d8",
          dark: "#03045e",*/

          DEFAULT: "#f4a261",
          light: "#e9c46a",
          dark: "#e76f51",
        },
      },

      /* Custom fonts */
      fontFamily: {
        sans: ["Mukta", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [import("prettier-plugin-tailwind")],
};
