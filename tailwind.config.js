/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 
      colors: { 
        PastelPink: '#F8C8DC', 
        PastelBlue: '#B3D9E8',
        PastelGreen:'#AFE1AF'
      }, 
    }, 
  },
  plugins: [
   
  ],
}

