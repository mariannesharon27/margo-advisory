import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { HERO_HEADING, HERO_LEAD } from '../typography';

interface HeroSectionProps {
  onEnquire: (prefill?: { topic: string; message: string }) => void;
  /** Fires as the hero's Contact Us button enters/leaves the viewport. */
  onCtaVisibilityChange?: (visible: boolean) => void;
}

/*
 * Type system for this section, deliberately small:
 *   display  text-5xl/6xl/7xl serif   — headline only
 *   quote    text-2xl serif italic    — pull quote only
 *   lead     text-lg                  — opening paragraph only
 *   body     text-sm                  — everything readable
 *   micro    text-[10px] uppercase    — every label
 * Weights: normal, plus semibold for labels and buttons. Nothing else.
 * Colours: #121824 ink, #121824/70 body, #B89343 gold accent,
 *          #8C7A6B micro-label. #C5A059 is structural (borders, dot) only.
 */
const MICRO = 'text-[10px] font-semibold uppercase tracking-widest';

const PROMISES = [
  'Clear answers to "Where is my money going?"',
  'Protection plans without hidden sub-limits',
  'Tax filing made seamless and error-free',
  'Investment strategies tailored to your milestones',
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEnquire,
  onCtaVisibilityChange,
}) => {
  const ctaRef = useRef<HTMLButtonElement>(null);

  // The navbar hides its own Contact Us while this one is on screen, so that
  // only one primary CTA is ever competing for attention.
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || !onCtaVisibilityChange) return;

    // No IntersectionObserver (very old browsers): leave the navbar CTA showing.
    if (typeof IntersectionObserver === 'undefined') {
      onCtaVisibilityChange(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => onCtaVisibilityChange(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onCtaVisibilityChange]);

  return (
    <section className="relative pt-20 pb-6 md:pt-28 md:pb-8 bg-editorial-grain overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FAF5EA] via-[#F5EEDC] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-5 text-left">

            <h1 className={`font-serif ${HERO_HEADING} text-[#121824] leading-[1.12] tracking-tight`}>
              Financial decisions,{' '}
              <span className="italic text-[#B89343]">made clearer.</span>
            </h1>

            <div className={`${HERO_LEAD} text-[#121824]/70 max-w-2xl space-y-3`}>
              <p>
                Margo was founded on a straightforward realization: most people don&rsquo;t avoid
                managing their finances because they don&rsquo;t care — they avoid it because
                conventional financial conversations feel opaque, overwhelming, and transactional.
              </p>
              <p>
                Whether you are evaluating life insurance for your family, filing your tax returns,
                or starting your first systematic investment plan, you deserve a calm advisor who
                takes the time to explain options in plain English.
              </p>
              <p className="font-serif text-lg italic text-[#121824] border-l-2 border-[#C5A059] pl-4">
                &ldquo;Margo exists to make conversations about money easier, clearer, and genuinely
                personal.&rdquo;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-1 w-full">
              <button
                ref={ctaRef}
                onClick={() => onEnquire()}
                className="flex-1 bg-[#121824] hover:bg-[#1A2233] text-[#FAF5EA] px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg border border-[#C5A059]/40 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#B89343] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#services"
                className="flex-1 bg-[#FBF8F2] hover:bg-[#FAF5EA] text-[#121824] px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border border-[#C5A059]/30 hover:border-[#C5A059] flex items-center justify-center gap-2 text-center group"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4 text-[#B89343] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Hero Visual Card / Editorial Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#121824] text-[#FAF5EA] p-6 sm:p-7 rounded-3xl border border-[#C5A059]/40 shadow-2xl space-y-4 overflow-hidden">

              {/* Subtle gold watermark emblem */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#C5A059]/10 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#121824] flex items-center justify-center font-serif text-2xl font-bold">
                  M
                </div>
                <span className={`${MICRO} text-[#C5A059]`}>The Margo Philosophy</span>
              </div>

              <div className="space-y-2">
                <p className="font-serif text-2xl italic leading-snug">
                  “You don’t need to know everything about money. You just need to understand yours.”
                </p>
              </div>

              <div className="space-y-2.5">
                {PROMISES.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#FAF5EA]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Carried over from the About section — flat, not boxed: a card
                  inside a card reads as clutter on an already-dark panel. */}
              <div className="pt-3 border-t border-[#C5A059]/20 space-y-3 text-sm text-[#FAF5EA]/75 leading-relaxed">
                <div className="space-y-1">
                  <span className={`${MICRO} text-[#C5A059] block`}>Our Commitment</span>
                  <p>
                    Every question is valid. No matter how basic or complex your financial situation
                    feels, we provide non-judgmental, patient answers.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className={`${MICRO} text-[#C5A059] block`}>Our Promise</span>
                  <p>
                    We will never push a financial product you do not fully understand or actually need.
                  </p>
                </div>
              </div>

            </div>

            {/* Subtle background card offset */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#C5A059]/10 to-transparent -z-10 blur-xl opacity-70 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
