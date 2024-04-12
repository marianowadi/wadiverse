/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        planet: '0 5px 15px rgb(255, 255, 255)',
        ship: '0 5px 5px rgb(255, 234, 26)'
      }
    }
  },
  plugins: []
}
