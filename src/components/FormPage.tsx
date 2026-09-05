import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * The client enquiry form, embedded from its own deployment.
 *
 * `?survey=only` is that app's embed mode — it drops its own nav buttons, but
 * still renders a dark brand bar (66px at >=sm, 63px on phones). We already
 * show a header, so the iframe is shifted up by exactly that height inside an
 * overflow-hidden wrapper to crop it. The bar is `position: sticky`, which
 * means it pins to the iframe's own viewport top — above the clip — so it
 * stays hidden while scrolling rather than sliding back into view.
 *
 * Note: an iframe's src is visible in the page source. This keeps the address
 * bar clean and the seam invisible in normal use; it is not a way to keep the
 * underlying URL secret.
 */
const FORM_SRC =
  'https://margo-advsiory-enquiry-form.ai.studio/?survey=only';

export const FormPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [navH, setNavH] = useState(66);

  // The header is fixed, and its height varies by breakpoint (66px on phones
  // and wide desktop, 79px around 768px where the nav links and both buttons
  // share a row). Measured rather than hardcoded so the form never tucks
  // under it or leaves a gap.
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const measure = () => setNavH(Math.round(header.getBoundingClientRect().height));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  return (
    <main className="flex-grow flex flex-col bg-[#FDFBF7]" style={{ paddingTop: navH }}>
      <div
        className="flex-grow relative overflow-hidden"
        style={{ minHeight: `calc(100vh - ${navH}px)` }}
      >
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-[#FDFBF7]">
            <Loader2 className="w-5 h-5 text-[#B89343] animate-spin" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8C7A6B]">
              Loading your enquiry form
            </p>
          </div>
        )}

        {/* Shifted up to crop the embedded app's own brand bar. */}
        <iframe
          src={FORM_SRC}
          title="Margo Advisory client enquiry form"
          onLoad={() => setLoaded(true)}
          className="absolute inset-x-0 w-full border-0
                     -top-[63px] h-[calc(100%+63px)]
                     sm:-top-[66px] sm:h-[calc(100%+66px)]"
        />
      </div>
    </main>
  );
};
