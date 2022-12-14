/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryBlack":"#2C2C38",
        "secundaryBlack":"#21212D",
        "secundary2Black":"#222430",
        "secundary2Light":"#EBF2FB",
        "buttoncolor":"#645EC8",
        "textCreateNew":"#423AC3",
        "textPrimary":"#727786",
        "textSecundary":"#4E525F",
        "guiontodo":"#52C3E0", 
        "guiondoing":"#615998",
        "guiondone":"#7BC5B3",
        "textTitleLight":"#0D0C0C",
        "textTasks":"#070707",
        "linea":"#50505F",
        "newColumn":"#727786",
      },
      fontFamily:{
        "Roboto":["sans-serif"],
        'RobotoMono': ["monospace"],
      }
    },
  },
  plugins: [],
}
