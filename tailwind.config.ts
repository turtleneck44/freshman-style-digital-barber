import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Luxury Old Money Color System
        "luxury-black": "hsl(var(--luxury-black))",
        "luxury-white": "hsl(var(--luxury-white))",
        "luxury-gray-50": "hsl(var(--luxury-gray-50))",
        "luxury-gray-100": "hsl(var(--luxury-gray-100))",
        "luxury-gray-200": "hsl(var(--luxury-gray-200))",
        "luxury-gray-300": "hsl(var(--luxury-gray-300))",
        "luxury-gray-400": "hsl(var(--luxury-gray-400))",
        "luxury-gray-500": "hsl(var(--luxury-gray-500))",
        "luxury-gray-600": "hsl(var(--luxury-gray-600))",
        "luxury-gray-700": "hsl(var(--luxury-gray-700))",
        "luxury-gray-800": "hsl(var(--luxury-gray-800))",
        "luxury-gray-900": "hsl(var(--luxury-gray-900))",
        "luxury-gold": "hsl(var(--luxury-gold))",
        "luxury-gold-light": "hsl(var(--luxury-gold-light))",
        "luxury-gold-dark": "hsl(var(--luxury-gold-dark))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "elegant": ["Crimson Text", "serif"],
        "primary": ["Inter", "sans-serif"],
      },
      boxShadow: {
        "luxury": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "luxury-lg": "0 35px 60px -12px rgba(0, 0, 0, 0.3)",
        "luxury-xl": "0 45px 80px -12px rgba(0, 0, 0, 0.4)",
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeInLuxury": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slideUpLuxury": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "floatLuxury": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(0.5deg)" },
        },
        "glowLuxury": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(0, 0, 0, 0.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-luxury": "fadeInLuxury 1.2s ease-out",
        "slide-up-luxury": "slideUpLuxury 1s ease-out",
        "float-luxury": "floatLuxury 8s ease-in-out infinite",
        "glow-luxury": "glowLuxury 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
