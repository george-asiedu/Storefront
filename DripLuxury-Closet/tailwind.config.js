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
        salesHeight: '86vh'
      },
      margin: {
        marginTop: '77px'
      }
    },
  },
  plugins: [],
}