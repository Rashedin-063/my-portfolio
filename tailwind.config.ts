/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('tailwindcss/lib/util/flattenColorPalette');

// import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial':
          'radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 1%, #020409 100%)',
        'custom-gradient':
          'linear-gradient(to right, #000118,  #000220, #02082B, #040A2E,  #060C34, #080E39)',
        'gradient-text':
          'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)',
        'custom-gradient-2':
          ' linear-gradient(112.6deg, rgb(56, 24, 40) -10.7%, rgb(23, 148, 185) 100.2%);',
      },
      fontFamily: {
        chakraPetch: ['var(--chakra-petch)', 'sans-serif'],
        josefinSans: ['var(--josefin-sans)', 'sans-serif'],
      },

      colors: {
        'yellow-sunshine': '#FFD93D',
        'yellow-dusk': '	#fff487',
        'deep-ocean': '#1E2348',
        'green-lantern': '#16A240',
        'white-pearl': '#FEFAE0',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 204, 112, 0.7), 0 0 40px rgba(200, 80, 192, 0.5), 0 0 60px rgba(65, 88, 208, 0.3)',
        glow2:
          '0 0 20px rgba(50, 255, 50, 0.7), 0 0 40px rgba(20, 200, 20, 0.5), 0 0 60px rgba(5, 150, 5, 0.3)',
      },
      filter: {
        'blur-20': 'blur(20px)',
        'blur-25': 'blur(25px)',
      },
      brightness: {
        150: '1.5',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        spin: 'spin 3s linear infinite',
      },
    },
    plugins: [addVariablesForColors],
  }
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;

