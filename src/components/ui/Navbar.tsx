'use client';
import { Fade } from 'react-awesome-reveal';
import {navItems} from '@/data/index'


const Navbar = () => {

  return (
    <div className='text-yellow-sunshine py-4 font-chakraPetch'>
    
        <Fade cascade damping={0.3} triggerOnce={true}>
          <ul className='flex justify-between items-center text-sm md:text-base p-3 mx-4 md:mx-32 lg:mx-auto lg:gap-8 xl:gap-10 rounded-xl border-opacity-75 drop-shadow-2xl '>
            {navItems.slice(1, 5).map(({ to, label }) => (
              <li key={to}>
                <a
                  href={to}
                  className=' border-b border-deep-ocean px-4 pb-1 rounded-lg hover:border-b-2 hover:border-white-pearl'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Fade>
    </div>
  );
};



export default Navbar;
