import Link from 'next/link';
import Image from 'next/image';
import { SiCodementor, FaReadme } from "@/data/icons";
import SectionTitle from './ui/SectionTitle'
import { Button } from "./ui/MovingBorders";
import { hobbiesAndInterests } from '@/data';
import ArrowButton from './ui/Btn';


const Beyond = () => {
  return (
    <div id='blogs' className='min-h-screen'>
      {/* title */}
      <SectionTitle title='Beyond the Code' icon={<SiCodementor />} />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
        {/* hobbies and interest */}
        <div className='w-full lg:w-[45%] flex flex-col justify-between h-[85vh]'>
          {hobbiesAndInterests.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col p-3 py-6 h-[180px] rounded-[1.75rem] ${
                card.id === 2
                  ? 'items-end text-end pr-2'
                  : 'items-start text-start'
              } bg-custom-gradient shadow-xl hover:brightness-125 hover:shadow-3xl transition-all duration-300 ease-in border border-indigo-800 border-dotted`}
            >
              <Image
                width='50'
                height='50'
                src={card.thumbnail}
                alt={card.title}
                className='pl-'
              />
              <div className='lg:ms-5'>
                <h1 className='text-xl md:text-2xl font-bold text-yellow-sunshine'>
                  {card.title}
                </h1>
                <p className='text-white-100 mt-3 font-semibold font-josefinSans text-white-pearl md:text-[17px]'>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* blog section */}
        <div className='w-full lg:w-[55%] h-[85vh] rounded-[1.75rem] space-y-8 flex flex-col justify-center lg:px-8 bg-custom-gradient shadow-xl hover:brightness-125 hover:shadow-3xl transition-all duration-300 ease-in border border-indigo-800 border-dotted'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-yellow-sunshine font-semibold'>
            I Write, Sometimes
          </h1>
          <p className='font-josefinSans text-lg text-white-pearl'>
            When inspiration strikes, I pen down my thoughts on web development,
            self-improvement, and spirituality. These writings are a reflection
            of my journey—exploring ideas, sharing knowledge, and seeking
            growth. Dive in and discover something meaningful!{' '}
          </p>

          <Link href='/blogs'>
            <ArrowButton
              text='Read My Blogs'
              textColor='#FBFBFB'
              buttonOverlayColor='#FFD93D'
              borderColor='#FFD93D'
              size='lg'
              icon={<FaReadme color='white' size='20' />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Beyond