"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  className?: string;
  size?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
}

export default function ArrowButton({
  text = "Open",
  textColor = "#fff",
  buttonOverlayColor = "#bf49ff",
  borderColor = "#c284f9",
  size = 'lg',
  icon,
  handleClick,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      style={{ borderColor: borderColor, fontWeight: '300' }}
      {...props}
      className={cn(
        `group relative inline-flex items-center justify-center overflow-hidden rounded-full border drop-shadow-2xl transition duration-300 ease-out text-xs ${size === 'lg' ? ' px-8 py-2 w-[210px]' : ' px-5 py-[6px] w-32 font-josefinSans font-light'}`
      )}
      onClick={handleClick}
    >
      <span
        style={{ background: buttonOverlayColor, }}
        className={cn(
          'ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-yellow-600 text-white duration-700 group-hover:translate-x-0'
        )}
      >
        {
         icon
        }
      </span>
      <span
        style={{ color: textColor }}
        className={cn(
          `absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full ${size === 'lg' ? 'text-sm' : 'text-xs'}`
        )}
      >
        {text}
      </span>
      <span className='invisible relative'>Button</span>
    </button>
  );
}
