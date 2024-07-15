import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      oswald: [`var(--font-oswald)`, "sans-serif"],
      roboto: [`var(--font-roboto)`, "sans-serif"],
    },

    backgroundImage: {
      hero: "url(/assets/img/hero/bg.png)",
      membership: "url(/assets/img/membership/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        accent: "#d4000d",
      },
    },
  },
  plugins: [],
};
export default config;
