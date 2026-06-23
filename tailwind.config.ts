import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        panel: "#0e1b2d",
        line: "rgba(148, 163, 184, 0.18)",
        accent: "#ff6a00",
        signal: "#ff4d8d",
        glow: "#ffd166",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(3, 10, 24, 0.35)",
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Frutiger", "ui-sans-serif", "system-ui"],
        mono: ["Consolas", "SFMono-Regular", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
