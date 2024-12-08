import React from "react";
import { FaHandsClapping } from 'react-icons/fa6';
import HeroBtn from './ui/HeroBtn'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlowingCard from './ui/GlowingCard';
import FlipWords from "./ui/FlipWords"



const words = [
  'Crafting Seamless User Experiences',
  'Designing Sleek Frontend Interfaces',
  'Building Scalable Web Applications',
];

const Hero = () => {
  return (
    <div
      id='hero'
      className='h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-12 xl:gap-24 rounded-xl lg:pt-8 lg:pl-16 '
    >
      {/* Left Content */}
      <div className='space-y-4 text-white-pearl text-center lg:text-start'>
        <div>
          <h2 className='text-lg md:text-xl xl:text-2xl font-semibold flex gap-2 items-center justify-center lg:justify-start'>
            <span className='animate-wave text-faded-pearl'>
              <FaHandsClapping />
            </span>{' '}
            Hello there, I am{' '}
          </h2>
          <h1 className='font-bold text-4xl md:text-5xl xl:text-6xl bg-gradient-text text-transparent bg-clip-text mt-1'>
            {' '}
            Rashedin Islam
          </h1>
        </div>

        <div className='mt-4 text-lg lg:text-xl font-semibold text-yellow-sunshine space-y-2'>
          <span className=' text-white-pearl'>
            An innovative web developer, passionate about
          </span>
          <br />

          <FlipWords words={words} />
        </div>

        <p className='lg:text-lg text-[#FBFBFB] max-w-xl -ml-2 md:-ml-0 pt-2 lg:pt-4'>
          Frontend, Backend, or Full Stack — Let&apos;s create magic together!
        </p>
        {/* Buttons */}
        <HeroBtn />
      </div>

      {/* Right Content - Profile Image */}
      <div className='relative'>
        <GlowingCard fromColor='#4158D0' toColor='#FFCC70' viaColor='#C850C0' />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hero;
