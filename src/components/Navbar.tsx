import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/dairyData';

interface NavbarProps {
  onOpenEnquiry: (productName?: string, enquiryType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Dairy Packages', href: '#packages' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Why Ganesh Farm', href: '#why-us' },
    { name: 'Farm Journey', href: '#journey' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Notice - Trust & Service Area */}
      <div className="bg-[#193222] text-[#E3EDE6] text-xs py-2 px-4 border-b border-[#244632]/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-[#52C478] animate-pulse"></span>
            <span>Pure Farm-Fresh Dairy Sourced Daily in Vellanki, Visakhapatnam</span>
            <span className="hidden md:inline text-[#8EA696]">•</span>
            <span className="hidden md:inline text-[#CADFD2]">Zero Powders • 100% Chemical-Free</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6B450]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#3A5D46]">|</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-[#52C478] transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBFBF8]/95 backdrop-blur-md shadow-sm border-b border-[#E7E2D7] py-3'
            : 'bg-[#FBFBF8] border-b border-[#EDE8DE] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand with Preserved Authentic Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2C5E3B] rounded-lg p-1"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#DDD7CB] shadow-xs flex items-center justify-center p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo.webp"
                alt="Ganesh Dairy Farm Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to jpg if webp is slow
                  (e.target as HTMLImageElement).src = '/assets/logo.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#16271D] group-hover:text-[#234A31] transition-colors">
                GANESH DAIRY FARM
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#5B6D61]">
                Vellanki • Visakhapatnam
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-[#37453B]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md hover:text-[#183624] hover:bg-[#EFECE4]/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry(undefined, 'General Enquiry')}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#1C3A27] bg-[#EBE7DC] hover:bg-[#DFD9CB] rounded-full border border-[#D5CEC0] transition-all duration-200"
            >
              Enquire Now
            </button>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-4.5 py-2 text-sm font-semibold text-white bg-[#224A32] hover:bg-[#183824] rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#224A32] rounded-full sm:hidden"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#253A2C] hover:bg-[#EDE8DE] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E3D7] bg-[#FBFBF8] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[#223528] hover:bg-[#EFECE4] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[#E8E3D7] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#224A32] rounded-full shadow-sm hover:bg-[#183824]"
              >
                Send Dairy Enquiry
              </button>
              <div className="flex gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 py-2.5 flex items-center justify-center gap-2 text-xs font-semibold text-[#1F3D2A] bg-[#EFECE4] border border-[#DDD7CB] rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#1EBE5D]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
