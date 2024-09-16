/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagemEntrada': "url('/src/assets/image/imageEtrada.png')",
        'azulGradient': 'radial-gradient(circle, rgba(127,150,255,1) 0%, rgba(0,0,255,1) 50%, rgba(21,21,177,1) 100%);'
      }
    },
    colors: {
      'azulMahindra': '#0000FF',
      'branco': '#ffffff',
    }
  },
  plugins: [],
}