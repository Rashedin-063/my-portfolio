'use client';
import { useState, useEffect } from 'react';
import { FaHandsClapping } from 'react-icons/fa6';

const SplashScreen: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    // Set the splash screen to move out (scroll up) after 500ms
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen overflow-hidden z-50  ${
        hidden ? 'hidden' : ''
      } transition-all duration-700 ease-in-out ${
        hidden ? 'translate-y-[-100%]' : 'translate-y-0'
      }`}
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
  );
};

export default SplashScreen;
