"use client"

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  opacity: number;
  opacityTresh: number;
  fadingIn: boolean;
  fadingOut: boolean | null;
  giant: boolean;
  comet: boolean;
}

const Universe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let starCount = width * 0.216; // Star density
    let speedCoeff = 0.05;
    let stars: Star[] = [];

    class Star {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      opacity: number;
      opacityTresh: number;
      fadingIn: boolean = true;
      fadingOut: boolean | null = null;
      giant: boolean;
      comet: boolean;

      constructor() {
        this.giant = Math.random() < 0.03;
        this.comet = this.giant || Math.random() < 0.1;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = Math.random() * (2.6 - 1.1) + 1.1;
        this.dx = Math.random() * (speedCoeff * 6 - speedCoeff) + speedCoeff;
        this.dy = -Math.random() * (speedCoeff * 6 - speedCoeff) - speedCoeff;
        this.opacity = 0;
        this.opacityTresh = Math.random() * (1 - 0.2) + 0.2;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.opacity = 0;
        this.fadingIn = true;
      }

      fadeIn() {
        if (this.fadingIn) {
          this.opacity += 0.002;
          if (this.opacity >= this.opacityTresh) this.fadingIn = false;
        }
      }

      fadeOut() {
        if (this.fadingOut) {
          this.opacity -= 0.001;
          if (this.opacity <= 0) this.fadingOut = false;
        }
      }

      move() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x > width || this.y < 0) {
          this.fadingOut = true;
        }

        if (!this.fadingOut) {
          this.fadeIn();
        } else {
          this.fadeOut();
        }
      }

      draw() {
        context.beginPath();

        if (this.giant) {
          context.fillStyle = `rgba(180, 184, 240, ${this.opacity})`;
          context.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
        } else if (this.comet) {
          context.fillStyle = `rgba(226, 225, 224, ${this.opacity})`;
          context.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

          for (let i = 0; i < 30; i++) {
            context.fillStyle = `rgba(226, 225, 224, ${
              this.opacity - (this.opacity / 20) * i
            })`;
            context.rect(
              this.x - (this.dx / 4) * i,
              this.y - (this.dy / 4) * i - 2,
              2,
              2
            );
            context.fill();
          }
        } else {
          context.fillStyle = `rgba(226, 225, 142, ${this.opacity})`;
          context.rect(this.x, this.y, this.r, this.r);
        }

        context.closePath();
        context.fill();
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const draw = () => {
      context.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.move();
        star.draw();
      });
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      starCount = width * 0.216;
      canvas.width = width;
      canvas.height = height;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute top-0 left-0 w-full h-full z-[-10]'
    />
  );
};

export default Universe;
