import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-40 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-widest uppercase text-gold-500 font-mono">
                01 / About
              </span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono">
              The Company
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-tightest text-ink-900 mb-8">
              A modern intermediary between<br />
              <span className="italic text-gold-500">global patients</span> and{' '}
              <span className="italic">trusted medical care</span>.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
              <p className="text-[16px] lg:text-[17px] leading-relaxed text-ink-600 font-light">
                BeyondMed Group Ltd was incorporated in the United Kingdom in March 2026 to
                serve as the corporate vehicle for our international medical tourism
                facilitation services. We do not provide medical care directly. Instead, we
                coordinate, advise, and support patients throughout their entire treatment
                journey.
              </p>
              <p className="text-[16px] lg:text-[17px] leading-relaxed text-ink-600 font-light">
                Our partner clinics in Tunisia are independently licensed medical facilities
                operated by board-certified surgeons. We maintain rigorous due diligence
                processes to ensure that every patient receives care that meets European
                clinical standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-6">
              Pillars
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-900/[0.08]">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="bg-cream-50 p-8 lg:p-10 group hover:bg-ink-900 transition-colors duration-500 cursor-default"
                >
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-ink-400 group-hover:text-gold-400 transition-colors duration-500">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-mono text-ink-300 group-hover:text-cream-50/40 transition-colors duration-500">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-[24px] lg:text-[28px] leading-[1.15] mb-4 text-ink-900 group-hover:text-cream-50 transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-ink-600 group-hover:text-cream-50/70 transition-colors duration-500 font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 lg:mt-32 grid grid-cols-12 gap-6 lg:gap-12"
        >
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-widest uppercase text-gold-500 font-mono">
                Mission
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 max-w-3xl">
            <p className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] text-ink-900 italic">
              "To provide international patients with transparent access to high-quality
              cosmetic medical care abroad, supported by uncompromising operational standards
              and patient-first ethics."
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-px bg-ink-900/20" />
              <span className="text-[11px] tracking-widest uppercase text-ink-500 font-mono">
                BeyondMed Group · Founding Statement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const pillars = [
  {
    number: '01',
    tag: 'Compliance',
    title: 'Regulatory rigour.',
    description:
      'UK incorporated entity operating under English law. Full Companies House registration with active filing history and transparent corporate governance.',
  },
  {
    number: '02',
    tag: 'Network',
    title: 'Vetted medical partners.',
    description:
      'We partner only with licensed Tunisian clinics whose surgeons meet European board certification standards. Each partnership is reviewed annually.',
  },
  {
    number: '03',
    tag: 'Ethics',
    title: 'Patient-centric ethics.',
    description:
      'Our coordination process places patient safety, informed consent, and full pricing transparency at the centre of every engagement.',
  },
  {
    number: '04',
    tag: 'Service',
    title: 'End-to-end coordination.',
    description:
      'From initial consultation to post-operative follow-up, our multilingual team coordinates every aspect of the patient journey across borders.',
  },
];
