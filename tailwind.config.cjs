/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#7B90FB',
        'tertiary': '#F21E4E',
      },
    },
  },
  plugins: [],
}