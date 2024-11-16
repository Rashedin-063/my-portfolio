'use client';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import { BsEnvelopePaper } from 'react-icons/bs';

export function LeftSidebar() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.2, 1];
  const transform = ['translateY(0px)', 'translateY(-4px)', 'translateY(0px)'];
  const sequence = [
    [
      '.circle-1',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-2',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-3',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-4',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-5',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
  
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (

    // displaying icons
    <div className=' overflow-hidden h-full relative flex items-center justify-center'>
      <div className='flex flex-col flex-shrink-0 justify-center items-center gap-2 lg:gap-4'>
         <Container className='h-8 w-8 circle-5'>
          <Github />
        </Container>
       
        
        <Container className='h-8 w-8 circle-3'>
          <Linkedin  />
        </Container>
        <Container className='h-8 w-8 circle-4'>
          <Email />
        </Container>
        <Container className='h-8 w-8 circle-1'>
          <Resume />
        </Container>
      </div>

      {/* displayin aniamtion */}
      <div className='h-[160px] w-px absolute top-20 m-auto z-40 animate-move'>
        <div className='w-10 h-40  translate-y-1/8 absolute bottom-0 -left-10'>
          <Sparkles />
        </div>
        <div className='w-10 h-40 top-0 -translate-y-1/2 absolute -right-10'>
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className='absolute inset-0'>
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: '50%',
            zIndex: 1,
          }}
          className='inline-block bg-white'
        ></motion.span>
      ))}
    </div>
  );
};

// styling card
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'w-10 lg:w-12  group fixed top-28 lg:top-24',
        className
      )}
    >
      {children}
    </div>
  );
};


// styleing card skeleton
export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        'h-[200px] lg:h-[220px] rounded-full z-50',
        className,
        showGradient &&
          'bg-custom-gradient border border-indigo-800'
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center
    `,
        className
      )}
    >
      {children}
    </div>
  );
};


// icons
export const Resume = () => {
  return (
    <Link
      href='https://drive.google.com/file/d/1IGL8bjSDCWHndTXuTmlA6mCoKOTl5guH/view?usp=sharing'
      target='_blank'
    >
      <FcDocument className='text-xl md:text-2xl xl:text-3xl text-white cursor-pointer' />
    </Link>
  );
};
export const Linkedin = () => {
  return (
    <Link
      href='https://www.linkedin.com/in/rashedin-islam-web-developer'
      target='_blank'
    >
      <FaLinkedin className='text-lg md:text-xl xl:text-2xl text-blue-500 cursor-pointer' />
    </Link>
  );
};
export const Github = () => {
  return (
    <Link href='https://github.com/Rashedin-063' target='_blank'>
      <FaGithub className={'text-lg md:text-xl xl:text-2xl text-white cursor-pointer' } />
    </Link>
  );
};
export const Email = () => {
  return (
    <Link href='mailto:rashedinislam.06@gmail.com' target='_blank'>
        <BsEnvelopePaper className='text-base md:text-lg xl:text-xl text-amber-400 cursor-pointer' />
      </Link>
  );
};
