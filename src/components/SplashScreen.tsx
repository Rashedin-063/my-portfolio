'use client';
import { useState, useEffect, ReactNode } from 'react';
import { FaHandsClapping } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SplashScreenProps {
  children: ReactNode;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => {
      setHidden(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Initialize AOS after splash screen hides
  useEffect(() => {
    if (hidden) {
      AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
    }
  }, [hidden]);

  return (
    <>
      {/* Splash Screen */}
      <div
        className={`absolute top-0 left-0 w-full h-screen overflow-hidden z-10 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-700 ease-in-out`}
      >
        <div className='flex flex-col items-center justify-center w-full h-full bg-custom-gradient text-white font-josefinSans tracking-wider'>
          <div className='md:text-lg lg:text-xl mb-4 text-center'>
            <h3>&quot;Creativity is intelligence having fun.&quot;</h3>
          </div>
          <h1 className='text-2xl md:text-3xl lg:text-5xl text-yellow-sunshine font-semibold flex gap-2'>
            Welcome to my portfolio
            <FaHandsClapping />
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${hidden ? 'block' : 'hidden'}`}>{children}</div>
    </>
  );
};

export default SplashScreen;
