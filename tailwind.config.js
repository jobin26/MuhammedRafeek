/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#FFF9E5',
          100: '#FFF0BF',
          200: '#FFE299',
          300: '#FFD473',
          400: '#FFC44D',
          500: '#FFB326',
          600: '#CC8F1E',
          700: '#996B17',
          800: '#66480F',
          900: '#332408',
        },
        dark: {
          50: '#737373',
          100: '#666666',
          200: '#595959',
          300: '#4D4D4D',
          400: '#404040',
          500: '#333333',
          600: '#262626',
          700: '#1A1A1A',
          800: '#0D0D0D',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};