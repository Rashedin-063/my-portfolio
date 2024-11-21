'use client';
import React from 'react';
import { FlipWords } from './ui/FlipWords';
import { FaHandsClapping } from 'react-icons/fa6';
import GlowingCard from './ui/GlowingCard';
import { useDownload } from '@/hooks/useDownload';
import ArrowButton from './ui/Btn';
import { ArrowDownNarrowWide, FolderDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade, Zoom } from 'react-awesome-reveal';

const words = [
  'Crafting Seamless User Experiences',
  'Designing Sleek Frontend Interfaces',
  'Building Innovative Web Applications',
];

const Hero = () => {
  const { handleClick, downloaded } = useDownload();

  return (
    <div
      id='hero'
      className='h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-12 xl:gap-16 rounded-xl -mt-4 lg:mt-8 lg:ml-16 xl:ml-36'
    >
      {/* Left Content */}
      <div className='space-y-4 text-white-pearl text-center lg:text-start'>
        <div>
          <Fade direction='down' triggerOnce>
            <h2 className='text-2xl md:text-3xl font-semibold flex gap-2 items-center justify-center lg:justify-start'>
              <FaHandsClapping /> Hello, I am{' '}
            </h2>
          </Fade>

          <Fade direction='right' delay={300} triggerOnce>
            <h1 className='font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-text mt-1'>
              {' '}
              Rashedin Islam
            </h1>
          </Fade>
        </div>

        <Fade direction='left' delay={500} triggerOnce>
          <div className='mt-4 text-xl font-semibold text-yellow-sunshine space-y-1'>
            <span className='text-lg text-white-pearl'>
              An innovative web developer, passionate about
            </span>
            <br />
            <FlipWords words={words} />
          </div>
        </Fade>

        <Zoom delay={700} triggerOnce>
          <p className='text-sm lg:text-base text-[#FBFBFB] max-w-lg -ml-2 md:-ml-0 pt-2 lg:pt-4'>
            Frontend, Backend, or Full Stack — Let&apos;s create magic together!
          </p>
        </Zoom>

        {/* Buttons */}
        <Fade direction='up' delay={900} triggerOnce>
          <div className='flex gap-2 md:gap-4 justify-center lg:justify-start pt-2'>
            <Link href='#projects'>
              <ArrowButton
                text='Explore My Work'
                textColor='#FBFBFB'
                buttonOverlayColor='#FFD93D'
                borderColor='#FFD93D'
                icon={<ArrowDownNarrowWide color='white' />}
              />
            </Link>
            <a href='/resume.pdf' download='Resume_Rashedin_Islam.pdf'></a>
            <ArrowButton
              handleClick={handleClick}
              text={downloaded ? 'Downloaded 😊' : 'Download My Resume'}
              textColor='#FBFBFB'
              buttonOverlayColor='#5668DE'
              borderColor='#5668DE'
              icon={
                downloaded ? (
                  <ThumbsUp color='white' />
                ) : (
                  <FolderDown color='white' />
                )
              }
            />
          </div>
        </Fade>
      </div>

      {/* Right Content - Profile Image */}
      <Zoom delay={500} triggerOnce>
        <GlowingCard fromColor='#4158D0' toColor='#FFCC70' viaColor='#C850C0' />
      </Zoom>
      <ToastContainer />
    </div>
  );
};

export default Hero;
