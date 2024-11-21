'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDownload } from '@/hooks/useDownload';
import ArrowButton from './Btn';
import { ArrowDownNarrowWide, FolderDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const HeroBtn = () => {
  const { handleClick, downloaded } = useDownload();

  // Initialize AOS when this component mounts
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });

    // Refresh AOS on dynamic content update
    AOS.refresh();
  }, []);

  return (
    <div
      className='flex gap-2 md:gap-4 justify-center lg:justify-start pt-2'
      data-aos='fade-up' // AOS animation type
      data-aos-delay='300' // Delay before animation starts
    >
      {/* Explore My Work Button */}
      <Link href='#projects'>
        <ArrowButton
          text='Explore My Work'
          textColor='#FBFBFB'
          buttonOverlayColor='#FFD93D'
          borderColor='#FFD93D'
          icon={<ArrowDownNarrowWide color='white' />}
        />
      </Link>

      {/* Download Resume Button */}
      <ArrowButton
        handleClick={handleClick}
        text={downloaded ? 'Downloaded 😊' : 'Download My Resume'}
        textColor='#FBFBFB'
        buttonOverlayColor='#5668DE'
        borderColor='#5668DE'
        icon={
          downloaded ? <ThumbsUp color='white' /> : <FolderDown color='white' />
        }
      />
    </div>
  );
};

export default HeroBtn;
