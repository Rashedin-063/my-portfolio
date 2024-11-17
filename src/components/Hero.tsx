"use client"

import React, { useEffect } from "react";
import ProfileImg2 from '../../public/sketch.png';
import Image from 'next/image';
import { FlipWords } from './ui/FlipWords';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ArrowButton from "./ui/Btn";


  const words = [
    'Seamless User Experiences',
    'Aesthetic Frontend Designs',
    'Innovative Web Applications',
  ];

const Hero = () => {



    useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",  
      once: true,
      
    });
  }, []);


return (
  <div
    id='hero'
    className='h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-12 lg:gap-16 lg:px-24 rounded-xl -mt-12 lg:-mt-0 lg:ml-8 xl:ml-24'
  >
    {/* Left Content */}
    <div className='space-y-4 font-chakraPetch text-white-pearl text-center lg:text-start'>
      <h2
        className='text-2xl md:text-3xl font-semibold flex flex-col gap-y-[2px]'
        data-aos='fade-down'
        data-aos-delay='100'
        data-aos-easing='ease-out-cubic'
      >
        Hi, I am{' '}
        <span className='font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-text'>
          Rashedin Islam
        </span>
      </h2>

      <div
        className='mt-4 text-xl font-semibold text-yellow-sunshine space-y-1'
        data-aos='fade-left'
        data-aos-delay='500'
        data-aos-easing='ease-out-cubic'
      >
        <span className='text-lg text-white-pearl'>
          A digital artisan passionate about crafting:
        </span>
        <br />
        <FlipWords words={words} />
      </div>

      <p
        className='text-sm lg:text-base text-[#FBFBFB] max-w-lg pt-4'
        data-aos='zoom-in'
        data-aos-easing='ease-out-cubic'
        data-aos-delay='700'
      >
        Frontend, MERN Stack, or Full Stack — Let&apos;s code the future together!
      </p>

      {/* Call-to-Actions */}
      <div
        className='flex gap-4 justify-center lg:justify-start pt-2'
        data-aos='fade-up'
        data-aos-delay='900'
        data-aos-easing='ease-out-cubic'
      >
        <ArrowButton
          text='View My Portfolio'
          textColor='#FBFBFB'
          buttonOverlayColor='#FFD93D'
          borderColor='#FFD93D'
          iconColor='white'
          stats='first'
        />
        <ArrowButton
          text='Download My Resume'
          textColor='#FBFBFB'
          buttonOverlayColor='#5668DE'
          borderColor='#5668DE'
          iconColor='white'
          stats='second'
        />
      </div>
    </div>

    {/* Right Content (Profile Image) */}
    <div
      data-aos='zoom-in'
      data-aos-delay='1000'
      data-aos-easing='ease-out-cubic'
    >
      <Image
        src={ProfileImg2}
        alt="Rashedin Islam's Profile Photo"
        placeholder='blur'
        priority
        className='h-48 w-48 md:w-60 md:h-60 lg:h-[300px] lg:w-[300px] rounded-full border-4 border-[#A19C8E] object-cover p-2 hover:p-0 transition-all duration-300 ease-in'
      />
    </div>
  </div>
);
}

export default Hero