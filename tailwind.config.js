/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-small": "1px 20px 15px rgba(250, 211, 37, 0.7)",
        "shadow-big": "0px 2px 40px rgba(0, 0, 0, 0.095)",
      },
    },
  },
  plugins: [],
};
