import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#070b12",
        foreground: "#e5ecfa",
        accent: {
          DEFAULT: "#60e7ff",
          muted: "#2fa2bf"
        },
        panel: "rgba(14, 21, 35, 0.62)",
        line: "rgba(164, 185, 220, 0.2)"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(9, 14, 26, 0.4)",
        glow: "0 0 0 1px rgba(96, 231, 255, 0.2), 0 12px 28px rgba(96, 231, 255, 0.16)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 15%, rgba(96, 231, 255, 0.14), transparent 32%), radial-gradient(circle at 78% 10%, rgba(105, 165, 255, 0.16), transparent 38%), linear-gradient(180deg, #070b12 0%, #070d16 40%, #06070f 100%)"
      }
    }
  },
  plugins: []
};

export default config;
