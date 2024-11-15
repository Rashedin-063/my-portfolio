import type { Metadata } from 'next';
import { chakraPetch, indieFlower, josefinSans } from '@/styles/fontConfig';
import AnimatedUniverse from '@/components/ui/AnimatedUniverse';
import './globals.css';
import '../styles/universe.css';
import { ThemeProvider } from './provider';


export const metadata: Metadata = {
  title: "Rashedin Islam's Portfolio",
  description: 'Simple and minimalistic web developer&apos; portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.png' sizes='any' type='image/png' />
      </head>
      <body
        className={`${indieFlower.variable} ${josefinSans.variable} ${chakraPetch.variable} antialiased page bg-custom-radial`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedUniverse />

          <div className='relative z-10 overflow-y-auto h-full w-full scroll-smooth'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
