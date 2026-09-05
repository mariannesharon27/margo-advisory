import React, { useEffect, useRef, useState } from 'react';
import { MARGO_CONTACT } from '../data/margoData';
import { Phone, Mail, MessageCircle, ArrowUpRight, ChevronDown, Plus, X } from 'lucide-react';
import { MICRO_LABEL, SECTION_HEADING, SECTION_LEAD } from '../typography';

const TOPICS = [
  'General Advisory',
  'Investment Planning',
  'Mutual Funds',
  'Life Insurance / LIC',
  'Health Insurance',
  'Income Tax Return (ITR) Services',
  'Financial Planning & Guidance',
];

interface ContactSectionProps {
  /** Scenario handed over from the Clarity section; selects the topic, fills
      the message and scrolls here, so outreach funnels through one place. */
  prefill?: { topic: string; message: string } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefill }) => {
  // Initialised from the handover rather than assigned in an effect; App
  // remounts this section with a fresh key whenever a new scenario arrives.
  const [topic, setTopic] = useState(
    prefill && TOPICS.includes(prefill.topic) ? prefill.topic : TOPICS[0],
  );
  const [showName, setShowName] = useState(false);
  const [showNote, setShowNote] = useState(Boolean(prefill?.message));
  const [name, setName] = useState('');
  const [note, setNote] = useState(prefill?.message ?? '');
  const sectionRef = useRef<HTMLElement>(null);

  // Scrolling is a genuine external-system effect, unlike the state above.
  useEffect(() => {
    if (prefill) sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [prefill]);

  const who = (showName && name.trim()) || '';

  const whatsappUrl = () => {
    let msg = `Hello Margo Advisory,\n\n`;
    if (who) msg += `My name is ${who}.\n`;
    msg += `I would like to inquire about: ${topic}.`;
    if (showNote && note.trim()) msg += `\n\nAdditional note: ${note.trim()}`;
    return `https://wa.me/919930074680?text=${encodeURIComponent(msg)}`;
  };

  const emailUrl = () => {
    const subject = `Financial enquiry: ${topic}${who ? ` — ${who}` : ''}`;
    let body = `Hello Margo Advisory team,\n\n`;
    if (who) body += `My name is ${who}.\n`;
    body += `I am reaching out to discuss ${topic}.`;
    if (showNote && note.trim()) body += `\n\nDetails:\n${note.trim()}`;
    body += `\n\nPlease let me know when we can connect.\n\nThank you!`;
    return `mailto:${MARGO_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Three ways to reach Margo. No hint copy — nobody needs telling what
  // WhatsApp does — and no repeated number, since each option dials it.
  const options = [
    { label: 'WhatsApp', href: MARGO_CONTACT.whatsappUrl, icon: MessageCircle,
      tint: 'text-[#25D366]', external: true },
    { label: 'Call', href: `tel:${MARGO_CONTACT.phone}`, icon: Phone,
      tint: 'text-[#B89343]', external: false },
    { label: 'Email', href: `mailto:${MARGO_CONTACT.email}`, icon: Mail,
      tint: 'text-[#B89343]', external: false },
  ];

  const toggle = (on: boolean) =>
    `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold transition-all cursor-pointer ${
      on
        ? 'bg-[#E2D1A8] text-[#121824] border-[#C5A059]'
        : 'bg-[#FDFBF7] text-[#121824]/70 border-[#C5A059]/30 hover:border-[#C5A059]'
    }`;

  const field =
    'w-full bg-[#FDFBF7] border border-[#C5A059]/30 rounded-xl p-3 text-xs text-[#121824] focus:outline-none focus:border-[#C5A059]';

  return (
    <section ref={sectionRef} id="contact" className="py-12 bg-[#FAF5EA] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — same pattern as Services: nav-matching label, then
            the two-tone heading, left-aligned over a hairline. */}
        <div className="space-y-3 mb-6 pb-3 border-b border-[#C5A059]/20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] block text-[#B89343]">
            Contact Us
          </span>
          <h2 className={`font-serif ${SECTION_HEADING} text-[#121824] leading-[1.12]`}>
            Start a conversation{' '}
            <span className="italic text-[#B89343]">about your money.</span>
          </h2>
          <p className={SECTION_LEAD}>
            No forms to submit, no waiting for automated tickets. Reach out directly.
          </p>
        </div>

        {/* One card: the three direct options, then the message builder. */}
        <div className="bg-[#FBF8F2] rounded-3xl border border-[#C5A059]/30 p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {options.map(({ label, href, icon: Icon, tint, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#C5A059]/25 hover:border-[#C5A059] hover:bg-[#FAF5EA] transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${tint}`} />
                  <span className="text-sm font-semibold text-[#121824]">{label}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-[13px]">
            <span className="font-semibold text-[#121824]">{MARGO_CONTACT.advisor}</span>
            <span className="text-[#8C7A6B]">
              {MARGO_CONTACT.formattedPhone} · {MARGO_CONTACT.email}
            </span>
          </div>

          <h3 className="font-serif text-xl text-[#121824] pt-1">Start a conversation</h3>

          {/* Topic */}
          <div className="space-y-1.5">
            <label htmlFor="contact-topic" className={`${MICRO_LABEL} text-[#121824] block`}>
              I am interested in&hellip;
            </label>
            <div className="relative">
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`${field} appearance-none pr-9 cursor-pointer`}
              >
                {TOPICS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#8C7A6B] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Optional extras, off by default */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={showName}
              onClick={() => setShowName((v) => !v)}
              className={toggle(showName)}
            >
              {showName ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              Include name
            </button>
            <button
              type="button"
              aria-pressed={showNote}
              onClick={() => setShowNote((v) => !v)}
              className={toggle(showNote)}
            >
              {showNote ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              Add a message
            </button>
          </div>

          {showName && (
            <input
              type="text"
              autoFocus
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
            />
          )}

          {showNote && (
            <textarea
              rows={3}
              autoFocus
              placeholder="Anything specific you'd like to cover"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className={`${field} resize-none`}
            />
          )}

          <div className="pt-3 border-t border-[#C5A059]/20 flex flex-col sm:flex-row gap-2.5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-xs font-semibold uppercase tracking-wider bg-[#121824] hover:bg-[#1A2233] text-[#FAF5EA] py-2.5 px-5 rounded-full border border-[#C5A059]/40 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Send via WhatsApp</span>
            </a>
            <a
              href={emailUrl()}
              className="flex-1 text-xs font-semibold uppercase tracking-wider bg-[#FAF5EA] hover:bg-[#EFE8DA] text-[#121824] py-2.5 px-5 rounded-full border border-[#C5A059]/30 flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B89343]" />
              <span>Send via Email</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
