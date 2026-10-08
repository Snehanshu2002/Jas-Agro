import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          forest: "#123B13",     // Deep Forest Green
          darkest: "#0D230E",    // Deep Forest Dark
          dark: "#123B13",       // Forest Green
          deep: "#1B4D1C",       // Deep Moss
          card: "#FFFFFF",
          primary: "#2F7D16",    // Rich Natural Agricultural Green
          emerald: "#2F7D16",    // Natural Green
          natural: "#4F9D1F",    // Fresh Medium Green
          bright: "#4F9D1F",
          lime: "#B8F21B",       // Bright Green-Yellow / Lime Accent
          accent: "#B8F21B",
          softGreen: "#EAF5D8",  // Soft Pale Green
          paleGreen: "#F4F8EC",  // Pale Green
          warmWhite: "#FAFAF5",  // Warm Off-White
          darkText: "#111811",   // Near-black/Dark Green Typography
          muted: "#5A6E59",      // Natural Sage Muted Body
          light: "#FAFAF5",
          amber: "#D97706",
          gold: "#B8F21B",       // Gold redirected to Lime
          goldLight: "#C8F93B",
          sky: "#2F7D16",
          cyan: "#4F9D1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-jost)", "Jost", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-jost)", "Jost", "system-ui", "-apple-system", "sans-serif"],
        jost: ["var(--font-jost)", "Jost", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "2xs": "0 1px 1px 0 rgba(0, 0, 0, 0.03)",
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        glow: "0 0 25px -5px rgba(184, 242, 27, 0.45)",
        "glow-lg": "0 0 50px -10px rgba(184, 242, 27, 0.55)",
        "glow-lime": "0 0 30px -5px rgba(184, 242, 27, 0.6)",
        "glow-forest": "0 0 30px -5px rgba(18, 59, 19, 0.4)",
        "glow-gold": "0 0 25px -5px rgba(184, 242, 27, 0.45)",
        "glow-cyan": "0 0 25px -5px rgba(79, 157, 31, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-emerald": "0 8px 32px 0 rgba(47, 125, 22, 0.15)",
        "glass-lime": "0 8px 32px 0 rgba(184, 242, 27, 0.2)",
      },
      backdropBlur: {
        "2xs": "2px",
        xs: "4px",
      },
      scale: {
        "98": "0.98",
      },
      spacing: {
        "4.5": "1.125rem",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(18, 59, 19, 0.88), rgba(13, 35, 14, 0.98))",
        "card-gradient": "linear-gradient(135deg, rgba(27, 77, 28, 0.8) 0%, rgba(18, 59, 19, 0.95) 100%)",
        "lime-gradient": "linear-gradient(135deg, #B8F21B 0%, #9DD814 100%)",
        "forest-gradient": "linear-gradient(135deg, #123B13 0%, #1B4D1C 100%)",
        "gold-gradient": "linear-gradient(135deg, #B8F21B 0%, #9DD814 100%)",
        "cyan-gradient": "linear-gradient(135deg, #4F9D1F 0%, #2F7D16 100%)",
        "emerald-radial": "radial-gradient(circle at 50% 30%, rgba(184, 242, 27, 0.15) 0%, rgba(13, 35, 14, 0) 70%)",
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
