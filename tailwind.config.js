/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customGreen: "#374036",
      customGray: "#A8BBBF",
      customYellow: "#EFF291",
      customBrown: "#736243",
      customDarkerYellow: "#F2EC9B"
    },
  },
  plugins: [],
}
