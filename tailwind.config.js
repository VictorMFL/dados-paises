/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: { max: "956px" },
      celular: {max: '630px'},
      telasP: {max: '465px'}
    },
    extend: {},
  },
  plugins: [],
};
