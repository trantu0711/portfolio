/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
        }
      }
    },
  },

  theme: {
  extend: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
  },
},
  plugins: [],
}