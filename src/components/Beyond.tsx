import Link from 'next/link';
import Image from 'next/image';
import { SiCodementor, FaReadme } from "@/data/icons";
import SectionTitle from './ui/SectionTitle'
import { hobbiesAndInterests } from '@/data';
import ArrowButton from './ui/Btn';


const Beyond = () => {
  return (
    <div id='blogs' className='min-h-screen'>
      {/* title */}
      <SectionTitle title='Beyond the Code' icon={<SiCodementor />} />

      <div className='  justify-between items-center gap-4 h-[85vh] xl:relative'>

        {hobbiesAndInterests.map(({ id, thumbnail, title, desc }) => (
    
            <div key={id} className={`w-full xl:w-96 flex flex-col p-3 py-6 h-[200px] rounded-[1.75rem] items-start text-start bg-custom-gradient shadow-glow2 hover:shadow-glow3 bg-blend-soft-light transition-all duration-300 ease-in border border-indigo-800 border-dotted xl:absolute mb-6 xl:mb-0 hover:scale-[1.02] ${id === 1  ? 'top-2 left-0' : id === 2 ? 'top-24 right-0' : id === 3 ? 'top-[25%] left-[33%] xl:h-[280px] xl:w-[450px]' : id === 4 ? 'bottom-24 left-0' : id === 5 ? 'bottom-2 right-0' : ''}`}>
             {id === 3 ? '' :  <Image
                width='50'
                height='50'
                src={thumbnail}
                alt={title}
              />}
              <div className='lg:ms-5 relative'>
                <h1 className='text-xl md:text-2xl font-bold text-yellow-sunshine'>
                  {title}
                </h1>
                <p className=' mt-3 text-[17px] font-josefinSans text-white'>
                  {desc}
                </p>
                 {id === 3 ?  (<Link href='/blogs' className="absolute right-4 mt-4">
            <ArrowButton
              text='Read My Blogs'
              textColor='#FBFBFB'
              buttonOverlayColor='#FFD93D'
              borderColor='#FFD93D'
              size='lg'
              icon={<FaReadme color='white' size='20' />}
            />
          </Link> ): ''}
            </div>
           
            </div>
          ))}
      </div>
    </div>
  );
}
export default Beyond