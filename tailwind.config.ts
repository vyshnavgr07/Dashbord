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
        prime: '#fff9f9',
        sec: '#ffe3e3', 
        accent: '#D97706', 
       
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({ addUtilities }:any) {
      addUtilities(
        {
          '.hide-scrollbar': {
            /* Hide scrollbar for WebKit browsers */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            /* Hide scrollbar for Firefox */
            'scrollbar-width': 'none',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
export default config;
