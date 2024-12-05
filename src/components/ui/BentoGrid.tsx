/* eslint-disable @next/next/no-img-element */
'use client';
import dynamic from 'next/dynamic';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from 'react-icons/si';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SectionTitle from './SectionTitle'

const GridGlobe = dynamic(() => import('./GridGlobe'));

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-6 mx-auto text-white-pearl',
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  id,
  title,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techStack = [
    {
      text: 'JavaScript',
      icon: (
        <SiJavascript className='text-yellow-sunshine text-[17px] lg:text-[19px] font-semibold' />
      ),
    },
    {
      text: 'ReactJS',
      icon: (
        <FaReact
          className='text-blue-600 text-lg lg:text-xl font-semibold animate-spin '
          style={{ animationDuration: '3s' }}
        />
      ),
    },
    {
      text: 'Next.js',
      icon: <SiNextdotjs className='text-black text-[18px] lg:text-[21px]' />,
    },
    {
      text: 'Tailwind CSS',
      icon: (
        <SiTailwindcss className='text-blue-500 text-[19px] lg:text-[22px]' />
      ),
    },
    {
      text: 'Redux Toolkit',
      icon: <SiRedux className='text-purple-600 text-base lg:text-lg' />,
    },

    {
      text: 'TypeScript',
      icon: (
        <SiTypescript className='text-sky-700 text-[15px] lg:text-[18px]' />
      ),
    },

    {
      text: 'Node.js',
      icon: <FaNodeJs className='text-green-800 text-[18px] lg:text-[24px]' />,
    },
    {
      text: 'Express',
      icon: (
        <SiExpress className='text-[18px] lg:text-[20px] text-black font-semibold skew-x-2 -skew-y-6' />
      ),
    },
    {
      text: 'MongoDB',
      icon: (
        <SiMongodb
          className='text-green-900 animate-bounce text-[18px] lg:text-[24px]'
          style={{ animationDuration: '2s' }}
        />
      ),
    },
  ];

  return (
    <div
      className={cn(
        `${
          id === 1
            ? 'lg:col-span-3 md:col-span-6 md:row-span-4 '
            : id === 4
            ? 'lg:col-span-2 md:col-span-3 md:row-span-1'
            : id === 5
            ? 'md:col-span-3 md:row-span-2'
            : id === 6
            ? 'lg:col-span-2 md:col-span-3 md:row-span-1'
            : 'lg:col-span-2 md:col-span-3 md:row-span-2'
        } row-span-1 relative overflow-hidden rounded-3xl justify-between flex flex-col space-y-4 border-indigo-800 hover:border-indigo-600 hover:scale-[1.02] transition duration-300 ease-in-out min-h-36 shadow-glow2 hover:shadow-glow3 border bg-custom-gradient-2`,
        className
      )}
    >
      {/* add img divs */}
      <div>
        <div className='w-full h-full absolute'>
          {img && (
            <Image
              width='600'
              height='200'
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 bottom-0 ${
            id === 5 && 'w-full opacity-80'
          } ${id === 2 ? 'min-h-48' : ''}`}
        >
          {spareImg && (
            <Image
              width='300'
              height='100'
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full opacity-75'
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            `relative md:h-full hover: flex flex-col ${
              id === 5 ? '' : 'px-5 py-3 lg:px-10 lg:py-6'
            }`
          )}
        >
          {/* title */}
          <div
            className={`${
              id === 1
                ? 'text-3xl lg:text-5xl text-yellow-sunshine'
                : 'text-lg lg:text-xl'
            } font-bold z-10`}
          >
     {id === 1 ? (<SectionTitle title="My Tech Stack" imgLink="https://i.ibb.co.com/6n8dsB0/star.gif"/>) : `${title}`}
          </div>

          {/* second grid */}

          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}

          {/* first grid  */}
          {id === 1 && (
            <div className='flex flex-col gap-1 lg:gap-5 w-fit mt-4'>
              {/* //  tech stack list */}
              <div className='grid grid-cols-3 gap-x-3 gap-y-5 lg:gap-8'>
                {techStack.map((item, i) => (
                   <span
                    key={i}
                    className='text-black font-semibold text-sm lg:text-base opacity-100 rounded-lg text-center bg-[#fff8dc] flex px-4 lg:px-6 py-2 lg:py-3 justify-center items-center gap-2'
                  >
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* 5th grid */}
          {id === 5 && (
            <div>
              <iframe
                src='https://www.youtube.com/embed/3NB7zLx4OzI'
                allow='autoplay'
                allowFullScreen
                loading='lazy'
                className='w-full h-[240px] lg:h-[340px]'
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
