import { NextPage } from 'next';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import { LeftSidebar2 } from '@/components/ui/LeftSideBar2';
import RightSidebar from '../components/ui/RightSidebar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import SplashScreen from "../components/ui/SplashScreen";



const Home: NextPage = () => {
  return (
    <div className='relative'>
     
      <div className="lg:absolute lg:right-16 xl:right-24">
           <Navbar/>
         </div>

 {/* left sidebar */}
      <div className='absolute top-20 md:left-2 lg:left-4'>
        <LeftSidebar2 />
      </div>
      {/* right sidebar */}
      <div className='absolute right-4 md:right-8 lg:right-10 xl:right-12 top-60 '>
        <RightSidebar />
      </div>
      {/* main content */}
      <div className='max-w-7xl px-4 lg:px-8 mx-auto space-y-16'>
        <SplashScreen/>
        <Hero/>
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </div>
      <div className='container mx-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;



