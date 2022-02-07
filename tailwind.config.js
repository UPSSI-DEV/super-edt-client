module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /* Custom colors */
      colors: {
        primary: {
          base: "#287271",
          light: "#2a9d8f",
          dark: "#264653",
        },
      },

      /* Custom fonts */
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [import("prettier-plugin-tailwind")],
};
