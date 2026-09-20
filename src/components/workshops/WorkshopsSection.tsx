'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, type Variants, AnimatePresence } from 'framer-motion'
import { site } from '@/config/site'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export default function WorkshopsSection() {
  const reduced = usePrefersReducedMotion()
  const [modalCert, setModalCert] = useState<{ src: string; title: string; alt: string } | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const openModal = useCallback((cert: { src: string; title: string; alt: string }) => {
    setModalCert(cert)
  }, [])

  const closeModal = useCallback(() => {
    setModalCert(null)
  }, [])

  useEffect(() => {
    if (!modalCert) return
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
  }, [modalCert, closeModal])

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.7, delay: i * 0.1, ease: ease.paper },
    }),
  }

  return (
    <>
      <section
        id="workshops"
        className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
        aria-label="Workshops and Technical Events"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          {/* Section Header */}
          <div className="mb-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                  08 · PROFESSIONAL CONFERENCES &amp; SYMPOSIA
                </span>
                <span className="h-px w-8 bg-ink/20" />
              </div>
              <h2
                className="display m-0 text-ink"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)', letterSpacing: '-0.03em' }}
              >
                {site.workshops.heading}
              </h2>
              <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
                Specialized Physical Design, EDA &amp; Semiconductor Industry Workshops
              </p>
            </div>
            <span className="rounded border border-ink/15 bg-white/75 px-3 py-1 font-mono text-[0.72rem] text-graphite">
              3 VERIFIED TECHNICAL CONFERENCES
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.workshops.items.map((item, idx) => (
              <motion.article
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                custom={idx}
                viewport={viewportOnce}
                className="flex flex-col justify-between rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-6 shadow-xs hover:border-ink/35 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-ink/10 pb-2.5 mb-3.5">
                    <span className="rounded bg-ink px-2 py-0.5 font-mono text-[0.62rem] font-bold text-paper uppercase">
                      {item.category}
                    </span>
                    <span className="font-mono text-[0.7rem] text-graphite font-semibold">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="m-0 font-mono text-[1.05rem] font-bold text-ink">
                    {item.title}
                  </h3>

                  <p className="m-0 mt-1 font-mono text-[0.74rem] text-signal font-semibold">
                    {item.organizer}
                  </p>

                  <p className="m-0 mt-3 font-mono text-[0.8rem] text-graphite leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1 font-mono text-[0.66rem]">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded bg-ink/5 px-2 py-0.5 text-ink/80">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  {'certificate' in item && item.certificate ? (
                    'pdfUrl' in item.certificate ? (
                      <a
                        href={(item.certificate as { pdfUrl: string; title: string; alt: string }).pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-4 py-1.8 font-mono text-[0.72rem] font-bold text-paper transition-all hover:bg-signal hover:border-signal shadow-xs"
                        aria-label={`Open ${item.certificate.title} in new tab`}
                      >
                        <span>VIEW CERTIFICATE ↗</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openModal(item.certificate as { src: string; title: string; alt: string })}
                        className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-4 py-1.8 font-mono text-[0.72rem] font-bold text-paper transition-all hover:bg-signal hover:border-signal shadow-xs"
                      >
                        <span>VIEW CERTIFICATE ↗</span>
                      </button>
                    )
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-graphite font-medium">
                      <span>✓ Training Completed</span>
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {modalCert && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={modalCert.title}
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
                  {modalCert.title}
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
                  src={modalCert.src}
                  alt={modalCert.alt}
                  className="max-h-[75svh] w-auto max-w-full rounded object-contain"
                />
              </div>

              <div className="border-t border-white/10 bg-[#161614] px-4 py-2 text-center font-mono text-[0.68rem] text-white/60">
                Official Workshop Certificate · Press ESC or click outside to dismiss
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
