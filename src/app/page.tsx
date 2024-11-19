import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import { LeftSidebar } from '@/components/LeftSideBar';
import RightSidebar from '../components/RightSidebar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import SplashScreen from '../components/SplashScreen'

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className='relative font-josefinSans'>
      <SplashScreen />

      {/* Navbar */}
      <div className='absolute   z-10 top-0 w-full lg:w-fit lg:right-0'>
        <Navbar />
      </div>

      {/* Left Sidebar */}
      <div className='absolute top-20 md:left-2 lg:left-4 z-10'>
        <LeftSidebar />
      </div>

      {/* Right Sidebar */}
      <div className='absolute right-4 md:right-8 lg:right-10 xl:right-12 top-60 z-30'>
        <RightSidebar />
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-8 lg:px-16 xl:px-24 relative flex justify-center items-center flex-col'>
        <Hero />
        <div>
          <About />
          <Projects />
          <Blogs />
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <div className='container mx-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
