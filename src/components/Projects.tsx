/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { projects } from '@/data';
import { FaLaptopCode } from 'react-icons/fa6';

export default function Projects() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div id="projects" className="my-16 lg:my-24">
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 h-full w-full z-10'
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0 mx-8 lg:mx-0 grid place-items-center z-[100]'>
            {/* close btn */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='w-full max-w-[550px] h-fit max-h-[90%] flex flex-col  sm:rounded-3xl overflow-hidden text-white-pearl p-4 mx-8 lg:mx-0 rounded-3xl bg-sky-900 border-indigo-600'
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.img}
                  alt={active.title}
                  className='w-[90%] mx-auto h-72 rounded-3xl object-cover object-top p-4'
                />
              </motion.div>
              <div>
                <div className='flex flex-col justify-start items-between p-4 '>
                  <div className="flex justify-between items-center mb-4">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='font-medium text-yellow-sunshine text-xl'
                    >
                      {active.title}
                    </motion.h3>
                    {/* showing github and live link */}
              <div>
                  {active.github ?
                 (<motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.github}
                    target='_blank'
                    className='px-3 py-1 text-xs rounded-3xl border-b hover:border-yellow-sunshine text-white-pearl hover:text-white  font-josefinSans italic font-bold'
                  >
                    {'Github ink'}
                  </motion.a>) :
                  (<div> 
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.clientSide}
                    target='_blank'
                    className='px-3 py-1 text-xs rounded-3xl border-b hover:border-yellow-sunshine text-white-pearl hover:text-white  font-josefinSans italic font-bold'
                  >
                    {'Client Side'}
                  </motion.a>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.serverSide}
                    target='_blank'
                    className='px-3 py-1 text-xs rounded-3xl border-b hover:border-yellow-sunshine text-white-pearl hover:text-white  font-josefinSans italic font-bold'
                  >
                    {'Server Side'}
                  </motion.a>
                  </div>)
                  }

                  
                 {/* live link */}
                   <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.link}
                    target='_blank'
                    className='px-3 py-1 text-xs rounded-3xl border-b hover:border-yellow-sunshine text-white-pearl hover:text-white  font-josefinSans italic font-bold'
                  >
                    {'Live Link'}
                  </motion.a>
              </div>

                  </div>
                 <div>
                    <motion.p
                      layoutId={`description-${active.des}-${id}`}
                      className='ttext-white text-base'
                    >
                      {active.des}
                    </motion.p>
                 </div>
                </div>
                <div>

                  
                </div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
                  >
                    {/* {typeof active.content === 'function'
                      ? active.content()
                      : active.content} */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

<h1 className="text-3xl lg:text-4xl text-yellow-sunshine text-center flex justify-center items-center gap-4 font-semibold">
   <FaLaptopCode/>     Glimpse of My Coding Lab <FaLaptopCode/>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mx-8 md:mx-0'>

        {projects.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            className=''
          >
            <div className='flex flex-col items-center justify-center p-4 gap-12 mt-10 group border border-indigo-800 rounded-3xl bg-custom-gradient hover:border-indigo-600 hover:border-2 hover:border-dotted
            hover:scale-[0.99] transition-transform duration-300 '>
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className='relative '>
                  <img
                    src={card.img}
                    alt='cover'
                    className='z-10h-40 p-4 rounded-3xl'
                  />
                </div>
                <div className='flex items-center'>
                  {card.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-indigo-600 rounded-full lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center bg-deep-ocean'
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt='icon' className='p-2' />
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className='flex justify-center items-start flex-col -mt-8 space-y-2'>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className='font-semibold text-lg text-white-pearl'
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.des}-${id}`}
                  className='text-[#fff] font-regular text-sm font-sans'
                >
                  {card.des}
                </motion.p>
              </div>
             <div className="flex justify-between -mt-8 mb-4 w-full ">
               <button
                onClick={() => setActive(card)}
                className=' px-4 py-[6px] text-xs rounded-full bg-blue-500 text-white hover:bg-blue-600 text-left'
              >
               View Details
              </button>
            <Link href={card.link}
            target="_blank"> 
               <button
            
                className=' px-4 py-[6px] text-xs rounded-full bg-blue-500 text-white hover:bg-blue-600 text-left'
              >
               Live Link
              </button>
            </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};
