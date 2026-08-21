"use client";

import Image from "next/image";

interface CherryBlossomBranchProps {
  className?: string;
  size?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  rotate?: number;
  flipX?: boolean;
  flipY?: boolean;
  opacity?: number; // 0.70 to 0.90
  variant?: "pink" | "white";
}

export default function CherryBlossomBranch({
  className = "",
  size = 320,
  position = "top-right",
  rotate = 0,
  flipX = false,
  flipY = false,
  opacity = 0.85,
  variant = "pink",
}: CherryBlossomBranchProps) {
  // Compute position classes
  const positionClasses = {
    "top-left": "-top-6 -left-6 lg:-top-10 lg:-left-10",
    "top-right": "-top-6 -right-6 lg:-top-10 lg:-right-10",
    "bottom-left": "-bottom-6 -left-6 lg:-bottom-10 lg:-left-10",
    "bottom-right": "-bottom-6 -right-6 lg:-bottom-10 lg:-right-10",
  }[position];

  // Transform styles for rotation and flips
  const transformStyle = {
    transform: `rotate(${rotate}deg) scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-1 overflow-hidden transition-all duration-300 ${positionClasses} ${className}`}
      style={{
        opacity: opacity,
        width: `${size}px`,
        height: `${Math.round(size * 0.85)}px`,
      }}
    >
      <div className="relative w-full h-full" style={transformStyle}>
        <Image
          src="/images/cherry-blossom-branch.png"
          alt="Cherry Blossom Branch Illustration"
          fill
          className={`object-contain ${variant === "white" ? "brightness-125 contrast-125" : ""}`}
          priority={false}
        />
      </div>
    </div>
  );
}
