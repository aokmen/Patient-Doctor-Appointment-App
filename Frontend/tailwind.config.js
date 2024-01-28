/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark-blue" :"#38638D",
        "main-light-blue" :"#B7D8F8",
        "main-blue" :"#5999D7",
        "main-green" :"#59D4D4",
        
      }
    },
  },
  plugins: [],
}