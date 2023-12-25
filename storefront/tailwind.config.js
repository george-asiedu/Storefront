/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F71BC',
        secondary: '#00AEEF',
        black: '#222222'
      }
    },
  },
  plugins: [],
}