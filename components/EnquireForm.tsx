"use client";

import { useState, useId } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { CheckCircle2 } from "lucide-react";

interface EnquireFormProps {
  title?: string;
  onSuccess?: () => void;
}

export default function EnquireForm({
  title = "Get in Touch",
  onSuccess,
}: EnquireFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bhk, setBhk] = useState("3 BHK");
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const bhkSelectId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please accept the authorization consent to proceed.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);
    
    // Simulate API lead capture
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div id="contact" className="bg-[#FBF8F4] border border-[#C15F70]/25 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
      
      <div className="border-b border-[#C15F70]/20 pb-4">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A]">
          Direct Connection
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20] mt-1">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light mt-1">
          Speak with our representative directly at{" "}
          <a href="tel:+919772297772" className="font-medium text-[#C15F70] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] rounded">
            +91 9772297772
          </a>{" "}
          or submit your details below.
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#F5EEE6] border border-[#C15F70]/30 p-6 sm:p-8 rounded-xl text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-[#C15F70] mx-auto stroke-[1.5]" />
          <h4 className="font-serif text-xl font-semibold text-[#241C20]">Thank You</h4>
          <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light">
            Your enquiry has been received. Our sales team from Pink Oaks, Bani Park will reach out to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rajesh Sharma"
            />

            <Input
              label="Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rajesh@example.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 w-full">
              <label htmlFor="phone-input" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#241C20]/90">
                Phone Number (+91) <span className="text-[#C15F70] ml-1" aria-hidden="true">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3.5 bg-[#F5EEE6] border border-r-0 border-[#241C20]/20 rounded-l-lg font-sans text-xs text-[#241C20] font-semibold select-none">
                  +91
                </span>
                <input
                  id="phone-input"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9772297772"
                  className="w-full px-3.5 py-3 bg-[#FBF8F4]/80 border border-[#241C20]/20 rounded-r-lg font-sans text-base sm:text-sm text-[#241C20] placeholder-[#241C20]/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] focus-visible:ring-offset-1 transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-1.5 w-full">
              <label htmlFor={bhkSelectId} className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#241C20]/90">
                Preferred Configuration
              </label>
              <select
                id={bhkSelectId}
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-3 bg-[#FBF8F4]/80 border border-[#241C20]/20 rounded-lg font-sans text-base sm:text-sm text-[#241C20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] focus-visible:ring-offset-1 transition-all duration-200 cursor-pointer"
              >
                <option value="3 BHK">3 BHK Residence</option>
                <option value="3 BHK + Utility">3 BHK + Utility</option>
                <option value="4 BHK">4 BHK Luxury Residence</option>
              </select>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 min-h-[18px] min-w-[18px] accent-[#C15F70] rounded cursor-pointer"
            />
            <label htmlFor="consent" className="font-sans text-[11px] text-[#241C20]/80 font-light leading-snug cursor-pointer select-none">
              I authorize Pink Oaks and its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.
            </label>
          </div>

          {errorMsg && (
            <p className="font-sans text-xs text-[#C15F70] font-medium" role="alert">
              {errorMsg}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            className="w-full !mt-6"
          >
            Submit Enquiry
          </Button>
        </form>
      )}

    </div>
  );
}

