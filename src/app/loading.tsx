import { FaHandsClapping } from 'react-icons/fa6';
const Loading = () => {
  return (
   <div className="min-h-screen justify-center items-center mt-[360px] lg:mt-72">
     <div className="flex flex-col items-center justify-center text-white font-josefinSans tracking-wider ">
      <div className="md:text-lg lg:text-xl mb-4 text-center">
        <h3>&quot;Creativity is intelligence having fun.&quot;</h3>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-yellow-sunshine font-semibold flex gap-2">
        Welcome to my portfolio
        <FaHandsClapping />
      </h1>
    </div>
   </div>
  );
};

export default Loading;
