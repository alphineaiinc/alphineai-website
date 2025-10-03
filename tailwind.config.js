/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent, #facc15)", // default yellow-400
      },
      boxShadow: {
        neon: "0 0 25px rgba(250, 204, 21, 0.35)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(800px 400px at var(--mx, 50%) var(--my, 20%), rgba(250,204,21,0.08), transparent 70%)",
        "animated-gradient":
          "linear-gradient(120deg, #fefce8, #ecfeff, #eef2ff)",
        "animated-gradient-dark":
          "linear-gradient(120deg, #020617, #0b1324, #111827)",
      },
      transitionTimingFunction: {
        "out-smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
