/* eslint-disable @next/next/no-img-element */
'use client';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from 'react-icons/si';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// import GridGlobe from "./GridGlobe";

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
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto text-white-pearl ',
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
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techStack = [
    {
      text: 'ReactJS',
      icon: (
        <FaReact
          className='text-blue-600 text-[17px] lg:text-[19px] font-semibold animate-spin '
          style={{ animationDuration: '3s' }}
        />
      ),
    },
    {
      text: 'Express',
      icon: (
        <SiExpress className='text-[18px] lg:text-[20px] text-black font-semibold skew-x-2 -skew-y-6' />
      ),
    },
    {
      text: 'TypeScript',
      icon: (
        <SiTypescript className='text-sky-700 text-[15px] lg:text-[18px]' />
      ),
    },
    {
      text: 'Next.js',
      icon: <SiNextdotjs className='text-black text-[18px] lg:text-[21px]' />,
    },
    {
      text: 'Node.js',
      icon: <FaNodeJs className='text-green-800 text-[18px] lg:text-[24px]' />,
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
            ? 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]'
            : id === 4
            ? 'lg:col-span-2 md:col-span-3 md:row-span-1'
            : id === 5
            ? 'md:col-span-3 md:row-span-2'
            : id === 6
            ? 'lg:col-span-2 md:col-span-3 md:row-span-1'
            : 'lg:col-span-2 md:col-span-3 md:row-span-2'
        } row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento  justify-between flex flex-col space-y-4 bg-custom-gradient hover:scale-[1.02] transiton duration-300`,
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
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 bottom-0 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <Image
              width='300'
              height='100'
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            ` relative md:h-full hover: flex flex-col px-5 p-5 lg:p-10 `
          )}
        >
          <div className='font-sans font-extralight  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          <div
            className={`${
              id === 1
                ? 'text-3xl lg:text-5xl text-yellow-sunshine'
                : 'text-lg lg:text-xl'
            } font-sans font-bold z-10`}
          >
            {title}
          </div>

          {/* second grid */}

          {/* {id === 2 && <GridGlobe />} */}
          {/* Tech stack list div */}

          {/* first grid  */}
          {id === 1 && (
            <div className='flex flex-col gap-1 lg:gap-5 w-fit absolute top-28 lg:top-40'>
              {/* //  tech stack list */}
              <div className='grid grid-cols-3 gap-x-3 gap-y-5 lg:gap-8'>
                {techStack.map((item, i) => (
                  <span
                    key={i}
                    className=' text-black font-semibold text-sm lg:text-base opacity-100 rounded-lg text-center bg-gray-200 flex px-4 lg:px-6 py-2 lg:py-3 justify-center items-center gap-2'
                  >
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 6th grid */}
          {id === 6 && (
            <div>
              <iframe
                src='https://drive.google.com/file/d/1g8dWYrawzY4NvAvzaOojSpkr6LPW6H0J/preview'
                width='450'
                height='240'
                allow='autoplay'
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
