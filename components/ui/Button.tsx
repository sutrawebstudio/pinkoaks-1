"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#C15F70]";

  const variantStyles = {
    primary:
      "bg-[#C15F70] text-[#E8E1D3] hover:bg-[#A34A5A] shadow-xs active:bg-[#A34A5A]",
    secondary:
      "border border-[#C15F70] text-[#C15F70] hover:bg-[#F5EEE6] hover:text-[#A34A5A] active:bg-[#F5EEE6]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
