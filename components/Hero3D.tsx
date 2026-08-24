"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Share2,
  Calendar,
  MessageSquare,
  Phone,
  Calculator,
  ChevronDown,
  MapPin,
  Heart,
} from "lucide-react";

// Procedural 3D Architectural Massing Model of Pink Oaks 11-Story Tower
function Tower3DModel() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.12 + state.pointer.x * 0.15;
    groupRef.current.rotation.x = state.pointer.y * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -2.2, 0]}>
      {/* Podium & Base */}
      <RoundedBox args={[3.2, 0.6, 2.2]} radius={0.08} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#C6798C" roughness={0.3} metalness={0.2} />
      </RoundedBox>

      {/* 11 Residential Floors Stacked with Brass & Soft Rose Accents */}
      {Array.from({ length: 11 }).map((_, i) => {
        const yPos = 0.9 + i * 0.38;
        const isPenthouse = i === 10;
        return (
          <group key={i} position={[0, yPos, 0]}>
            <RoundedBox
              args={[isPenthouse ? 3.0 : 2.8, 0.32, 1.8]}
              radius={0.04}
            >
              <meshPhysicalMaterial
                color={isPenthouse ? "#F7DCE1" : "#FFFBFA"}
                roughness={0.2}
                clearcoat={0.4}
              />
            </RoundedBox>

            {/* Balcony Borders */}
            <mesh position={[0, 0, 0.95]}>
              <boxGeometry args={[2.7, 0.12, 0.05]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, -0.95]}>
              <boxGeometry args={[2.7, 0.12, 0.05]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Warm Lit Interior Windows */}
            <mesh position={[0, 0, 0.91]}>
              <planeGeometry args={[2.4, 0.2]} />
              <meshBasicMaterial color="#F0B8C4" transparent opacity={0.6} />
            </mesh>
          </group>
        );
      })}

      {/* Crown Pavilion */}
      <group position={[0, 5.2, 0]}>
        <RoundedBox args={[2.6, 0.2, 1.6]} radius={0.06}>
          <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[2.2, 0.4, 1.2]} />
          <meshStandardMaterial color="#C6798C" wireframe />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero3D({
  onOpenEnquire,
}: {
  onOpenEnquire: (purpose?: string) => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Pink Oaks | Luxury 3 & 4 BHK Residences in Bani Park, Jaipur",
          text: "Discover Pink Oaks — Luxury Residences in Bani Park starting INR 1.98 Cr. onwards. Possession June 2026.",
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDEDF0]">
      {/* 3D Canvas OR Mobile Image Fallback */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <Suspense
            fallback={
              <div className="w-full h-full bg-[#FDEDF0] flex items-center justify-center text-[#C6798C]">
                Loading 3D Massing...
              </div>
            }
          >
            <Canvas
              camera={{ position: [0, 0, 7.5], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.9} />
              <directionalLight
                position={[8, 12, 10]}
                intensity={1.5}
                color="#FFFBFA"
              />
              <pointLight
                position={[-6, 4, -4]}
                intensity={2.0}
                color="#F7DCE1"
              />
              <pointLight
                position={[6, -2, 6]}
                intensity={1.8}
                color="#D4AF37"
              />

              <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
                <Tower3DModel />
              </Float>
            </Canvas>
          </Suspense>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src="/images/hero.jpg"
              alt="Pink Oaks Facade Bani Park"
              fill
              priority
              className="object-cover opacity-70 filter brightness-95"
            />
          </div>
        )}

        {/* Soft Blush-to-Ivory Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDEDF0] via-[#FDEDF0]/60 to-[#FFFBFA]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FDEDF0]/40 to-[#FDEDF0] pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-[104px] lg:pt-[132px] pb-20 text-center flex flex-col items-center justify-center">
        {/* Warm Micro-copy Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F0B8C4] bg-[#FFFBFA]/90 backdrop-blur-md mb-6 shadow-md"
        >
          <Heart className="w-3.5 h-3.5 text-[#C6798C]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#2A2426] font-semibold">
            Bani Park · Jaipur
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gradient-rose mb-4 drop-shadow-sm"
        >
          Pink Oaks
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
          className="font-serif text-lg sm:text-2xl italic text-[#C6798C] mb-6 font-normal"
        >
          "A home that feels like it was always waiting for you."
        </motion.p>

        {/* Subheading Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-base sm:text-xl lg:text-2xl font-light text-[#2A2426] tracking-wide leading-relaxed font-sans border-y border-[#F0B8C4]/60 py-4 px-6 bg-[#FFFBFA]/80 backdrop-blur-md rounded-3xl shadow-lg">
            <span className="font-semibold text-[#C6798C]">
              INR 1.98 Cr. onwards
            </span>{" "}
            <span className="mx-2 text-[#F0B8C4]">|</span> Possession June
            2026 <span className="mx-2 text-[#F0B8C4]">|</span> 3, 3+ Utility &
            4 BHK
          </p>
        </motion.div>

        {/* Primary Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-4xl"
        >
          <button
            onClick={() => onOpenEnquire("Schedule A Visit")}
            className="group relative inline-flex items-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FFFBFA] bg-[#C6798C] hover:bg-[#B56679] rounded-full transition-all duration-300 shadow-xl glow-dusty-rose active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#FFFBFA]" />
            Schedule A Visit
          </button>

          <a
            href="https://wa.me/919772297772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#2A2426] bg-[#FFFBFA]/90 border border-[#F0B8C4] hover:border-[#C6798C] hover:bg-[#F7DCE1] rounded-full transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#C6798C]" />
            WhatsApp
          </a>

          <a
            href="tel:+919772297772"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#2A2426] bg-[#FFFBFA]/90 border border-[#F0B8C4] hover:border-[#C6798C] hover:bg-[#F7DCE1] rounded-full transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#C6798C]" />
            Call Us
          </a>

          <a
            href="#emi-calculator"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#2A2426] bg-[#FFFBFA]/90 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#FFFBFA] rounded-full transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            EMI Calculator
          </a>

          <button
            onClick={handleShare}
            className="p-3.5 rounded-full bg-[#FFFBFA]/90 border border-[#F0B8C4] text-[#C6798C] hover:bg-[#F7DCE1] transition-all duration-300 backdrop-blur-md shadow-sm"
            title="Share Project"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#overview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#2A2426]/70 hover:text-[#C6798C] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Explore 3D
        </span>
        <ChevronDown className="w-4 h-4 text-[#C6798C]" />
      </motion.a>
    </section>
  );
}
