/**
 * Shared display type scale.
 *
 * Fluid on phones, stepping up at `sm` / `xl`. Section headings run ~10%
 * below the hero headline.
 *
 * The hero headline deliberately wraps to TWO lines below `sm`. Holding it to
 * one line there caps it at ~29px, which collapses the headline-to-lead ratio
 * to ~1.8 against 2.89 on desktop. Two lines frees it to ~44px and restores
 * the proportion (~2.7) without shrinking body text. It is still a single
 * line from `sm` upward.
 *
 * Tailwind v4 scans this file, so the class strings are picked up as written —
 * keep them literal rather than composing them at runtime.
 */
export const HERO_HEADING =
  'text-[clamp(2rem,11.2vw,2.75rem)] sm:text-[2.5rem] xl:text-[3.25rem]';

export const SECTION_HEADING =
  'text-[clamp(1.2rem,6.5vw,2.15rem)] sm:text-[2.25rem] xl:text-[2.9rem]';

/** Intro paragraph under a section heading. */
export const SECTION_LEAD =
  'text-sm sm:text-base text-[#121824]/70 leading-relaxed';

/** Small uppercase eyebrow/label used on cards, panels and section kickers. */
export const MICRO_LABEL =
  'text-[10px] font-semibold uppercase tracking-widest';

/**
 * Hero intro paragraph. Fluid like the headline so the size *relationship*
 * survives down to phones — a fixed 18px here collapsed the headline-to-lead
 * ratio from 2.9 on desktop to 1.3 at 320px. Floored at 16px.
 */
export const HERO_LEAD =
  'text-[clamp(1rem,4.1vw,1.125rem)] leading-relaxed';
