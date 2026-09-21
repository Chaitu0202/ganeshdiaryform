import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import { DAIRY_PACKAGES, PRODUCTS } from '../data/dairyData';
import { DairyPackage } from '../types';

interface DairyPackagesProps {
  onOpenEnquiry: (productOrPackageName?: string, enquiryType?: string) => void;
}

export const DairyPackages: React.FC<DairyPackagesProps> = ({ onOpenEnquiry }) => {
  // Map product IDs to their authentic image asset
  const getProductImage = (id: string): string => {
    const found = PRODUCTS.find((p) => p.id === id);
    return found ? found.image : '/assets/cow-milk.webp';
  };

  return (
    <section id="packages" className="py-16 sm:py-24 bg-[#F5EFE5] border-b border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D3] text-[#22442E] text-xs font-bold tracking-wider uppercase border border-[#DAD0C0]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>NEW PROPOSAL FEATURE • WEBSITE CONCEPT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Dairy Packages
          </h2>

          <p className="text-base sm:text-lg text-[#4B5E50] leading-relaxed">
            <strong className="text-[#193222] font-semibold">Simple combinations for everyday dairy needs.</strong>{' '}
            Curated daily sets designed to make family nourishment effortless, combining fresh milk with handcrafted curd, paneer, and Desi ghee.
          </p>

          <p className="text-xs text-[#6B7E70] italic">
            *Note: Package combinations are proposal concepts designed for customer convenience. Quantities and schedules can be customized to your family’s routine.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {DAIRY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
                pkg.isPopular
                  ? 'border-[#2D6641] shadow-xl ring-2 ring-[#2D6641]/20 -translate-y-1'
                  : 'border-[#DFD7C9] shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular / Concept Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#204930] text-white text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#F2CE78]" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {!pkg.isPopular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE0] text-[#345941] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E2DACB]">
                    {pkg.badge}
                  </div>
                )}

                <div className={pkg.isPopular ? 'mt-2' : ''}>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#162C1E]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#486351] mt-1 mb-4">
                    Best for: {pkg.bestFor}
                  </p>
                  <p className="text-sm text-[#4E6153] leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                </div>

                {/* Included Product Thumbnails & List */}
                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#ECE5D8] mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5A7061] mb-3">
                    Included Farm Products:
                  </p>
                  
                  {/* Thumbnails Row */}
                  <div className="flex items-center gap-3 mb-4">
                    {pkg.productIds.map((pid, idx) => (
                      <div
                        key={idx}
                        className="w-14 h-14 rounded-xl bg-white border border-[#DDD5C6] p-1.5 flex items-center justify-center shadow-2xs group relative"
                        title={pkg.productNames[idx]}
                      >
                        <img
                          src={getProductImage(pid)}
                          alt={pkg.productNames[idx]}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* List items */}
                  <ul className="space-y-2">
                    {pkg.productNames.map((pname, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#2E4535]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B46] shrink-0" />
                        <span>{pname}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(pkg.name, 'Package Enquiry')}
                  className={`w-full py-3.5 px-4 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-[#224A32] text-white hover:bg-[#163622] shadow-md hover:shadow-lg'
                      : 'bg-[#EAE4D8] text-[#1E3A28] hover:bg-[#DDD6C8] border border-[#D3CCC0]'
                  }`}
                >
                  <span>Enquire About {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-[#758879] mt-2">
                  No advance payment required • Customize frequency
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
