import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data/dairyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152B1E] text-[#E0EAE3] pt-16 pb-20 sm:pb-16 border-t border-[#234530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#254732]">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/assets/logo.webp"
                  alt="Ganesh Dairy Farm Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/logo.jpg';
                  }}
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block">
                  GANESH DAIRY FARM
                </span>
                <span className="text-xs uppercase tracking-wider text-[#9BB3A3]">
                  Vellanki • Visakhapatnam
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B3C7B9] leading-relaxed max-w-sm">
              Pure dairy products for a healthy life. Sourced daily from healthy, cared-for cows in Vellanki, Anandapuram with zero chemicals, zero milk powder, and genuine farm-to-family pride.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8FA897]">
              <ShieldCheck className="w-4 h-4 text-[#52C478]" />
              <span>100% Pure • Recyclable Packaging</span>
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans-strong text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#AFC3B5]">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Farm Products</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Dairy Packages</a></li>
              <li><a href="#our-story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Ganesh Farm</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Farm Journey</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products Column (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans-strong text-sm font-bold uppercase tracking-wider text-white">
              Fresh Products
            </h4>
            <ul className="space-y-2 text-xs text-[#AFC3B5]">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{p.name}</span>
                    <span className="text-[#6D8A76] font-mono text-[11px]">#{p.number}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#packages" className="text-[#E6B754] hover:underline font-semibold block">
                  Explore Curated Dairy Packages →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans-strong text-sm font-bold uppercase tracking-wider text-white">
              Farm & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-[#AFC3B5]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E6B754] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:underline font-semibold">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-[#8DA695]">Inquiries: {BUSINESS_INFO.hours.inquiry}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E6B754] shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E6B754] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {BUSINESS_INFO.address.full}
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E6B754] shrink-0 mt-0.5" />
                <p className="leading-snug text-[11px]">
                  Farm open daily: 6am - 11am & 4pm - 10pm.<br />
                  Cow care begins at 5am.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#88A390]">
          <div>
            © 2026 Ganesh Dairy Farm. All rights reserved. Sourced with love in Vellanki, Visakhapatnam.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Pure & Unadulterated</span>
            <span>•</span>
            <span>Zero Chemicals</span>
            <span>•</span>
            <span>Eco-Friendly Bottles</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
