/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-lighter': 'hsl(148, 38%, 91%)',
        'green-medium': 'hsl(169, 82%, 27%)',
        'red-danger': 'hsl(0, 66%, 54%)',
        'gray-medium': 'hsl(186, 15%, 59%)',
        'gray-darker': 'hsl(187, 24%, 22%)'
      },
    },
  },
  plugins: [],
}
