/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        futura: ['Futura', 'sans-serif'], // Adding Futura font family
        josefin: ['"Josefin Sans"', 'Arial', 'sans-serif'], // Adding Josefin Sans font family
      },
    },
  },
  plugins: [],
}
