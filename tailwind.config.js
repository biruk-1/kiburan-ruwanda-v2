/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kiburan-blue': '#1E3B8A',
        'kiburan-blue-light': '#2A4A9F',
        'kiburan-green': '#1A2F2F',
        'kiburan-white': '#F5F5F5',
        'kiburan-black': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px',
      },
    },
  },
  plugins: [],
};