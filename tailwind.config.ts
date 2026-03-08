import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#14B8A6",
        accent: "#F59E0B",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "card-bg": "var(--card-bg)",
        "card-foreground": "var(--card-foreground)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
