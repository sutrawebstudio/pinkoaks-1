"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import EnquireForm from "@/components/EnquireForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Banner Section */}
      <section className="relative h-[35vh] sm:h-[45vh] min-h-[260px] flex items-center justify-center border-b border-[#C15F70]/20 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#241C20]/45" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#E8E1D3] drop-shadow-md">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="font-sans text-xs text-[#241C20]/60 font-light uppercase tracking-wider">
          Home &gt; Contact Us
        </p>
      </div>

      {/* Contact Content Section (Verbatim Live Site Copy) */}
      <section className="py-12 sm:py-20 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Get in Touch" icon="flower" className="justify-center mb-6" />

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#241C20] text-center mb-16">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
            
            {/* Contact Info Left (Verbatim Live Site Copy) */}
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-5 space-y-8">
              
              {/* Corporate Office */}
              <div className="bg-[#F5EEE6] p-6 rounded-2xl border border-[#C15F70]/25 space-y-2 shadow-xs">
                <div className="flex items-center space-x-3 text-[#C15F70] mb-2">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-lg font-semibold text-[#241C20]">Corporate Office</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed">
                  Pink Oaks Properties Limited<br />
                  Pinkoaks One, 5th Floor,<br />
                  Pirojshanagar, Eastern Express Highway,<br />
                  Vikhroli (East), Mumbai - 400 079
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-[#F5EEE6] p-6 rounded-2xl border border-[#C15F70]/25 space-y-2 shadow-xs">
                <div className="flex items-center space-x-3 text-[#C15F70] mb-2">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-lg font-semibold text-[#241C20]">Contact Details</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed space-y-1">
                  <span className="block"><strong>Phone:</strong> +91 97722 97772</span>
                  <span className="block"><strong>Email:</strong> info@pinkoaks.com</span>
                </p>
              </div>

              {/* Working Hours */}
              <div className="bg-[#F5EEE6] p-6 rounded-2xl border border-[#C15F70]/25 space-y-2 shadow-xs">
                <div className="flex items-center space-x-3 text-[#C15F70] mb-2">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-lg font-semibold text-[#241C20]">Working Hours</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed">
                  Monday - Friday: 9:30 AM - 6:30 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>

            </ScrollReveal>

            {/* Contact Form Right (Verbatim Live Site Copy) */}
            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-7 bg-[#F5EEE6] p-8 sm:p-10 rounded-2xl border border-[#C15F70]/25 shadow-xs">
              <h3 className="font-serif text-2xl font-semibold text-[#241C20] text-center mb-6">
                Send us a message
              </h3>
              <EnquireForm title="Send us a message" />
            </ScrollReveal>

          </div>

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
