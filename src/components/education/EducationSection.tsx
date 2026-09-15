'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function EducationSection() {
  const reduced = usePrefersReducedMotion()

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.7, delay: i * 0.1, ease: ease.paper },
    }),
  }

  return (
    <section
      id="education"
      className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
      aria-label="Academic Background and Education"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="mb-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                09 · ACADEMIC CREDENTIALS
              </span>
              <span className="h-px w-8 bg-ink/20" />
            </div>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              {site.education.heading}
            </h2>
            <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
              Undergraduate Degree &amp; Secondary Schooling
            </p>
          </div>
          <span className="rounded border border-ink/15 bg-white/75 px-3 py-1 font-mono text-[0.72rem] text-graphite">
            CHENNAI &amp; TIRUVANNAMALAI
          </span>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.education.items.map((item, idx) => (
            <motion.div
              key={item.degree}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              custom={idx}
              viewport={viewportOnce}
              className="flex flex-col justify-between rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-6 shadow-xs hover:border-ink/35 transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-2.5 mb-3.5">
                  <span className="font-mono text-[0.7rem] font-bold text-signal">
                    0{idx + 1} · {idx === 0 ? 'COLLEGE' : idx === 1 ? '12TH STANDARD' : '10TH STANDARD'}
                  </span>
                  <span className="rounded bg-ink px-2 py-0.5 font-mono text-[0.68rem] font-bold text-paper">
                    {item.grade}
                  </span>
                </div>

                <h3 className="m-0 font-mono text-[1rem] font-bold text-ink leading-snug">
                  {item.degree}
                </h3>

                {item.specialization && (
                  <p className="m-0 mt-1 font-mono text-[0.74rem] font-semibold text-signal">
                    {item.specialization}
                  </p>
                )}

                <p className="m-0 mt-2 font-mono text-[0.82rem] text-ink/90 font-medium">
                  {item.institution}
                </p>

                <p className="m-0 mt-0.5 font-mono text-[0.72rem] text-graphite">
                  {item.affiliation} · {item.period}
                </p>

                <p className="m-0 mt-3 font-mono text-[0.75rem] text-graphite/90 border-t border-ink/10 pt-2.5 leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spoken Languages Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink/15 bg-white/70 p-4 sm:p-5">
          <div>
            <span className="block font-mono text-[0.68rem] font-bold tracking-widest text-signal uppercase mb-1">
              SPOKEN &amp; PROFESSIONAL LANGUAGES
            </span>
            <div className="flex flex-wrap gap-2.5">
              {site.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="rounded-md border border-ink/15 bg-white px-3 py-1.5 font-mono text-[0.75rem]"
                >
                  <strong className="text-ink">{lang.language}: </strong>
                  <span className="text-graphite">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="font-mono text-[0.72rem] text-graphite">
            Available for in-person in Chennai or remote / hybrid internships
          </div>
        </div>
      </div>
    </section>
  )
}
