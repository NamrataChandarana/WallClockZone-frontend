/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        blue: {
          80: '#specific-hex-code', // Replace with your desired color code
        },
        darkbg: "#18181B"
      },
    },
  },
  plugins: [],
}

