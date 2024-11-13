// pages/index.tsx
import { NextPage } from 'next';
import AnimatedUniverse from '@/components/AnimatedUniverse';
import NewComponent from '@/components/NewComponent';

const Home: NextPage = () => {
  return (
    <div className="bg-radial-custom bg-opacity-25">
   <AnimatedUniverse/>
      
        <NewComponent />
      
      
    </div>
  );
};

export default Home;



