import React from 'react';
import { Leaf, ShieldCheck, Milk, HeartHandshake } from 'lucide-react';
import { TRUST_PILLARS } from '../data/dairyData';

export const TrustStrip: React.FC = () => {
  const icons = [
    <Leaf className="w-5 h-5 text-[#2B6642]" />,
    <ShieldCheck className="w-5 h-5 text-[#2B6642]" />,
    <Milk className="w-5 h-5 text-[#2B6642]" />,
    <HeartHandshake className="w-5 h-5 text-[#2B6642]" />,
  ];

  return (
    <section className="bg-[#F4EFE6] py-10 sm:py-12 border-b border-[#E7E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-[#E2DBD0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>
                <h3 className="font-sans-strong text-base font-bold text-[#192B20]">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#667C6D] uppercase tracking-wider mt-0.5 mb-2">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-[#4D6052] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
