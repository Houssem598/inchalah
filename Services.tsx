import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-40 bg-ink-900 text-cream-50 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
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
                02 / Services
              </span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-cream-50/40 font-mono">
              Scope of Practice
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-tightest mb-8">
              A coordinated suite of<br />
              <span className="italic text-gold-400">facilitation services</span>.
            </h2>
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-cream-50/70 max-w-2xl font-light">
              We operate as the principal coordination layer between international patients and
              their treating clinics. Our role is logistical, administrative, and advisory — never
              clinical.
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-widest uppercase text-cream-50/40 font-mono mb-6">
              Categories
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="border-t border-cream-50/10">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="group border-b border-cream-50/10 py-8 lg:py-10 hover:bg-cream-50/[0.02] transition-colors duration-500 cursor-default"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] text-cream-50/40 tracking-wider">
                        {service.id}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-5">
                      <h3 className="font-serif text-[22px] lg:text-[28px] text-cream-50 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <p className="text-[14px] lg:text-[15px] leading-relaxed text-cream-50/60 font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    id: 'S.01',
    title: 'Patient consultation & advisory',
    description:
      'Pre-treatment consultation, candidate assessment, procedure recommendations, and personalised package quotation by qualified advisors.',
  },
  {
    id: 'S.02',
    title: 'Clinic coordination',
    description:
      'Direct coordination with our network of accredited Tunisian partner clinics. Surgery scheduling, pre-operative requirements, and surgeon communication.',
  },
  {
    id: 'S.03',
    title: 'Travel & accommodation',
    description:
      'End-to-end logistics including flight bookings, premium hotel accommodation, airport transfers, and dedicated patient liaison throughout the stay.',
  },
  {
    id: 'S.04',
    title: 'Post-operative follow-up',
    description:
      'Continuous patient care coordination after the procedure. Multi-week follow-up protocols, communication with treating surgeons, and aftercare guidance.',
  },
  {
    id: 'S.05',
    title: 'Multilingual patient liaison',
    description:
      'Communication and documentation support in English, French, and Arabic. Translation services, paperwork coordination, and cultural mediation.',
  },
];
