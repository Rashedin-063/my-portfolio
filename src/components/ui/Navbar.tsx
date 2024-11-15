'use client';
import { Fade } from 'react-awesome-reveal';
import {navItems} from '@/data/index'


const Navbar = () => {

  return (
    <div className='text-yellow-sunshine py-4 font-chakraPetch'>
      <ul>
        <Fade cascade damping={0.3} triggerOnce={true}>
          <ul className='flex justify-center items-center gap-1 md:gap-6 lg:gap-8 text-sm md:text-base p-3 mx-8 md:mx-auto rounded-xl border-opacity-75 drop-shadow-2xl'>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <a
                  href={to}
                  className='hover:transition hover:duration-700 hover:font-semibold border-b border-indigo-800 px-4 pb-1 rounded-lg'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Fade>
      </ul>
    </div>
  );
};



export default Navbar;
