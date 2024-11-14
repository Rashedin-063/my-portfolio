import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';

const LeftSidebar = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4 md:py-6 xl:py-8 gap-5 rounded-full  mt-20  border border-indigo-800 px-2 fixed bg-transparent border-opacity-75 drop-shadow-2xl z-50'>
      <Link
        href='https://www.linkedin.com/in/rashedin-islam-web-developer'
        target='_blank'
      >
        <FaLinkedin className='text-lg md:text-xl xl:text-2xl text-white' />
      </Link>
      <Link href='https://github.com/Rashedin-063' target='_blank'>
        <FaGithub className='text-lg md:text-xl xl:text-2xl text-white' />
      </Link>
      <Link href='mailto:rashedinislam.06@gmail.com'>
        <MdMarkEmailRead className='text-lg md:text-xl xl:text-2xl text-white' />
      </Link>
      <Link href=''>
        <FaDownload className='text-lg md:text-xl xl:text-2xl text-white' />
      </Link>
    </div>
  );
};
export default LeftSidebar;
