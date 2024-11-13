'use client';

import React, { useEffect } from 'react';
import '../styles/universe.css';

export default function AnimatedUniverse({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    import('../data/startUniverseAnimation.js')
      .then((module) => {
        module.startUniverseAnimation();
      })
      .catch((err) => console.error('Error loading animation script:', err));
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Fixed canvas for the background animation */}
      <canvas id='universe' className='fixed top-0 left-0 w-full h-full z-0' />

      {/* Scrollable content wrapper */}
      <div className='relative z-10 w-full h-full overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}
