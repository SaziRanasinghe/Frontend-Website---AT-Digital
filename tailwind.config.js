/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#4DCA79',   
        customBlue: '#1CBDDD',   
      },
    },
  },
  plugins: [],
}

