// pages/index.tsx
import { NextPage } from 'next';
import NewComponent from '@/components/NewComponent';
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import LeftSidebar from '@/components/LeftSidebar';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <div className="absolute top-20 md:left-2 lg:left-4">
        <LeftSidebar/>
      </div>
    <div className='max-w-7xl px-4 mx-auto'>
      <Navbar />
      <NewComponent />
     
    </div>
   <div className="container mx-auto">
      <Footer />
   </div>
    </div>
  );
};

export default Home;



