//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1F71BC",
        black: "#222222"
      },
      height: {
        height: '2px',
        salesHeight: '70vh'
      },
      margin: {
        marginTop: '76px'
      }
    },
  },
  plugins: [],
}