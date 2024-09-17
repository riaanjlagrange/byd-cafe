/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Mocha: {
          lighter: "#94857f",
          light: "#7b6961",
          DEFAULT: "#5d4e47",
          dark: "	#4f3c32",
        },
        Beige: {
          DEFAULT: "#F4EDE2",
        },
      },
    },
  },
  plugins: [daisyui],
  darkMode: "false",
};
