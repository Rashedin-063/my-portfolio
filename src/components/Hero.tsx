import ProfileImg from '../../public/profileImage.jpg';
import Image from 'next/image';

const Hero = () => {

return (
  <div id="hero" className='h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start  gap-12 lg:px-24 rounded-xl'>
    <div
      className='space-y-4 font-chakraPetch text-yellow-sunshine opacity-95 text-center lg:text-start'
    >
      <h2 className='text-4xl font-semibold mb-4'>Hello there,</h2>
      <h2 className='text-4xl font-semibold'>
        This is{' '}
        <span className='text-green-lantern font-bold text-5xl opacity-100'>
          Rashedin Islam
        </span>
      </h2>
      <div className='mt-4 text-2xl font-semibold text-yellow-sunshine'>
        <span className='text-xl text-gray-200 '>I am a junior </span>
        {/* <Typewriter
            words={[
              'Frontend Developer',
              'MERN Stack Developer',
              'Full Stack Developer',
            ]}
            typeSpeed={100}
            deleteSpeed={80}
            loop={true}
            cursor={true}
            cursorBlinking
          /> */}
      </div>
    </div>
    <div
     
 
    >
      <Image
        src={ProfileImg}
        alt="Rashedin Islam's Profile Photo"
        height='300'
        width='300'
        placeholder='blur'
        priority
        className='h-40 w-40 md:w-48 md:h-48 rounded-full  border-4 border-yellow-sunshine border-opacity-75 object-cover p-2'
      />
    </div>
  </div>
);
}

export default Hero