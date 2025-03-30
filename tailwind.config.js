/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page_background: "#282C34",
        reel_background: "#F8F8F8",
        score_screen: {
          letter: "#0EADFB",
          empty: "#104050",
          background: "#101010",
        },
      },
    },
  },
  plugins: [],
};
