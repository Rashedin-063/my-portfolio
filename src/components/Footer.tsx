import React from 'react';
import '../styles/universe.css';
import Image from 'next/image';
import footerImg from '../../public/footer.png';

const Footer = () => {
  return (
    <footer className='w-full pt-12 pb-8 relative text-white-pearl'>
      {/* Quote Section */}
      <div className='text-center '>
        <h4 className='text-yellow-sunshine font-semibold tracking-wider italic mb-12 '>
          "We are all in the gutter, but some of us are looking at the stars."
        </h4>
      </div>

      <div className='lg:flex justify-between items-start px-6 lg:px-12 gap-12'>
        {/* Left Section: Service Text and Social Icons */}
        <div className='w-full lg:w-1/2 xl:w-2/3'>
          <h2 className='text-xl font-semibold mb-4 text-yellow-400'>
            Coding is my canvas, <br /> every project is a new masterpiece.
          </h2>
          <p className='max-w-md text-faded-pearl mb-6 font-josefinSans'>
            I offer professional web development services with a focus on
            creating user-friendly, responsive, and beautiful websites.
            Let&apos;s work together to bring your ideas to life!
          </p>
        </div>

        {/* Right Section: Small Boxes */}

        <div className='lg:w-1/2 xl:w-1/3 hidden lg:grid grid-cols-2 gap-4 text-faded-pearl text-center font-josefinSans'>
          <p className='bg-custom-gradient-2 border-2 border-indigo-700  py-4 rounded-lg'>
            Design & Development
          </p>
           <p className='bg-custom-gradient-2 border-2 border-indigo-700  py-4 rounded-lg'>
            SEO Optimization
          </p>
          <p className='bg-custom-gradient-2 border-2 border-indigo-700  py-4 rounded-lg'>
            Debugging & Bug Fixing
          </p>
         
          <p className='bg-custom-gradient-2 border-2 border-indigo-700  py-4 rounded-lg'>
            Performance Analyzing
          </p>
        </div>
      </div>

      <div className='absolute bottom-0 pt-4'>
        <h4 className='text-center absolute bottom-0 lg:bottom-2 left-[42%] lg:left-[45%] text-[10px] tracking-wider md:text-[12px] font-extralight font-josefinSans'>
          @All Rights Reserved
        </h4>
        <div className=''>
          <Image src={footerImg} alt='Footer Image' width='1800' height='400' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
