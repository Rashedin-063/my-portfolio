"use client";
import React from "react";
import { ArrowDownNarrowWide, FolderDown } from 'lucide-react';

import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
  stats?: string;
  
}

export default function ArrowButton({
  text = "Open",
  textColor = "#fff",
  buttonOverlayColor = "#bf49ff",
  borderColor = "#c284f9",
  iconColor = "white",
  stats = "first",
  ...props
}: ArrowButtonProps) {
  return (
    <button
      style={{ borderColor: borderColor, fontWeight: '300' }}
      {...props}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-6 py-2 drop-shadow-2xl transition duration-300 ease-out w-48 font-bold text-sm'
      )}
    >
      <span
        style={{ background: buttonOverlayColor }}
        className={cn(
          'ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-yellow-600 text-white duration-700 group-hover:translate-x-0'
        )}
      >
        {stats === 'first' ? (
          <ArrowDownNarrowWide style={{ color: iconColor }} />
        ) : (
          <FolderDown style={{ color: iconColor }} />
        )}
      </span>
      <span
        style={{ color: textColor }}
        className={cn(
          'absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full'
        )}
      >
        {text}
      </span>
      <span className='invisible relative'>Button</span>
    </button>
  );
}
