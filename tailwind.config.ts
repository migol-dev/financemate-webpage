import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      screens: {
        xs: "380px",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "var(--font-plus-jakarta)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        editorial: {
          canvas: "hsl(var(--background))",
          paper: "hsl(var(--card))",
          pill: "hsl(var(--muted))",
          ink: "hsl(var(--foreground))",
          stone: "hsl(var(--muted-foreground))",
          rule: "hsl(var(--border))",
          emerald: "hsl(var(--semantic-income))",
          terracotta: "hsl(var(--semantic-expense))",
          cobalt: "hsl(var(--semantic-invest))",
          amber: "hsl(var(--semantic-warning))",
        },
        surface: {
          DEFAULT: "#141413",
          lowest: "#0C0C0B",
          low: "#141413",
          container: "#1C1C1A",
          card: "#141413",
          elevated: "#242421",
        },
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#1F7A5A",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        "status-positive": "#10b981",
        "status-negative": "#C86446",
        "status-warning": "#D9730D",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.18), transparent 60%)",
        "hero-gradient":
          "linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ping: {
          "75%,100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "spin-slow": "spin-slow 12s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
