import { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import { LeftSidebar } from '@/components/ui/LeftSideBar';
import RightSidebar from '../components/ui/RightSidebar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import SplashScreen from '../components/ui/SplashScreen';
import Hero from '@/components/Hero'; // Import Hero component

const Home: NextPage = () => {
  return (
    <div className='relative'>
      {/* SplashScreen placed at the top */}
      <SplashScreen />

      {/* Navbar */}
      <div className='lg:absolute lg:right-16 xl:right-24 z-10'>
        <Navbar />
      </div>

      {/* Left Sidebar */}
      <div className='absolute top-20 md:left-2 lg:left-4 z-10'>
        <LeftSidebar />
      </div>

      {/* Right Sidebar */}
      <div className='absolute right-4 md:right-8 lg:right-10 xl:right-12 top-60 z-10'>
        <RightSidebar />
      </div>

      {/* Main Content */}
      <div>
        {/* Hero Component */}
        <Hero /> {/* This is where the Hero section is added */}
        <div className='container mx-auto px-4 lg:px-8 space-y-16'>
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
