/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"], // Adjust the paths as needed
    theme: {
      extend: {
        fontFamily: {
          sans: ['"DM Sans"', 'sans-serif'], // Adding DM Sans font
        },
      },
    },
    plugins: [],
  };
  