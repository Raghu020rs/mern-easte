/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all files in src folder
  ],
  theme: {
    extend: {}, // You can add custom theme styles here
  },
  plugins: [], // You can add plugins like forms, typography, etc.
}
