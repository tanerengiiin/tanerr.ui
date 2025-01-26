const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          code: {},
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        main: {
          DEFAULT: "var(--main)",
          hover: "var(--main-hover)",
          active: "var(--main-active)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        base: {
          0: "hsl(var(--base-0))",
          50: "hsl(var(--base-50))",
          100: "hsl(var(--base-100))",
          200: "hsl(var(--base-200))",
          300: "hsl(var(--base-300))",
          400: "hsl(var(--base-400))",
          500: "hsl(var(--base-500))",
          600: "hsl(var(--base-600))",
          700: "hsl(var(--base-700))",
          800: "hsl(var(--base-800))",
          900: "hsl(var(--base-900))",
          950: "hsl(var(--base-950))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          accent: "hsl(var(--text-accent))",
          muted: "hsl(var(--text-muted))",
          highlight: "hsl(var(--text-highlight))",
        },
        "text-tertiary": "hsl(var(--text-tertiary))",
        "text-quaternary": "hsl(var(--text-quaternary))",
        "main-gradient-from": "hsl(var(--main-gradient-from))",
        "main-gradient-to": "hsl(var(--main-gradient-to))",
      },
      borderRadius: {
        lg: "calc(var(--radius) + 2px)",
        md: "calc(var(--radius) + 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        "shadow-popover": "var(--shadow-popover)",
        "shadow-dropdown-item": "var(--shadow-dropdown-item)",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
      animationDuration: {
        "2s": "2s",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate")
  ],
}
