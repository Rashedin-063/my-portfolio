'use client';

import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { navItems } from '@/data/index';
import { Fade } from 'react-awesome-reveal';

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
      threshold: 0.3, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver(
      debounce((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection((entry.target as HTMLElement).id);
          }
        });
      }, 100),
      observerOptions
    );

    sections.forEach((section) => {
      if (section) {
        console.log(`Observing: ${section.id}`); // Log the observed section ID
        observer.observe(section as Element);
      } else {
        console.warn('Section not found for: ', section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Function to handle click and manually set active section
  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId); // Manually set the active section
    // Scroll to the section smoothly
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log(activeSection);

  return (
    <div className={`fixed mt-36 ${activeSection}`}>
      <div className='flex flex-col justify-center items-center relative'>
        <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
          {navItems.map(({ to }) => (
            <a
              key={to}
              href={to}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor link behavior
                handleClick(to.replace('#', '')); // Handle the click event and set active section
              }}
              className={`text-sm lg:text-base hover:scale-110 transition ease-in-out duration-300 cursor-pointer border-2 border-transparent p-1
                ${
                  activeSection === to.replace('#', '')
                    ? 'text-yellow-sunshine animate-pulse'
                    : 'text-indigo-600 hover:text-indigo-300'
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
