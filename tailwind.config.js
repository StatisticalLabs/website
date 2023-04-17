/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
