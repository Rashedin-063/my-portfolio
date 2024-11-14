'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {

   const pathname = usePathname();

  const items = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className=' h-20 mr-8 text-yellow-sunshine sticky top-0 py-4'>
      <ul className=' px-1'>
        <Fade cascade damping={0.3}>
          <ul className='flex justify-center items-center gap-6 text-sm md:text-base font-playWrite italic  border border-indigo-800 py-3 w-3/4 mx-auto rounded-xl border-opacity-75 drop-shadow-2xl'>
            {items.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
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
      </ul>
    </div>
  );
};
export default Navbar;
