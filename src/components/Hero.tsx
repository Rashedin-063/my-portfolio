"use client"

import React, { useEffect } from "react";
import { FlipWords } from './ui/FlipWords';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ArrowButton from "./ui/Btn";
import { FaHandsClapping } from "react-icons/fa6";
import GlowingCard from "./ui/GlowingCard";
import { ArrowDownNarrowWide, FolderDown, ThumbsUp } from 'lucide-react';
import Link from "next/link";
import { useDownload } from '@/hooks/useDownload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  const words = [
    'Crafting Seamless User Experiences',
    'Designing Sleek Frontend Interfaces',
    'Building Innovative Web Applications',
  ];

const Hero = () => {
useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",  
      once: true,
      
    });
  }, []);

  const { handleClick, downloaded } = useDownload();


return (
  <div
    id='hero'
    className='h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-12 xl:gap-16 rounded-xl mt-4 md:mt-0 lg:mt-8 lg:ml-16 xl:ml-36 font-chakraPetch'
  >
    {/* Left Content */}
    <div className='space-y-4 text-white-pearl text-center lg:text-start'>
      <div>
        <h2
          className='text-2xl md:text-3xl font-semibold flex gap-2 items-center justify-center lg:justify-start'
          data-aos='fade-down'
          data-aos-delay='100'
          data-aos-easing='ease-out-cubic'
        >
          <FaHandsClapping /> Hello, I am{' '}
        </h2>

        <h1
          className='font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-text mt-1'
          data-aos='fade-right'
          data-aos-delay='300'
          data-aos-easing='ease-out-cubic'
        >
          {' '}
          Rashedin Islam
        </h1>
      </div>

      <div
        className='mt-4 text-xl font-semibold text-yellow-sunshine space-y-1'
        data-aos='fade-left'
        data-aos-delay='500'
        data-aos-easing='ease-out-cubic'
      >
        <span className='text-lg text-white-pearl'>
          An innovative web developer, passionate about
        </span>
        <br />
        <FlipWords words={words} />
      </div>

      <p
        className=' text-sm lg:text-base text-[#FBFBFB] max-w-lg -ml-2 md:-ml-0 pt-2 lg:pt-4'
        data-aos='zoom-in'
        data-aos-easing='ease-out-cubic'
        data-aos-delay='700'
      >
        Frontend, Backend, or Full Stack — Let&apos;s create magic together!
      </p>

      {/* buttons */}
      <div
        className='flex gap-2 md:gap-4 md:gap-4 justify-center lg:justify-start pt-2'
        data-aos='fade-up'
        data-aos-delay='900'
        data-aos-easing='ease-out-cubic'
      >
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
    </div>

    {/* Right Content - Profile Image */}
    <div
      data-aos='zoom-in'
      data-aos-delay='500'
      data-aos-easing='ease-out-cubic'
    >
      <GlowingCard fromColor='#4158D0' toColor='#FFCC70' viaColor='#C850C0' />
    </div>
    <ToastContainer />
  </div>
);
}

export default Hero