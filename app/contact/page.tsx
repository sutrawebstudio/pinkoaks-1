"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import Neighbourhood from "@/components/Neighbourhood";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const officeCards = [
    {
      title: "Corporate Office",
      address: "Pink Oaks Properties Limited, Pinkoaks One, 5th Floor, Pirojshanagar, Eastern Express Highway, Vikhroli (East), Mumbai - 400 079",
      icon: Building2,
    },
    {
      title: "Contact Details",
      address: "Phone: +91 97722 97772\nEmail: info@pinkoaks.com",
      icon: Phone,
    },
    {
      title: "Working Hours",
      address: "Monday - Friday: 9:30 AM - 6:30 PM\nSaturday - Sunday: Closed",
      icon: Clock,
    },
    {
      title: "Bani Park Site Office",
      address: "D-169, Bhrigu Marg, Bani Park, Jaipur, Rajasthan 302016\nOpen 7 Days: 9:00 AM - 7:00 PM IST",
      icon: MapPin,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Page Header */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-b border-[#C15F70]/20 relative overflow-hidden">
        <div className="absolute top-8 right-12 opacity-[0.06] pointer-events-none select-none">
          <PinkBlossomIcon size={320} className="text-[#C15F70]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#B78D4A] block mb-3">
              Home &gt; Contact Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight max-w-4xl">
              Get in Touch with Pink Oaks.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-6 max-w-2xl leading-relaxed">
              Reach out to our corporate headquarters or schedule a private site visit at our Bani Park sales office.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Corporate & Office Details Grid */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Office Locations & Contacts" icon="leaf" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <ScrollReveal key={card.title} delay={idx * 0.15}>
                  <div className="bg-[#F5EEE6] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                    <div className="p-3 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70]">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <div className="space-y-2 pt-2">
                      <h3 className="font-serif text-lg font-semibold text-[#241C20]">
                        {card.title}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed whitespace-pre-line">
                        {card.address}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Location Map Section */}
      <Neighbourhood />

      {/* Direct Send Us A Message Contact Form */}
      <section id="send-message" className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Send Us A Message" />
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
