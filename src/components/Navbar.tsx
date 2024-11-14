'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {

   const pathname = usePathname();

  const items = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className='text-yellow-sunshine py-4 font-chakraPetc'>
      <ul>
        <Fade cascade damping={0.3}>
          <ul className='flex justify-center items-center gap-1 md:gap-6 lg:gap-8 text-sm md:text-base   p-3 mx-8 md:mx-auto rounded-xl border-opacity-75 drop-shadow-2xl'>
            {items.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={
                    pathname === to
                      ? 'text-green-lantern font-bold text-base md:text-lg border-b border-green-lantern px-4 pb-1 rounded-lg'
                      : 'hover:transition hover:duration-700 hover:font-semibold border-b border-indigo-800 px-4 pb-1 rounded-lg'
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