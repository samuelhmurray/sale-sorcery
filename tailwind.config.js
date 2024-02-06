/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        background: "#C5D0D9",
        sidebar: "#082A40",
        topbar: "#657D8C",
        text: "#262626",
        secondarytext: "#F2F2F2",
        claim: "#EBF5FF",
        hoverclaim: "#84E1BC",
        edit: "#76A9FA",
        hoveredit: "#A4CAFE",
        delete: "#9B1C1C",
        hoverdelete: "#C81E1E",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
