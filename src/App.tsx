import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyMargoSection } from './components/WhyMargoSection';
import { ClarityInteractiveSection } from './components/ClarityInteractiveSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MARGO_CONTACT } from './data/margoData';
import { MessageCircle } from 'lucide-react';
import { currentRoute, navigate, type Route } from './routing';
import { FormPage } from './components/FormPage';

export default function App() {
  // True while the hero CTA is on screen; the navbar CTA hides in that window.
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const [route, setRoute] = useState<Route>(() => currentRoute());
  // Set by the Clarity section so its scenario lands in the Contact composer.
  const [contactPrefill, setContactPrefill] = useState<{ topic: string; message: string } | null>(null);
  // Bumped on every hand-over so repeat clicks still remount the composer.
  const [prefillNonce, setPrefillNonce] = useState(0);

  // Every "get in touch" trigger lands on the Contact composer rather than
  // opening a second, weaker version of it in a modal.
  const goToContact = (prefill?: { topic: string; message: string }) => {
    setContactPrefill(prefill ?? null);
    setPrefillNonce((n) => n + 1);
    if (currentRoute() !== 'home') {
      navigate('home');
      setRoute('home');
    }
    requestAnimationFrame(() =>
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    );
  };

  // Back/forward buttons, and our own navigate() which dispatches popstate.
  useEffect(() => {
    const sync = () => setRoute(currentRoute());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#121824] flex flex-col font-sans selection:bg-[#E2D1A8] selection:text-[#0F141C]">
      {/* Sticky Header */}
      <Navbar
        onEnquire={goToContact}
        showGetStarted={route !== 'home' || !heroCtaVisible}
        route={route}
        onNavigate={(r) => { navigate(r); setRoute(r); }}
      />

      {/* Main Content Sections */}
      {route === 'form' ? (
        <FormPage />
      ) : (
        <main className="flex-grow">
          <HeroSection
            onEnquire={goToContact}
            onCtaVisibilityChange={setHeroCtaVisible}
          />
          <ServicesSection onEnquire={goToContact} />
          <WhyMargoSection />
          <ClarityInteractiveSection onDiscuss={goToContact} />
          <ContactSection
            key={prefillNonce}
            prefill={contactPrefill}
          />
        </main>
      )}

      {/* Footer */}
      {route === 'home' && <Footer />}


      {/* Floating Persistent WhatsApp Quick-Action Button */}
      <a
        href={MARGO_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#121824] hover:bg-[#1A2233] text-[#FAF5EA] p-3.5 sm:px-5 sm:py-3 rounded-full border border-[#C5A059]/50 shadow-xl shadow-[#121824]/20 flex items-center gap-3 group transition-all duration-300 hover:scale-105"
        title="Chat with Margo Advisory on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
        </div>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide text-[#FAF5EA]">
          Chat with Margo
        </span>
      </a>
    </div>
  );
}
