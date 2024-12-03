import React from 'react';
import '../styles/universe.css';
import Image from 'next/image';
import footerImg from '../../public/footer.png';

const Footer = () => {
  return (
    <footer className='w-full text-white py-12 relative'>
      {/* Quote Section */}
      <div className='text-center '>
        <h4 className='text-xs italic text-gray-400'>
          We are all in the gutter, but some of us are looking at the stars.
        </h4>
      </div>

      <div className='flex justify-between items-start px-6 lg:px-12 gap-12'>
        {/* Left Section: Service Text and Social Icons */}
        <div className='w-2/3'>
          <h2 className='text-2xl font-semibold mb-4 text-yellow-400'>
            Looking for a passionate developer?
          </h2>
          <p className='text-sm max-w-lg text-gray-300 mb-6'>
            I offer professional web development services with a focus on
            creating user-friendly, responsive, and beautiful websites. Let&apos;s
            work together to bring your ideas to life!
          </p>

          {/* Social Media Icons */}
          <div className='flex space-x-6'>
            <a
              href='https://github.com/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-yellow-500'
            >
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/yourprofile/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-yellow-500'
            >
              <i className='fab fa-linkedin'></i>
            </a>
            <a
              href='https://twitter.com/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-yellow-500'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </div>
        </div>

        {/* Right Section: Small Boxes */}
        <div className='w-1/3 grid grid-cols-2 gap-6'>
          <div className='bg-custom-gradient-2 p-4 rounded-lg text-center'>
            <p className='text-xs text-gray-400'>Web development</p>
          </div>
          <div className='bg-custom-gradient-2 p-4 rounded-lg text-center'>
         
            <p className='text-xs text-gray-400'>UI/UX Design</p>
          </div>
          <div className='bg-custom-gradient-2 p-4 rounded-lg text-center'>
       
            <p className='text-xs text-gray-400'>SEO Optimization</p>
          </div>
          <div className='bg-custom-gradient-2 p-4 rounded-lg text-center'>
        
            <p className='text-xs text-gray-400'>Consultation</p>
          </div>
          {/* Optional Boxes */}
          <div className='bg-custom-gradient-2 p-4 rounded-lg text-center'>
         
            <p className='text-xs text-gray-400'>App Development</p>
          </div>
          <div className='bg-custom-gradient-2 p-4 rounded-lg text-center'>
         
            <p className='text-xs text-gray-400'>E-commerce Solutions</p>
          </div>
        </div>
      </div>

        <div className="absolute bottom-0 pt-4">
           <h4 className='text-center absolute bottom-4 left-[42%] lg:left-[45%] text-[8px] tracking-wider md:text-[12px] font-extralight'>
        @All Rights Reserved
      </h4>
      <div className="">
        <Image
          src={footerImg}
          alt='Footer Image'
          width='1800'
          height='400'
        />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
