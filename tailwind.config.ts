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
        'custom-gradient':
          'linear-gradient(to right, #000118,  #000220, #02082B, #040A2E,  #060C34, #080E39)',
       'custom-radial' : 'radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 1%, #020409 100%)',
      },

      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
