import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(165.71deg, rgba(47, 128, 237, 0) 12.63%, rgba(47, 128, 237, .14) 40.06%, rgba(47, 128, 237, 0) 70.74%);',
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#2f80ed',
      },
    },
  },
  plugins: [],
};
export default config;
