/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#1f2937",
          200: "#1a1b23",
          300: "#131726",
          400: "#0d1019",
          500: "#070914",
          600: "#181C23", // used in cards
          700: "#232733", // used in buttons
        },
        white: "#fff",
        darkgray: "#9ca3af",
        goldenrod: "#d4af37",
        lightgray: "#d1d5db",
        gainsboro: "#e5e7eb",
        dimgray: "#4b5563",
        mediumseagreen: "#10b981",
        slategray: "#6b7280",
        yellow: {
          400: "#D4AF37"
        },
        green: {
          400: "#10B981"
        },
        cyan: {
          400: "#06B6D4"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false
  }
}