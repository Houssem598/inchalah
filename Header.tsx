import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Operations', href: '#operations' },
  { label: 'Governance', href: '#governance' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream-50/95 backdrop-blur-md border-b border-ink-900/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#top" className="group flex items-baseline gap-2" aria-label="BeyondMed Group">
            <span className="font-serif text-2xl lg:text-3xl font-light tracking-tight text-ink-900">
              Beyond<span className="italic text-gold-500">Med</span>
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-ink-400 font-mono">
              Group Ltd
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[13px] tracking-wide text-ink-700 hover:text-ink-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-[11px] tracking-widest text-ink-400 font-mono uppercase">
              EST. 2026 · UK
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 text-cream-50 text-[12px] tracking-wider uppercase hover:bg-ink-800 transition-colors"
            >
              Enquire
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-ink-900"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} strokeWidth={1.25} /> : <Menu size={24} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-cream-50 border-t border-ink-900/[0.06]"
          >
            <nav className="px-6 py-6 flex flex-col gap-4" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] tracking-wide text-ink-700 hover:text-ink-900 py-2 editorial-line"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink-900 text-cream-50 text-[12px] tracking-wider uppercase"
              >
                Enquire →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
