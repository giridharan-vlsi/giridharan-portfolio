'use client'

import { useRef } from 'react'
import { site } from '@/config/site'

/**
 * ---------------------------------------------------------------------------
 * HERO SECTION — VLSI ENGINEERING
 * ---------------------------------------------------------------------------
 * Preserves the exact animated PORTFOLIO type lockup and the black animated
 * face illustration in the letter 'O' with normal document flow and clear
 * vertical spacing, ensuring no overlap or clipping on any screen size.
 * ---------------------------------------------------------------------------
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative z-10 w-full flex flex-col items-center justify-center py-[clamp(2.5rem,5vw,4.5rem)] px-[4vw]"
      aria-label="Hero Cover"
    >
      <span id="hero" className="sr-only" aria-hidden="true" />

      {/* Main Container in Natural Document Flow */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Technical Positioning Block */}
        <div className="max-w-2xl px-2 text-center">
          {/* Top Pill: VLSI / SEMICONDUCTOR ENGINEER */}
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/80 px-3.5 py-1 font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
            <span>VLSI / SEMICONDUCTOR ENGINEER</span>
          </div>

          {/* Sub-Headline: VLSI Engineer • Physical Design • DFT */}
          <h2 className="mt-3 font-mono text-[1.1rem] sm:text-[1.35rem] font-bold text-ink tracking-tight">
            VLSI Engineer <span className="text-signal">•</span> Physical Design <span className="text-signal">•</span> DFT
          </h2>

          {/* Specialization Line */}
          <p className="mt-1 font-mono text-[0.82rem] sm:text-[0.92rem] font-semibold tracking-wide text-graphite">
            {site.specialization}
          </p>

          {/* Professional Statement */}
          <p className="mt-3.5 text-[0.85rem] sm:text-[0.94rem] text-ink/85 italic leading-relaxed max-w-xl mx-auto">
            &ldquo;{site.internshipStatement}&rdquo;
          </p>

          {/* CTAs and Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={site.connect.href}
              className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-2.5 font-mono text-[0.78rem] font-bold text-paper transition-all duration-200 hover:bg-signal hover:border-signal shadow-xs"
            >
              <span>{site.connect.cta}</span>
              <span>→</span>
            </a>
            <a
              href={`mailto:${site.contactEmail}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/30 bg-white/90 px-5 py-2.5 font-mono text-[0.78rem] font-bold text-ink transition-all duration-200 hover:border-ink hover:bg-white shadow-2xs"
            >
              <span>{site.connect.discuss}</span>
              <span>↗</span>
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-paper px-4 py-2.5 font-mono text-[0.75rem] font-semibold text-ink transition-all duration-200 hover:border-signal hover:text-signal"
            >
              <span>Resume</span>
              <span className="text-xs">↓</span>
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/60 px-3.5 py-2.5 font-mono text-[0.75rem] text-graphite hover:text-ink hover:border-ink/30"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/60 px-3.5 py-2.5 font-mono text-[0.75rem] text-graphite hover:text-ink hover:border-ink/30"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
