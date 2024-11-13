// pages/index.tsx
import { NextPage } from 'next';
import NewComponent from '@/components/NewComponent';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <div className=''>
      {/* <AnimatedUniverse /> */}

      <NewComponent />
      <NewComponent />
      <NewComponent />
      <Footer/>
    </div>
  );
};

export default Home;



