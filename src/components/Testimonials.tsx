import React from 'react';
import { Sparkles, Quote, Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/dairyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE5] border-b border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D3] text-[#22442E] text-xs font-bold tracking-wider uppercase border border-[#DAD0C0]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>COMMUNITY VOICES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Loved by Families
          </h2>

          <p className="text-base sm:text-lg text-[#4B5E50] leading-relaxed">
            Hear from families and home cooks across Visakhapatnam who enjoy our pure morning milk, traditional curd, and Desi cow ghee.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#DFD7C9] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#E0A838] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#2C623E]/20 mb-2" />
                  <p className="text-sm sm:text-base text-[#3A4E40] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#182F21] flex items-center gap-1.5">
                    <span>{t.author}</span>
                    {t.verified && (
                      <span title="Verified Local Family" className="inline-flex">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B46]" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-[#63776A]">{t.location}</p>
                </div>
                <span className="text-[10px] font-semibold text-[#2F5A3E] bg-[#EAF2ED] px-2.5 py-1 rounded-md">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Note */}
        <div className="mt-12 text-center text-xs text-[#67796B]">
          Are you a customer of Ganesh Dairy Farm? Share your experience with us during your next farm visit or via WhatsApp!
        </div>

      </div>
    </section>
  );
};
