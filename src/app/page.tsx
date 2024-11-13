// pages/index.tsx
import { NextPage } from 'next';
import NewComponent from '@/components/NewComponent';
import Footer from '@/components/Footer';
import Navbar from './../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
    <div className='max-w-7xl px-4 mx-auto'>
      <Navbar />
      <NewComponent />
     
    </div>
   <div className="container mx-auto">
      <Footer />
   </div>
    </>
  );
};

export default Home;



