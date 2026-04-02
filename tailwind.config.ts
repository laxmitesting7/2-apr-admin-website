import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        mist: "#eef2ff",
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e3a8a",
          900: "#172554"
        }
      },
      boxShadow: {
        glow: "0 20px 80px rgba(37, 99, 235, 0.15)",
        panel: "0 20px 60px rgba(11, 16, 32, 0.12)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(96,165,250,0.24), transparent 38%), radial-gradient(circle at 85% 15%, rgba(16,185,129,0.16), transparent 24%)"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-manrope)"]
      }
    }
  },
  plugins: []
};

export default config;
