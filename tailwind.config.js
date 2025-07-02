/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['Neue Montreal', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bg-cycle': {
          '0%': { backgroundColor: '#ecf5ed' },
          '25%': { backgroundColor: '#f5f0ff' },
          '50%': { backgroundColor: '#f0fbff' },
          '75%': { backgroundColor: '#fff7f0' },
          '100%': { backgroundColor: '#ecf5ed' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(2deg)' },
        },
        'tilt-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-2deg)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'bg-cycle': 'bg-cycle 12s ease-in-out infinite',
        tilt: 'tilt 0.3s ease-in-out forwards',
        'tilt-reverse': 'tilt-reverse 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
