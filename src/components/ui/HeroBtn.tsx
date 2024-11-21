"use client"
import { useDownload } from "@/hooks/useDownload";
import ArrowButton from "./Btn";
import { ArrowDownNarrowWide, FolderDown, ThumbsUp } from 'lucide-react';
import Link from "next/link";
import { Fade } from 'react-awesome-reveal';

const HeroBtn = () => {

    const { handleClick, downloaded } = useDownload();

  return (
    
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
  )
}
export default HeroBtn