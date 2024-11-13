import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom':
          'radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 1%, #020409 100%)',
      },
      colors: {
        'main-bgGradient':
          'bg-gradient-to-r from-[#0E1225] via-[#161A36] to-[#181D3C]',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
