 /** @type {import('tailwindcss').Config} **/
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        // Colores modo claro
        lightGrayishBlueBg: 'hsl(225, 100%, 98%)',
        lightGrayishBlueCard: 'hsl(227, 47%, 96%)',
        darkGrayishBlue: 'hsl(228, 12%, 44%)',
        // Colores modo oscuro
        darkBlueBackground: 'hsl(230, 17%, 14%)',
        veryDarkBlueTopBg: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
        desaturatedBlue: 'hsl(228, 34%, 66%)',
        darkBlueHover: 'hsl(228, 26%, 27%)',
      },
    },
  },
  plugins: [],
}
