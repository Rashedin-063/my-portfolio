import Link from 'next/link';
import Image from 'next/image';
import { FaReadme } from "@/data/icons";
import SectionTitle from './ui/SectionTitle'
import { hobbiesAndInterests } from '@/data';
import ArrowButton from './ui/Btn';


const Journey = () => {
  return (
    <div id='journey' className='min-h-screen'>
      {/* title */}
      <SectionTitle
        title='My Journey So Far'
        imgLink='https://i.ibb.co.com/jh4R5dh/journey.gif'
      />

      <div className='  justify-between items-center gap-4 min-h-[85vh] xl:relative'>
        {hobbiesAndInterests.map(({ id, thumbnail, title, desc }) => (
          <div
            key={id}
            className={`w-full xl:w-96 flex flex-col p-3 py-2 h-[200px] rounded-[1.75rem] items-start text-start bg-custom-gradient shadow-glow2 hover:shadow-glow3 bg-blend-soft-light transition-all duration-300 ease-in  xl:absolute mb-6 xl:mb-0 hover:scale-[1.02] border-2 border-b-4 border-r-4 border-indigo-900 hover:border-indigo-600   ${
              id === 1
                ? 'top-2 left-0'
                : id === 2
                ? 'top-24 right-0'
                : id === 3
                ? 'top-[25%] left-[33%] h-[320px] md:h-[240px] xl:h-[280px] xl:w-[450px]'
                : id === 4
                ? 'bottom-24 left-0'
                : id === 5
                ? 'bottom-2 right-0'
                : ''
            }`}
          >
            {id === 3 ? (
              ''
            ) : (
              <Image width='50' height='50' src={thumbnail} alt={title} />
            )}
            <div className='lg:ms-5 relative'>
              <h1 className='text-lg md:text-xl font-bold text-yellow-sunshine'>
                {title}
              </h1>
              <p className=' mt-3 text-[17px] font-josefinSans text-white'>
                {desc}
              </p>
              {id === 3 ? (
                <Link
                  href='#'
                  prefetch={false}
                  className='absolute right-4 mt-4'
                >
                  <ArrowButton
                    text='Read My Blogs'
                    textColor='#FBFBFB'
                    buttonOverlayColor='#FFD93D'
                    borderColor='#FFD93D'
                    size='lg'
                    icon={<FaReadme color='white' size='20' />}
                  />
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Journey