"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className="relative overflow-hidden h-[2rem]"
      role="text"
      aria-live="polite"
    >
      {words.map((word, index) => (
        <span
          key={index}
          aria-hidden={currentIndex !== index}
          className={cn(
            "absolute left-0 w-full transition-transform duration-500 ease-in-out word",
            currentIndex === index
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0",
            className
          )}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default FlipWords;
