/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F95C00",
        accent: "#F95C00",
        light: "#F7F9F8",
        surface: "#FFFFFF",
        "text-primary": "#232220",
        "text-secondary": "#4B5563",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 16px rgba(0,0,0,0.08)",
        hover: "0 12px 32px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl: "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
