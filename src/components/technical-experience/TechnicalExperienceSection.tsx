'use client'

import { motion, type Variants } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function TechnicalExperienceSection() {
  const reduced = usePrefersReducedMotion()

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.75, delay: i * 0.1, ease: ease.paper },
    }),
  }

  return (
    <section
      id="experience"
      className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
      aria-label="Technical Experience and Assignments"
    >
      <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
        {/* Section Header */}
        <div className="mb-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                05 · LAB PRACTICE &amp; ASSIGNMENTS
              </span>
              <span className="h-px w-8 bg-ink/20" />
            </div>
            <h2
              className="display m-0 text-ink"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              {site.technicalExperience.heading}
            </h2>
            <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
              {site.technicalExperience.subheading}
            </p>
          </div>

          <span className="rounded border border-ink/15 bg-white/75 px-3 py-1 font-mono text-[0.72rem] text-graphite">
            DFT · CUSTOM IC · FPGA
          </span>
        </div>

        {/* 3 Technical Experience Cards */}
        <div className="flex flex-col gap-8">
          {/* Card 1: Siemens Tessent DFT Assignment */}
          {(() => {
            const tessent = site.technicalExperience.items[0]
            return (
              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                custom={0}
                viewport={viewportOnce}
                className="rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-7 shadow-xs hover:border-ink/35 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded bg-signal px-2 py-0.5 font-mono text-[0.68rem] font-bold text-white uppercase">
                      {tessent.category}
                    </span>
                    <span className="font-mono text-[0.74rem] font-bold text-ink">
                      {tessent.type}
                    </span>
                  </div>
                  <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-amber-800">
                    {tessent.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8">
                    <h3 className="display m-0 text-ink text-2xl font-bold">
                      {tessent.title}
                    </h3>
                    <p className="m-0 mt-1 font-mono text-[0.74rem] text-graphite">
                      Assigned by Head of Department · Rajalakshmi Institute of Technology
                    </p>

                    <p className="m-0 mt-3 font-mono text-[0.84rem] text-graphite leading-relaxed">
                      &ldquo;{tessent.description}&rdquo;
                    </p>

                    <div className="mt-4">
                      <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-ink/70 uppercase mb-2">
                        HANDS-ON EXPLORATION SCOPE &amp; FLOW
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tessent.coverage.map((item) => (
                          <div
                            key={item}
                            className="rounded-md border border-ink/10 bg-white/70 p-2.5 font-mono text-[0.74rem] text-ink"
                          >
                            <span className="text-signal font-bold mr-1.5">✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Terminal Console Callout */}
                  <div className="lg:col-span-4 overflow-hidden rounded-lg border border-ink/20 bg-[#121211] text-white p-4 font-mono text-[0.72rem] shadow-sm">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-white/60">
                      <span className="flex items-center gap-1.5 text-white/80 font-bold">
                        <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                        TESSENT_SHELL
                      </span>
                      <span>LINUX CLI</span>
                    </div>
                    <pre className="m-0 text-white/85 leading-relaxed overflow-x-auto">
                      <code>
                        <span className="text-white/40"># Siemens Tessent Shell Setup</span>{'\n'}
                        $ <span className="text-[#0f9d58]">source</span> /tools/mentor/tessent.env{'\n'}
                        $ <span className="text-[#4285f4]">tessent</span> -shell{'\n'}
                        {'>'} <span className="text-[#f4b400]">set_context</span> dft -scan{'\n'}
                        {'>'} <span className="text-[#f4b400]">read_verilog</span> design.v{'\n'}
                        {'>'} <span className="text-[#f4b400]">set_current_design</span> top{'\n'}
                        {'>'} <span className="text-[#f4b400]">check_dft_rules</span>{'\n'}
                        {'>'} <span className="text-[#f4b400]">create_patterns_atpg</span>{'\n'}
                        <span className="text-signal font-bold"># STATUS: Hands-on exploration</span>
                      </code>
                    </pre>
                    <p className="m-0 mt-3 border-t border-white/10 pt-2 text-[0.66rem] text-white/60 italic">
                      Note: Self-directed lab assignment under faculty guidance; not presented as formal internship.
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })()}

          {/* Card 2: Custom VLSI & Digital Circuit Design */}
          {(() => {
            const custom = site.technicalExperience.items[1]
            return (
              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                custom={1}
                viewport={viewportOnce}
                className="rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-7 shadow-xs hover:border-ink/35 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded bg-ink px-2 py-0.5 font-mono text-[0.68rem] font-bold text-paper uppercase">
                      {custom.category}
                    </span>
                    <span className="font-mono text-[0.74rem] font-bold text-ink">
                      {custom.type}
                    </span>
                  </div>
                  <span className="rounded border border-sky-300 bg-sky-50 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-sky-800">
                    {custom.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8">
                    <h3 className="display m-0 text-ink text-2xl font-bold">
                      {custom.title}
                    </h3>
                    <p className="m-0 mt-1 font-mono text-[0.74rem] text-graphite">
                      Primary Tools: Synopsys Custom Compiler · Cadence Virtuoso
                    </p>

                    <p className="m-0 mt-3 font-mono text-[0.84rem] text-graphite leading-relaxed">
                      {custom.description}
                    </p>

                    <div className="mt-4">
                      <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-ink/70 uppercase mb-2">
                        COMPREHENSIVE CIRCUIT COVERAGE
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {custom.coverage.map((item) => (
                          <div
                            key={item}
                            className="rounded-md border border-ink/10 bg-white/70 p-2.5 font-mono text-[0.74rem] text-ink"
                          >
                            <span className="text-signal font-bold mr-1.5">✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Tools & Methodology Box */}
                  <div className="lg:col-span-4 rounded-lg border border-ink/15 bg-white/80 p-4 font-mono text-[0.74rem]">
                    <span className="block font-bold text-ink uppercase mb-2 border-b border-ink/10 pb-1.5">
                      CUSTOM DESIGN STAGES
                    </span>
                    <ul className="space-y-1.5 text-graphite list-none m-0 p-0">
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">01</span> Transistor Sizing &amp; Schematics
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">02</span> Transient &amp; DC Simulation
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">03</span> Symbol Generation &amp; Testbench
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">04</span> Full-Custom Layout Mask Design
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">05</span> DRC (Design Rule Check)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">06</span> LVS (Layout vs Schematic)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="text-signal">07</span> PEX (Parasitic Extraction)
                      </li>
                    </ul>

                    <div className="mt-4 pt-3 border-t border-ink/10">
                      <span className="block text-[0.68rem] text-graphite mb-1 font-bold">
                        ADDERS &amp; MULTIPLIERS DESIGNED:
                      </span>
                      <div className="flex flex-wrap gap-1 text-[0.66rem]">
                        <span className="bg-ink/5 px-1.5 py-0.5 rounded">RCA</span>
                        <span className="bg-ink/5 px-1.5 py-0.5 rounded">CLA</span>
                        <span className="bg-ink/5 px-1.5 py-0.5 rounded">Carry Select</span>
                        <span className="bg-ink/5 px-1.5 py-0.5 rounded">Carry Save</span>
                        <span className="bg-ink/5 px-1.5 py-0.5 rounded">Booth Multiplier</span>
                        <span className="bg-ink/5 px-1.5 py-0.5 rounded">Wallace Tree</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })()}

          {/* Card 3: FPGA Prototyping & Hardware Testing */}
          {(() => {
            const fpga = site.technicalExperience.items[2]
            return (
              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                custom={2}
                viewport={viewportOnce}
                className="rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-7 shadow-xs hover:border-ink/35 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded bg-signal px-2 py-0.5 font-mono text-[0.68rem] font-bold text-white uppercase">
                      {fpga.category}
                    </span>
                    <span className="font-mono text-[0.74rem] font-bold text-ink">
                      {fpga.type}
                    </span>
                  </div>
                  <span className="rounded border border-sky-300 bg-sky-50 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-sky-800">
                    {fpga.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8">
                    <h3 className="display m-0 text-ink text-2xl font-bold">
                      {fpga.title}
                    </h3>
                    <p className="m-0 mt-1 font-mono text-[0.74rem] text-graphite">
                      Hardware Board: <strong className="text-ink">{fpga.hardware}</strong>
                    </p>

                    <p className="m-0 mt-3 font-mono text-[0.84rem] text-graphite leading-relaxed">
                      {fpga.description}
                    </p>

                    <div className="mt-4">
                      <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-ink/70 uppercase mb-2">
                        FPGA IMPLEMENTATION &amp; TESTING HIGHLIGHTS
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {fpga.coverage.map((item) => (
                          <div
                            key={item}
                            className="rounded-md border border-ink/10 bg-white/70 p-2.5 font-mono text-[0.74rem] text-ink"
                          >
                            <span className="text-signal font-bold mr-1.5">✓</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Hardware Photo & Evidence Preview */}
                  <div className="lg:col-span-4 overflow-hidden rounded-lg border border-ink/20 bg-white/80 p-3 shadow-xs">
                    <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-2 font-mono text-[0.68rem] text-graphite">
                      <span className="font-bold text-ink">VERIFIED HARDWARE PHOTO</span>
                      <span className="text-signal font-bold">ALTERA DE2</span>
                    </div>

                    <div className="relative aspect-4/3 w-full overflow-hidden rounded border border-ink/10 bg-black/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fpga.evidenceImage}
                        alt="Altera Cyclone II DE2 Development Board"
                        className="h-full w-full object-cover object-center transition-transform hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <p className="m-0 mt-2 font-mono text-[0.68rem] text-graphite text-center">
                      Altera DE2 Development &amp; Education Board (Cyclone II)
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })()}
        </div>
      </div>
    </section>
  )
}
