/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "black": "#3a3a3a",
        "yaleblue": "#0b5394",
        "goldenbrown": "#ffb700",
        "grey": "#d8d8d8",
        "blue-gradient": "linear-gradient(180deg, #0B5394 0%, #1F2A44 100%)",
        "light-golden-gradient":"linear-gradient(0deg, #9A7A1A 0%, #C8A82A 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer')],
};