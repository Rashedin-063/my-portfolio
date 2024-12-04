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
  const [hasRenderedStatic, setHasRenderedStatic] = useState(false);

  useEffect(() => {
    if (!hasRenderedStatic) {
      const timeout = setTimeout(() => {
        setHasRenderedStatic(true);
      }, 100); // Small delay to allow LCP to prioritize static content
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration, hasRenderedStatic]);

  return (
    <div className="relative overflow-hidden h-[2rem]">
      {!hasRenderedStatic ? (
        <span
          className={cn(
            "absolute left-0 w-full opacity-100",
            className
          )}
        >
          {words[0]}
        </span>
      ) : (
        words.map((word, index) => (
          <span
            key={index}
            className={cn(
              "absolute left-0 w-full transition-transform duration-500 ease-in-out",
              currentIndex === index
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0",
              className
            )}
          >
            {word}
          </span>
        ))
      )}
    </div>
  );
};

export default FlipWords;
