import React from 'react';
import { Clock, ShieldCheck, Recycle, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-5 h-5 text-[#2A6540]" />,
      title: 'Healthy Cows & 5:00 AM Morning Care',
      description: 'Our morning routine starts at 5:00 AM every day. Cows are fed fresh green grass and clean drinking water an hour prior to milking, keeping them calm, healthy, and stress-free.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2A6540]" />,
      title: 'Zero Chemicals, Zero Milk Powder',
      description: 'Many suppliers mix powders or chemicals to artificially extend shelf life. At Ganesh Dairy Farm, we never compromise: every drop is 100% natural, unadulterated, and pure.',
    },
    {
      icon: <Recycle className="w-5 h-5 text-[#2A6540]" />,
      title: 'Recyclable Food-Grade Packaging',
      description: 'Single-use plastic pouches shed micro-particles into warm milk. We bottle our dairy in recyclable food-grade bottles and are actively working towards glass bottle distribution.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#2A6540]" />,
      title: 'Family Roots & Community Dedication',
      description: 'Re-established in 2022 by Ganesh to revive his father’s 2018 farm legacy in Vellanki. We operate with personal pride and genuine accountability to every family we serve.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Farm Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#DDD6C8] shadow-xl bg-white">
              <div className="aspect-4/5 sm:aspect-square lg:aspect-4/5 relative overflow-hidden">
                <img
                  src="/assets/about-farm.webp"
                  alt="Healthy cows grazing at Ganesh Dairy Farm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                
                {/* Floating Farm Sticker */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#E0D8CB] shadow-md text-[#192E21]">
                  <p className="font-display text-base font-bold">The Ganesh Dairy Farm Promise</p>
                  <p className="text-xs text-[#516456] mt-0.5">
                    "Happy cows produce better nutrition. We raise them with clean water, nutritious feed, and gentle respect every single day."
                  </p>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-4 -right-4 bg-[#234E35] text-white px-4 py-2 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-1.5 hidden sm:flex">
              <Sparkles className="w-3.5 h-3.5 text-[#E6B754]" />
              <span>Vellanki • Visakhapatnam</span>
            </div>
          </div>

          {/* Right Column: Benefit Blocks */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D5] text-[#244632] text-xs font-bold tracking-wider uppercase border border-[#DDD5C6]">
                <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
                <span>WHY GANESH DAIRY FARM</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
                More Than Dairy. <br />
                <span className="italic font-medium text-[#295439]">It's a Promise of Care.</span>
              </h2>

              <p className="text-base text-[#4C5E50] leading-relaxed">
                At Ganesh Dairy Farm, every drop of milk and every dairy product is made with purity, care, and tradition. We bring fresh, natural goodness from our farm directly to your family, with a promise of quality you can trust.
              </p>
            </div>

            {/* 4 Benefit Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#DFD8CD] shadow-xs hover:border-[#2C5E3B]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2ED] flex items-center justify-center mb-3">
                    {b.icon}
                  </div>
                  <h3 className="font-sans-strong text-sm font-bold text-[#182C1F] mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#536557] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
