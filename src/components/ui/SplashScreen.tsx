"use client";
import { useState, useEffect } from "react";

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Track when the page is fully loaded
    if (document.readyState === 'complete') {
      handleLoad(); // Page is already loaded
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-custom-gradient font-indieFlower text-yellow-sunshine'>
      <p className='mt-4 text-3xl text-center'>Welcome to my portfolio ...</p>
      
    </div>
  );
};

export default SplashScreen;
