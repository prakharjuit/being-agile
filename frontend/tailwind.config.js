/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#5A5A5A',
        'box-gray': '#F2F2F2'
        
    },
  },},
  plugins: [],
}