"use client";

import React from "react";

interface PinkBlossomIconProps {
  className?: string;
  size?: number;
}

export default function PinkBlossomIcon({
  className = "w-4 h-4 text-[#C15F70]",
  size,
}: PinkBlossomIconProps) {
  const style = size ? { width: size, height: size } : {};

  return (
    <svg
      className={`shrink-0 ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Five-Petal Soft Blossom Motif */}
      <path d="M12 8.5C12.8 6.5 14.8 5 17 5.5C19 6 20 8 19 10C18.2 11.5 16.5 12 14.5 12C16.5 12 18.2 12.5 19 14C20 16 19 18 17 18.5C14.8 19 12.8 17.5 12 15.5C11.2 17.5 9.2 19 7 18.5C5 18 4 16 5 14C5.8 12.5 7.5 12 9.5 12C7.5 12 5.8 11.5 5 10C4 8 5 6 7 5.5C9.2 5 11.2 6.5 12 8.5Z" />
      <circle cx="12" cy="12" r="2.2" fill="#E8E1D3" />
    </svg>
  );
}
