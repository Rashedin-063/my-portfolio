// src/styles/fontConfig.ts
import localFont from 'next/font/local';

export const chakraPetch = localFont({
  src: [
    {
      path: '../../public/fonts/ChakraPetch-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ChakraPetch-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ChakraPetch-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ChakraPetch-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ChakraPetch-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--chakra-petch',
  display: 'swap', // Optional, for better font loading performance
});

export const josefinSans = localFont({
  src: [
    {
      path: '../../public/fonts/JosefinSans-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--josefin-sans',
  display: 'swap',
});
