/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp';
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
      }, 
    }, 
  },
  plugins: [
    lineClamp,
  ],
}

