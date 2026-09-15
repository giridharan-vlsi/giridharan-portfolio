'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function IntroSection() {
  const reduced = usePrefersReducedMotion()

  const group: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced ? 0 : 0.05 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.8, delay: i * 0.1, ease: ease.paper },
    }),
  }

  const plate: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: reduced ? { duration: 0 } : { duration: 0.9, ease: ease.paper },
    },
  }

  return (
    <section
      id="about"
      className="content-auto relative w-full py-[clamp(3rem,6vw,5.5rem)] scroll-mt-24"
      aria-label="About Giridharan S"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* ─── SECTION HEADING ─── */}
          <div className="mb-6 sm:mb-8 border-b border-ink/20 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                01 · PROFILE &amp; FOCUS
              </span>
              <span className="h-px w-8 bg-ink/20" />
            </div>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', letterSpacing: '-0.03em' }}
            >
              {site.intro.heading}
            </h2>
          </div>

          {/* ─── 2-COLUMN RESPONSIVE LAYOUT (PHOTO + BIO) ─── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-start">
            {/* Left Column: Professional Portrait Image */}
            <motion.div className="w-full md:col-span-5" variants={plate}>
              <div className="mx-auto max-w-[340px] sm:max-w-[380px] md:max-w-none">
                {/* Restrained engineering frame matching portfolio aesthetic */}
                <div className="relative rounded-2xl border-2 border-ink/15 bg-white/80 p-2.5 shadow-xs transition-all duration-300 hover:border-ink/35 hover:shadow-sm">
                  {/* Subtle technical corner tick accents */}
                  <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-signal" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-signal" aria-hidden="true" />
                  <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-signal" aria-hidden="true" />
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-signal" aria-hidden="true" />

                  {/* Professional Portrait Container */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-paper-shade">
                    <Image
                      src="/assets/profile-professional.jpeg"
                      alt={`${site.firstName} ${site.lastName} — VLSI Engineer`}
                      width={600}
                      height={600}
                      priority
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Telemetry card caption below photo */}
                  <div className="mt-3 flex items-center justify-between border-t border-ink/10 px-1 pt-2 font-mono text-[0.68rem]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-signal animate-pulse" aria-hidden="true" />
                      <span className="font-bold text-ink tracking-wide">
                        {site.firstName} {site.lastName}
                      </span>
                    </div>
                    <span className="text-graphite">{site.location}</span>
                  </div>
                </div>

                {/* Quick Academic Credential Callout */}
                <div className="mt-3 rounded-lg border border-ink/10 bg-paper/60 px-3 py-2 font-mono text-[0.68rem] text-graphite">
                  <span className="font-bold text-ink">B.Tech VLSI Design &amp; Technology</span>
                  <span className="mx-1.5 text-ink/30">|</span>
                  <span>RIT Chennai</span>
                  <span className="mx-1.5 text-ink/30">|</span>
                  <span className="font-bold text-signal">8.00 CGPA</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Bio Copy, Engineering Terminal & Stats */}
            <motion.div className="w-full min-w-0 md:col-span-7" variants={item} custom={2}>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-3 py-1 font-mono text-[0.72rem] font-bold text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                <span>{site.intro.roleBadge}</span>
              </div>

              <p className="m-0 mt-3 font-bold text-ink text-[1.08rem] sm:text-[1.15rem] leading-snug">
                {site.intro.lede}
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {site.intro.paragraphs.map((para) => (
                  <p key={para} className="m-0 text-graphite text-[0.92rem] sm:text-[0.95rem] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* VLSI Workstation Terminal */}
              <div className="mt-5 overflow-hidden rounded-xl border border-ink/20 bg-[#121211] p-3.5 text-[#e6e4dc] shadow-xs">
                <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f4b400]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0f9d58]" />
                    <span className="ml-2 font-mono text-[0.7rem] tracking-wider text-white/60 truncate">
                      giridharan@eda-workstation:~$ profile --details
                    </span>
                  </div>
                  <span className="shrink-0 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.62rem] text-white/70">
                    LINUX_WORKSTATION
                  </span>
                </div>
                <pre className="m-0 overflow-x-auto font-mono text-[0.74rem] leading-relaxed text-white/90">
                  <code>
                    <span className="text-white/40"># VLSI Engineering Profile</span>{'\n'}
                    <span className="text-[#f4b400]">name</span>          = <span className="text-[#0f9d58]">&quot;{site.intro.terminal.identity}&quot;</span>{'\n'}
                    <span className="text-[#f4b400]">domain</span>        = <span className="text-[#0f9d58]">&quot;{site.intro.terminal.domain}&quot;</span>{'\n'}
                    <span className="text-[#f4b400]">education</span>     = <span className="text-[#0f9d58]">&quot;{site.intro.terminal.degree}&quot;</span>{'\n'}
                    <span className="text-[#f4b400]">college</span>       = <span className="text-[#0f9d58]">&quot;{site.intro.terminal.institution}&quot;</span>{'\n'}
                    <span className="text-[#f4b400]">cgpa</span>          = <span className="text-signal font-bold">&quot;{site.intro.terminal.cgpa}&quot;</span>{'\n'}
                    <span className="text-[#f4b400]">primary_focus</span> = <span className="text-[#4285f4]">&quot;{site.intro.terminal.primaryFocus}&quot;</span>{'\n'}
                    <span className="text-[#f4b400]">career_goal</span>   = <span className="text-signal">&quot;{site.intro.terminal.goal}&quot;</span>
                  </code>
                </pre>
              </div>

              {/* Spoken Languages & Stats */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 pt-3.5">
                <div>
                  <p className="eyebrow m-0 font-mono text-[0.65rem] tracking-wider text-graphite uppercase">
                    SPOKEN LANGUAGES
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {site.intro.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded border border-ink/15 bg-white/70 px-2 py-0.5 font-mono text-[0.72rem] font-medium text-ink"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 font-mono text-[0.75rem]">
                  <div>
                    <span className="block text-[0.62rem] text-graphite">CGPA</span>
                    <span className="font-bold text-signal text-[1rem]">8.00</span>
                  </div>
                  <div className="h-6 w-px bg-ink/15" />
                  <div>
                    <span className="block text-[0.62rem] text-graphite">GRADUATION</span>
                    <span className="font-bold text-ink text-[1rem]">2028</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
