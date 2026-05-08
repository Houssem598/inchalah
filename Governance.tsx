import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, FileCheck, Building2, ScrollText } from 'lucide-react';

export default function Governance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="governance" ref={ref} className="relative py-24 lg:py-40 bg-ink-900 text-cream-50 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-widest uppercase text-gold-400 font-mono">
                04 / Governance
              </span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-cream-50/40 font-mono">
              Corporate Standards
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-tightest mb-8">
              Built on a foundation of<br />
              <span className="italic text-gold-400">institutional integrity</span>.
            </h2>
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-cream-50/70 max-w-2xl font-light">
              We operate to the standards expected by financial institutions, payment
              providers, and regulators worldwide. Our governance framework is designed for
              transparency, accountability, and long-term partnership trust.
            </p>
          </div>
        </motion.div>

        {/* Compliance cards */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-widest uppercase text-cream-50/40 font-mono mb-6">
              Framework
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-50/10">
              {compliance.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="bg-ink-900 p-8 lg:p-10 group hover:bg-ink-800 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 border border-cream-50/20 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-colors">
                      <item.icon size={18} strokeWidth={1.25} />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-mono text-cream-50/40">
                      {item.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] lg:text-[26px] leading-tight text-cream-50 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-cream-50/60 font-light mb-4">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-cream-50/10">
                    <span className="text-[11px] tracking-widest uppercase font-mono text-gold-400">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Document strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 lg:mt-32 pt-16 border-t border-cream-50/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="text-[10px] tracking-widest uppercase text-gold-400 font-mono mb-3">
                Public Records
              </div>
              <p className="font-serif text-[24px] lg:text-[32px] leading-tight max-w-xl">
                Our incorporation, directors, and corporate filings are publicly available via
                Companies House.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right shrink-0">
              <span className="text-[11px] tracking-widest uppercase text-cream-50/40 font-mono">
                Verify our entity
              </span>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/17063347"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[14px] text-gold-400 hover:text-gold-500 transition-colors inline-flex items-center gap-2 justify-end"
              >
                Companies House → 17063347
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const compliance = [
  {
    code: 'G.01',
    icon: Building2,
    title: 'UK Limited Company',
    description:
      'BeyondMed Group Ltd is a duly incorporated private limited company under English & Welsh law, fully compliant with the Companies Act 2006.',
    tag: 'Companies House — Active',
  },
  {
    code: 'G.02',
    icon: ScrollText,
    title: 'Transparent Reporting',
    description:
      'Annual filings, confirmation statements, and director records are submitted on time and publicly accessible through official UK government registers.',
    tag: 'Filings — Up to date',
  },
  {
    code: 'G.03',
    icon: Shield,
    title: 'Data Protection',
    description:
      'We adhere to GDPR, UK Data Protection Act 2018, and Philippine Data Privacy Act standards across all patient communications and operational data.',
    tag: 'GDPR · UK DPA · RA 10173',
  },
  {
    code: 'G.04',
    icon: FileCheck,
    title: 'Patient Safeguards',
    description:
      'Standardised patient agreements, full medical disclosure protocols, informed consent verification, and post-treatment care commitment documentation.',
    tag: 'Patient-first protocols',
  },
];
