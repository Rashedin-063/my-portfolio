import Image from 'next/image';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-8">
      <Image src='/404.png' alt='404 Illustration' width={500} height={300}/>
      <p className="text-3xl text-center font-bold text-yellow-sunshine">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <a href='/'>
        <button className="px-6 py-2 font-josefinSans text-white text-lg bg-deep-ocean border border-yellow-sunshine indigo-800 -mt-8 rounded-3xl hover:bg-yellow-sunshine hover:text-deep-ocean transition-all duration-300">Return Home</button>
      </a>
    </div>
  );
};

export default NotFound;
