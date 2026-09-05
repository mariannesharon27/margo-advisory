import React, { useState } from 'react';
import { WHY_MARGO_COMPARISON, JARGON_TRANSLATIONS } from '../data/margoData';
import { JargonTerm } from '../types';
import { ArrowRight, BookOpen, HeartHandshake, MessageSquare, Shield, UserCheck } from 'lucide-react';
import { MICRO_LABEL, SECTION_HEADING, SECTION_LEAD } from '../typography';

export const WhyMargoSection: React.FC = () => {
  const [activeJargon, setActiveJargon] = useState<JargonTerm>(JARGON_TRANSLATIONS[0]);

  return (
    <section id="why-margo" className="py-12 bg-[#FAF5EA] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#121824]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Philosophy Core Banner */}
        <div className="space-y-3 mb-6 pb-3 border-b border-[#C5A059]/20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] block text-[#B89343]">
            Why Margo
          </span>
          <h2 className={`font-serif ${SECTION_HEADING} text-[#121824] leading-[1.12]`}>
            Understand first.{' '}
            <span className="italic text-[#B89343]">Decide second.</span>
          </h2>
          <p className={SECTION_LEAD}>
            We sit on your side of the table. Before discussing any financial product, policy, or investment, our priority is making sure you feel 100% clear about why it exists and how it serves your personal goals.
          </p>
        </div>

        {/* Side-by-Side Experience Comparison */}
        <div className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* Traditional Pitch Card */}
            <div className="bg-[#FBF8F2] p-6 rounded-3xl border border-[#8C7A6B]/20 space-y-4 relative opacity-90">
              <div className="flex items-center gap-3 pb-3 border-b border-[#8C7A6B]/20">
                <div className="w-8 h-8 rounded-full bg-[#121824]/10 text-[#121824] flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#121824]">
                    Traditional Financial Sales
                  </h4>
                  <p className="text-[13px] text-[#8C7A6B]">Transaction-focused push</p>
                </div>
              </div>

              <div className="space-y-4">
                {WHY_MARGO_COMPARISON.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FDFBF7] border border-[#8C7A6B]/15 space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7A6B]">
                      {item.topic}
                    </p>
                    <p className="text-sm text-[#121824]/70 leading-relaxed">
                      {item.traditional}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Margo Conversation Card */}
            <div className="bg-[#121824] text-[#FAF5EA] p-6 rounded-3xl border border-[#C5A059]/50 space-y-4 relative shadow-xl shadow-[#121824]/10">
              <div className="flex items-center gap-3 pb-3 border-b border-[#C5A059]/30">
                <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#121824] flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-[#FAF5EA]">
                    The Margo Advisory Experience
                  </h4>
                  <p className="text-[13px] text-[#C5A059] font-medium">Clarity & advisor partnership</p>
                </div>
              </div>

              <div className="space-y-4">
                {WHY_MARGO_COMPARISON.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#1A2233] border border-[#C5A059]/25 space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                      {item.topic}
                    </p>
                    <p className="text-sm text-[#FAF5EA]/90 leading-relaxed font-normal">
                      {item.margo}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {[
            {
              title: 'Client-Side Representation',
              desc: 'We advocate for your best interests, not sales targets or specific provider quotas.',
              icon: UserCheck
            },
            {
              title: 'Jargon-Free Explanations',
              desc: 'No confusing disclosures or corporate buzzwords. Plain English you can trust.',
              icon: BookOpen
            },
            {
              title: 'Total Transparency',
              desc: 'We highlight all costs, fine print, and potential drawbacks openly before taking action.',
              icon: Shield
            },
            {
              title: 'Thoughtful Pace',
              desc: 'Take your time to understand your choices. Never rushed into signing anything.',
              icon: HeartHandshake
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#C5A059]/30 space-y-3 hover:border-[#C5A059] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] border border-[#C5A059]/30 flex items-center justify-center text-[#B89343]">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#121824]">
                {item.title}
              </h4>
              <p className="text-sm text-[#121824]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Feature: Financial Jargon Translator */}
        <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-[#C5A059]/35 shadow-sm space-y-4">
          <div className="pb-3 border-b border-[#C5A059]/20">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B89343]">
              Financial Jargon Translator
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Term Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {JARGON_TRANSLATIONS.map((item) => (
                <button
                  key={item.term}
                  onClick={() => setActiveJargon(item)}
                  aria-pressed={activeJargon.term === item.term}
                  className={`relative w-full text-left p-4 pl-5 rounded-xl border transition-all text-sm font-medium flex items-center justify-between cursor-pointer overflow-hidden ${
                    activeJargon.term === item.term
                      ? 'bg-[#121824] text-[#FAF5EA] border-[#C5A059] shadow-sm'
                      : 'bg-[#FBF8F2] text-[#121824]/80 hover:bg-[#FAF5EA] border-[#C5A059]/20'
                  }`}
                >
                  {/* Gold marker: reads as a selection cue rather than a colour slab */}
                  <span
                    className={`absolute left-0 inset-y-0 w-1 bg-[#C5A059] transition-transform origin-left ${
                      activeJargon.term === item.term ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                  <div className="space-y-0.5">
                    <p className="font-serif text-[0.92rem] font-semibold">{item.term}</p>
                    <p className={`text-[10px] font-semibold uppercase tracking-widest ${
                      activeJargon.term === item.term ? 'text-[#C5A059]' : 'text-[#8C7A6B]'
                    }`}>
                      {item.category}
                    </p>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                    activeJargon.term === item.term ? 'text-[#C5A059] translate-x-0.5' : 'text-[#8C7A6B] opacity-50'
                  }`} />
                </button>
              ))}
            </div>

            {/* Translation Output Card */}
            <div className="lg:col-span-7 bg-[#FBF8F2] p-5 sm:p-6 rounded-2xl border border-[#C5A059]/30 space-y-4">
              <h4 className="font-serif text-2xl text-[#121824]">
                {activeJargon.term}
              </h4>

              {/* Jargon vs Plain English */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#8C7A6B]/15 space-y-1.5">
                  <span className={`${MICRO_LABEL} text-[#8C7A6B] block`}>
                    How Banks &amp; Industry Express It (Dense Jargon)
                  </span>
                  <p className="text-sm leading-relaxed italic text-[#121824]/70">
                    {activeJargon.jargonDefinition}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1A2233] border border-[#C5A059]/25 space-y-1.5">
                  <div className={`${MICRO_LABEL} text-[#C5A059] flex items-center gap-1.5`}>
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>How Margo Explains It Simply</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#FAF5EA]/90">
                    {activeJargon.margoTranslation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF5EA] border border-[#C5A059]/40 space-y-1.5">
                  <span className={`${MICRO_LABEL} text-[#B89343] block`}>
                    Why This Matters To You
                  </span>
                  <p className="text-sm leading-relaxed text-[#121824]">
                    {activeJargon.whyItMatters}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
