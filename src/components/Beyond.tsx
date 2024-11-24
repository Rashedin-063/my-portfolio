import Link from 'next/link';
import Image from 'next/image';
import { SiCodementor, FaReadme } from "@/data/icons";
import SectionTitle from './ui/SectionTitle'
import { Button } from "./ui/MovingBorders";
import { hobbiesAndInterests } from '@/data';
import ArrowButton from './ui/Btn';


const Beyond = () => {
  return (
    <div id='blogs' className='min-h-screen border border-yellow-sunshine'>
      {/* title */}
      <SectionTitle title='Beyond the Code' icon={<SiCodementor />} />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
        {/* hobbies and interest */}
        <div className='w-full lg:w-[40%] flex flex-col justify-between h-screen'>
          {hobbiesAndInterests.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='1.75rem'
              style={{
                background: 'rgb(4,7,29)',
                backgroundColor:
                  'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className='flex-1 text-white border-slate-800 '
            >
              <div
                className={`flex flex-col p-3 py-6 h-[200px] ${
                  card.id === 2
                    ? 'items-end text-end pr-2'
                    : 'items-start text-start'
                }`}
              >
                <Image
                  width='60'
                  height='60'
                  src={card.thumbnail}
                  alt={card.title}
                  className='pl-'
                />
                <div className='lg:ms-5'>
                  <h1 className='text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
        {/* <div>
    <Image src={constellation} width='300' height="1200" alt="divider" className="hidden lg:block h-[600px] w-[200px] object-fit" />
    </div>  */}
        
        {/* blog section */}
        <div className='w-full lg:w-[55%] border h-screen lg:pl-8 '>
          <h1> 
I Write, Sometimes
</h1>
<p>When inspiration strikes, I pen down my thoughts on web development, self-improvement, and spirituality. These writings are a reflection of my journey—exploring ideas, sharing knowledge, and seeking growth. Dive in and discover something meaningful! </p>

<Link href="/blogs">
            <ArrowButton
              text='Read My Blogs'
              textColor='#FBFBFB'
              buttonOverlayColor='#5668DE'
              borderColor='#5668DE'
              size="lg"
              icon={<FaReadme color='white' />}
            />
</Link>
        </div>
      </div>
    </div>
  );
}
export default Beyond