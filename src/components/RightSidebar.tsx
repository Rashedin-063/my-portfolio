'use client';

import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { navItems } from '@/data/index';
import { Fade } from 'react-awesome-reveal';

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const initializeObserver = () => {
      const sections = navItems.map(({ to }) => document.querySelector(to));
      const observerOptions = {
        threshold: 0.5,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the currently visible section
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        if (section) observer?.observe(section as Element);
      });
    };

    // Retry initialization for dynamically loaded sections
    const retryObserverInitialization = () => {
      const intervalId = setInterval(() => {
        const allSectionsLoaded = navItems.every(
          ({ to }) => document.querySelector(to) !== null
        );
        if (allSectionsLoaded) {
          clearInterval(intervalId);
          initializeObserver();
        }
      }, 100); // Check every 100ms
    };

    // Start observer initialization
    retryObserverInitialization();

    return () => observer?.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className={`fixed mt-40 z-10 ${activeSection}`}>
      <div className='flex flex-col justify-center items-center gap-y-8 relative'>
        <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
          {navItems.map(({ to }) => (
            <a
              key={to}
              href={to}
              className={`hover:scale-110 transition ease-in-out duration-300 cursor-pointer border-2 border-transparent p-1 ${
                activeSection === to.replace('#', '')
                  ? 'text-xl text-yellow-sunshine animate-pulse'
                  : 'text-base text-green-lantern hover:text-[#73EC8B]'
              }`}
            >
              {activeSection === to.slice(1) ? <FaStar /> : <FaRegStar />}
            </a>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default RightSidebar;
