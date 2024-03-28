/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,js,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#ff6347",
        secondary: "#ff6347",
        brandYellow: "#ffbf00",
        brandGreen: "#00cc99",
        brandBlue: "#4169e1 ",
        brandWhite: "#c0c0c0"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}

