"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function Input({ label, className = "", id, ...props }: InputProps) {
  return (
    <div className="space-y-1 w-full">
      {label && (
        <label htmlFor={id} className="block font-sans text-xs font-medium text-[#241C20]">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-1 py-2.5 bg-transparent border-b border-[#E88CA4]/40 font-sans text-xs text-[#241C20] placeholder-[#241C20]/40 focus:outline-none focus:border-[#C74B66] transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}
