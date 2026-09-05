import React, { useState, useRef } from 'react';
import { CLARITY_PATHS } from '../data/margoData';
import { ClarityPath } from '../types';
import { ArrowRight } from 'lucide-react';
import { SECTION_HEADING, SECTION_LEAD } from '../typography';

interface ClarityInteractiveSectionProps {
  /** Hands the chosen scenario to the Contact section instead of opening
      WhatsApp or email directly, so all outreach funnels through one place. */
  onDiscuss: (prefill: { topic: string; message: string }) => void;
}

export const ClarityInteractiveSection: React.FC<ClarityInteractiveSectionProps> = ({ onDiscuss }) => {
  const [selectedPath, setSelectedPath] = useState<ClarityPath>(CLARITY_PATHS[0]);
  const guidanceRef = useRef<HTMLDivElement>(null);

  // Arrow keys move between tabs, as expected of a real tablist.
  const onTabKey = (e: React.KeyboardEvent, idx: number) => {
    const keys: Record<string, number> = {
      ArrowRight: idx + 1, ArrowDown: idx + 1,
      ArrowLeft: idx - 1, ArrowUp: idx - 1,
      Home: 0, End: CLARITY_PATHS.length - 1,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (keys[e.key] + CLARITY_PATHS.length) % CLARITY_PATHS.length;
    setSelectedPath(CLARITY_PATHS[next]);
    document.getElementById(`clarity-tab-${CLARITY_PATHS[next].id}`)?.focus();
  };

  const handleSelectPath = (path: ClarityPath) => {
    setSelectedPath(path);

    // Mobile & Tablet interaction fix: Smoothly scroll to guidance section on screens < 1024px (mobile & tablet)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        if (guidanceRef.current) {
          const headerOffset = 80; // Account for sticky header height (~60px) + 20px padding
          const elementPosition = guidanceRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 50);
    }
  };

  return (
    <section id="clarity-guide" className="py-12 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-6 pb-3 border-b border-[#C5A059]/20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] block text-[#B89343]">
            Clarity Guide
          </span>
          <h2 className={`font-serif ${SECTION_HEADING} text-[#121824] leading-[1.12]`}>
            What's on your mind <span className="italic text-[#B89343]">today?</span>
          </h2>
        </div>

        {/* One box: tabs and their panel are a single interaction. */}
        <div className="bg-[#FBF8F2] rounded-3xl border border-[#C5A059]/30 p-4 sm:p-5 space-y-4">

          <p className={`${SECTION_LEAD} text-[#8C7A6B]`}>
            Select the situation closest to where you are right now to see how Margo breaks it down step-by-step.
          </p>

          {/*
            Tabs carry a short topic, not the full question: at tab size the
            question was unreadable — so "all four visible" bought nothing —
            and it duplicated the panel heading directly below. Short labels
            are scannable at a glance and the question appears once, in the
            panel.
          */}
          <div
            role="tablist"
            aria-label="Financial scenarios"
            className="flex flex-col sm:flex-row gap-2"
          >
            {CLARITY_PATHS.map((path, idx) => {
              const isSelected = selectedPath.id === path.id;
              return (
                <button
                  key={path.id}
                  id={`clarity-tab-${path.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="clarity-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onKeyDown={(e) => onTabKey(e, idx)}
                  onClick={() => handleSelectPath(path)}
                  className={`flex-1 text-center rounded-2xl border px-4 py-3 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#121824] text-[#FAF5EA] border-[#C5A059] shadow-md'
                      : 'bg-[#FDFBF7] text-[#121824]/70 border-[#C5A059]/20 hover:border-[#C5A059] hover:text-[#121824]'
                  }`}
                >
                  <span className="text-sm font-semibold whitespace-nowrap">{path.label}</span>
                </button>
              );
            })}
          </div>

        {/* Active Guidance Breakdown Box */}
        <div
          ref={guidanceRef}
          id="clarity-panel"
          role="tabpanel"
          aria-labelledby={`clarity-tab-${selectedPath.id}`}
          /* No min-height: after the layout was tightened all four panels come
             out at exactly 438px on desktop, so a floor only added dead space
             at the bottom. Narrower widths still vary a little, but a shift on
             a deliberate tab click beats permanent empty space on every view. */
          className="pt-1 space-y-4 relative scroll-mt-24"
        >
          {/* Question and answer both run the full width of the panel. */}
          <div className="pb-3 border-b border-[#C5A059]/20">
            <h3 className="font-serif text-[20px] sm:text-[26px] text-[#121824]">
              “{selectedPath.question}”
            </h3>
          </div>

          <p className="text-[20px] sm:text-[26px] text-[#B89343] leading-relaxed font-serif italic">
            “{selectedPath.margoPerspective}”
          </p>

          <div className="pt-1">
            <div className="space-y-4">
              <div className="space-y-3">
                {selectedPath.actionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FDFBF7] px-4 py-2.5 rounded-xl border border-[#C5A059]/20 text-sm text-[#121824]">
                    <div className="w-5 h-5 rounded-full bg-[#121824] text-[#FAF5EA] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Immediate Action Buttons */}
          <div className="pt-3 border-t border-[#C5A059]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {selectedPath.recommendedServices.map((service) => (
                <span
                  key={service}
                  className="text-xs font-medium text-[#8C7A6B] bg-[#FAF5EA] px-3 py-1.5 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                onDiscuss({
                  topic: selectedPath.recommendedServices[0] ?? 'General Advisory',
                  message: selectedPath.question,
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#121824] text-[#FAF5EA] text-sm font-semibold border border-[#C5A059]/40 hover:bg-[#1A2233] transition-colors cursor-pointer"
            >
              <span>Discuss</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

        </div>

        </div>

      </div>
    </section>
  );
};
