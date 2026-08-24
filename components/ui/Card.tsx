"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "ivory" | "blush" | "glass" | "elevated";
  hoverEffect?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = "ivory",
  hoverEffect = true,
  className = "",
}: CardProps) {
  const variantStyles = {
    ivory: "bg-[#FBF8F4] border border-[#C15F70]/20 text-[#241C20]",
    blush: "bg-[#F5EEE6] border border-[#C15F70]/25 text-[#241C20]",
    glass: "bg-[#FBF8F4]/80 backdrop-blur-md border border-[#C15F70]/20 text-[#241C20]",
    elevated: "bg-[#E8E1D3] border border-[#C15F70]/30 shadow-md text-[#241C20]",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:border-[#C15F70]/60 hover:shadow-lg hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

