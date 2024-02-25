import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  darkMode: "class",
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "preview-height": "calc(100vh - 160px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 5s ease infinite",
      },
      colors: {
        "primary-through": "rgba(255, 217, 81, 0.3)",
        primary: "#2586F9",
        outline: "#dddddd",
        "light-outline": "#DBD9D8",
        "default-outline": "#D5D6D8",
        "dark-outline": "#B9B6B3",
        "light-black": "#494949",
        "default-black": "#323130",
        "dark-black": "#2C2E30",
        "tint-gray": "#EDEFF1",
        "light-gray": "#E9E9E9",
        "default-gray": "#868A8D",
        "dark-gray": "#615D5C",
        "check-gray": "#D0D5DD",
        "input-gray": "#f9f9f9",

        "text-dark": "#333333",
        "text-tint": "#d1d1d1",
        "text-tag-red": "#F8979b",
        "text-tag-yellow": "#FFD951",
        "error-primary": "#E74346",
        "error-dark": "#b82a2d",
        "error-light": "#e4797e",
        "error-tint": "#FFC7C9",
        "warning-primary": "#F7A74D",
        "warning-dark": "#FFD951",
        "warning-light": "#FACB90",
        "matching-primary": "#49BD58",
        "matching-dark": "#009024",
        "matching-light": "#C2F1C7",
        "hover-gray-bg": "rgba(209, 209, 209, 0.2)",
        "bottom-shadow": "rgba(0, 0, 0, 0.05)",
        "item-favorite": "#FF5050",
        "modal-bg": "rgba(0, 0, 0, 0.67)",
        "map-bg": "rgba(255, 255, 255, 0.8)",
        "item-hover": "#EEEEEE",
        "uni-bg": "#629EE4",
        "station-bg": "#76C781",
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        RobotoThin: ["Roboto Regular"],
        RobotoBold: ["Roboto Bold"],
        rubik: ["Rubik"],
        rubikBold: ["Rubik Bold"],
        NotoSansKR: ["Noto Sans KR", "sans-serif"],
      },
      screens: {
        desktop: "1120px",
        tablet: "992px",
        mobile: "430px",
      },
      gridTemplateColumns: {
        "listpage-desktop": "269px minmax(1fr, 835px)",
      },
    },
  },
  plugins: [],
};
export default config;
