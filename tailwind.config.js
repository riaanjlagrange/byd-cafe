/** @type {import('tailwindcss').Config} */
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
        inset: {
          "-4": "-1rem",
          "-8": "-2rem",
        },
      },
    },
  },
  plugins: [],
};
