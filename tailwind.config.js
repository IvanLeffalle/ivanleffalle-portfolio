/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], 
        montserrat: ['Montserrat', 'sans-serif'], // fuente de respaldo
      },
      fontSize: {
        'clamp-lg': 'clamp(40px, 8vw, 80px)', //tamaño dinámico
      },
      colors: {
        customAccent: '#15F5BA',
      },
    },
  },
  plugins: [],
};
