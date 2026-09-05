import React from 'react';
import { MARGO_CONTACT } from '../data/margoData';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121824] text-[#FAF5EA] pt-8 pb-6 border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-5 border-b border-[#C5A059]/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EA] text-[#121824] flex items-center justify-center font-serif text-2xl font-bold border border-[#C5A059]">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-semibold text-[#FAF5EA] tracking-tight leading-none">
                  Margo
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mt-1">
                  Advisory
                </span>
              </div>
            </a>

            <p className="font-serif text-xl italic text-[#C5A059] leading-snug">
              “Financial decisions, made clearer.”
            </p>

            <p className="text-sm text-[#FAF5EA]/70 max-w-sm leading-relaxed">
              A personal financial advisory brand built around understanding, patient explanations, and unbiased clarity.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-[#FAF5EA]/80 hover:text-[#C5A059] transition-colors">
                  Services & Expertise
                </a>
              </li>
              <li>
                <a href="#why-margo" className="text-[#FAF5EA]/80 hover:text-[#C5A059] transition-colors">
                  Why Margo Philosophy
                </a>
              </li>
              <li>
                <a href="#clarity-guide" className="text-[#FAF5EA]/80 hover:text-[#C5A059] transition-colors">
                  Clarity & Decision Helper
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#FAF5EA]/80 hover:text-[#C5A059] transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
              Direct Contact
            </span>
            
            <div className="space-y-3 text-sm text-[#FAF5EA]/80">
              <a
                href={`tel:${MARGO_CONTACT.phone}`}
                className="flex items-center gap-3 hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Phone: {MARGO_CONTACT.phone}</span>
              </a>

              <a
                href={MARGO_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#C5A059] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {MARGO_CONTACT.formattedPhone}</span>
              </a>

              <a
                href={`mailto:${MARGO_CONTACT.email}`}
                className="flex items-center gap-3 hover:text-[#C5A059] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Email: {MARGO_CONTACT.email}</span>
              </a>
            </div>

            <div className="pt-2 text-[13px] text-[#FAF5EA]/50">
              Location: {MARGO_CONTACT.location}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#FAF5EA]/50">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Margo Advisory. All rights reserved.</p>
            <p className="mt-0.5 text-[#FAF5EA]/60">LIC Agency Code: {MARGO_CONTACT.licAgencyCode}</p>
          </div>
          <p className="text-center md:text-right max-w-md italic">
            Disclaimer: Advisory conversations are intended for personal guidance and decision clarity. Financial instruments carry risk; choices should align with individual goals.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#1A2233] hover:bg-[#C5A059] hover:text-[#121824] text-[#C5A059] border border-[#C5A059]/30 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
