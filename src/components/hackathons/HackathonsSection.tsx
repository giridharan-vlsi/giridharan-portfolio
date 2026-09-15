'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, type Variants, AnimatePresence } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function HackathonsSection() {
  const reduced = usePrefersReducedMotion()
  const [modalImage, setModalImage] = useState<{ src: string; title: string; alt: string } | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const openModal = useCallback((img: { src: string; title: string; alt: string }) => {
    setModalImage(img)
  }, [])

  const closeModal = useCallback(() => {
    setModalImage(null)
  }, [])

  useEffect(() => {
    if (!modalImage) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => closeBtnRef.current?.focus(), 60)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [modalImage, closeModal])

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.75, delay: i * 0.12, ease: ease.paper },
    }),
  }

  return (
    <>
      <section
        id="hackathons"
        className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
        aria-label="Hackathons and Competitions"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          {/* Section Header */}
          <div className="mb-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                  07 · COMPETITIVE INNOVATION
                </span>
                <span className="h-px w-8 bg-ink/20" />
              </div>
              <h2
                className="display m-0 text-ink"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)', letterSpacing: '-0.03em' }}
              >
                {site.hackathons.heading}
              </h2>
              <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
                Collaborative Problem-Solving, Hardware-Software Systems &amp; Rapid Prototyping
              </p>
            </div>
            <span className="rounded border border-ink/15 bg-white/75 px-3 py-1 font-mono text-[0.72rem] text-graphite">
              VERIFIED PARTICIPATION ONLY
            </span>
          </div>

          {/* Hackathons Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {/* Hackathon 1: INNOCLASH'26 */}
            {(() => {
              const item = site.hackathons.items[0]
              return (
                <motion.article
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  custom={0}
                  viewport={viewportOnce}
                  className="flex flex-col justify-between rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-7 shadow-xs hover:border-ink/35 transition-all"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[0.72rem] font-bold text-signal">
                          HACKATHON / {item.num}
                        </span>
                        <span className="h-px w-4 bg-ink/20" />
                        <span className="font-mono text-[0.7rem] text-graphite">
                          INTERNATIONAL HYBRID
                        </span>
                      </div>
                      <span className="rounded bg-ink px-2 py-0.5 font-mono text-[0.65rem] font-bold text-paper">
                        FEB 2026
                      </span>
                    </div>

                    <h3 className="display m-0 text-ink text-2xl sm:text-3xl font-bold">
                      {item.title}
                    </h3>
                    <p className="m-0 mt-1 font-mono text-[0.78rem] text-graphite font-semibold">
                      {item.subtitle}
                    </p>

                    <p className="m-0 mt-2 font-mono text-[0.72rem] text-signal font-bold">
                      Personal Role: {item.role}
                    </p>

                    <p className="m-0 mt-3 font-mono text-[0.84rem] text-graphite leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 rounded-md border border-ink/10 bg-white/70 p-3 font-mono text-[0.72rem] text-ink">
                      <p className="m-0">
                        <strong className="text-ink">Organized by: </strong>
                        {item.organizer}
                      </p>
                      <p className="m-0 mt-1 text-graphite">
                        <strong className="text-ink">Dates: </strong>
                        {item.date} · Venue: Rajalakshmi Institute of Technology
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[0.68rem]">
                      {item.tags.map((t) => (
                        <span key={t} className="rounded bg-ink/5 px-2 py-0.5 text-ink/80">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    {item.certificate && (
                      <button
                        type="button"
                        onClick={() => openModal(item.certificate!)}
                        className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2 font-mono text-[0.75rem] font-bold text-paper transition-all hover:bg-signal hover:border-signal shadow-xs"
                      >
                        <span>VIEW PARTICIPATION CERTIFICATE ↗</span>
                      </button>
                    )}
                  </div>
                </motion.article>
              )
            })()}

            {/* Hackathon 2: Smart India Hackathon (SIH) */}
            {(() => {
              const item = site.hackathons.items[1]
              return (
                <motion.article
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  custom={1}
                  viewport={viewportOnce}
                  className="flex flex-col justify-between rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-7 shadow-xs hover:border-ink/35 transition-all"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[0.72rem] font-bold text-signal">
                          HACKATHON / {item.num}
                        </span>
                        <span className="h-px w-4 bg-ink/20" />
                        <span className="font-mono text-[0.7rem] text-graphite">
                          NATIONAL LEVEL
                        </span>
                      </div>
                      <span className="rounded bg-ink px-2 py-0.5 font-mono text-[0.65rem] font-bold text-paper">
                        HARDWARE + IOT
                      </span>
                    </div>

                    <h3 className="display m-0 text-ink text-2xl sm:text-3xl font-bold">
                      {item.title}
                    </h3>
                    <p className="m-0 mt-1 font-mono text-[0.78rem] text-graphite font-semibold">
                      {item.subtitle}
                    </p>

                    <p className="m-0 mt-2 font-mono text-[0.72rem] text-signal font-bold">
                      Personal Role: {item.role}
                    </p>

                    <p className="m-0 mt-3 font-mono text-[0.84rem] text-graphite leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4">
                      <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-ink/70 uppercase mb-2">
                        HARDWARE &amp; DASHBOARD PROTOTYPE EVIDENCE (4)
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {item.gallery?.map((img) => (
                          <button
                            key={img.src}
                            type="button"
                            onClick={() => openModal(img)}
                            className="group/photo relative aspect-video overflow-hidden rounded border border-ink/15 bg-black/10 transition-all hover:border-signal"
                            title={`View ${img.title}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="h-full w-full object-cover transition-transform group-hover/photo:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-xs">🔍</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[0.68rem]">
                      {item.tags.map((t) => (
                        <span key={t} className="rounded bg-ink/5 px-2 py-0.5 text-ink/80">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4 font-mono text-[0.7rem] text-graphite">
                    * Problem statement, circuits and dashboard validated from physical evidence photos.
                  </div>
                </motion.article>
              )
            })()}
          </div>
        </div>
      </section>

      {/* Modal Image Viewer */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={modalImage.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-xs"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/20 bg-[#141413] text-white shadow-2xl"
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#181816] px-4 py-3">
                <span className="font-mono text-[0.78rem] font-bold text-white">
                  {modalImage.title}
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-signal"
                >
                  ✕
                </button>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/70 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalImage.src}
                  alt={modalImage.alt}
                  className="max-h-[75svh] w-auto max-w-full rounded object-contain"
                />
              </div>

              <div className="border-t border-white/10 bg-[#161614] px-4 py-2 text-center font-mono text-[0.68rem] text-white/60">
                Official Hackathon Evidence · Press ESC or click outside to dismiss
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
