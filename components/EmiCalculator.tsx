"use client";

import React, { useState, useId } from "react";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

interface EmiCalculatorProps {
  onOpenEnquire?: (title?: string) => void;
}

export default function EmiCalculator({ onOpenEnquire }: EmiCalculatorProps) {
  // Input states with exact defaults specified in brief
  const [propertyValue, setPropertyValue] = useState<number>(30000000); // 3 Cr
  const [advancePercent, setAdvancePercent] = useState<number>(20);     // 20%
  const [durationYears, setDurationYears] = useState<number>(25);        // 25 yrs
  const [interestRate, setInterestRate] = useState<number>(7);           // 7%

  const propertyValueId = useId();
  const advancePercentId = useId();
  const durationYearsId = useId();
  const interestRateId = useId();

  // Calculations
  const advanceAmount = (propertyValue * advancePercent) / 100;
  const principal = propertyValue - advanceAmount;

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = durationYears * 12;

  const monthlyEmi =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : principal / totalMonths;

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - principal);

  // Currency Formatter (Indian format)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  return (
    <section id="emi-calculator" className="py-20 lg:py-32 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number */}
        <SectionDivider number="08" title="Financial Planning & EMI" icon="flower" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Home Loan &amp; EMI Estimator
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Calculate your estimated monthly installment with live parameters.
          </p>
        </ScrollReveal>

        {/* Calculator Grid */}
        <ScrollReveal variant="scale-up" duration={0.8}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-2xl p-6 sm:p-10 shadow-xs">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Property Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={propertyValueId} className="font-medium text-[#241C20]">Property Value</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70]">
                    {formatCurrency(propertyValue)}
                  </span>
                </div>
                <input
                  id={propertyValueId}
                  type="range"
                  min={10000000}
                  max={60000000}
                  step={1000000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full accent-[#C15F70] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/50 font-sans">
                  <span>₹1.00 Cr</span>
                  <span>₹6.00 Cr</span>
                </div>
              </div>

              {/* Advance Payment % */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={advancePercentId} className="font-medium text-[#241C20]">Advance Down Payment</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70]">
                    {advancePercent}% ({formatCurrency(advanceAmount)})
                  </span>
                </div>
                <input
                  id={advancePercentId}
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={advancePercent}
                  onChange={(e) => setAdvancePercent(Number(e.target.value))}
                  className="w-full accent-[#C15F70] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/50 font-sans">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={durationYearsId} className="font-medium text-[#241C20]">Loan Tenure</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70]">
                    {durationYears} Years
                  </span>
                </div>
                <input
                  id={durationYearsId}
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={durationYears}
                  onChange={(e) => setDurationYears(Number(e.target.value))}
                  className="w-full accent-[#C15F70] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/50 font-sans">
                  <span>5 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={interestRateId} className="font-medium text-[#241C20]">Annual Interest Rate</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70]">
                    {interestRate}%
                  </span>
                </div>
                <input
                  id={interestRateId}
                  type="range"
                  min={5}
                  max={15}
                  step={0.25}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#C15F70] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/50 font-sans">
                  <span>5.0%</span>
                  <span>15.0%</span>
                </div>
              </div>

            </div>

            {/* Outputs Column */}
            <div className="lg:col-span-5 bg-[#F5EEE6] border border-[#C15F70]/20 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="border-b border-[#C15F70]/20 pb-4">
                  <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#B78D4A]">
                    Estimated Monthly EMI
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#C15F70] mt-1">
                    {formatCurrency(monthlyEmi)}
                  </div>
                  <span className="font-sans text-[11px] text-[#241C20]/60 font-light">
                    per month for {durationYears} years
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#241C20]/75 font-light">Principal Loan Amount</span>
                    <span className="font-semibold text-[#241C20]">{formatCurrency(principal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#241C20]/75 font-light">Total Interest Payable</span>
                    <span className="font-semibold text-[#241C20]">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#C15F70]/20 pt-2 font-medium">
                    <span className="text-[#241C20]">Total Amount Payable</span>
                    <span className="font-serif text-base font-semibold text-[#C15F70]">{formatCurrency(totalPayment)}</span>
                  </div>
                </div>
              </div>

              {onOpenEnquire && (
                <button
                  onClick={() => onOpenEnquire("EMI Calculator Enquiry")}
                  className="w-full py-3.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
                >
                  Discuss Banking &amp; Home Loan
                </button>
              )}

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
