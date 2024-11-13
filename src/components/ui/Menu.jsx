"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

const Menu = ({ items = [] }) => {
    const pathname = usePathname();

  return (
    <Fade cascade damping={0.3}>
      <ul className='lg:flex lg:items-center lg:gap-3 text-sm md:text-base space-y-4 lg:space-y-0 font-playWrite italic'>
        {items.map(({ to, label }) => (
          <li key={to}>
            <Link href={to}
          
                className={
                  pathname === to
                    ? 'text-green-lantern font-semibold animate-pulse-3'
                    : 'hover:transition hover:duration-700 hover:font-semibold'
                }
              >
                {label}
      
            </Link>
          </li>
        ))}
      </ul>
    </Fade>
  );
};

export default Menu;
