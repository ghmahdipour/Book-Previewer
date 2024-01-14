const colors = require("tailwindcss/colors");

const defaultColors = {
  primary: {
    50: "#ffffff",
    100: "#efefef",
    200: "#dcdcdc",
    300: "#bdbdbd",
    400: "#989898",
    500: "#7c7c7c",
    600: "#656565",
    700: "#525252",
    800: "#464646",
    900: "#3d3d3d",
  },
  secondary: {	
	50: "#f4f9f8",
    100: "#daede9",
    200: "#b5dad3",
    300: "#89bfb7",
    400: "#6ca8a0",
    500: "#46867f",
    600: "#366b66",
    700: "#2e5753",
    800: "#294645",
    900: "#253c3a",
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
