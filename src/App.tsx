/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductShowcase } from './components/ProductShowcase';
import { DairyPackages } from './components/DairyPackages';
import { SubscriptionConcept } from './components/SubscriptionConcept';
import { WhyUs } from './components/WhyUs';
import { FarmStory } from './components/FarmStory';
import { FarmJourney } from './components/FarmJourney';
import { QualityTrust } from './components/QualityTrust';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { MobileActionBar } from './components/MobileActionBar';
import { Footer } from './components/Footer';

export default function App() {
  const [enquiryProduct, setEnquiryProduct] = useState<string>('Cow Milk');
  const [enquiryType, setEnquiryType] = useState<string>('Product Enquiry');

  const handleOpenEnquiry = (productName?: string, type?: string) => {
    if (productName) {
      setEnquiryProduct(productName);
    }
    if (type) {
      setEnquiryType(type);
    }

    // Smooth scroll to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF8] text-[#19261D] flex flex-col selection:bg-[#224A32] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Preserved Messaging & Trust Line */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry(undefined, 'General Enquiry')} />

        {/* 4-Pillar Quick Trust Strip */}
        <TrustStrip />

        {/* Authentic Product Showcase (5 Products) */}
        <ProductShowcase onOpenEnquiry={handleOpenEnquiry} />

        {/* Curated Dairy Packages (Strategic Proposal) */}
        <DairyPackages onOpenEnquiry={handleOpenEnquiry} />

        {/* Subscription Roadmap (Future Purchase Flow) */}
        <SubscriptionConcept onOpenEnquiry={handleOpenEnquiry} />

        {/* Why Ganesh Dairy Farm (Split Layout & 4 Benefits) */}
        <WhyUs />

        {/* Editorial Farm Story (Ganesh's Authentic Journey) */}
        <FarmStory />

        {/* Where Freshness Begins (4-Step Farm Journey) */}
        <FarmJourney />

        {/* Quality & Animal Care Pillars */}
        <QualityTrust />

        {/* Loved by Families (Testimonials & Community Reviews) */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Direct Contact, Working Hours & Enquiry Form */}
        <ContactSection
          initialProduct={enquiryProduct}
          initialEnquiryType={enquiryType}
        />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar onOpenEnquiry={() => handleOpenEnquiry(undefined, 'General Enquiry')} />
    </div>
  );
}
