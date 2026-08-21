"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import EnquireForm from "@/components/EnquireForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LeadershipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const directors = [
    {
      name: "Dinesh Sanghavi",
      role: "Chairperson Designate, Pinkoaks Industries Group",
      image: "/images/family-living.jpg",
    },
    {
      name: "Sparsh Agarwal",
      role: "Managing Director & Chief Executive Officer",
      image: "/images/family-park.jpg",
    },
    {
      name: "Sutapa Banerjee",
      role: "Independent Director",
      image: "/images/detail-jali.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="font-sans text-xs text-[#241C20]/60 font-light uppercase tracking-wider">
          Home &gt; Know Us &gt; Leadership
        </p>
      </div>

      {/* Leadership Main Section (Verbatim Live Site Copy) */}
      <section id="leadership" className="py-12 sm:py-20 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionDivider number="01" title="Leadership" icon="leaf" className="justify-center" />

          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#241C20] mt-4 mb-8">
            Leadership
          </h1>

          {/* Board of Directors Tab */}
          <div className="flex justify-center border-b border-[#C15F70]/30 mb-12">
            <div className="pb-3 px-8 border-b-2 border-[#C15F70] font-sans text-sm sm:text-base font-medium text-[#C15F70] uppercase tracking-wider">
              Board of Directors
            </div>
          </div>

          {/* Directors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director, idx) => (
              <ScrollReveal key={director.name} delay={idx * 0.15}>
                <div className="bg-[#F5EEE6] rounded-2xl overflow-hidden border border-[#C15F70]/25 shadow-xs text-left group">
                  <div className="relative aspect-[3/4] bg-[#E8E1D3] overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between border-t border-[#C15F70]/20">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#241C20]">
                        {director.name}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/70 font-light mt-1">
                        {director.role}
                      </p>
                    </div>
                    <span className="text-xl text-[#C15F70] font-serif font-semibold">›</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Enquire Form */}
      <section className="py-16 sm:py-24 bg-[#F5EEE6] border-t border-[#C15F70]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Connect with Pinkoaks Leadership" />
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
