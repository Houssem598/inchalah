import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Operations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="operations" ref={ref} className="relative py-24 lg:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-widest uppercase text-gold-500 font-mono">
                03 / Operations
              </span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono">
              Global Footprint
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-tightest text-ink-900 mb-8">
              Operating across{' '}
              <span className="italic text-gold-500">three continents</span>.
            </h2>
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-ink-600 max-w-2xl font-light">
              Our operational structure spans incorporation, partnerships, and team locations
              across multiple jurisdictions, allowing us to serve patients with localised
              support while maintaining centralised compliance.
            </p>
          </div>
        </motion.div>

        {/* Locations grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-6">
              Presence
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {locations.map((location, i) => (
                <motion.article
                  key={location.country}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="border border-ink-900/[0.08] p-8 lg:p-10 hover:border-ink-900/30 transition-colors group"
                >
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-ink-400">
                      {location.code}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-mono text-ink-400">
                      {location.role}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-serif text-[14px] text-ink-500 italic">
                      {location.flag}
                    </span>
                  </div>
                  <h3 className="font-serif text-[28px] lg:text-[32px] leading-tight text-ink-900 mb-2">
                    {location.country}
                  </h3>
                  <div className="text-[14px] text-ink-500 mb-6 font-mono">
                    {location.city}
                  </div>

                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-ink-600 mb-6 font-light">
                    {location.description}
                  </p>

                  <div className="space-y-2 pt-6 border-t border-ink-900/[0.08]">
                    {location.facts.map((fact) => (
                      <div key={fact.label} className="flex justify-between text-[12px]">
                        <span className="text-ink-400 font-mono uppercase tracking-wider">
                          {fact.label}
                        </span>
                        <span className="text-ink-700 font-mono">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 lg:mt-32 pt-16 border-t border-ink-900/[0.08]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-3">
                  {stat.label}
                </span>
                <span className="font-serif text-[44px] lg:text-[56px] leading-none text-ink-900 tabular">
                  {stat.value}
                </span>
                <span className="text-[12px] text-ink-500 mt-3">{stat.note}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const locations = [
  {
    code: 'GBR',
    role: 'Headquarters',
    flag: '— United Kingdom',
    country: 'London',
    city: '20 Wenlock Road, N1 7GU',
    description:
      'Registered office and primary corporate jurisdiction. All commercial agreements, banking relationships, and corporate governance flow through this entity.',
    facts: [
      { label: 'Status', value: 'Active' },
      { label: 'Reg. No.', value: '17063347' },
      { label: 'Type', value: 'Private Limited' },
    ],
  },
  {
    code: 'TUN',
    role: 'Operations',
    flag: '— Republic of Tunisia',
    country: 'Tunis',
    city: 'Partner clinic network',
    description:
      'Network of accredited cosmetic surgery clinics with whom we hold formal facilitation agreements. All medical procedures take place exclusively at these licensed facilities.',
    facts: [
      { label: 'Type', value: 'Partnership' },
      { label: 'Specialty', value: 'Cosmetic surgery' },
      { label: 'Standards', value: 'European' },
    ],
  },
  {
    code: 'PHL',
    role: 'Coordination',
    flag: '— Republic of the Philippines',
    country: 'Manila',
    city: 'Coordination centre',
    description:
      'Operations centre handling patient communication, marketing coordination, and English-language client liaison for our UK, US, and Canadian markets.',
    facts: [
      { label: 'Function', value: 'Liaison' },
      { label: 'Languages', value: 'EN · FR' },
      { label: 'Hours', value: '24/7' },
    ],
  },
  {
    code: 'FRA',
    role: 'Primary market',
    flag: '— French Republic',
    country: 'France',
    city: 'Patient market',
    description:
      'Our most established patient market, served continuously with French-language consultation, materials, and dedicated patient coordinators since inception.',
    facts: [
      { label: 'Status', value: 'Established' },
      { label: 'Language', value: 'French' },
      { label: 'Volume', value: 'Primary' },
    ],
  },
];

const stats = [
  { label: 'Countries served', value: '04', note: 'And expanding' },
  { label: 'Languages', value: '03', note: 'EN · FR · AR' },
  { label: 'Continents', value: '03', note: 'EU · AF · AS' },
  { label: 'Time zones', value: '24/7', note: 'Patient support' },
];
