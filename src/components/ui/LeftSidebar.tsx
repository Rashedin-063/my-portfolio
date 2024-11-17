'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import { BsEnvelopePaper } from 'react-icons/bs';



export function LeftSidebar() {
  return (
    <Card>
      <CardSkeletonContainer>     
          <StaticIcons />
      </CardSkeletonContainer>
    </Card>
  );
}

const StaticIcons = () => {
  const icons = [
    {
      component: <Github />,
      link: 'https://github.com/Rashedin-063',
    },
    {
      component: <Linkedin />,
      link: 'https://www.linkedin.com/in/rashedin-islam-web-developer',
    },
    {
      component: <Email />,
      link: 'mailto:rashedinislam.06@gmail.com',
    },
    {
      component: <Resume />,
      link: 'https://drive.google.com/file/d/1IGL8bjSDCWHndTXuTmlA6mCoKOTl5guH/view?usp=sharing',
    },
  ];

  return (
    <div className='overflow-hidden h-full relative flex items-center justify-center'>
      <div className='flex flex-col flex-shrink-0  gap-2 lg:gap-4'>
        {icons.map((icon, index) => (
          <motion.div
            className='h-8 w-8 cursor-pointer hover:scale-110 transition-all duration-300 z-50'
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={icon.link} target='_blank'>
              {icon.component}
            </Link>
          </motion.div>
        ))}
      </div>
      {/* Sparkle Animation */}
      <div className='h-[160px] w-px absolute top-20 m-auto z-10'>
        <div className='w-10 h-40 translate-y-1/8 absolute bottom-0 -left-10'>
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

export const Github = () => (
  <FaGithub className='text-lg md:text-xl xl:text-2xl text-white' />
);
export const Linkedin = () => (
  <FaLinkedin className='text-lg md:text-xl xl:text-2xl text-blue-500' />
);
export const Email = () => (
  <BsEnvelopePaper className='text-base md:text-lg xl:text-xl text-amber-400' />
);
export const Resume = () => (
  <FcDocument className='text-xl md:text-2xl xl:text-3xl text-white' />
);

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`w-10 lg:w-12 group fixed top-28 lg:top-24 ${className}`}>
      {children}
    </div>
  );
};

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
      className={`h-[200px] lg:h-[220px] rounded-full z-50  ${className} ${
        showGradient && 'bg-custom-gradient border border-indigo-800'
      }`}
    >
      {children}
    </div>
  );
};
