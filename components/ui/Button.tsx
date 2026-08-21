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
    "px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#C74B66]";

  const variantStyles = {
    primary:
      "bg-[#C74B66] text-[#FBF8F4] hover:bg-[#8E2F47] shadow-xs active:bg-[#8E2F47]",
    secondary:
      "border border-[#C74B66] text-[#C74B66] hover:bg-[#F8ECEF] hover:text-[#8E2F47] active:bg-[#F8ECEF]",
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
