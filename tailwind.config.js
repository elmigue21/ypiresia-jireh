/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dirtywhite: "#e9e4d4", // your custom name and hex
      },
    },
  },
  plugins: [],
};
