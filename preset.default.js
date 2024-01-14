const colors = require("tailwindcss/colors");

const defaultColors = {
  primary: {
    50: "#ECF0FF",
    100: "#D7E0FF",
    200: "#AFC0FF",
    300: "#86A1FE",
    400: "#5E81FE",
    500: "#3561FE",
    600: "#0138FA",
    700: "#012BC2",
    800: "#011F8A",
    900: "#001252",
  },
  secondary: {
    50: "#FFFBEC",
    100: "#FFF6D7",
    200: "#FFEDAF",
    300: "#FEE486",
    400: "#FEDB5E",
    500: "#FED235",
    600: "#FAC301",
    700: "#C29801",
    800: "#8A6C01",
    900: "#524000",
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
