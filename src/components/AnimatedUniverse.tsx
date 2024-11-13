'use client';

import React, { useEffect } from 'react';

const AnimatedUniverse: React.FC = () => {
  useEffect(() => {
    import('../data/startUniverseAnimation.js')
      .then((module) => {
        module.startUniverseAnimation();
      })
      .catch((err) => console.error('Error loading animation script:', err));
  }, []);

  return (
    <div className='relative w-full min-h-screen '>
      <canvas
        id='universe'
        className='absolute top-0 left-0 w-full h-full z-0 pointer-events-none'
      ></canvas>
    </div>
  );
};

export default AnimatedUniverse;
