/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3655FF',
        secondary: '#1AD84B',
        accent: '#F9F7E1',
        light: '#8AF9E4',
      },
      fontFamily: {
        'arabic': ['Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      backgroundPosition: {
        '0': '0% 50%',
      },
    },
  },
  plugins: [],
}
