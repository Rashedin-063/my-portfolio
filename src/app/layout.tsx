import type { Metadata } from 'next';
// import { chakraPetch, indieFlower, josefinSans } from '@/styles/fontConfig';
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
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.png' sizes='any' type='image/png' />
      </head>
      <body
        className={` antialiased page bg-custom-radial max-w-[1600px] mx-auto `}
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
