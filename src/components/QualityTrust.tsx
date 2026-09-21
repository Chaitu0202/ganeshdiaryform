import React from 'react';
import { ShieldCheck, Heart, Sparkles, Droplets, Eye, Leaf } from 'lucide-react';

export const QualityTrust: React.FC = () => {
  const qualityPillars = [
    {
      icon: <Heart className="w-5 h-5 text-[#28603C]" />,
      title: 'Gentle Cow Welfare',
      desc: 'Our cows live in spacious, natural sheds with nutritious green fodder, fresh water, and daily movement. Healthy, stress-free cows yield wholesome milk.',
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#28603C]" />,
      title: 'Zero Chemical Adulteration',
      desc: 'Strict zero-tolerance policy against artificial thickeners, milk powders, chemical preservatives, or dilution. Pure farm goodness.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#28603C]" />,
      title: 'Hygienic Milking Standards',
      desc: 'All milking utensils and chilling containers are thoroughly sanitized before and after every morning cycle.',
    },
    {
      icon: <Eye className="w-5 h-5 text-[#28603C]" />,
      title: 'Open Farm Transparency',
      desc: 'We welcome families and customers to visit our Vellanki farm. Transparency is our greatest quality guarantee.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#28603C]" />,
      title: 'Nutritious Green Feed',
      desc: 'Cows are fed fresh grass and balanced nutrition an hour prior to milking, enhancing the natural vitamin and mineral profile.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#28603C]" />,
      title: 'Traditional Dairy Craft',
      desc: 'Our curd is naturally fermented, our paneer freshly curdled, and our ghee slow-simmered according to timeless Desi traditions.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBF8] border-b border-[#EAE4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D5] text-[#244632] text-xs font-bold tracking-wider uppercase border border-[#DDD5C6]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>UNCOMPROMISING PURITY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Quality You Can Feel Good About
          </h2>

          <p className="text-base sm:text-lg text-[#4E6152] leading-relaxed">
            Rather than relying on chemical shelf-life extenders, our quality is built on daily freshness, dedicated animal welfare, and traditional Indian dairy practices.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F5EE] rounded-3xl p-6 sm:p-7 border border-[#DFD8CC] shadow-xs hover:border-[#2C5E3B]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#E0D8CB] flex items-center justify-center mb-4 shadow-2xs">
                {item.icon}
              </div>
              <h3 className="font-sans-strong text-base font-bold text-[#162D1F] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#4E6052] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
