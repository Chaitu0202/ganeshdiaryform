import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/dairyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FBFBF8] border-b border-[#EAE4D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D5] text-[#244632] text-xs font-bold tracking-wider uppercase border border-[#DDD5C6]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Got Questions? We Have Answers
          </h2>

          <p className="text-base sm:text-lg text-[#4E6152] leading-relaxed">
            Everything you need to know about our cows, products, farm location in Vellanki, packaging, and inquiry process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#F9F6F0] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#2D6641]/50 shadow-xs' : 'border-[#E0D8CB]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/20 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans-strong text-base sm:text-lg font-bold text-[#162D1F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#E8E1D2] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#224A32] text-white' : 'text-[#485D4F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#495C4E] leading-relaxed border-t border-[#ECE5D8] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F4EFE6] border border-[#E3DDD1] text-center space-y-2">
          <p className="text-sm font-bold text-[#183122]">
            Have a question not listed here?
          </p>
          <p className="text-xs text-[#526557]">
            Please reach out directly by phone or WhatsApp. We’re always happy to speak with you!
          </p>
        </div>

      </div>
    </section>
  );
};
