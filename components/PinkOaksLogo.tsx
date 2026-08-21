"use client";

import React from "react";

interface PinkOaksLogoProps {
  variant?: "default" | "holding-card";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PinkOaksLogo({
  variant = "default",
  size = "md",
  className = "",
}: PinkOaksLogoProps) {
  // Leaf mark sizing
  const leafSizes = {
    sm: "w-5 h-6",
    md: "w-7 h-8",
    lg: "w-9 h-10",
  };

  // Text sizes
  const textSizes = {
    sm: "text-2xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
  };

  const subtextSizes = {
    sm: "text-[9px]",
    md: "text-[10px] sm:text-xs",
    lg: "text-xs sm:text-sm",
  };

  const logoContent = (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Crowned Pink Oak Leaf Mark */}
      <svg
        className={`${leafSizes[size]} text-[#C74B66] mb-1.5 transition-transform duration-300`}
        viewBox="0 0 24 28"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 1C12 1 14.5 4.5 16.5 6C18.5 7.5 21 7 21.5 9.5C22 12 19.5 13.5 19.5 15.5C19.5 17.5 21 19.5 19.5 21.5C18 23.5 15.5 22.5 13.5 24.5C12.5 25.5 12 27 12 27C12 27 11.5 25.5 10.5 24.5C8.5 22.5 6 23.5 4.5 21.5C3 19.5 4.5 17.5 4.5 15.5C4.5 13.5 2 12 2.5 9.5C3 7 5.5 7.5 7.5 6C9.5 4.5 12 1 12 1Z" />
        <path d="M12 27V10M12 15L16 12M12 18L8 15M12 21L15 19" stroke="#FBF8F4" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Script Logotype "Pink Oaks" */}
      <span className={`font-script ${textSizes[size]} text-[#C74B66] leading-none px-2`}>
        Pink Oaks
      </span>

      {/* Sub-heading location label */}
      <span
        className={`font-sans ${subtextSizes[size]} font-medium uppercase tracking-[0.25em] text-[#B78D4A] mt-1`}
      >
        Bani Park · Jaipur
      </span>
    </div>
  );

  if (variant === "holding-card") {
    return (
      <div className="inline-block bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-xl p-4 sm:p-6 shadow-sm">
        {logoContent}
      </div>
    );
  }

  return logoContent;
}
