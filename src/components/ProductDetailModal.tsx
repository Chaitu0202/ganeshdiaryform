import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForEnquiry: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFBF8] rounded-3xl shadow-2xl border border-[#E4DDD1] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#EAE3D5] bg-[#F7F3EB]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#E4DDD0] text-[#1E3A28]">
              #{product.number}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5A6F61]">
              {product.badge || 'Farm Product'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#45584B] hover:bg-[#EAE2D4] hover:text-[#182C1F] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Image & Header Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-white border border-[#E0D8CB] p-2 shadow-xs shrink-0 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center sm:text-left space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#152B1E]">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-[#326143]">
                {product.tagline}
              </p>
              <p className="text-sm text-[#465A4C] leading-relaxed pt-1">
                {product.fullDescription}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-5 border border-[#E2DDD3]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#586F60] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
              <span>Key Freshness & Quality Details</span>
            </h4>
            <ul className="space-y-2.5">
              {product.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#384C3F]">
                  <Check className="w-4 h-4 text-[#2E6B46] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes: Tradition & Packaging */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
            {product.traditionNote && (
              <div className="p-3.5 rounded-xl bg-[#F5EFE4] border border-[#E5DEC7] text-[#425447]">
                <p className="font-bold text-[#203728] mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2C6340]" />
                  Farm Routine
                </p>
                <p>{product.traditionNote}</p>
              </div>
            )}
            {product.packagingNote && (
              <div className="p-3.5 rounded-xl bg-[#F5EFE4] border border-[#E5DEC7] text-[#425447]">
                <p className="font-bold text-[#203728] mb-1 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-[#2C6340]" />
                  Packaging Commitment
                </p>
                <p>{product.packagingNote}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 sm:p-6 border-t border-[#EAE3D5] bg-[#F7F3EB] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-[#1D3525]">Interested in this product?</p>
            <p className="text-xs text-[#5D6F63]">Send an enquiry to check morning delivery or availability.</p>
          </div>
          <button
            onClick={() => {
              onSelectForEnquiry(product.name);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#224A32] hover:bg-[#163622] rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Send Product Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
