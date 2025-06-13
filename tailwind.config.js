/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./script/**/*.{js,ts}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
