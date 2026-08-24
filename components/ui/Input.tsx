"use client";

import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export default function Input({
  label,
  error,
  required,
  className = "",
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#241C20]/90"
        >
          {label}
          {required && <span className="text-[#C15F70] ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        id={inputId}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full px-3.5 py-3 bg-[#FBF8F4]/80 border ${
          error ? "border-[#C15F70]" : "border-[#241C20]/20"
        } rounded-lg font-sans text-base sm:text-sm text-[#241C20] placeholder-[#241C20]/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] focus-visible:ring-offset-1 focus-visible:border-[#C15F70] transition-all duration-200 ${className}`}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="font-sans text-xs text-[#C15F70] mt-1 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

