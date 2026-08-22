"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles, Download, Layers, Box, Image as ImageIcon } from "lucide-react";

// Interactive Extruded Isometric 3D Floor Plan Mesh Component
function FloorPlan3DMesh({ planType }: { planType: string }) {
  return (
    <group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
      {/* Base Floor Slab */}
      <RoundedBox args={[4, 0.2, 3]} radius={0.05} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#FAF2EE" roughness={0.3} />
      </RoundedBox>

      {/* Exterior Walls */}
      <mesh position={[0, 0.4, 1.45]}>
        <boxGeometry args={[4, 0.8, 0.1]} />
        <meshStandardMaterial color="#8C2F4A" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.4, -1.45]}>
        <boxGeometry args={[4, 0.8, 0.1]} />
        <meshStandardMaterial color="#8C2F4A" roughness={0.4} />
      </mesh>
      <mesh position={[1.95, 0.4, 0]}>
        <boxGeometry args={[0.1, 0.8, 3]} />
        <meshStandardMaterial color="#8C2F4A" roughness={0.4} />
      </mesh>
      <mesh position={[-1.95, 0.4, 0]}>
        <boxGeometry args={[0.1, 0.8, 3]} />
        <meshStandardMaterial color="#8C2F4A" roughness={0.4} />
      </mesh>

      {/* Interior Dividers & Furniture Blocks */}
      {planType === "typical" && (
        <>
          {/* Master Bedroom Bed */}
          <RoundedBox args={[1.0, 0.3, 1.2]} position={[-1.1, 0.2, -0.6]} radius={0.02}>
            <meshStandardMaterial color="#E8A0B0" />
          </RoundedBox>
          {/* Living Sofa */}
          <RoundedBox args={[1.4, 0.25, 0.6]} position={[0.5, 0.2, 0.4]} radius={0.02}>
            <meshStandardMaterial color="#D4AF37" />
          </RoundedBox>
        </>
      )}

      {planType === "stilt" && (
        <>
          {/* EV Parking Bays */}
          <mesh position={[-0.8, 0.02, 0]}>
            <planeGeometry args={[1.2, 2.2]} />
            <meshBasicMaterial color="#E8A0B0" transparent opacity={0.4} />
          </mesh>
          {/* Grand Lobby Area */}
          <RoundedBox args={[1.5, 0.3, 1.2]} position={[0.8, 0.2, 0]} radius={0.02}>
            <meshStandardMaterial color="#D4AF37" />
          </RoundedBox>
        </>
      )}

      {planType === "basement" && (
        <>
          {/* Storage Units */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <RoundedBox
              key={idx}
              args={[0.6, 0.6, 0.6]}
              position={[-1.2 + idx * 0.8, 0.3, -0.6]}
              radius={0.02}
            >
              <meshStandardMaterial color="#8C2F4A" />
            </RoundedBox>
          ))}
        </>
      )}
    </group>
  );
}

interface FloorPlans3DProps {
  onOpenEnquire: (planName?: string) => void;
}

