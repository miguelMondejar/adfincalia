/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5AAD94',    // Verde profesional
        secondary: '#A47C48',  // Madera
        accent: '#FFFFFF',     // Blanco (fondo/contraste)
      },
    },
  },
  plugins: [],
}
