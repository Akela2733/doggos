import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          650: "#dc2626",
        },
        gradient1: {
          300: "#ffe8e8",
        },
        gradient2: {
          300: "#ffd1d1",
        },
        gradient3: {
          300: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
