# Notes

Behaviour and decisions that aren't obvious from reading the code.

---

## Navbar "Get Started" hides while the hero CTA is on screen

**What happens:** the header's *Get Started* button is invisible at the top of
the page, and fades in once you scroll past the hero's own *Get Started*.
Scroll back up and it fades out again. Only one primary CTA competes for
attention at a time.

**How it's wired:**

| | |
|---|---|
| [src/components/HeroSection.tsx](src/components/HeroSection.tsx) | An `IntersectionObserver` watches the hero's Get Started button and reports in/out of viewport via the optional `onCtaVisibilityChange` prop. |
| [src/App.tsx](src/App.tsx) | Owns the `heroCtaVisible` state and passes `showGetStarted={!heroCtaVisible}` down to the Navbar. |
| [src/components/Navbar.tsx](src/components/Navbar.tsx) | Fades its button on the `showGetStarted` prop. |

**Details worth knowing:**

- The button stays **mounted and space-reserving** — it's `opacity-0
  -translate-y-1 pointer-events-none`, not `hidden` or unmounted. Removing it
  would let the nav reflow and shift the links sideways on every scroll past
  the hero. Measured: the nav button's box stays 135px wide in both states.
- It also gets `aria-hidden` and `tabIndex={-1}` while hidden, so it isn't
  announced by screen readers or reachable by keyboard tabbing when invisible.
- `threshold: 0` — the swap happens the moment the hero button's box leaves
  the viewport entirely, not when it's partially out.
- Initial state is `heroCtaVisible = true`, so the navbar CTA is hidden on
  first paint rather than flashing in and out.
- If `IntersectionObserver` is unavailable, the navbar CTA is left **showing**.
  Failing toward a visible CTA is the safer default.
- Only the **desktop** navbar button is affected. The mobile one lives inside
  a menu the user opens deliberately, so hiding it there would be confusing.

---

## Typography lives in one file

[src/typography.ts](src/typography.ts) exports `HERO_HEADING`,
`SECTION_HEADING`, `SECTION_LEAD` and `MICRO_LABEL`. Change the display scale
there rather than in individual components.

Two things that aren't obvious:

- **Headings are fluid (`clamp`/`vw`) on phones**, then step at `sm`/`xl`.
- **The hero headline wraps to two lines below `sm`, deliberately.** Holding it
  to one line on a phone caps it at ~29px, which collapses the headline-to-lead
  ratio to ~1.8 against 2.89 on desktop — the hero stops reading as a hero. Two
  lines frees it to ~44px and restores the proportion (~2.7 at 390px) without
  shrinking body text below 16px. It is one line from `sm` upward.
- **`HERO_LEAD` is fluid for the same reason.** It was pinned at 18px, so as the
  headline shrank on narrow screens the ratio fell to 1.28 at 320px. The
  *relationship* between the two has to scale, not just the heading.
- **The scale steps *down* at `lg`.** The hero column is full width at `md`
  (720px) but becomes 7-of-12 at `lg` (546px), making `lg` the tightest point
  on the whole range. A monotonically increasing scale overflows there.

Tailwind v4 scans `typography.ts`, so the class strings must stay **literal** —
don't compose them at runtime or the classes won't be generated.

---

## The site is fully static, on purpose

No backend, no API keys, no network calls. Every call to action builds a
prefilled `wa.me` or `mailto:` link, per the site's own copy ("No forms to
submit"). This is what makes GitHub Pages hosting viable.

`metadata.json` is an **AI Studio** file, not a web-app one — nothing in the
build reads it. Its `majorCapabilities` is deliberately empty; the original
export declared `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` despite there being
no Gemini code anywhere in the source.

If a Gemini feature ever lands, do **not** inline the key with Vite's `define`
(the original export did exactly that, which ships the key in the bundle).
Use Firebase AI Logic, a serverless proxy, or move hosts.
