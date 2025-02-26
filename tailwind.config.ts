import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/* eslint-disable @typescript-eslint/unbound-method */

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1780px",
        "4xl": "1920px",
        "5xl": "2048px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        textColor: "#F2FAF2",
        "main-100": "#E9F2E9",
        "main-200": "#93A692",
        "main-300": "#547353",
        "main-400": "#164015",
        "main-500": "#0A2E0A",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 20px",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "1000px",
          },
          "@screen lg": {
            maxWidth: "1070px",
          },
          "@screen xl": {
            maxWidth: "1110px",
            padding: "0",
          },
          "@screen 2xl": {
            maxWidth: "1170px",
          },
          "@screen 3xl": {
            maxWidth: "1440px",
          },
          "@screen 4xl": {
            maxWidth: "1580px",
          },
        },
      });
    }),
  ],
} satisfies Config;
