'use client'

import { site } from '@/config/site'

export default function EngineeringSnapshot() {
  return (
    <section
      id="snapshot"
      className="relative z-20 w-full max-w-[112rem] mx-auto px-[max(1.5rem,7vw)] pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6"
      aria-label="Engineering Snapshot Telemetry"
    >
      <div className="rounded-2xl border border-ink/20 bg-paper/95 p-4 sm:p-5 backdrop-blur-md shadow-xs">
        {/* Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/15 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse" aria-hidden="true" />
            <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
              ENGINEERING SNAPSHOT · TELEMETRY
            </span>
          </div>
          <span className="font-mono text-[0.68rem] text-graphite font-medium">
            ACADEMIC &amp; EDA TOOLCHAIN METRICS
          </span>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 4 on tablet/laptop, 8 on wide desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2.5 sm:gap-3">
          {site.snapshot.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between rounded-lg border border-ink/12 bg-white/80 p-3 sm:p-3.5 transition-all duration-200 hover:border-ink/35 hover:bg-white hover:shadow-2xs min-h-[82px]"
            >
              <span className="font-mono text-[0.62rem] sm:text-[0.65rem] font-bold tracking-wider text-graphite uppercase">
                {item.label}
              </span>
              <span className="mt-1.5 font-mono text-[0.76rem] sm:text-[0.8rem] font-bold text-ink leading-snug break-words">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
