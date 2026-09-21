import React from 'react';
import { Calendar, Clock, RefreshCw, Send, Sparkles } from 'lucide-react';

interface SubscriptionConceptProps {
  onOpenEnquiry: (productName?: string, enquiryType?: string) => void;
}

export const SubscriptionConcept: React.FC<SubscriptionConceptProps> = ({ onOpenEnquiry }) => {
  const deliveryFrequencies = [
    {
      title: 'Daily Morning Delivery',
      schedule: '7 Days a Week • 6:00 AM - 7:30 AM',
      description: 'Wake up every morning to fresh farm milk placed right at your doorstep, freshly milked and chilled.',
      badge: 'Most Popular Choice',
    },
    {
      title: 'Alternate Days Schedule',
      schedule: 'Mon / Wed / Fri or Custom Schedule',
      description: 'Ideal for smaller households or paired milk and curd deliveries to keep your kitchen freshly stocked.',
      badge: 'Flexible Routine',
    },
    {
      title: 'Weekly Curated Box',
      schedule: 'Every Saturday or Sunday Morning',
      description: 'Delivering weekly rations of fresh paneer, artisanal Desi cow ghee, and fresh weekend milk.',
      badge: 'Weekend Kitchen Staple',
    },
  ];

  return (
    <section className="py-16 bg-[#FBFBF8] border-b border-[#EAE4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E2D4] text-[#22442E] text-xs font-bold tracking-wider uppercase border border-[#DAD0C0]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>FUTURE DELIVERY ROADMAP</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14281C] tracking-tight">
            Fresh Dairy, Delivered Your Way
          </h2>

          <p className="text-base sm:text-lg text-[#4E6152] leading-relaxed">
            We are designing convenient recurring delivery plans tailored to families in Visakhapatnam. Tell us your neighborhood to help us prioritize your route!
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF2ED] text-[#235836] text-xs font-bold border border-[#CDE0D4]">
            Status: Coming Soon • Route Expansion In Progress
          </div>
        </div>

        {/* Frequency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {deliveryFrequencies.map((freq) => (
            <div
              key={freq.title}
              className="bg-[#F8F5EE] rounded-2xl p-6 border border-[#DFD8CC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#577260] bg-[#ECE5D8] px-2.5 py-1 rounded-md">
                  {freq.badge}
                </span>
                <h3 className="font-display text-xl font-bold text-[#152B1E] mt-3 mb-1">
                  {freq.title}
                </h3>
                <p className="text-xs font-semibold text-[#295439] flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{freq.schedule}</span>
                </p>
                <p className="text-sm text-[#4E6152] leading-relaxed">
                  {freq.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-6 border border-[#DFD7CB] shadow-sm space-y-3">
          <p className="text-sm font-bold text-[#183122]">
            Want morning delivery in your colony or apartment?
          </p>
          <p className="text-xs text-[#566B5C]">
            Submit your address and requirement. When routes expand to your area in Visakhapatnam, you will be the first to receive farm-fresh doorstep service.
          </p>
          <button
            onClick={() => onOpenEnquiry(undefined, 'Delivery Enquiry')}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#224A32] hover:bg-[#163622] transition-colors shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enquire About Route Availability</span>
          </button>
        </div>

      </div>
    </section>
  );
};
