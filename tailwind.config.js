const defaultTheme = require("tailwindcss/defaultTheme");
const css = (name) => `var(--${name})`;

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        white: css("white"),
        black: css("black"),
        gray: css("gray"),

        primary: {
          DEFAULT: css("primary"),
          light: css("primary-light"),
          dark: css("primary-dark"),
        },

        error: css("error"),
      },
    },
  },
  plugins: [],
};
