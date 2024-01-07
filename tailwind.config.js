/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./{*.html,js}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      widest: "0.25em",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    borderRadius: {
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "1rem",
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
        purple: "hsl(259, 100%, 65%)",
        red: "hsl(0, 100%, 67%)",
        off_white: "hsl(0, 0%, 94%)",
        white: "hsl(0, 0%, 100%)",
        light_grey: "hsl(0, 0%, 86%)",
        smokey_grey: "hsl(0, 1%, 44%)",
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
