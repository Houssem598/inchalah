import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end pt-32 pb-20 lg:pb-32 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0a0e14 1px, transparent 1px), linear-gradient(to bottom, #0a0e14 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Decorative gradient orb */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.4) 0%, rgba(201,169,110,0) 70%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Left side meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-3 flex lg:flex-col justify-between gap-4 mb-12 lg:mb-0"
          >
            <div>
              <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-2">
                Document
              </div>
              <div className="text-[12px] text-ink-700 font-mono">2026 / 001</div>
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-2">
                Issued
              </div>
              <div className="text-[12px] text-ink-700 font-mono">Manila / London</div>
            </div>
            <div className="hidden lg:block">
              <div className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-2">
                Reference
              </div>
              <div className="text-[12px] text-ink-700 font-mono">No. 17063347</div>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="col-span-12 lg:col-span-9">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-[11px] tracking-widest uppercase text-ink-700 font-mono">
                International Medical Tourism Facilitator
              </span>
            </motion.div>

            {/* Display headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-[48px] sm:text-[64px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tightest text-ink-900 mb-8 lg:mb-12"
            >
              Connecting global<br />
              patients with{' '}
              <span className="italic text-gold-500">accredited</span><br />
              medical excellence.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl text-[17px] lg:text-[19px] leading-relaxed text-ink-600 mb-12 lg:mb-16 font-light"
            >
              BeyondMed Group is a UK-incorporated facilitator coordinating international
              medical tourism for patients from France, the United Kingdom, the United States,
              and Canada. We partner exclusively with accredited cosmetic surgery clinics in
              Tunisia.
            </motion.p>

            {/* CTAs + Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink-900 text-cream-50 text-[12px] tracking-widest uppercase hover:bg-ink-800 transition-all"
              >
                Request consultation
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-ink-900/20 text-ink-900 text-[12px] tracking-widest uppercase hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-all"
              >
                Read more
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom credentials strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 lg:mt-32 pt-8 border-t border-ink-900/[0.08]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <Credential
              label="Incorporation"
              primary="England & Wales"
              secondary="Companies House"
            />
            <Credential
              label="Established"
              primary="2026"
              secondary="Active operation"
            />
            <Credential
              label="Markets served"
              primary="UK · FR · CA · USA"
              secondary="International reach"
            />
            <Credential
              label="Operations"
              primary="Tunisia"
              secondary="Accredited clinics"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Credential({
  label,
  primary,
  secondary,
}: {
  label: string;
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] tracking-widest uppercase text-ink-400 font-mono mb-2">
        {label}
      </span>
      <span className="font-serif text-[20px] text-ink-900 leading-tight">
        {primary}
      </span>
      <span className="text-[12px] text-ink-500 mt-1">{secondary}</span>
    </div>
  );
}
