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
        "insight-blue": "#3B659D",
        "insight-icon-blue": "#326CB3",
        "insight-dark-blue": "#152438",
        "insight-button-blue": "#243F62",
        "insight-grey-light": "#EDEDED",
        "insight-white": "#FCFCFC",
      },
    },
  },
  plugins: [],
};
export default config;
