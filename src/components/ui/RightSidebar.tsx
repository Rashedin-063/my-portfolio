"use client"

import React, { useEffect, useState } from 'react';
import '../../styles/rightSidebar.css';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { navItems } from '@/data/index';

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems.map(({ to }) => document.querySelector(to));
    const observerOptions = {
      threshold: 1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the currently visible section
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section as Element);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className={`fixed mt-48 ${activeSection}`}>
      <div className='flex flex-col justify-center items-center gap-y-8 relative'>
        {navItems.map(({ to }) => (
          <a
            key={to}
            href={to}
            className={` hover:scale-110 transition ease-in-out duration-300  cursor-pointer border-2 border-transparent p-1 ${
              activeSection === to.replace('#', '')
                ? 'text-lg lg:text-xl text-yellow-sunshine animate-pulse'
                : 'text-sm lg:text-base text-green-lantern hover:text-[#73EC8B]'
            }`}
          >
            {activeSection === to.slice(1) ? <FaStar /> : <FaRegStar />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
