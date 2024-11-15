/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

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
      },
      fontFamily: {
        indieFlower: ['var(--indie-flower)', 'cursive'],
        josefinSans: ['var(--josefin-sans)', 'sans-serif'],
        chakraPetch: ['var(--chakra-petch)', 'sans-serif'],
      },

      colors: {
        'yellow-sunshine': '#fff487',
        'midnight-gray': '	##3c3c3c',
        'deep-ocean': '#004080',
        'green-lantern': '#16A240',
        'white-pearl': '#FBF8EF',
      },
    },
  },
  plugins: [addVariablesForColors],
};

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

