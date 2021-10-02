module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFDB00",
        secondary: "#132D63",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
