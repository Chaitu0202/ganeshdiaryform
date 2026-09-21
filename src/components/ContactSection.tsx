import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Info,
} from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS, DAIRY_PACKAGES } from '../data/dairyData';

interface ContactSectionProps {
  initialProduct?: string;
  initialEnquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProduct,
  initialEnquiryType,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedProduct: initialProduct || 'Cow Milk',
    enquiryType: initialEnquiryType || 'Product Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync props when user selects from product cards or packages
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, selectedProduct: initialProduct }));
    }
    if (initialEnquiryType) {
      setFormData((prev) => ({ ...prev, enquiryType: initialEnquiryType }));
    }
  }, [initialProduct, initialEnquiryType]);

  const productOptions = [
    'Cow Milk',
    'A2 Desi Cow Milk',
    'Curd',
    'Paneer',
    'Cow Ghee',
    'Dairy Packages (Daily Fresh)',
    'Dairy Packages (Family Essentials)',
    'Dairy Packages (Premium Dairy)',
    'General Dairy Enquiry',
  ];

  const enquiryTypes = [
    'Product Enquiry',
    'Package Enquiry',
    'Bulk Order',
    'Delivery Enquiry',
    'General Enquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Polished frontend success state
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Ganesh Dairy Farm! My name is ${formData.fullName || 'a customer'}. I am interested in ${formData.selectedProduct} (${formData.enquiryType}). ${formData.message ? 'Message: ' + formData.message : ''}`
    );
    window.open(`https://wa.me/919059870436?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D3] text-[#22442E] text-xs font-bold tracking-wider uppercase border border-[#DAD0C0]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B27]" />
            <span>DIRECT CONNECT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14281C] tracking-tight">
            Let's Talk Dairy
          </h2>

          <p className="text-base sm:text-lg text-[#4B5E50] leading-relaxed">
            Have a question about our products, packages, bulk requirements, or daily morning availability? Get in touch with Ganesh Dairy Farm in Vellanki.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Information, Hours & Map Block */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DFD7CA] shadow-sm space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#162D1F]">
                Farm Details
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2ED] text-[#224E33] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#162B1E]">Call Us</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-[#2C623E] hover:underline font-semibold block text-base"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-[#627669]">Phone inquiries: {BUSINESS_INFO.hours.inquiry}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2ED] text-[#224E33] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#162B1E]">Email Us</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-[#2C623E] hover:underline font-medium text-sm break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <p className="text-xs text-[#627669]">We respond promptly to all messages</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2ED] text-[#224E33] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#162B1E]">Farm Location</p>
                    <p className="text-[#3A4E40] leading-snug">
                      {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.area}
                    </p>
                    <p className="text-[#3A4E40] leading-snug">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Working Hours - Clear & Verified */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-[#F0EBE1]">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2ED] text-[#224E33] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-[#162B1E]">Working Hours</p>
                    <div className="text-xs text-[#485C4E] space-y-1">
                      <p>
                        <strong className="text-[#203728]">Farm Visiting Hours:</strong><br />
                        {BUSINESS_INFO.hours.farm}
                      </p>
                      <p>
                        <strong className="text-[#203728]">Phone Inquiries:</strong><br />
                        {BUSINESS_INFO.hours.inquiry}
                      </p>
                      <p className="text-[11px] text-[#697C6F] italic">
                        *Daily cow feeding & care begins at 5:00 AM every morning.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Google Maps / Location Preview Block */}
            <div className="bg-white rounded-3xl p-6 border border-[#DFD7CA] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2E6B46]" />
                  <span className="font-bold text-xs uppercase tracking-wider text-[#22392A]">
                    Visit Our Farm
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#2A5E3D] hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-[#EAE3D5] p-5 border border-[#DFD8CC]">
                <p className="font-display text-base font-bold text-[#172D1E] mb-1">
                  Ganesh Dairy Farm
                </p>
                <p className="text-xs text-[#546859] mb-3">
                  Vellanki, Anandapuram, Visakhapatnam, Andhra Pradesh 531163
                </p>
                <div className="flex items-center gap-2 text-[11px] font-medium text-[#2C5F3E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B46]" />
                  <span>Easy driving access from Visakhapatnam city & Anandapuram</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DFD7CA] shadow-md">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E5F2E8] text-[#224E33] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#14281C]">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm sm:text-base text-[#4E6152] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1A2E20]">{formData.fullName}</strong>. Your enquiry for <strong className="text-[#1A2E20]">{formData.selectedProduct}</strong> has been noted. We will contact you at <strong className="text-[#1A2E20]">{formData.phone}</strong> promptly.
                  </p>
                  
                  {/* WhatsApp continue action */}
                  <div className="pt-4 max-w-sm mx-auto space-y-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to Farm via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#526557] hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14281C]">
                      Send Product or Package Enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526557] mt-1">
                      Fill out the form below to enquire about fresh milk delivery, Desi ghee, curd, paneer, or bulk orders.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#3C5042]">
                        Full Name <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Varma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CEC0] bg-[#FBFBF8] text-sm text-[#1A2D1F] focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/40 transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#3C5042]">
                        Phone Number <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CEC0] bg-[#FBFBF8] text-sm text-[#1A2D1F] focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3C5042]">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5CEC0] bg-[#FBFBF8] text-sm text-[#1A2D1F] focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/40 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Select Product */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#3C5042]">
                        Select Product
                      </label>
                      <select
                        value={formData.selectedProduct}
                        onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CEC0] bg-[#FBFBF8] text-sm text-[#1A2D1F] focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/40 transition-colors"
                      >
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Select Enquiry Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#3C5042]">
                        Select Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CEC0] bg-[#FBFBF8] text-sm text-[#1A2D1F] focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/40 transition-colors"
                      >
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3C5042]">
                      Your Message or Area in Visakhapatnam
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please let us know your locality (e.g. Madhurawada, Anandapuram, MVP Colony), quantity needed, or preferred morning delivery timing."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5CEC0] bg-[#FBFBF8] text-sm text-[#1A2D1F] focus:outline-none focus:ring-2 focus:ring-[#2C5E3B]/40 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full font-bold text-sm text-white bg-[#224A32] hover:bg-[#163622] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry to Farm</span>
                  </button>

                  <p className="text-[11px] text-center text-[#708475]">
                    We respect your privacy. No spam. You will also have the option to contact us directly via WhatsApp.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
