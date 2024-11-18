/* eslint-disable @next/next/no-img-element */
"use client"
import { FaReact, FaNodeJs, FaDownload } from "react-icons/fa";
import { SiExpress,  SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";

// Also install this npm i --save-dev @types/react-lottie

import { cn } from "@/lib/utils";


// import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto text-white-pearl",
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
  // list items --> need to separate into data
  const leftLists = [
    { text: 'ReactJS', icon: <FaReact className="text-blue-600 text-[17px] lg:text-[19px] font-semibold animate-spin " style={{ animationDuration: '3s' }}/> },
    { text: 'Express', icon: <SiExpress className="text-[18px] lg:text-[20px] text-black font-semibold skew-x-2 -skew-y-6" /> },
    { text: 'TypeScript', icon: <SiTypescript className="text-sky-700 text-[15px] lg:text-[18px]" /> },
    { text: 'Next.js', icon: <SiNextdotjs className="text-black text-[18px] lg:text-[21px]" /> },
    { text: 'Node.js', icon: <FaNodeJs className="text-green-800 text-[18px] lg:text-[24px]" /> },
    { text: 'MongoDB', icon: <SiMongodb className="text-green-900 animate-bounce text-[18px] lg:text-[24px]" style={{ animationDuration: '2s' }} /> },
  ];


  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-custom-gradient',
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
        
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
         
        )}

        <div
          className={cn(
            titleClassName,
            `${
              id === 1 ? 'min-h-60' : id === 2 ? 'min-h-40 lg:min-h-60' : 'min-h-40'
            } group-hover/bento:scale-95 transition-all ease-out hover:duration-700 relative md:h-full hover:border-none flex flex-col px-5 p-5 lg:p-10 border-2 border-gray-800`
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className='font-sans font-extralight  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`${
              id === 1
                ? 'text-3xl lg:text-5xl text-yellow-sunshine'
                : 'text-lg lg:text-3xl'
            } font-sans max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {/* {id === 2 && <GridGlobe />} */}

          {/* Tech stack list div */}
       
          
           {id === 1 && (
            <div className='flex flex-col gap-1 lg:gap-5 w-fit absolute top-28 lg:top-40'>
  {/* //  tech stack list */}
              <div className='grid grid-cols-3 gap-x-3 gap-y-5 lg:gap-8'>
                {leftLists.map((item, i) => (
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

          {id === 6 && (
            <div className='mt-5 relative'>
              <div
                className={`absolute -bottom-5 right-0 `}
              >   
              </div>
              <a href='/resume.pdf' download='Resume_Rashedin_Islam.pdf'>
                {' '}
                <MagicButton
                  title="Magic"
                  icon={<FaDownload />}
                  position='left'
                  otherClasses='!bg-[#161A31]'
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
