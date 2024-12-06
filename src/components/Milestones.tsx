import Link from 'next/link';
import Image from 'next/image';
import { IoDocumentText } from '@/data/icons';
import SectionTitle from './ui/SectionTitle';
import { milestonesAndMemories } from '@/data';
import ArrowButton from './ui/Btn';

const Milestones = () => {
  return (
    <div id='milestones' className='min-h-screen'>
      {/* title */}
      <SectionTitle
        title='Milestones & Memories'
        imgLink='https://i.ibb.co.com/jh4R5dh/journey.gif'
      />

      <div className='  justify-between items-center gap-4 min-h-[90vh] xl:relative -mt-4'>
        {milestonesAndMemories.map(
          ({ id, thumbnail, title, timeline, desc, credential }) => (
            <div
              key={id}
              className={`w-full xl:w-96 flex flex-col py-3 px-4 h-[220px] rounded-[1.75rem] items-start text-start bg-custom-gradient-2 shadow-glow2 hover:shadow-glow3 bg-blend-soft-light transition-all duration-300 ease-in  xl:absolute mb-6 xl:mb-0 hover:scale-[1.02] border-2 border-b-4 border-r-4 border-indigo-900 hover:border-indigo-600 ${
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
              {/* thumbnail and timeline */}
              <div className='flex justify-between gap-4 items-end font-josefinSans'>
                <Image width='30' height='30' src={thumbnail} alt={title} className="rounded-full"/>
                <p>{timeline}</p>
              </div>
              {/* title, des, and the btn */}
              <div className='relative'>
                <h1 className='text-lg md:text-xl font-bold text-yellow-sunshine mt-2'>
                  {title}
                </h1>
                <p className='text-white mt-2 font-josefinSans '>{desc}</p>
                <Link
                  href={credential}
                  prefetch={false}
                  target='_blank'
                  className='absolute right-4 mt-4'
                >
                  <ArrowButton
                    text='View Credentials'
                    textColor='#FBFBFB'
                    buttonOverlayColor='#FFD93D'
                    borderColor='#FFD93D'
                    size='sm'
                    icon={<IoDocumentText color='white' size='24' className="font-bold" />}
                  />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Milestones;