export default function FloorPlans3D({ onOpenEnquire }: FloorPlans3DProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState<"2d" | "3d">("2d");

  const plans = [
    {
      id: "typical",
      title: "Typical Floor Plan",
      quote:
        "Experience expansive living with our typical floor plan, designed to maximize space and natural light. Every corner is crafted with precision to offer unmatched comfort and elegance for your family.",
      tags: ["Spacious Bedrooms", "Modern Kitchen Setup", "Premium Flooring"],
      image: "/images/plan-typical.jpg",
      highlight: "Floors 1 – 11",
    },
    {
      id: "stilt",
      title: "Stilt Floor Plan",
      quote:
        "The stilt floor is dedicated to convenient and secure parking while maintaining a grand entrance lobby. It perfectly balances utility and aesthetics to welcome you home.",
      tags: [
        "Ample Parking Space",
        "Grand Entrance Lobby",
        "EV Charging Provisions",
      ],
      image: "/images/plan-stilt.jpg",
      highlight: "Ground Level & Arrival",
    },
    {
      id: "basement",
      title: "Basement Floor Plan",
      quote:
        "Our meticulously designed basement floor provides state-of-the-art utility spaces and additional parking facilities, ensuring every practical need is fully accommodated.",
      tags: [
        "Secure Storage Areas",
        "Advanced Maintenance Systems",
        "Extra Guest Parking",
      ],
      image: "/images/plan-basement.jpg",
      highlight: "Lower Sub-Structure",
    },
  ];

  return (
    <section id="plans" className="py-24 bg-[#111011] text-[#FFF8F5] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border-b border-[#E8A0B0] pb-1 text-xs uppercase tracking-[0.3em] text-[#E8A0B0] font-semibold mb-3"
          >
            <Layers className="w-3.5 h-3.5" />
            Architectural Engineering
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8F5]"
          >
            Floor Plans & 3D Viewer
          </motion.h2>
        </div>

        {/* Plan Switcher & 2D/3D Mode Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 border-b border-[#E8A0B0]/20 pb-6">
          <div className="flex flex-wrap gap-2">
            {plans.map((plan, idx) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-[#8C2F4A] text-[#FFF8F5] shadow-lg shadow-[#8C2F4A]/30 scale-105"
                    : "bg-[#1A1819] text-[#FFF8F5]/70 border border-[#E8A0B0]/20 hover:border-[#E8A0B0]/60"
                }`}
              >
                {plan.title}
              </button>
            ))}
          </div>

          {/* 2D vs 3D Toggle */}
          <div className="flex items-center bg-[#1A1819] p-1 rounded-full border border-[#E8A0B0]/30">
            <button
              onClick={() => setViewMode("2d")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase transition-all ${
                viewMode === "2d"
                  ? "bg-[#D4AF37] text-[#111011]"
                  : "text-[#FFF8F5]/60 hover:text-[#FFF8F5]"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              2D Flat
            </button>
            <button
              onClick={() => setViewMode("3d")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase transition-all ${
                viewMode === "3d"
                  ? "bg-[#8C2F4A] text-[#FFF8F5] glow-plum"
                  : "text-[#FFF8F5]/60 hover:text-[#FFF8F5]"
              }`}
            >
              <Box className="w-3.5 h-3.5 text-[#E8A0B0]" />
              3D Extruded
            </button>
          </div>
        </div>

        {/* Active Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${plans[activeTab].id}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A1819]/90 rounded-3xl p-6 sm:p-10 border border-[#E8A0B0]/30 shadow-2xl"
          >
            {/* Visual Screen: 2D Render OR 3D R3F Canvas */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden border border-[#E8A0B0]/20 bg-[#111011]">
              {viewMode === "2d" ? (
                <Image
                  src={plans[activeTab].image}
                  alt={plans[activeTab].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              ) : (
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-[#E8A0B0]">
                      Loading 3D Floor Layout...
                    </div>
                  }
                >
                  <Canvas camera={{ position: [0, 5, 6], fov: 45 }}>
                    <ambientLight intensity={0.9} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFF8F5" />
                    <pointLight position={[-5, -5, -5]} intensity={1.0} color="#E8A0B0" />
                    <FloorPlan3DMesh planType={plans[activeTab].id} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} />
                  </Canvas>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#111011]/80 backdrop-blur-md border border-[#E8A0B0]/30 text-[10px] text-[#E8A0B0] font-mono">
                    Drag to rotate 3D view
                  </div>
                </Suspense>
              )}

              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#111011]/80 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-mono text-[#D4AF37]">
                {plans[activeTab].highlight}
              </div>
            </div>

            {/* Plan Info & Attributes */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E8A0B0] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {plans[activeTab].title}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF8F5] mb-4">
                  Spatial Perfection
                </h3>
                <p className="text-sm sm:text-base text-[#FFF8F5]/80 leading-relaxed font-light italic border-l-2 border-[#8C2F4A] pl-4 py-1 mb-6">
                  "{plans[activeTab].quote}"
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs uppercase tracking-widest text-[#FFF8F5]/50 font-semibold">
                    Key Features
                  </div>
                  {plans[activeTab].tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-3 text-sm text-[#FFF8F5]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-[#E8A0B0]/20">
                <button
                  onClick={() =>
                    onOpenEnquire(`Floor Plan: ${plans[activeTab].title}`)
                  }
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#8C2F4A] hover:bg-[#B23A5C] text-[#FFF8F5] font-semibold text-xs uppercase tracking-widest transition-all shadow-lg text-center"
                >
                  Request Blueprint
                </button>
                <a
                  href="#download"
                  className="py-3.5 px-6 rounded-full border border-[#D4AF37]/40 text-[#FFF8F5] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#D4AF37]" />
                  Brochure
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
