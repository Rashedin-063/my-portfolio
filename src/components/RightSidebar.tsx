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

    return () => observer?.disconnect();
  }, []);

  return (
    <div className={`fixed mt-24 z-10 ${activeSection}`}>
      <div className='flex flex-col justify-center items-center relative'>
        <Fade cascade damping={0.3} triggerOnce={true}>
          {navItems.map(({ to }) => (
            <a
              key={to}
              href={to}
              className={`hover:scale-110 transition ease-in-out duration-300 cursor-pointer border-2 border-transparent p-1 text-lg ${
                activeSection === to.replace('#', '')
                  ? ' text-yellow-sunshine animate-pulse'
                  : 'text-indigo-600'
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
