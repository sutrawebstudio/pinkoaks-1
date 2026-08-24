"use client";

import React, { useState, useId } from "react";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { Calculator, ArrowRight } from "lucide-react";

interface EmiCalculatorProps {
  onOpenEnquire?: (title?: string) => void;
}

export default function EmiCalculator({ onOpenEnquire }: EmiCalculatorProps) {
  const [propertyValue, setPropertyValue] = useState<number>(30000000); // 3 Cr
  const [advancePercent, setAdvancePercent] = useState<number>(20);     // 20%
  const [durationYears, setDurationYears] = useState<number>(25);        // 25 yrs
  const [interestRate, setInterestRate] = useState<number>(7);           // 7%

  const propertyValueId = useId();
  const advancePercentId = useId();
  const durationYearsId = useId();
  const interestRateId = useId();

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
        
        <SectionDivider number="08" title="Financial Planning & EMI" icon="flower" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20]">
            Home Loan &amp; EMI Estimator
          </h2>
          <p className="font-sans text-base text-[#241C20]/80 font-light mt-2 max-w-xl">
            Calculate your estimated monthly installment with live parameters.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" duration={0.35}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#E8E1D3] border border-[#C15F70]/30 rounded-xl p-6 sm:p-10 shadow-xs">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Property Value */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={propertyValueId} className="font-semibold text-[#241C20]">Property Value</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70] bg-[#F5EEE6] px-3 py-1 rounded-md border border-[#C15F70]/25">
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
                  className="w-full accent-[#C15F70] cursor-pointer h-2 bg-[#F5EEE6] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70]"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/70 font-sans font-medium">
                  <span>₹1.00 Cr</span>
                  <span>₹6.00 Cr</span>
                </div>
              </div>

              {/* Advance Payment % */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={advancePercentId} className="font-semibold text-[#241C20]">Advance Down Payment</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70] bg-[#F5EEE6] px-3 py-1 rounded-md border border-[#C15F70]/25">
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
                  className="w-full accent-[#C15F70] cursor-pointer h-2 bg-[#F5EEE6] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70]"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/70 font-sans font-medium">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={durationYearsId} className="font-semibold text-[#241C20]">Loan Tenure</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70] bg-[#F5EEE6] px-3 py-1 rounded-md border border-[#C15F70]/25">
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
                  className="w-full accent-[#C15F70] cursor-pointer h-2 bg-[#F5EEE6] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70]"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/70 font-sans font-medium">
                  <span>5 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center font-sans text-xs sm:text-sm">
                  <label htmlFor={interestRateId} className="font-semibold text-[#241C20]">Annual Interest Rate</label>
                  <span className="font-serif text-base font-semibold text-[#C15F70] bg-[#F5EEE6] px-3 py-1 rounded-md border border-[#C15F70]/25">
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
                  className="w-full accent-[#C15F70] cursor-pointer h-2 bg-[#F5EEE6] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70]"
                />
                <div className="flex justify-between text-[10px] text-[#241C20]/70 font-sans font-medium">
                  <span>5.0%</span>
                  <span>15.0%</span>
                </div>
              </div>

            </div>

            {/* Outputs Column */}
            <div className="lg:col-span-5 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
              
              <div className="space-y-6">
                <div className="border-b border-[#C15F70]/20 pb-5">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A] flex items-center space-x-1.5">
                    <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Estimated Monthly EMI</span>
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#C15F70] mt-2">
                    {formatCurrency(monthlyEmi)}
                  </div>
                  <span className="font-sans text-[11px] text-[#241C20]/80 font-light block mt-1">
                    per month for {durationYears} years tenure
                  </span>
                </div>

                <div className="space-y-3.5 font-sans text-xs sm:text-sm">
                  <div className="flex justify-between items-center bg-[#E8E1D3]/50 p-2.5 rounded-lg border border-[#C15F70]/15">
                    <span className="text-[#241C20]/80 font-light">Principal Loan Amount</span>
                    <span className="font-semibold text-[#241C20]">{formatCurrency(principal)}</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#E8E1D3]/50 p-2.5 rounded-lg border border-[#C15F70]/15">
                    <span className="text-[#241C20]/80 font-light">Total Interest Payable</span>
                    <span className="font-semibold text-[#241C20]">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#C15F70]/20 pt-3 font-medium">
                    <span className="text-[#241C20]">Total Amount Payable</span>
                    <span className="font-serif text-base font-semibold text-[#C15F70]">{formatCurrency(totalPayment)}</span>
                  </div>
                </div>
              </div>

              {onOpenEnquire && (
                <Button
                  variant="primary"
                  onClick={() => onOpenEnquire("EMI Calculator Enquiry")}
                  className="w-full"
                >
                  <span>Discuss Banking &amp; Home Loan</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 inline-block" aria-hidden="true" />
                </Button>
              )}

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

