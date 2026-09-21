import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/dairyData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FBFBF8] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EAE5DA]">
      {/* Subtle organic ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8F0EA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F4EADA] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Messaging and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE5DA] text-[#244632] text-xs font-bold tracking-wider uppercase border border-[#DDD7C9]">
              <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
              <span>GANESH DAIRY FARM • VELLANKI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16271D] leading-[1.14]">
              Fresh From Our Farm. <br />
              <span className="italic font-medium text-[#295439]">Made for Your Family.</span>
            </h1>

            {/* Supporting Content - Preserved from source website */}
            <p className="text-lg sm:text-xl text-[#46574B] leading-relaxed max-w-2xl">
              <strong className="text-[#1A2E20] font-semibold">Pure Dairy Products For a Healthy Life.</strong> Taste the real farm freshness every morning — sourced directly from healthy cows in Vellanki, Visakhapatnam, with zero chemicals, zero milk powder, and uncompromised care.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#224A32] hover:bg-[#173723] rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#1F3E29] bg-[#EBE7DD] hover:bg-[#DDD8CB] rounded-full border border-[#D5CEC0] transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-[#295439]" />
                <span>Talk to Us</span>
              </button>
            </div>

            {/* Hero Trust Line (Exact Requirement #9) */}
            <div className="pt-2 border-t border-[#EAE4D8] w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm font-semibold text-[#304838]">
                <span className="text-xs uppercase tracking-wider text-[#687C6F] font-bold">Our Fresh Dairy:</span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8CB] text-xs font-medium text-[#203628]">Milk</span>
                  <span className="text-[#B5C2B9]">•</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8CB] text-xs font-medium text-[#203628]">A2 Desi Cow Milk</span>
                  <span className="text-[#B5C2B9]">•</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8CB] text-xs font-medium text-[#203628]">Thick Curd</span>
                  <span className="text-[#B5C2B9]">•</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8CB] text-xs font-medium text-[#203628]">Fresh Paneer</span>
                  <span className="text-[#B5C2B9]">•</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8CB] text-xs font-medium text-[#203628]">Desi Cow Ghee</span>
                </div>
              </div>
            </div>

            {/* Quick Farm Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-[#4F6254]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6B46] shrink-0" />
                <span>5:00 AM Morning Care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E6B46] shrink-0" />
                <span>Zero Powders or Chemicals</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E6B46] shrink-0" />
                <span>Recyclable Packaging</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Authentic Farm Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Farm Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#DCD6C7] bg-white shadow-xl">
                <div className="aspect-4/3 sm:aspect-5/4 relative overflow-hidden bg-[#ECE8DD]">
                  <img
                    src="/assets/about-farm.webp"
                    alt="Ganesh Dairy Farm cows and farm environment in Vellanki"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/hero-bg.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#1F3D2A] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#2E6B46]"></span>
                    <span>Direct From Vellanki Farm</span>
                  </div>

                  {/* Bottom Overlay Story Note */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-display text-lg font-bold">Cared With Love Since Dawn</p>
                    <p className="text-xs text-white/90">Healthy cows nurtured with fresh grass, clean water, and pure dedication.</p>
                  </div>
                </div>

                {/* Card Base Strip */}
                <div className="p-4 bg-[#F7F5EE] border-t border-[#E8E2D4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#DDD7CA] p-1 flex items-center justify-center shrink-0">
                      <img src="/assets/logo.webp" alt="GDF" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1E3526]">Ganesh Dairy Farm</p>
                      <p className="text-[11px] text-[#637567]">Inquiries: {BUSINESS_INFO.hours.inquiry}</p>
                    </div>
                  </div>

                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs font-bold text-[#234F34] hover:text-[#143220] underline underline-offset-2"
                  >
                    Call Farm
                  </a>
                </div>
              </div>

              {/* Floating Accent Card: Morning Freshness */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-lg border border-[#DDD7C9] hidden sm:flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1EB] text-[#245336] flex items-center justify-center font-bold text-sm shrink-0">
                  5 AM
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#1E3426]">Every Morning</p>
                  <p className="text-[#596C5F] leading-tight">Cows fed 1 hour prior to fresh morning milking</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
