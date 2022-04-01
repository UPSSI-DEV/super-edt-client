const getThemeColor = (variable) => `var(--${variable})`;

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      /* Custom colors */
      colors: {
        bg: {
          DEFAULT: getThemeColor("bg-primary"),
          secondary: getThemeColor("bg-secondary"),
        },
        text: getThemeColor("text-primary"),

        primary: {
          DEFAULT: getThemeColor("primary"),
          light: getThemeColor("primary-light"),
          dark: getThemeColor("primary-dark"),
        },
      },

      /* Custom fonts */
      fontFamily: {
        sans: ["Mukta", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
