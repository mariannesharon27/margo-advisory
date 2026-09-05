import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { MARGO_CONTACT } from '../data/margoData';
import { BASE, hrefFor, type Route } from '../routing';

interface NavbarProps {
  onEnquire: (prefill?: { topic: string; message: string }) => void;
  /** Hidden while the hero's own Contact Us button is on screen. */
  showGetStarted?: boolean;
  route: Route;
  onNavigate: (route: Route) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquire, showGetStarted = true, route, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prefixed with BASE so they resolve to the home page even from /form.
  const navLinks: { name: string; href: string; route?: Route }[] = [
    { name: 'Services', href: `${BASE}#services` },
    { name: 'Why Margo', href: `${BASE}#why-margo` },
    { name: 'Clarity Guide', href: `${BASE}#clarity-guide` },
    { name: 'Enquiry', href: hrefFor('form'), route: 'form' },
  ];

  // A real href, so middle-click and "open in new tab" behave; the click
  // handler upgrades it to an in-app transition.
  const go = (to: Route) => (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(to);
  };

  const handleNavClick = (link: { name: string; href: string; route?: Route }) => (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (link.route === 'form') {
      e.preventDefault();
      setMobileMenuOpen(false);
      onNavigate('form');
    } else if (route === 'form') {
      e.preventDefault();
      setMobileMenuOpen(false);
      onNavigate('home');
      const hash = link.href.split('#')[1];
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || route === 'form'
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#C5A059]/20 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href={BASE} onClick={go('home')} className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#121824] text-[#FAF5EA] flex items-center justify-center font-serif text-xl font-bold tracking-tight border border-[#C5A059]/40 group-hover:border-[#C5A059] transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-[#121824] tracking-tight leading-none group-hover:text-[#B89343] transition-colors">
                Margo
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A6B] font-medium mt-0.5">
                Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isCurrent = link.route === 'form' && route === 'form';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C5A059] after:transition-all after:duration-300 ${
                    isCurrent
                      ? 'text-[#B89343] font-semibold after:w-full'
                      : 'text-[#121824]/80 hover:text-[#B89343] after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onEnquire()}
              aria-hidden={!showGetStarted}
              tabIndex={showGetStarted ? 0 : -1}
              className={`bg-[#121824] hover:bg-[#1A2233] text-[#FDFBF7] hover:text-[#FAF5EA] px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow border border-[#C5A059]/30 hover:border-[#C5A059] flex items-center gap-2 group cursor-pointer ${
                showGetStarted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#121824] hover:bg-[#FAF5EA] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#C5A059]/30 px-4 pt-3 pb-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isCurrent = link.route === 'form' && route === 'form';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`text-base font-serif font-medium py-2 border-b border-[#8C7A6B]/10 transition-colors ${
                    isCurrent
                      ? 'text-[#B89343] font-semibold'
                      : 'text-[#121824] hover:text-[#B89343]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${MARGO_CONTACT.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#8C7A6B]/30 text-sm font-semibold text-[#121824]"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89343]" />
              <span>Call: {MARGO_CONTACT.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquire();
              }}
              className="text-xs font-semibold uppercase tracking-wider w-full bg-[#121824] text-[#FDFBF7] py-3 rounded-full border border-[#C5A059]/40 flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
