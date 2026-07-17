import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8FAFC",
        surface: "#FFFFFF",
        blue: {
          primary: "#1D4ED8",
          royal: "#2563EB",
          light: "#60A5FA",
        },
        navy: "#0F172A",
        text: {
          dark: "#111827",
          secondary: "#4B5563",
          muted: "#6B7280",
        },
        border: "#E5E7EB",
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        card: "24px",
        lg2: "32px",
      },
      boxShadow: {
        premium: "0 20px 50px rgba(15,23,42,0.10)",
        hover: "0 30px 60px rgba(37,99,235,0.18)",
        glow: "0 0 0 1px rgba(37,99,235,0.15), 0 20px 60px rgba(37,99,235,0.20)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #0F172A 100%)",
        "accent-gradient": "linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)",
        "button-gradient": "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
export default config;
