      {/* blog section */}
        <div className='w-full lg:w-[55%] h-[85vh] rounded-[1.75rem] space-y-8 flex flex-col justify-center lg:px-8 bg-custom-gradient shadow-xl hover:brightness-150 hover:shadow-3xl transition-all duration-300 ease-in border border-indigo-800 border-dotted'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-yellow-sunshine font-semibold'>
            I Write, Sometimes
          </h1>
          <p className='font-josefinSans text-lg text-white-pearl '>
            When inspiration strikes, I pen down my thoughts on web development,
            self-improvement, and spirituality. These writings are a reflection
            of my journey—exploring ideas, sharing knowledge, and seeking
            growth. Dive in and discover something meaningful!{' '}
          </p>

         
</div>
        
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
          'radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 10%, #020409 100%)',
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
        'white-pearl': '#FEF9F2',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 204, 112, 0.7), 0 0 40px rgba(200, 80, 192, 0.5), 0 0 60px rgba(65, 88, 208, 0.3)',
        glow2:
          '0 0 5px rgba(0, 38, 77, 0.7), 0 0 10px rgba(0, 73, 141, 0.5), 0 0 15px rgba(0, 82, 162, 0.3)',
        glow3:
          '0 0 20px rgba(0, 38, 77, 0.7), 0 0 40px rgba(0, 73, 141, 0.5), 0 0 60px rgba(0, 82, 162, 0.3)',
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
    },
  },

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

