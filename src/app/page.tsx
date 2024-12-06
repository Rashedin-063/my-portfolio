import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const LeftSidebar = dynamic(() => import('@/components/LeftSideBar'))
const RightSidebar = dynamic(() => import('@/components/RightSidebar'))
const About = dynamic(() => import('@/components/About'))
const Projects = dynamic(() => import('@/components/Projects'))
const Journey = dynamic(() => import('@/components/Journey'));
const Contact = dynamic(() => import('@/components/Contact'));

const Home: NextPage = () => {
  return (
    <div className='relative font-chakraPetch'>
      {/* <SplashScreen /> */}

      {/* Navbar */}
      <div className='absolute z-10 top-4 w-full lg:w-fit lg:right-0'>
        <Navbar />
      </div>

      {/* Left Sidebar */}
      <div className='absolute top-20 md:left-2 lg:left-4 z-10'>
        <LeftSidebar />
      </div>

      {/* Right Sidebar */}
      <div className='absolute top-96 right-4 md:right-8 lg:right-10 xl:right-12 z-30'>
        <RightSidebar />
      </div>
</div>
      {/* Main Content */}
      <div className='container mx-auto px-8 lg:px-16 xl:px-24 relative flex justify-center items-center flex-col'>
        <Hero />
        <div className="space-y-16 lg:space-y-28">
          <About />
          <Projects/>
          <Journey/>
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
