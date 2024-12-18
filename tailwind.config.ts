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
        gradient: 'linear-gradient(165.71deg, rgba(47, 128, 237, 0) 0%, rgba(47, 128, 237, .14) 20.06%, rgba(47, 128, 237, 0) 70.74%);',
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#2f80ed',
      },
      boxShadow: {
        inner: 'inset 0 0 10px 10px white',
        card: '0 4px 14px #00000008',
        card2: '0 14px 14px #00000008',
        neon: '0 0 40px rgba(47, 128, 237, .24), 0 0 70px rgba(47, 128, 237, .14), 0 0 80px rgba(47, 128, 237, .14)',
      },
    },
  },
  plugins: [],
};
export default config;
