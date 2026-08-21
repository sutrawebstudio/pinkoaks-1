"use client";

import React from "react";

interface SectionDividerProps {
  number?: string;
  title?: string;
  className?: string;
}

export default function SectionDivider({
  number,
  title,
  className = "",
}: SectionDividerProps) {
  return (
    <div className={`flex items-center space-x-4 mb-8 ${className}`}>
      {(number || title) && (
        <span className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-[#B78D4A] uppercase shrink-0">
          {number && `${number} \u00A0/\u00A0 `}
          {title}
        </span>
      )}
      <div className="h-px bg-gradient-to-r from-[#B78D4A]/40 via-[#B78D4A]/25 to-transparent flex-1" />
    </div>
  );
}
