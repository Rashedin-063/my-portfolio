'use client';
import { useDownload } from '@/hooks/useDownload';
import ArrowButton from './Btn';
import { ArrowDownNarrowWide, FolderDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';


const HeroBtn = () => {
  const { handleClick, downloaded } = useDownload();

  return (
    <div className='flex gap-2 md:gap-4 justify-center lg:justify-start pt-2'>
      <Link href='#projects'>
          <ArrowButton
            text='Explore My Work'
            textColor='#FBFBFB'
            buttonOverlayColor='#FFD93D'
            borderColor='#FFD93D'
            size='lg'
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
        size='lg'
        icon={
          downloaded ? <ThumbsUp color='white' /> : <FolderDown color='white' />
        }
      />
    </div>
  );
};

export default HeroBtn;
