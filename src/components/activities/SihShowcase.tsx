'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ease } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export type SihItem = {
  id: string
  title: string
  subtitle: string
  description: string
  tag: string
  src: string
  aspectRatio: string
  isTechnicalDoc?: boolean
}

const SIH_ITEMS: readonly SihItem[] = [
  {
    id: 'hardware-prototype',
    title: 'Hardware Prototype',
    subtitle: 'ESP32 + sensors + wiring',
    description: 'Breadboard prototype integrating the ESP32 controller, active sensors, and switching relays.',
    tag: 'HARDWARE PROTOTYPE',
    src: '/assets/hackathons/sih/sih-hardware-prototype.jpg',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'dashboard-monitor',
    title: 'Smart Home Monitor',
    subtitle: 'Dashboard displayed on laptop',
    description: 'Live monitoring interface tracking power metrics, appliance statuses, and runtime thresholds.',
    tag: 'SMART HOME MONITOR',
    src: '/assets/hackathons/sih/sih-dashboard-monitor.jpg',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'team-experience',
    title: 'Team / Hackathon Experience',
    subtitle: 'Team working photo',
    description: 'Active hardware assembly, wiring verification, and collaborative troubleshooting during the hackathon.',
    tag: 'TEAM EXPERIENCE',
    src: '/assets/hackathons/sih/sih-team-experience.jpg',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'circuit-architecture',
    title: 'Technical Architecture',
    subtitle: 'ESP32 + PZEM + relay circuit',
    description: 'Electrical schematic showing pin-level wiring between ESP32-WROVER, PZEM-004T sensor, and 1-channel relay module.',
    tag: 'TECHNICAL DOCUMENTATION',
    src: '/assets/hackathons/sih/sih-circuit-architecture.jpg',
    aspectRatio: 'aspect-[16/10]',
    isTechnicalDoc: true,
  },
] as const

export default function SihShowcase() {
  const reduced = usePrefersReducedMotion()
  const [activeItem, setActiveItem] = useState<SihItem | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!activeItem) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveItem(null)
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeButtonRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [activeItem])

  return (
    <article className="mb-10 overflow-hidden rounded-[0.8rem] border border-ink/20 bg-paper/90 p-[clamp(1.25rem,3.5vw,2.5rem)] shadow-sm">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="eyebrow font-mono text-[0.72rem] font-bold text-signal">
              FEATURED HACKATHON
            </span>
            <span className="h-px w-5 bg-ink/20" />
            <span className="font-mono text-[0.72rem] uppercase tracking-wider text-graphite">
              NATIONAL LEVEL
            </span>
          </div>
          <h3
            className="display m-0 mt-1.5 text-ink"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', letterSpacing: '-0.025em' }}
          >
            SMART INDIA HACKATHON (SIH)
          </h3>
        </div>

        <span className="rounded bg-ink px-2.5 py-1 font-mono text-[0.7rem] font-bold text-paper">
          SIH EXPERIENCE
        </span>
      </div>

      <p className="body-copy m-0 mt-3 max-w-3xl text-[0.92rem] leading-relaxed text-graphite">
        Participated in Smart India Hackathon activities as part of the engineering and problem-solving journey,
        developing an integrated embedded hardware prototype and real-time monitoring solution.
      </p>

      {/* 4-Card Media Showcase Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SIH_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[0.55rem] border transition-all duration-200 ${
              item.isTechnicalDoc
                ? 'border-ink/35 bg-[#121211] text-paper'
                : 'border-ink/15 bg-paper hover:border-ink/40'
            }`}
          >
            {/* Image container */}
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              aria-label={`Enlarge ${item.title}: ${item.subtitle}`}
              className={`relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-signal ${item.aspectRatio} ${
                item.isTechnicalDoc ? 'bg-black/90 p-2' : 'bg-black/5'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={`${item.title} — ${item.subtitle}`}
                loading="lazy"
                decoding="async"
                className={`h-full w-full transition-transform duration-300 group-hover:scale-[1.02] ${
                  item.isTechnicalDoc ? 'object-contain' : 'object-cover object-center'
                }`}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="rounded-full bg-ink/90 px-3 py-1 font-mono text-[0.68rem] font-bold text-paper border border-white/20 shadow-md">
                  🔍 View Full Image
                </span>
              </div>
            </button>

            {/* Content text */}
            <div className="flex flex-1 flex-col justify-between p-3.5">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`font-mono text-[0.65rem] font-bold tracking-wider ${
                      item.isTechnicalDoc ? 'text-signal' : 'text-signal'
                    }`}
                  >
                    {item.tag}
                  </span>
                  {item.isTechnicalDoc && (
                    <span className="rounded border border-white/20 bg-white/10 px-1.5 py-0.2 font-mono text-[0.6rem] text-white/80">
                      SCHEMATIC
                    </span>
                  )}
                </div>

                <h4
                  className={`m-0 mt-1 font-bold text-[0.95rem] ${
                    item.isTechnicalDoc ? 'text-white' : 'text-ink'
                  }`}
                >
                  {item.title}
                </h4>

                <p
                  className={`m-0 mt-0.5 font-mono text-[0.72rem] ${
                    item.isTechnicalDoc ? 'text-white/70' : 'text-graphite'
                  }`}
                >
                  → {item.subtitle}
                </p>

                <p
                  className={`m-0 mt-2 text-[0.8rem] leading-snug ${
                    item.isTechnicalDoc ? 'text-white/60' : 'text-graphite/90'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-ink/10 pt-2 text-[0.68rem]">
                <span
                  className={`font-mono ${item.isTechnicalDoc ? 'text-white/40' : 'text-ink/40'}`}
                >
                  CLICK TO EXPAND
                </span>
                <span className="font-mono text-signal">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Full-Image Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} - Lightbox`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.2, ease: ease.paper }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="relative flex max-h-[92vh] max-w-4xl flex-col overflow-hidden rounded-[0.75rem] border border-white/20 bg-[#141413] text-paper shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.25, ease: ease.paper }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#1b1b19] px-4 py-3">
                <div>
                  <span className="font-mono text-[0.68rem] font-bold text-signal">
                    {activeItem.tag}
                  </span>
                  <h4 className="m-0 font-bold text-white text-[1.1rem]">
                    {activeItem.title}
                  </h4>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close image preview"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-signal"
                >
                  ✕
                </button>
              </div>

              {/* Lightbox image view */}
              <div className="flex max-h-[70vh] items-center justify-center overflow-auto bg-black/50 p-2 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[65vh] w-auto max-w-full rounded object-contain"
                />
              </div>

              {/* Lightbox footer description */}
              <div className="border-t border-white/10 bg-[#181816] px-4 py-3">
                <p className="m-0 font-mono text-[0.75rem] font-medium text-white/90">
                  → {activeItem.subtitle}
                </p>
                <p className="m-0 mt-1 text-[0.82rem] text-white/70 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
