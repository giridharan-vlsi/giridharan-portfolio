'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

const levelBadgeStyles: Record<string, string> = {
  Strong: 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
  'Intermediate / Hands-on': 'bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
  Intermediate: 'bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
  'Hands-on / Learning': 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
  'Beginner / Learning': 'bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700',
}

export default function SkillsSection() {
  const reduced = usePrefersReducedMotion()

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.7, delay: i * 0.08, ease: ease.paper },
    }),
  }

  return (
    <section
      id="skills"
      className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
      aria-label="Technical Skills"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="mb-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                02 · SEMICONDUCTOR COMPETENCIES
              </span>
              <span className="h-px w-8 bg-ink/20" />
            </div>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              {site.techSkills.heading}
            </h2>
            <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
              {site.techSkills.subheading}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem]">
            <span className="rounded border border-emerald-300 bg-emerald-50 px-2 py-0.5 font-bold text-emerald-800">
              ● Strong Foundation
            </span>
            <span className="rounded border border-sky-300 bg-sky-50 px-2 py-0.5 font-bold text-sky-800">
              ● Intermediate / Hands-on
            </span>
            <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 font-bold text-amber-800">
              ● Hands-on / Learning
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.techSkills.categories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              custom={idx}
              viewport={viewportOnce}
              className="flex flex-col justify-between rounded-[0.75rem] border border-ink/15 bg-paper/85 p-5 shadow-xs transition-all duration-200 hover:border-ink/35 hover:bg-paper"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-2.5 mb-3.5">
                  <h3 className="m-0 font-mono text-[0.78rem] font-bold tracking-wider text-ink uppercase">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[0.65rem] text-graphite">
                    0{idx + 1}
                  </span>
                </div>

                <ul className="m-0 p-0 list-none space-y-2" role="list">
                  {category.skills.map((skill) => {
                    const badgeClass =
                      levelBadgeStyles[skill.level] ||
                      'bg-stone-50 text-stone-700 border-stone-200'
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-2 rounded-md border border-ink/10 bg-white/70 px-3 py-1.5 transition-all hover:bg-white"
                      >
                        <span className="font-mono text-[0.78rem] font-semibold text-ink">
                          {skill.name}
                        </span>
                        <span
                          className={`rounded border px-1.5 py-0.5 font-mono text-[0.62rem] font-bold shrink-0 ${badgeClass}`}
                        >
                          {skill.level}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key EDA Platforms Ribbon */}
        <div className="mt-8 rounded-[0.75rem] border border-ink/15 bg-white/60 p-4">
          <p className="m-0 mb-3 font-mono text-[0.68rem] font-bold tracking-widest text-ink/70 uppercase">
            PRIMARY EDA TOOLS &amp; HARDWARE PLATFORMS
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {site.skills.items.map((tool) => (
              <div
                key={tool.label}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-3 py-1 font-mono text-[0.75rem] font-bold text-ink shadow-2xs hover:border-signal"
              >
                {tool.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tool.src}
                    alt={tool.label}
                    className="h-3.5 w-auto max-w-[20px] object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-signal text-[0.55rem] text-white">
                    ✓
                  </span>
                )}
                <span>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
