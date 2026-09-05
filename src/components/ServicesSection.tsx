import React, { useState } from 'react';
import { MARGO_CONTACT, SERVICES } from '../data/margoData';
import { ServiceItem } from '../types';
import {
  Compass,
  Layers,
  ShieldCheck,
  HeartPulse,
  FileText,
  Sparkles,
  X,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { SECTION_HEADING } from '../typography';

interface ServicesSectionProps {
  onEnquire: (prefill?: { topic: string; message: string }) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquire }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Wealth Growth', 'Protection', 'Compliance', 'Holistic Guidance'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#B89343]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#B89343]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#B89343]" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#B89343]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#B89343]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#B89343]" />;
      default: return <Compass className="w-6 h-6 text-[#B89343]" />;
    }
  };

  return (
    <section id="services" className="pt-4 pb-12 md:pt-6 md:pb-12 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-4 pb-3 border-b border-[#C5A059]/20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] block text-[#B89343]">
            Services & Expertise
          </span>
          {/* Sized to sit on a single line from `sm` up; wraps naturally on narrow screens. */}
          <h2 className={`font-serif ${SECTION_HEADING} text-[#121824] leading-[1.12]`}>
            Clear, practical advice across{' '}
            <span className="italic text-[#B89343]">every aspect of your money.</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#121824] text-[#FAF5EA] border border-[#C5A059]/50 shadow-sm'
                  : 'bg-[#FBF8F2] text-[#121824]/70 hover:text-[#121824] hover:bg-[#FAF5EA] border border-[#C5A059]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 5;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative bg-[#FBF8F2] hover:bg-[#FAF5EA] p-6 rounded-3xl border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-300 cursor-pointer flex flex-col hover:shadow-lg hover:shadow-[#121824]/5 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header: title and icon on one centred row, category on its own row below */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-serif text-2xl text-[#121824] font-medium leading-tight group-hover:text-[#B89343] transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF5EA] border border-[#C5A059]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#8C7A6B] bg-[#FDFBF7] px-2.5 py-0.5 rounded-full border border-[#C5A059]/20">
                    {service.category}
                  </span>
                </div>

                <p className="text-sm font-medium text-[#8C7A6B] mb-2 italic">
                  {service.subtitle}
                </p>

                <p className="text-sm text-[#121824]/75 leading-relaxed">
                  {service.tagline}
                </p>

                {service.id === 'life-insurance' && (
                  <p className="text-xs text-[#8C7A6B] mt-2">
                    LIC Agency Code: {MARGO_CONTACT.licAgencyCode}
                  </p>
                )}
              </div>
            );
          })}
        </div>


      </div>

      {/* Detail Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121824]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#FDFBF7] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-[#C5A059]/40 p-5 sm:p-7 relative shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FBF8F2] hover:bg-[#FAF5EA] border border-[#C5A059]/30 text-[#121824] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header — mirrors the service card header */}
            <div className="space-y-2 pr-12">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-3xl text-[#121824] font-medium leading-tight">
                  {selectedService.title}
                </h3>
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5EA] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                  {getIcon(selectedService.iconName)}
                </div>
              </div>

              <div>
                <span className="text-[9px] font-semibold uppercase tracking-widest text-[#8C7A6B] bg-[#FBF8F2] px-2.5 py-0.5 rounded-full border border-[#C5A059]/20">
                  {selectedService.category}
                </span>
              </div>
              <p className="text-sm font-medium text-[#8C7A6B] italic">
                {selectedService.subtitle}
              </p>
              {selectedService.id === 'life-insurance' && (
                <p className="text-xs text-[#8C7A6B]">
                  LIC Agency Code: {MARGO_CONTACT.licAgencyCode}
                </p>
              )}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#121824]">
                The Margo Approach
              </h4>
              <p className="text-sm text-[#121824]/80 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-3 bg-[#FBF8F2] p-5 rounded-2xl border border-[#C5A059]/20">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#121824]">
                What We Help You Clarify:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#121824]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89343] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Questions Answered */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B89343]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#121824]">
                  Questions We Often Solve Together:
                </h4>
              </div>
              <ul className="space-y-2 pl-4 list-disc text-sm text-[#121824]/80 italic">
                {selectedService.keyQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div className="p-4 rounded-xl bg-[#FAF5EA] border border-[#C5A059]/30 text-sm text-[#121824]">
              <span className="font-bold text-[#121824]">Who this is ideal for: </span>
              <span className="text-[#121824]/80">{selectedService.whoItIsFor}</span>
            </div>

            {/* Action */}
            <div className="pt-3 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  onEnquire({ topic: selectedService.title, message: '' });
                  setSelectedService(null);
                }}
                className="text-xs font-semibold uppercase tracking-wider w-full sm:w-auto bg-[#121824] hover:bg-[#1A2233] text-[#FAF5EA] px-5 py-2.5 rounded-full border border-[#C5A059]/40 transition-colors"
              >
                Discuss {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="text-sm font-semibold text-[#8C7A6B] hover:text-[#121824] underline cursor-pointer"
              >
                Close details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
