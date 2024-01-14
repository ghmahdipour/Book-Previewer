const colors = require("tailwindcss/colors");

const defaultColors = {
  primary: {
    50: "#f2faf9",
    100: "#e6f4f3",
    200: "#bfe5e2",
    300: "#99d5d0",
    400: "#4db5ad",
    500: "#00958a",
    600: "#00867c",
    700: "#007068",
    800: "#005953",
    900: "#004944",
  },
  secondary: {
    50: "#f2faf9",
    100: "#e6f4f3",
    200: "#bfe5e2",
    300: "#99d5d0",
    400: "#4db5ad",
    500: "#00958a",
    600: "#00867c",
    700: "#007068",
    800: "#005953",
    900: "#004944",
  },
};

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      ...defaultColors,
    },
    extend: {
      fontFamily: {
        sans: `IRANSans, ui-sans-serif, system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
          sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji"`,
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
    extend: {
      margin: ["responsive", "direction"],
      float: ["responsive", "direction"],
      padding: ["responsive", "direction"],
      space: ["responsive", "direction"],
    },
  },
};
