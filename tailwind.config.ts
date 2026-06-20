import type { Config } from "tailwindcss";

// Stitch: High Speed Industrial — #090909 black, #ffd700 yellow, Bebas Neue

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#ffffff",
        sand: "#f0f0f0",
        white: "#ffffff",
        clay: {
          DEFAULT: "#ffd700",
          dark: "#ccaa00",
          light: "#ffe033",
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#ffe033",
          600: "#ffd700",
          700: "#ccaa00",
          800: "#997f00",
          900: "#665500",
        },
        sage: {
          DEFAULT: "#111111",
          dark: "#090909",
          light: "#1a1a1a",
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#bdbdbd",
          300: "#9e9e9e",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#333333",
        },
        gold: {
          DEFAULT: "#ffe033",
          dark: "#ffd700",
          light: "#fff066",
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#ffe033",
          600: "#ffd700",
        },
        espresso: "#090909",
        cocoa: "#0d0d0d",
        mocha: "#a0a0a0",
        adobe: "#333333",
        adobeDark: "#1a1a1a",
      },
      fontFamily: {
        headline: ["'Bebas Neue'", 'Impact', 'sans-serif'],
        body: ["'Inter'", 'system-ui', 'sans-serif'],
        label: ["'Public Sans'", 'system-ui', 'sans-serif'],
        heading: ["'Bebas Neue'", 'Impact', 'sans-serif'],
      },
      borderRadius: {
        arch: "4px",
        arch2: "4px",
        "4xl": "4px",
        "5xl": "4px",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #090909 0%, #0d0d0d 40%, #111111 70%, #090909 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,215,0,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.03) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #ffd700 0%, #ffe033 100%)",
        "sage-gradient": "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
        "gold-gradient": "linear-gradient(135deg, #ffe033 0%, #fff066 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(255,215,0,0.15), 0 4px 12px -6px rgba(0,0,0,0.4)",
        "warm-lg": "0 30px 70px -20px rgba(255,215,0,0.2), 0 10px 30px -10px rgba(0,0,0,0.5)",
        card: "0 2px 8px -2px rgba(0,0,0,0.4), 0 1px 3px -1px rgba(0,0,0,0.3)",
        "card-hover": "0 20px 50px -15px rgba(255,215,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.5)",
        arch: "inset 0 -8px 30px -10px rgba(255,215,0,0.08)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
