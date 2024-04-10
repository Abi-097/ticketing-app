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
        nav: "#7FC7D9",
        page: "#50C4ED",
        card: "#008DDA",
        //"#47566a", 4f5e74, ft #f1f3f4
        "card-hover": "#41C9E2",
        "default-text": "#f1f3f4",
        "default-text2": "black",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
      },
    },
  },
  plugins: [],
};
