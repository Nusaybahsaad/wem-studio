import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E3A8A",
        brandOlive: "#4D5D42",
        brandOrange: "#D97706",
        brandBeige: "#FAF8F5",
      },
    },
  },
  plugins: [],
};
export default config;
