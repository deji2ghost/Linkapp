import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple: '#633CFF',
        hoverPurple: '#BEADFF',
        lightPurple: '#EFEBFF',
        DarkGrey: '#333333',
        Grey: '#737373',  
        Borders: '#D9D9D9',
        White: '#FFFFFF' ,
        lightGrey: '#FAFAFA',
        lightRed: '#FF3939',
        Shadow: 'rgba(99, 60, 255, 0.25)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
