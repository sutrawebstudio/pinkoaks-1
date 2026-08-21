"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import EditorialQuote from "@/components/EditorialQuote";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { ShieldCheck, Heart, Sun, Landmark } from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const philosophyPillars = [
    {
      title: "Generational Living",
      description: "Designed for multi-generational Indian families who value private floor space, grand balconies, and acoustic tranquility.",
      icon: Heart,
    },
    {
      title: "Complete Vastu Compliance",
      description: "Incorporating Manjusha Installation, Bar Chart Balancing, and Energy Flow Optimisation for lasting positivity.",
      icon: Landmark,
    },
    {
      title: "Jaipur Craft Heritage",
      description: "Integrating hand-carved stone jali screens, natural sandstone textures, and climate-controlled courtyards.",
      icon: Sun,
    },
    {
      title: "ISO-Certified Engineering",
      description: "Advanced anti-termite treatment, pressure pump plumbing, anti-skid tiles, and structural longevity standards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Banner Header */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-b border-[#C15F70]/20 relative overflow-hidden">
        <div className="absolute top-8 right-12 opacity-[0.06] pointer-events-none select-none">
          <PinkBlossomIcon size={320} className="text-[#C15F70]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C15F70]" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#B78D4A]">
                About Pink Oaks Properties
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight max-w-4xl">
              Crafting Enduring Sanctuaries in Jaipur Since 1990.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-6 max-w-2xl leading-relaxed">
              We approach residential development as a sacred craft — combining Jaipur&apos;s rich architectural heritage, Vastu energy principles, and modern luxury finishes for families who seek peace and quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand History & Heritage Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Our Architectural Heritage" icon="leaf" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
                Jaipur&apos;s First ISO-Certified Real Estate Pioneer.
              </h2>
              <p className="font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
                Over thirty-five years ago, Pink Oaks Properties established a new benchmark for residential construction in Rajasthan. We were the first real estate firm in Jaipur to earn ISO certification, proving our commitment to zero-compromise engineering and transparent delivery.
              </p>
              <p className="font-sans text-sm text-[#241C20]/75 font-light leading-relaxed">
                Pink Oaks Bani Park represents the culmination of this legacy — single-floor private residences that offer the seclusion of a private bungalow paired with the convenience of a modern luxury enclave.
              </p>
              <div className="pt-2 flex items-center space-x-6 text-xs font-sans font-medium uppercase tracking-widest text-[#C15F70]">
                <span>35+ Years Experience</span>
                <span>·</span>
                <span>ISO 9001 Certified</span>
              </div>
            </ScrollReveal>

            {/* Right Photo Feature: Jaipur Jali Craft */}
            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#C15F70]/30 aspect-[4/3] shadow-xs">
                <Image
                  src="/images/detail-jali.jpg"
                  alt="Carved Stone Jali Architecture in Jaipur"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#E8E1D3]/95 backdrop-blur-xs p-4 rounded-xl border border-[#C15F70]/25">
                  <span className="font-serif text-sm font-semibold text-[#241C20] block">
                    Hand-Carved Jaipur Jali Screens
                  </span>
                  <span className="font-sans text-xs text-[#241C20]/75 font-light block">
                    Provides natural climate control &amp; timeless Rajasthani aesthetics
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Philosophy Pillars Grid */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="02" title="Core Philosophy Pillars" icon="flower" />

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              Built for How Families Truly Live
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={idx * 0.15}>
                  <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                    <div className="p-3 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70]">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-[#241C20]">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Monograph Pull-Quote Band */}
      <EditorialQuote />

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Schedule a Personal Brand & Architecture Presentation" />
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenEnquire={handleOpenEnquire} />

      {/* Lead Capture Modal */}
      <EnquireModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </main>
  );
}
