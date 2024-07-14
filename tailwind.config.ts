import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0076fd",
      },
      textShadow: {
        "glow":
          "0 0 5px #0bf4f3, 0 0 10px #0bf4f3, 0 0 20px #0bf4f3, 0 0 40px #0bf4f3, 0 0 80px #0bf4f3",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
