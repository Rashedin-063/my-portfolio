'use client';
import { useState, useEffect } from 'react';
import { FaHandsClapping } from 'react-icons/fa6';

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => setHidden(true), 800); // Delay to match animation duration
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
      className={`absolute top-0 left-0 w-full h-screen overflow-hidden z-50  ${
        hidden ? 'hidden' : ''
      } ${
        loading ? '' : 'opacity-0 translate-y-[-100%]'
      } transition-all duration-700 ease-in-out`}
    >
      <div className='flex flex-col items-center justify-center w-full h-full bg-custom-gradient text-white font-josefinSans tracking-wider'>
        <div className='md:text-lg lg:text-xl mb-4 text-center '>
          <h3>&quot;Creativity is intelligence having fun.&quot;</h3>
        </div>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-yellow-sunshine font-semibold flex gap-2'>
          Welcome to my portfolio
          <FaHandsClapping />
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
