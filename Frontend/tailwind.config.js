/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark-navbar-bg": "#0a4885",
        "main-dark-blue": "#38638D",
        "main-light-blue": "#F1F7FE",
        "main-light-blue2": "#B7D8F8",
        "main-blue": "#5999D7",
        "main-green": "#59D4D4",
        "main-turquoisie": "#2596be",
        "main-panel-backgrounds": "#063970",
        "secondary-panel-backgrounds": "#0a67a2",
      },
    },
  },
  plugins: [],
};