/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        gray: {
          100: "#E1E1E7",
          900: "#121214",
        },
        green: {
          500: "#129E57",
        },

        yellow: {
          500: "#F7DD43",
        },
      },
    },
  },
  plugins: [],
};
