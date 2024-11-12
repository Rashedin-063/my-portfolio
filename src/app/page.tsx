// pages/index.tsx
import { NextPage } from 'next';
import AnimatedUniverse from '@/components/AnimatedUniverse';

const Home: NextPage = () => {
  return (
    <>
    <div className='universe-container'>
      <AnimatedUniverse />
    </div>
    </>
  );
};

export default Home;



