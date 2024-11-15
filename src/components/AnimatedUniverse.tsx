'use client';

import React, { useEffect } from 'react';
import '../styles/universe.css';

export default function AnimatedUniverse() {
  useEffect(() => {
    import('../data/startUniverseAnimation.js')
      .then((module) => {
        module.startUniverseAnimation();
      })
      .catch((err) => console.error('Error loading animation script:', err));
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-0'>
      <canvas id='universe' className='w-full h-full' />
    </div>
  );
}
