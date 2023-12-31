/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        green: {
          975: "#011107",
          925: "#073C1D",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {transform: "translateY(16px)", opacity: 0},
          "100%": {transform: "translateY(0px)", opacity: 100},
        },
      },
      animation: {
        "fade-up": "fade-up 0.15s ease-out",
      },
    },
  },
  plugins: [],
};
