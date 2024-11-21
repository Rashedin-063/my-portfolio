'use client';
import { Fade } from 'react-awesome-reveal';
import {navItems} from '@/data/index'
import Link from 'next/link';


const Navbar = () => {

  return (
    <div className=' text-yellow-sunshine font-josefinSans'>
    
        <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
          <ul className='flex justify-between lg:justify-end items-center text-sm md:text-base py-3 px-6  md:mx-36 lg:mx-8 xl:mx-16 lg:gap-8 xl:gap-10 rounded-xl  drop-shadow-2xl '>
            {navItems.slice(1, 5).map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className=' border-b border-indigo-600 px-4 pb-1 rounded-lg hover:border-b-2 hover:border-white-pearl cursor-pointer tracking-wide'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Fade>
    </div>
  );
};



export default Navbar;
