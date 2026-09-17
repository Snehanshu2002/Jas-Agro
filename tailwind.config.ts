import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          darkest: "#0B0F17", // Neutral Deep Slate Charcoal (Replaces heavy green wash)
          dark: "#111827",    // Sleek Dark Charcoal
          deep: "#1F2937",    // Deep Slate Card
          card: "#1F2937",
          primary: "#10B981",
          emerald: "#10B981",
          bright: "#34D399",
          accent: "#84CC16",
          amber: "#D97706",
          gold: "#F59E0B",
          goldLight: "#FBBF24",
          sky: "#0284C7",
          cyan: "#06B6D4",
          muted: "#94A3B8",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.35)",
        "glow-lg": "0 0 50px -10px rgba(16, 185, 129, 0.45)",
        "glow-gold": "0 0 25px -5px rgba(245, 158, 11, 0.35)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-emerald": "0 8px 32px 0 rgba(16, 185, 129, 0.15)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(11, 15, 23, 0.85), rgba(11, 15, 23, 0.98))",
        "card-gradient": "linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "cyan-gradient": "linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)",
        "emerald-radial": "radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.15) 0%, rgba(11, 15, 23, 0) 70%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 16s linear infinite",
        shimmer: "shimmer 2.5s infinite linear",
        "glow-pulse": "glowPulse 3s infinite ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
