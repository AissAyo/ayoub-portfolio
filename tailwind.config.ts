import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: "#09090b",
        panel: "#111114",
        line: "#27272a",
        accent: "#67e8f9",
      },
      boxShadow: {
        glow: "0 0 70px rgba(103, 232, 249, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
