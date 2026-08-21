"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "ivory" | "blush";
  className?: string;
}

export default function Card({
  children,
  variant = "ivory",
  className = "",
}: CardProps) {
  const bgStyle = variant === "blush" ? "bg-[#F8ECEF]" : "bg-[#FBF8F4]";
  return (
    <div
      className={`${bgStyle} border border-[#E88CA4]/25 rounded-xl p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
