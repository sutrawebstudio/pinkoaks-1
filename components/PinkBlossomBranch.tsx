"use client";

import React from "react";

interface PinkBlossomBranchProps {
  variant?: "full-branch" | "corner-cluster" | "sprig-crop";
  className?: string;
  size?: number;
}

export default function PinkBlossomBranch({
  variant = "full-branch",
  className = "text-[#C94F6D]",
  size = 320,
}: PinkBlossomBranchProps) {
  const style = { width: size, height: size };

  if (variant === "corner-cluster") {
    return (
      <svg
        className={`shrink-0 ${className}`}
        style={style}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Curved Organic Wooden Stems */}
        <path
          d="M10 190 Q60 140 120 90 T190 10"
          stroke="#5C4033"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M60 140 Q90 110 110 60"
          stroke="#5C4033"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M120 90 Q140 130 180 140"
          stroke="#5C4033"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Major Blossom 1 */}
        <g transform="translate(120, 90)">
          <path
            d="M0 -16 C5 -30 20 -30 20 -15 C20 0 5 5 0 0 C-5 5 -20 0 -20 -15 C-20 -30 -5 -30 0 -16 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="0" cy="0" r="3.5" fill="#E8E2D5" />
        </g>

        {/* Major Blossom 2 */}
        <g transform="translate(60, 140)">
          <path
            d="M0 -14 C4 -26 18 -26 18 -13 C18 0 4 4 0 0 C-4 4 -18 0 -18 -13 C-18 -26 -4 -26 0 -14 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="0" cy="0" r="3" fill="#E8E2D5" />
        </g>

        {/* Major Blossom 3 */}
        <g transform="translate(110, 60)">
          <path
            d="M0 -12 C3 -22 15 -22 15 -11 C15 0 3 3 0 0 C-3 3 -15 0 -15 -11 C-15 -22 -3 -22 0 -12 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <circle cx="0" cy="0" r="2.5" fill="#E8E2D5" />
        </g>

        {/* Buds and Petals */}
        <circle cx="190" cy="10" r="4" fill="currentColor" opacity="0.9" />
        <circle cx="180" cy="140" r="4.5" fill="currentColor" opacity="0.8" />
        <circle cx="80" cy="100" r="3.5" fill="currentColor" opacity="0.7" />
        <circle cx="140" cy="110" r="3" fill="currentColor" opacity="0.75" />
      </svg>
    );
  }

  if (variant === "sprig-crop") {
    return (
      <svg
        className={`shrink-0 ${className}`}
        style={style}
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Soft Sprig Stem */}
        <path
          d="M15 135 C45 105 75 75 135 15"
          stroke="#5C4033"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M60 90 C80 70 90 40 105 25"
          stroke="#5C4033"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Sprig Blossom 1 */}
        <g transform="translate(75, 75)">
          <path
            d="M0 -12 C3 -22 15 -22 15 -11 C15 0 3 3 0 0 C-3 3 -15 0 -15 -11 C-15 -22 -3 -22 0 -12 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="0" cy="0" r="2.5" fill="#E8E2D5" />
        </g>

        {/* Sprig Blossom 2 */}
        <g transform="translate(105, 25)">
          <path
            d="M0 -10 C2.5 -18 12 -18 12 -9 C12 0 2.5 2.5 0 0 C-2.5 2.5 -12 0 -12 -9 C-12 -18 -2.5 -18 0 -10 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="0" cy="0" r="2" fill="#E8E2D5" />
        </g>

        {/* Scattered Petals */}
        <circle cx="135" cy="15" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="45" cy="115" r="2.5" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }

  // Full Sweeping Branch Variant (Default)
  return (
    <svg
      className={`shrink-0 ${className}`}
      style={style}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main Sweeping Wooden Branch */}
      <path
        d="M15 285 C75 225 135 165 255 45 M120 180 C165 135 210 120 270 90 M75 225 C105 165 150 120 180 75"
        stroke="#5C4033"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Offshoot Twigs */}
      <path
        d="M210 105 C240 75 255 45 285 30"
        stroke="#5C4033"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Blossom 1 */}
      <g transform="translate(120, 180)">
        <path
          d="M0 -18 C6 -32 24 -32 24 -16 C24 0 6 6 0 0 C-6 6 -24 0 -24 -16 C-24 -32 -6 -32 0 -18 Z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="0" cy="0" r="4" fill="#E8E2D5" />
      </g>

      {/* Blossom 2 */}
      <g transform="translate(210, 105)">
        <path
          d="M0 -15 C5 -28 20 -28 20 -14 C20 0 5 5 0 0 C-5 5 -20 0 -20 -14 C-20 -28 -5 -28 0 -15 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="0" cy="0" r="3.5" fill="#E8E2D5" />
      </g>

      {/* Blossom 3 */}
      <g transform="translate(180, 75)">
        <path
          d="M0 -14 C4 -24 16 -24 16 -12 C16 0 4 4 0 0 C-4 4 -16 0 -16 -12 C-16 -24 -4 -24 0 -14 Z"
          fill="currentColor"
          opacity="0.8"
        />
        <circle cx="0" cy="0" r="3" fill="#E8E2D5" />
      </g>

      {/* Blossom 4 */}
      <g transform="translate(75, 225)">
        <path
          d="M0 -12 C3 -20 14 -20 14 -10 C14 0 3 3 0 0 C-3 3 -14 0 -14 -10 C-14 -20 -3 -20 0 -12 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="0" cy="0" r="2.5" fill="#E8E2D5" />
      </g>

      {/* Terminal Buds */}
      <circle cx="285" cy="30" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="255" cy="45" r="4.5" fill="currentColor" opacity="0.85" />
      <circle cx="270" cy="90" r="4" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
