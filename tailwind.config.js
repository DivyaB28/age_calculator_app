/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**.html"],
  theme: {
    letterSpacing: {
      widest: "0.25em",
    },

    borderRadius: {
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "10rem",
    },
    divideWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    backgroundImage: {
      "icon-arrow": "url('/assets/images/icon-arrow.svg')",
    },
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        off_white: "hsl(0, 0%, 94%)",
        white: "#fff",
        light_grey: "hsl(0, 0%, 86%)",
        smokey_grey: "hsl(0, 1%, 44%)",
        purple: "hsl(259, 100%, 65%)",
        off_black: "hsl(0, 0%, 8%)",
      },
      maxWidth: {
        140: "39rem",
      },
      fontSize: {
        xs: ["0.6rem", "1rem"],
      },
    },
  },
};
