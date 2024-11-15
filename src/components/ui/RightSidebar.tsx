'use client';

import React, { useEffect, useState } from 'react';
import '../../styles/rightSidebar.css';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { navItems } from '@/data/index';
import { Fade } from 'react-awesome-reveal';

// Debounce function to limit updates to the state
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems.map(({ to }) => document.querySelector(to));
    const observerOptions = {
      threshold: 1, // Trigger when 100% of the section is in view
    };

 const observer = new IntersectionObserver(
  debounce((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection((entry.target as HTMLElement).id); // Ensure the target is cast to HTMLElement
      }
    });
  }, 200), // Delay state update by 200ms
  observerOptions
);

    sections.forEach((section) => {
      if (section) observer.observe(section as Element);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []); // Empty dependency array to set up observer once

  return (
    <div className={`fixed mt-36 ${activeSection}`}>
      <div className="flex flex-col justify-center items-center relative">
          <Fade cascade damping={0.3} triggerOnce={true}>
      
         {navItems.map(({ to }) => (
          <a
            key={to}
            href={to}
            className={`text-sm lg:text-base hover:scale-110 transition ease-in-out duration-300 cursor-pointer border-2 border-transparent p-1
              ${
                activeSection === to.replace('#', '')
                  ? ' text-yellow-sunshine animate-pulse'
                  : ' text-green-lantern hover:text-[#73EC8B]'
              }
            `}
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
