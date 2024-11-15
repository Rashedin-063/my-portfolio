// pages/index.tsx
import { NextPage } from 'next';
import NewComponent from '@/components/NewComponent';
import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import LeftSidebar from '@/components/ui/LeftSidebar';
import RightSidebar from '../components/ui/RightSidebar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';



const Home: NextPage = () => {
  return (
    <div className='relative'>
     
      <div className="lg:absolute lg:right-8 xl:right-12">
           <Navbar/>
         </div>

 {/* left sidebar */}
      <div className='absolute top-20 md:left-2 lg:left-4'>
        <LeftSidebar />
      </div>
      {/* right sidebar */}
      <div className='absolute right-4 md:right-8 top-60'>
        <RightSidebar />
      </div>
      {/* main content */}
      <div className='max-w-7xl px-4 mx-auto'>
        <NewComponent />
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



