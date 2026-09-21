import React from 'react';
import { Heart, BookOpen, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/dairyData';

export const FarmStory: React.FC = () => {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-[#FBFBF8] border-b border-[#EAE4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D5] text-[#244632] text-xs font-bold tracking-wider uppercase border border-[#DDD5C6]">
              <BookOpen className="w-3.5 h-3.5 text-[#C98B27]" />
              <span>THE GANESH DAIRY FARM STORY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
              From Our Farm <br />
              <span className="italic font-medium text-[#295439]">to Your Family</span>
            </h2>

            {/* Quote Callout */}
            <div className="relative pl-6 border-l-2 border-[#2C623E] py-1 my-4">
              <Quote className="w-6 h-6 text-[#2C623E]/30 absolute -top-3 -left-3" />
              <p className="font-display text-lg sm:text-xl font-medium text-[#1A2E20] italic">
                "My name is Ganesh. I am from Visakhapatnam, and I want to share my family’s journey and promise with you."
              </p>
            </div>

            {/* Editorial Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#475A4D] leading-relaxed">
              <p>
                My father started our family cow farm in 2018 in Vellanki. He lovingly purchased a few cows and provided fresh milk to local families every morning. After two years, when the coronavirus pandemic struck, maintaining feed supplies and operations became exceedingly difficult. With a heavy heart, my father had to sell the cows.
              </p>

              <p>
                In <strong>2022</strong>, I made the resolute decision to revive our dairy farm from the ground up. Today, I am proud to lead Ganesh Dairy Farm, personally overseeing our cows and crafting pure milk, curd, paneer, and authentic Desi ghee for households across Visakhapatnam.
              </p>

              <p>
                My fundamental purpose is simple: <em>protect our community’s health</em>. Many commercial suppliers mix milk powders and synthetic chemical preservatives just to artificially extend shelf life. Regular consumption of such milk can cause lasting health issues, especially for growing children. That is why Ganesh Dairy Farm stands strictly for 100% pure, unadulterated nature.
              </p>
            </div>

            {/* Packaging & Future Vision */}
            <div className="p-5 rounded-2xl bg-[#F6F2EA] border border-[#E2DDD2] space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#264D34] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#264D34]" />
                Eco-Conscious Packaging Commitment
              </h3>
              <p className="text-xs text-[#526557] leading-relaxed">
                Conventional single-use plastic pouches can shed micro-particles into warm milk. To prevent this, we bottle our farm milk in recyclable, food-grade bottles. We are actively preparing to introduce reusable glass bottles as we expand our local delivery routes.
              </p>
            </div>

            {/* Founder sign-off badge */}
            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E5EFE8] border border-[#CADBD0] flex items-center justify-center text-[#1E452B] font-display font-bold text-lg">
                G
              </div>
              <div>
                <p className="text-sm font-bold text-[#182C1F]">Ganesh</p>
                <p className="text-xs text-[#607264]">Founder & Farm Steward • Ganesh Dairy Farm, Vellanki</p>
              </div>
            </div>

          </div>

          {/* Right Column: Imagery & Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#DCD5C7] shadow-xl bg-white">
              <img
                src="/assets/hero-bg.webp"
                alt="Ganesh Dairy Farm landscape"
                className="w-full aspect-4/3 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/about-farm.webp';
                }}
              />
              <div className="p-6 bg-[#FAF7F2] border-t border-[#EAE3D6] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6E60]">Farm Heritage</span>
                  <span className="text-xs font-bold text-[#275338] bg-[#E5EFE8] px-2.5 py-0.5 rounded-full">Vellanki, Anandapuram</span>
                </div>

                {/* Timeline Points */}
                <div className="space-y-3 pt-2 border-t border-[#ECE5D8] text-xs">
                  <div className="flex gap-3">
                    <span className="font-mono font-bold text-[#1D3A27] shrink-0">2018</span>
                    <p className="text-[#516456]">Started by father with a few cows supplying fresh milk to neighbors.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono font-bold text-[#1D3A27] shrink-0">2020</span>
                    <p className="text-[#516456]">Temporary pause caused by severe pandemic feed and transport challenges.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono font-bold text-[#1D3A27] shrink-0">2022</span>
                    <p className="text-[#516456]">Revived by Ganesh with an expanded range: Milk, A2 Milk, Curd, Paneer & Ghee.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono font-bold text-[#235836] shrink-0">Today</span>
                    <p className="text-[#203D2A] font-semibold">Serving families in Visakhapatnam with unadulterated farm-to-home purity.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
