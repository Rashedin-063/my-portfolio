import Menu from "./ui/Menu";

const Navbar = () => {

  const items = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className='text-center h-20 mr-8 text-yellow-sunshine'>
      <div className='navbar'>
        {/* navbar start */}
        <div className='navbar-start'>
          <div className='dropdown lg:hidden'>
            {/* icon */}
            <div
              tabIndex={0}
              role='button'
              className='hover:bg-gray-800 p-2 hover:rounded-full'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content z-[1] mt-3 shadow border-2 w-40 rounded-xl bg-blue-800 bg-opacity-25 ml-10'
            >
              <Menu items={items} />
            </ul>
          </div>
        </div>
        <div className='navbar-center '></div>
        <div className='navbar-end'>
          <ul className='menu menu-horizontal px-1 hidden lg:flex'>
            <Menu items={items} />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar