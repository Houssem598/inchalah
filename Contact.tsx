import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <section id="contact" ref={ref} className="relative py-24 lg:py-40 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 gap-6 lg:gap-12 mb-16"
          >
            <div className="col-span-12 lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] tracking-widest uppercase text-gold-500 font-mono">
                  05 / Contact
                </span>
              </div>
              <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono">
                Begin a Conversation
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[72px] leading-[1.05] tracking-tightest text-ink-900 mb-8">
                Speak with our<br />
                <span className="italic text-gold-500">team directly</span>.
              </h2>
              <p className="text-[16px] lg:text-[17px] leading-relaxed text-ink-600 max-w-2xl font-light">
                Whether you are a prospective patient, an institutional partner, or a
                regulatory body, we welcome direct correspondence with our office.
              </p>
            </div>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-3">
              <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-6">
                Channels
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* General Inquiries */}
                <motion.a
                  href="mailto:houssem@beyondmedclinic.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group p-8 lg:p-10 border border-ink-900/[0.08] hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-8">
                    <Mail size={20} strokeWidth={1.25} className="text-gold-500" />
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.25}
                      className="opacity-30 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <div className="text-[10px] tracking-widest uppercase font-mono text-ink-400 group-hover:text-gold-400 transition-colors duration-500 mb-2">
                    General inquiries
                  </div>
                  <div className="font-serif text-[20px] lg:text-[24px] leading-tight">
                    houssem@beyondmedclinic.com
                  </div>
                  <div className="mt-6 pt-6 border-t border-ink-900/[0.08] group-hover:border-cream-50/10 transition-colors duration-500">
                    <span className="text-[12px] text-ink-500 group-hover:text-cream-50/60 transition-colors duration-500">
                      Response within 24 business hours
                    </span>
                  </div>
                </motion.a>

                {/* Registered Office */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-8 lg:p-10 border border-ink-900/[0.08]"
                >
                  <div className="flex items-start justify-between mb-8">
                    <MapPin size={20} strokeWidth={1.25} className="text-gold-500" />
                  </div>
                  <div className="text-[10px] tracking-widest uppercase font-mono text-ink-400 mb-2">
                    Registered office
                  </div>
                  <div className="font-serif text-[20px] lg:text-[24px] leading-tight text-ink-900">
                    20 Wenlock Road
                    <br />
                    London N1 7GU
                    <br />
                    United Kingdom
                  </div>
                  <div className="mt-6 pt-6 border-t border-ink-900/[0.08]">
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="text-ink-400 font-mono uppercase tracking-wider">
                        Companies House
                      </span>
                      <span className="text-ink-700 font-mono">17063347</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-900 text-cream-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="font-serif text-3xl lg:text-4xl font-light tracking-tight mb-6">
                Beyond<span className="italic text-gold-400">Med</span>
              </div>
              <p className="text-[14px] leading-relaxed text-cream-50/60 font-light max-w-sm">
                International medical tourism facilitator. UK incorporated. Operating with
                accredited clinical partners across Tunisia.
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <div className="text-[10px] tracking-widest uppercase text-gold-400 font-mono mb-4">
                Company
              </div>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <a href="#about" className="text-cream-50/70 hover:text-cream-50 link-underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-cream-50/70 hover:text-cream-50 link-underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#operations" className="text-cream-50/70 hover:text-cream-50 link-underline">
                    Operations
                  </a>
                </li>
                <li>
                  <a href="#governance" className="text-cream-50/70 hover:text-cream-50 link-underline">
                    Governance
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <div className="text-[10px] tracking-widest uppercase text-gold-400 font-mono mb-4">
                Legal
              </div>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <a href="#" className="text-cream-50/70 hover:text-cream-50 link-underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream-50/70 hover:text-cream-50 link-underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/17063347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-50/70 hover:text-cream-50 link-underline"
                  >
                    Companies House
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="text-[10px] tracking-widest uppercase text-gold-400 font-mono mb-4">
                Contact
              </div>
              <a
                href="mailto:houssem@beyondmedclinic.com"
                className="text-[14px] text-cream-50/70 hover:text-cream-50 link-underline block mb-2"
              >
                houssem@beyondmedclinic.com
              </a>
              <p className="text-[14px] text-cream-50/60 font-light">
                20 Wenlock Road, London N1 7GU
                <br />
                United Kingdom
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-cream-50/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[12px] text-cream-50/40 font-mono">
              © 2026 BeyondMed Group Ltd · Companies House Reg. No. 17063347 · England & Wales
            </p>
            <p className="text-[12px] text-cream-50/40 font-mono">
              Designed in Manila · Incorporated in London
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
