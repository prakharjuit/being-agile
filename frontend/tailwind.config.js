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
        'box-gray': '#F2F2F2',
        'bluee': '#073A82',
        'box':'#538DDA',
        boxShadow: {
          custom: '7px 7px 14px 0px rgba(28, 98, 164, 1)',
        },
        
        
        
    },
  },},
  plugins: [],
}