/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { projects } from '@/data/projectData';
import { FaLaptopCode, ExternalLink, ListCollapse } from '@/data/icons';
import SectionTitle from './ui/SectionTitle'
import ArrowButton from './ui/Btn';

export default function Projects(): ReactNode {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Handle active state changes
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    // Disable or enable scrolling based on the 'active' state
    if (active) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when active
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when inactive
    }

    window.addEventListener('keydown', onKeyDown);

    // Clean up event listeners
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active]);

  // Handle clicks outside the ref
  useOutsideClick(ref, () => {
    if (active) setActive(null);
  });

  return (
    <div id='projects' className='my-16 lg:my-24'>
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
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className='flex absolute top-4 lg:top-0 right-0 md:right-16 lg:right-[10%] xl:right-[14%] xxl:hidden items-center justify-center bg-white-pearl rounded-full h-8 w-8 lg:h-10 lg:w-10 hover:scale-110 transition-transform duration-100 hover:bg-yellow-dusk'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='w-full max-w-[550px] lg:max-w-[800px] xl:max-w-[1080px] h-full max-h-[92%] lg:max-h-full flex flex-col  sm:rounded-3xl overflow-hidden text-white p-4 mx-8 lg:mx-0 rounded-3xl bg-sky-900 border-indigo-600'
            >
              {/* image or video */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={400}
                  quality={90}
                  src={active.img}
                  alt={active.title}
                  className='w-full lg:w-3/4 mx-auto h-72 rounded-[5%] object-cover object-top py-4 px-8 hover:scale-105 transition-transform ease-in duration-300'
                />
              </motion.div>
              <div className='flex justify-between items-center px-[15px] gap-2 mt-4'>
                {/* technologies */}
                <div className='flex gap-2'>
                  <span className='text-xl text-yellow-sunshine mr-4'>
                    {' '}
                    Technologies:
                  </span>
                  {active.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-indigo-600 rounded-full lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center bg-deep-ocean'
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt='icon' className='p-2' />
                    </div>
                  ))}
                </div>
                {/* showing github and live link */}
                <div className='hidden lg:flex items-center justify-end gap-8 mr-6 mt-2'>
                  {active.github ? ( // if github link exists
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.github}
                      target='_blank'
                      className='  font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
                    >
                      {'Github ink'}
                    </motion.a>
                  ) : (
                    // otherwise
                    <div className='flex gap-6 items-center'>
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.clientSide}
                        target='_blank'
                        className='  font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
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
                        className='font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
                      >
                        {'Server Side'}
                      </motion.a>
                    </div>
                  )}

                  {/* live link */}
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.link}
                    target='_blank'
                    className=' font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
                  >
                    {'Live Link'}
                  </motion.a>
                </div>
              </div>
              <div>
                <div className='flex flex-col justify-start items-between p-4 text-base'>
                  <div className='flex justify-between items-center'>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='text-yellow-sunshine text-3xl font-semibold'
                    >
                      {active.title}
                    </motion.h3>

                    {/* showing github and live link form small and medium screen */}
                    <div className='flex lg:hidden items-center justify-end gap-8 mr-6 mt-2'>
                      {active.github ? ( // if github link exists
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.github}
                          target='_blank'
                          className='  font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
                        >
                          {'Github ink'}
                        </motion.a>
                      ) : (
                        // otherwise
                        <div className='flex gap-4 items-center'>
                          <motion.a
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href={active.clientSide}
                            target='_blank'
                            className='  font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
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
                            className='font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine'
                          >
                            {'Server Side'}
                          </motion.a>
                        </div>
                      )}

                      {/* live link */}
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.link}
                        target='_blank'
                        className=' font-josefinSans italic  text-sm text-yellow-sunshine hover:border-b border-yellow-sunshine hidden md:block'
                      >
                        {'Live Link'}
                      </motion.a>
                    </div>
                    {/* role and duration */}
                    <div className='hidden lg:flex items-center gap-8 mr-6'>
                      <p>
                        <span className='font-semibold text-yellow-sunshine mr-2'>Role:</span>{' '}
                        <span className='font-josefinSans'> {active.role}</span>
                      </p>
                      <p>
                        <span className='font-semibold text-yellow-sunshine mr-2'> Duration:</span>{' '}
                        <span className='font-josefinSans'>
                          {' '}
                          {active.duration}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=' h-48 lg:h-72 pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  -mt-4 font-josefinSans'
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* title */}
      <SectionTitle title=" Glimpse of My Coding Lab" icon={<FaLaptopCode/>}/>

      {/* project cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 md:mx-0'>
        {projects.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            className=''
          >
            <div
              className='flex flex-col items-center justify-center p-4 gap-12  border border-indigo-800 rounded-3xl bg-custom-gradient shadow-3xl hover:border-indigo-600 hover:shadow-glow hover:border-dotted transition duration-300 ease in
             '
            >
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className='relative '>
                  <Image 
                    src={card.img}
                    width="500"
                    height="200"
                    alt='cover'
                    className='z-10 h-60 p-4 rounded-3xl hover:scale-105 transform-transition duration-300'
                  />
                </div>
                <div className='flex items-center'>
                  {card.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-indigo-600 rounded-full lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center bg-deep-ocean mt-2'
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
                  className='font-semibold text-xl text-yellow-sunshine'
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.des}-${id}`}
                  className='text-[#fff] font-regular font-josefinSans -tracking-wider'
                >
                  {card.des}
                </motion.p>
              </div>
              <div className='flex justify-between -mt-4 mb-4 w-full '>
                  <span  onClick={() => setActive(card)}>
                  <ArrowButton
        text='View Details'
        textColor='#FBFBFB'
        buttonOverlayColor='#FFD93D'
        borderColor='#FFD93D'
        size='sm'
        icon={
         <ListCollapse color='white' />
        }
      />
            </span>
           <Link href={card.link} target='_blank'>
                <ArrowButton
          text='Live Link'
          textColor='#FBFBFB'
          buttonOverlayColor='#5668DE'
          borderColor='#5668DE'
          size="sm"
          icon={<ExternalLink color='white' />}
        />
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
