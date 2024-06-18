import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#F9F1E7",
          "200": "#FFF3E3",
          "300": "#B88E2F"
        }
      },
      backgroundImage: {
        'breadcrumb': "url('/breadcrumb/bg.png')",
      }
    },
  },
  plugins: [],
};
export default config;
