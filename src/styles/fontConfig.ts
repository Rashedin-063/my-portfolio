// src/styles/fontConfig.ts
import { Indie_Flower, Josefin_Sans, Chakra_Petch } from 'next/font/google';

export const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--indie-flower',
});



export const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--josefin-sans',
});

export const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  variable: '--chakra-petch',
});
