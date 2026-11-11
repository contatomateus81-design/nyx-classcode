import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171326",
        violet: {
          50: "#f5f1ff",
          100: "#ebe3ff",
          200: "#d8c9ff",
          300: "#bea4ff",
          400: "#a47cff",
          500: "#8955f5",
          600: "#7538e5",
          700: "#642bc5",
          800: "#5225a0",
          900: "#442181"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(137, 85, 245, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;