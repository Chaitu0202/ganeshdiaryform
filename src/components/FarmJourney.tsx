import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FARM_JOURNEY_STEPS } from '../data/dairyData';

export const FarmJourney: React.FC = () => {
  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D3] text-[#22442E] text-xs font-bold tracking-wider uppercase border border-[#DAD0C0]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>FARM TO TABLE TRANSPARENCY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Where Freshness Begins
          </h2>

          <p className="text-base sm:text-lg text-[#4E6152] leading-relaxed">
            Every morning at our Vellanki farm follows an authentic, natural cadence focused on cow comfort, hygienic milking, and traditional preparation.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FARM_JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border border-[#DFD7C9] shadow-xs hover:shadow-md hover:border-[#2C5E3B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-bold text-[#2A5E3E] bg-[#EAF2ED] px-3 py-1 rounded-xl">
                    {step.step}
                  </span>
                  {idx < FARM_JOURNEY_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#A8BDB0] hidden lg:block" />
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-[#162D1F] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-sm text-[#4F6254] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE2] text-[11px] font-semibold text-[#667C6E] uppercase tracking-wider">
                Vellanki Farm Routine
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
