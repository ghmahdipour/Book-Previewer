/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html", "./src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {},
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
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
}

