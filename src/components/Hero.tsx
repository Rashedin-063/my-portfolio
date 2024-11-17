// import ProfileImg from '../../public/profileImage.jpg';
import ProfileImg2 from '../../public/sketch.png';
import Image from 'next/image';
import { FlipWords } from './ui/FlipWords';


const Hero = () => {

  const words = [
    'Front End Developer',
    'MERN Stack Developer',
    'Full Stack Developer',
  ];


return (
  <div
    id='hero'
    className='h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start gap-12 lg:px-24 rounded-xl -mt-12 lg:-mt-0 lg:ml-8 xl:ml-24'
  >
    <div className='space-y-4 font-chakraPetch text-white-pearl text-center lg:text-start'>
      <h2 className='text-3xl md:text-4xl font-semibold mb-4'>Hello there,</h2>
      <h2 className='text-3xl md:text-4xl font-semibold'>
        This is{' '}
        <span className='font-bold text-4xl md:text-5xl opacity-100 text-transparent bg-clip-text bg-gradient-text'>
          Rashedin Islam
        </span>
      </h2>
      <div className='mt-4 text-2xl font-semibold text-yellow-sunshine'>
        <span className='text-xl  text-white-pearl'>I am a junior </span>
        <FlipWords words={words} />
      </div>
    </div>
    <div>
      <Image
        src={ProfileImg2}
        alt="Rashedin Islam's Profile Photo"
        height='300'
        width='300'
        placeholder='blur'
        priority
        className='h-48 w-48 md:w-60 md:h-60 lg:h-[300px] lg:w-[300px] rounded-full border-4 border-[#A19C8E] object-cover p-2 hover:p-0 transition-all duration-100 ease-in'
      />
    </div>
  </div>
);
}

export default Hero