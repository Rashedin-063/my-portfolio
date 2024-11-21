'use client';
import { useState, useEffect } from 'react';
import { FaHandsClapping } from 'react-icons/fa6';

const SplashScreen: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  // Remove splash screen after content has loaded (minimizing JS impact on LCP)
  useEffect(() => {
    if (document.readyState === 'complete') {
      setHidden(true);
    } else {
      window.addEventListener('load', () => setHidden(true));
    }
    return () => window.removeEventListener('load', () => setHidden(true));
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen z-50 bg-custom-gradient flex items-center justify-center
        ${
          hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-opacity duration-700 ease-in-out`}
    >
      <div className='flex flex-col items-center justify-center text-white font-josefinSans tracking-wider'>
        <div className='md:text-lg lg:text-xl mb-4 text-center'>
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
