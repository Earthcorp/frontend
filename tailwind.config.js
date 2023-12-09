/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5385D",
        primaryColor: "#193256",
        headingColor: "#000000",
        smallTextColor: "#193256",
        buttonColor: "#155e75",
        hoverColor: "#0e7490",
        bgColor: "#eff4fc",
        activeColor: "#77002e",
        darkPurple: "#081A51",
        lightWhite: "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};
