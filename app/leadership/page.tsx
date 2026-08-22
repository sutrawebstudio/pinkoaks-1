"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { UserCheck, Award, ShieldCheck, Building2 } from "lucide-react";

export default function LeadershipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const boardMembers = [
    {
      name: "Dinesh Sanghavi",
      title: "Chairperson Designate, Pink Oaks Industries Group",
      image: "/images/family-living.jpg",
      bio: "Over three decades of visionary leadership steering large-scale infrastructure and residential excellence across India.",
    },
    {
      name: "Sparsh Agarwal",
      title: "Managing Director & Chief Executive Officer",
      image: "/images/family-brand-statement.jpg",
      bio: "Leading execution, customer joy initiatives, and sustainable architecture across Pink Oaks Properties developments.",
    },
    {
      name: "Sutapa Banerjee",
      title: "Independent Director",
      image: "/images/family-park.jpg",
      bio: "Distinguished financial advisor and governance leader driving compliance, ethical development, and strategic growth.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Header */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-b border-[#C15F70]/20 relative overflow-hidden">
        <div className="absolute top-8 right-12 opacity-[0.06] pointer-events-none select-none">
          <PinkBlossomIcon size={320} className="text-[#C15F70]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#B78D4A] mb-3">
              Home &nbsp;&gt;&nbsp; Know Us &nbsp;&gt;&nbsp; Leadership
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20]">
              Leadership
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-4 max-w-2xl mx-auto leading-relaxed">
              Guided by principles of trust, transparency, and architectural innovation across generations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Board of Directors Tab & Grid */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Executive Governance" icon="flower" />

          {/* Tab Pill */}
          <div className="flex justify-center border-b border-[#C15F70]/20 mb-16">
            <div className="text-center py-4 px-8 border-b-2 border-[#C15F70] font-serif text-lg sm:text-xl font-semibold text-[#241C20] tracking-wide">
              Board of Directors
            </div>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 0.15}>
                <div className="bg-[#F5EEE6] rounded-2xl overflow-hidden border border-[#C15F70]/25 shadow-xs flex flex-col justify-between h-full group hover:border-[#C15F70] transition-colors">
                  
                  {/* Photo Box */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/60 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Leader Info */}
                  <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#241C20] group-hover:text-[#C15F70] transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B78D4A] mt-1">
                        {member.title}
                      </p>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed mt-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Governance Values Section */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <SectionDivider number="02" title="Leadership Commitment" icon="leaf" />

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] max-w-3xl mx-auto mb-12">
            “Creating enduring value through transparent governance and customer joy.”
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/20 space-y-3">
              <div className="p-3 bg-[#F5EEE6] rounded-xl w-fit text-[#C15F70] border border-[#C15F70]/20">
                <Building2 className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[#241C20]">Strategic Innovation</h4>
              <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                Pioneering low-density luxury residential projects tailored for real Indian families.
              </p>
            </div>

            <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/20 space-y-3">
              <div className="p-3 bg-[#F5EEE6] rounded-xl w-fit text-[#C15F70] border border-[#C15F70]/20">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[#241C20]">Uncompromising Ethics</h4>
              <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                Rigorous financial auditing, 100% RERA compliance, and transparent title deeds.
              </p>
            </div>

            <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/20 space-y-3">
              <div className="p-3 bg-[#F5EEE6] rounded-xl w-fit text-[#C15F70] border border-[#C15F70]/20">
                <UserCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[#241C20]">Customer First</h4>
              <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                Dedicated customer relations managers ensuring smooth possession and post-handover support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Direct Contact Form */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Connect Directly with Pink Oaks Leadership" />
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
