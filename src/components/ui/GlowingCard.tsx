import React from 'react';
import Image from 'next/image';
import ProfileImg from '../../../public/sketch.png';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Starting gradient color.
   */
  fromColor?: string;
  /**
   * Middle gradient color.
   */
  viaColor?: string;
  /**
   * Ending gradient color.
   */
  toColor?: string;
}

export default function GlowingCard({
  fromColor = '#4158D0',
  viaColor = '#C850C0',
  toColor = '#FFCC70',
}: GlowCardProps) {
  return (
    <>
    <div
      className="bg-gradient-to-r p-0.5 hover:shadow-glow hover:brightness-150 h-48 w-48 md:w-60 md:h-60 lg:h-[300px] lg:w-[300px] rounded-full relative animate-spin"
   style={{
        transition: ' box-shadow 0.5s ease',
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
      }}
    >
      <div
        className='blur-20 inset-0 h-full w-full rounded-full bg-gradient-to-r from-[#5662DD] via-[#C850C0] to-[#FFD93D] absolute top-0'
        style={{ transition: 'filter 0.5s ease' }}
      />  
     
    </div>
  
     <div className=' absolute top-0 hover:shadow-glow hover:brightness-150 rounded-full'>
        <Image
          src={ProfileImg}
          alt="Rashedin Islam's Profile Photo"
          placeholder='blur'
          priority
          className='h-48 w-48 md:w-60 md:h-60 lg:h-[300px] lg:w-[300px] rounded-full object-cover p-2 hover:p-0 transition-all  ease-in'
        />
      </div>
    </>
  );
}
