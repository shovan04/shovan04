/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CaskaydiaRegular: ["CaskaydiaRegular"],
        CaskaydiaSemiBold: ["CaskaydiaSemiBold"],
      },
      colors: {
        primary: "#1E1E1E",
        accent: "#4ADE80",
      },
    },
  },
  plugins: [],
};
