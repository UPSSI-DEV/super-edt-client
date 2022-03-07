module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      /* Custom colors */
      colors: {
        primary: {
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
};
