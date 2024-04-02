/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#030637",
        page: "#0E2954",
        card: "#B9F3E4",
        //"#47566a", 4f5e74, ft #f1f3f4
        "card-hover": "#AAE3E2",
        "default-text": "#f1f3f4",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
      },
    },
  },
  plugins: [],
};
