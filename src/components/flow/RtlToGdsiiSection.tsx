'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function RtlToGdsiiSection() {
  const reduced = usePrefersReducedMotion()

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.65, delay: i * 0.06, ease: ease.paper },
    }),
  }

  return (
    <section
      id="flow"
      className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
      aria-label="RTL to GDSII / OASIS Implementation Flow"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="mb-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                03 · PHYSICAL IMPLEMENTATION METHODOLOGY
              </span>
              <span className="h-px w-8 bg-ink/20" />
            </div>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              {site.flow.heading}
            </h2>
            <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
              {site.flow.subheading} · Primary Tool:{' '}
              <strong className="text-ink">{site.flow.primaryTool}</strong>
            </p>
          </div>

          <div className="rounded-lg border border-signal/30 bg-signal/5 px-3.5 py-2">
            <span className="block font-mono text-[0.65rem] font-bold tracking-wider text-signal uppercase">
              METHODOLOGY DISCIPLINE
            </span>
            <p className="m-0 font-mono text-[0.75rem] text-ink font-medium">
              RTL-to-OASIS Stream-Out
            </p>
          </div>
        </div>

        {/* 10-Stage Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {site.flow.stages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              custom={idx}
              viewport={viewportOnce}
              className="group relative flex flex-col justify-between rounded-xl border border-ink/15 bg-paper/90 p-4 transition-all duration-200 hover:border-ink/40 hover:bg-paper hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-2.5">
                  <span className="font-mono text-[0.85rem] font-bold text-signal">
                    {stage.step}
                  </span>
                  <span className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[0.62rem] text-graphite uppercase">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h3 className="m-0 font-mono text-[0.88rem] font-bold text-ink">
                  {stage.name}
                </h3>

                <p className="m-0 mt-1 font-mono text-[0.68rem] font-semibold text-signal">
                  {stage.tool}
                </p>

                <p className="m-0 mt-2 font-mono text-[0.74rem] text-graphite leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              {idx < site.flow.stages.length - 1 && (
                <div className="mt-3 flex justify-end font-mono text-xs text-signal opacity-40 group-hover:opacity-100 transition-opacity">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Report Review & Analysis Credibility Card */}
        <div className="mt-8 rounded-xl border border-ink/20 bg-[#141413] p-5 text-white/90 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
              <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                REPORT REVIEW &amp; TIMING ANALYSIS DISCIPLINE
              </span>
            </div>
            <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[0.65rem] text-white/70">
              PHYSICAL DESIGN ANALYSIS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-[0.74rem]">
              <span className="block font-bold text-white mb-1">01 · Timing Reports</span>
              <p className="m-0 text-white/70 text-[0.7rem] leading-relaxed">
                Reviewed setup and hold timing slack reports across clock domains to inspect critical sequential paths.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-[0.74rem]">
              <span className="block font-bold text-white mb-1">02 · Power Reports</span>
              <p className="m-0 text-white/70 text-[0.7rem] leading-relaxed">
                Reviewed static leakage and dynamic switching power reports across physical implementation stages.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-[0.74rem]">
              <span className="block font-bold text-white mb-1">03 · Placement Density</span>
              <p className="m-0 text-white/70 text-[0.7rem] leading-relaxed">
                Inspected standard cell utilization, congestion hot spots, and macro-to-core boundary clearances.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-[0.74rem]">
              <span className="block font-bold text-white mb-1">04 · Routing &amp; DRC</span>
              <p className="m-0 text-white/70 text-[0.7rem] leading-relaxed">
                Reviewed detailed routing reports to confirm zero unrouted nets, antenna rules, and spacing compliance.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.74rem] text-white/80">
            <strong className="text-signal font-bold">Accuracy Note: </strong>
            &ldquo;{site.flow.note}&rdquo; — developing deeper report-analysis and signoff expertise through continuous coursework and hands-on EDA practice.
          </div>
        </div>
      </div>
    </section>
  )
}
