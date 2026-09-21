import React, { useState } from 'react';
import { ArrowRight, Info, Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '../data/dairyData';
import { Product } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductShowcaseProps {
  onOpenEnquiry: (productName?: string, enquiryType?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenEnquiry }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FBFBF8] border-b border-[#EAE4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8] text-[#244632] text-xs font-bold tracking-wider uppercase border border-[#DCD5C6]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>DISCOVER OUR DAIRY</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Everything Your Family Loves, <br className="hidden sm:inline" />
            <span className="italic font-medium text-[#295439]">From One Farm</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#4E6152] leading-relaxed">
            From the first drop of fresh morning milk to authentic slow-cooked Desi ghee, we share our farm’s purest heritage with you. Zero powders, zero chemical preservatives, and daily farm-to-family freshness.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-[#DFD8CC] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2C5E3B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Header Container */}
                <div className="relative aspect-4/3 bg-[#F6F3EB] overflow-hidden p-6 flex items-center justify-center border-b border-[#ECE7DC]">
                  {/* Subtle decorative background circle */}
                  <div className="absolute w-44 h-44 rounded-full bg-white/70 transform group-hover:scale-110 transition-transform duration-500"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-xs font-mono font-bold text-[#1D3626] border border-[#DDD6C8] shadow-2xs">
                      #{product.number}
                    </span>
                    {product.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[#1F422C] text-white text-[11px] font-semibold tracking-wide shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 object-contain transform group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Product Details Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#162B1D] group-hover:text-[#255437] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#356144] mt-0.5">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#4E6052] line-clamp-3 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Feature Bullets */}
                  <div className="pt-2 border-t border-[#F0EBE2] space-y-1.5">
                    {product.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3E5144]">
                        <Check className="w-3.5 h-3.5 text-[#2C6943] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#294532] bg-[#F2EFE8] hover:bg-[#E6E2D7] rounded-xl border border-[#DDD7CB] transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(product.name, 'Product Enquiry')}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#224A32] hover:bg-[#163622] rounded-xl shadow-xs transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip for Product Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F3EFE6] border border-[#E3DDD1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E5ECE7] text-[#245235] flex items-center justify-center font-bold text-sm shrink-0">
              ✓
            </div>
            <div>
              <p className="text-sm font-bold text-[#183122]">
                Looking for regular morning milk or custom dairy supplies?
              </p>
              <p className="text-xs text-[#526557]">
                We cater to family households, dietary requirements, and local catering across Visakhapatnam.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiry(undefined, 'General Enquiry')}
            className="px-5 py-2.5 text-xs font-bold text-[#1B3625] bg-white border border-[#D5CEC0] rounded-full hover:bg-[#F9F7F2] transition-colors shrink-0 shadow-2xs"
          >
            Ask About Daily Milk Delivery
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForEnquiry={(prodName) => onOpenEnquiry(prodName, 'Product Enquiry')}
      />
    </section>
  );
};
