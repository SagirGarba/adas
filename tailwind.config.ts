import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        orange: "#E9821B",
        gray: "#57585A",
      },
      fontFamily: {
        Akatab: ["Akatab", "serif"],
        Gelasio: ["Gelasio"],
      },
      screens: {
        max: "1100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
