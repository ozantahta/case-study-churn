/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#03073D",
        "very-light-blue": "#789dba",
        "dark-grey": "#32474e",
        "blue-color": "#1d418a",
        "light-blue": "#901dff",
      },
    },
  },
  plugins: [],
};
