import React from 'react';
import '../styles/universe.css'
import Image from 'next/image';

const Footer = () => {


  return (
    <footer className='w-full overflow-hidden relative'>
      <div className='p-4'>
        {/* first text */}
        <div className='text-center space-y-2 mb-8 lg:mb-12'>
          <h4 className=' text-xs hidden lg:block italic'>
            We are all in the gutter, but some of us are looking at the stars.
          </h4>
          <h2 className=''>Looking for a passionate developer?</h2>
        </div>

        {/* second text */}
        <div className='-mb-8 lg:-mb-40 text-sm lg:mx-8'>
          <h3 className=''>Feel free to reach out</h3>
        </div>
      </div>
      <h4 className='text-center absolute bottom-1 lg:bottom-4 left-[42%] lg:left-[45%] text-[8px] tracking-wider md:text-[12px] font-extralight'>
        @All Rights Reserved
      </h4>
      <div>
        <Image
          src='https://i.ibb.co.com/bbLxQwq/footer.png'
          alt='Footer Image'
          width='1800'
          height='400'
        />
      </div>
    </footer>
  );
};

export default Footer;
