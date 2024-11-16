'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import { FaHandsClapping } from 'react-icons/fa6';

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => setHidden(true), 500); // Delay to allow animation
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div
      className={`relative w-full h-[800px]  lg:min-h-screen overflow-hidden -mt-20 lg:-mt-0`}
    >
      {/* Splash Screen */}
      {!hidden && (
        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 bg-custom-gradient transition-transform duration-500 -mt-20 lg:-mt-8 font-josefinSans ${
            loading
              ? ''
              : 'translate-y-[-100%] lg:translate-y-0 lg:translate-x-[-100%]'
          }`}
        >
          <div className='flex text-white-pearl text-center lg:text-xl'>
            <h3>&quot;Creativity is intelligence having fun.&quot;</h3>
          </div>
          <h1 className='text-2xl lg:text-4xl text-yellow-sunshine font-semibold flex gap-2 tracking-wider'>
            Welcome to my portfolio
           
              <FaHandsClapping />
          
          </h1>
        </div>
      )}
      {/* Main Content */}
      <div
        className={`relative ${
          loading
            ? 'opacity-0'
            : 'opacity-100 transition-opacity duration-500 px-4 lg:px-8 mt-4'
        }`}
      >
        <Hero />
      </div>
    </div>
  );
};

export default SplashScreen;
