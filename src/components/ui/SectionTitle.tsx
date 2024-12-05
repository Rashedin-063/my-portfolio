import React from 'react';
import Image from 'next/image';

interface SectionTitleProps {
  title: string;
  imgLink: string
  // icon: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, imgLink }) => {
  return (
    <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-center flex justify-center items-center gap-6 mb-12 text-yellow-sunshine">
     <Image src={imgLink} alt="message" height={50} width={50}/>
    <h1
      className=' text-transparent bg-clip-text'
      style={{
       backgroundImage: 'linear-gradient(90deg, hsl(50, 95%, 55%), hsl(40, 95%, 55%), hsl(50, 95%, 55%))',
        backgroundSize: '400% 100%',
        animation: 'moveBg 8s linear infinite',
        WebkitBackgroundClip: 'text',
      }}
    >
     
      {title}
    </h1>
     <Image src={imgLink} alt="message" height={50} width={50} className="bg-transparent"/> 
    
    </div>
  );
};

export default SectionTitle;
