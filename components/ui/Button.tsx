"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center min-h-[44px] px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8E1D3] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] select-none touch-manipulation cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#C15F70] text-[#E8E1D3] hover:bg-[#A34A5A] shadow-xs hover:shadow-md border border-transparent",
    secondary:
      "bg-[#F5EEE6] border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#E8E1D3] hover:border-[#C15F70] shadow-2xs",
    outline:
      "border border-[#241C20]/25 text-[#241C20] hover:bg-[#241C20]/5 hover:border-[#241C20]",
    ghost:
      "text-[#241C20] hover:bg-[#C15F70]/10 hover:text-[#C15F70]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="w-4 h-4 mr-2 animate-spin text-current shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
    </button>
  );
}

