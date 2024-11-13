"use client"

import React, { useEffect } from 'react';

const AnimatedUniverse: React.FC = () => {
  useEffect(() => {
    // Your existing universe animation logic
    const starDensity = 0.216;
    const speedCoeff = 0.05;
    let width: number;
    let height: number;
    let starCount: number;
    let stars: any[] = [];

    const canva = document.getElementById('universe') as HTMLCanvasElement;
    const universe = canva.getContext('2d');

    // Canvas resizing and star regeneration logic
    function windowResizeHandler() {
      width = window.innerWidth;
      height = window.innerHeight;
      starCount = width * starDensity;
      canva.width = width;
      canva.height = height;
      stars = Array.from({ length: starCount }, () => new Star());
    }

    class Star {
      x: number = Math.random() * width;
      y: number = Math.random() * height;
      dx: number = (Math.random() - 0.5) * speedCoeff * 8; // Increased range for x direction
      dy: number = (Math.random() - 0.5) * speedCoeff * 8; // Increased range for y direction
      opacity: number = Math.random();

      move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > width || this.y > height) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }

      draw() {
        if (universe) {
          universe.fillStyle = `rgba(226, 225, 224, ${this.opacity})`;
          universe.fillRect(this.x, this.y, 1.5, 1.5);
        }
      }
    }

    function animate() {
      if (universe) {
        universe.clearRect(0, 0, width, height);
        stars.forEach((star) => {
          star.move();
          star.draw();
        });
      }
      requestAnimationFrame(animate);
    }

    windowResizeHandler();
    window.addEventListener('resize', windowResizeHandler);
    animate();

    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  return (
    <div className='relative w-full h-screen bg-radial-custom'>
      <canvas
        id='universe'
        className='absolute top-0 left-0 w-full h-full'
      ></canvas>
      <div className='relative z-10 flex items-center justify-center h-full text-white'>
        <h1 className='text-5xl font-bold'>Welcome to the Universe</h1>
      </div>
    </div>
  );
};

export default AnimatedUniverse;
