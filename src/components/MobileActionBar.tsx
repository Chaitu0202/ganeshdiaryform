import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/dairyData';

interface MobileActionBarProps {
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#FBFBF8]/95 backdrop-blur-md border-t border-[#DFD8CC] p-2.5 sm:hidden shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EFECE4] text-[#1E3A28] border border-[#DDD5C7] text-center"
        >
          <Phone className="w-4 h-4 text-[#265939] mb-1" />
          <span className="text-[10px] font-bold">Call Farm</span>
        </a>

        {/* WhatsApp */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white text-center shadow-xs"
        >
          <MessageSquare className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Enquire */}
        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#224A32] text-white text-center shadow-xs"
        >
          <Send className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold">Enquire</span>
        </button>
      </div>
    </div>
  );
};
