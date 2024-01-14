const colors = require("tailwindcss/colors");

const defaultColors = {
  primary: {
    50: "#f6f4f8",
    100: "#ece9f1",
    200: "#d0c8dc",
    300: "#b4a7c6",
    400: "#7c649c",
    500: "#442271",
    600: "#3d1f66",
    700: "#331a55",
    800: "#291444",
    900: "#211137",
  },
  secondary: {
    50: "#f6f4f8",
    100: "#ece9f1",
    200: "#d0c8dc",
    300: "#b4a7c6",
    400: "#7c649c",
    500: "#442271",
    600: "#3d1f66",
    700: "#331a55",
    800: "#291444",
    900: "#211137",
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
