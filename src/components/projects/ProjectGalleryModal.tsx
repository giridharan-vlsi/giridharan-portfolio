'use client'

import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ease } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'

export type GalleryImage = {
  src: string
  alt: string
  /** If true, use object-contain so nothing is cropped (for schematics/circuit diagrams) */
  contain?: boolean
}

type Props = {
  images: GalleryImage[]
  /** Currently visible image index, or -1 / undefined to close */
  activeIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  /** Human-readable project title for aria-label */
  projectTitle: string
}

export default function ProjectGalleryModal({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  projectTitle,
}: Props) {
  const reduced = usePrefersReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const isOpen = activeIndex >= 0 && activeIndex < images.length
  const current = isOpen ? images[activeIndex] : null
  const total = images.length

  // ESC + arrow key handling
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowRight') { onNext(); return }
      if (e.key === 'ArrowLeft') { onPrev(); return }
    },
    [onClose, onNext, onPrev],
  )

  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    // Delay focus so the animation doesn't fight it
    const t = setTimeout(() => closeRef.current?.focus(), 80)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, handleKey])

  const transition = reduced
    ? { duration: 0 }
    : { duration: 0.22, ease: ease.paper }

  return (
    <AnimatePresence>
      {isOpen && current && (
        /* Backdrop — click here to close */
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} — image ${activeIndex + 1} of ${total}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          onClick={onClose}
        >
          {/* Modal panel — stop propagation so clicking inside doesn't close */}
          <motion.div
            className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-[0.75rem] border border-white/20 bg-[#141413] text-paper shadow-2xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={transition}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#1b1b19] px-4 py-2.5">
              {/* Counter */}
              <span className="font-mono text-[0.72rem] font-bold text-signal">
                {activeIndex + 1} / {total}
              </span>

              {/* Alt text */}
              <p className="mx-3 m-0 flex-1 truncate font-mono text-[0.72rem] text-white/60">
                {current.alt}
              </p>

              {/* Close button */}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close image viewer"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-signal"
              >
                ✕
              </button>
            </div>

            {/* ── Image area ── */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/60 px-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                loading={activeIndex === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`max-h-[70svh] w-auto max-w-full rounded object-contain py-3 ${
                  current.contain ? 'object-contain' : 'object-contain'
                }`}
              />

              {/* Prev button */}
              {total > 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onPrev() }}
                  aria-label="Previous image"
                  className="absolute left-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-signal sm:left-2"
                >
                  ←
                </button>
              )}

              {/* Next button */}
              {total > 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onNext() }}
                  aria-label="Next image"
                  className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-signal sm:right-2"
                >
                  →
                </button>
              )}
            </div>

            {/* ── Footer ── */}
            <div className="shrink-0 border-t border-white/10 bg-[#181816] px-4 py-2.5">
              <p className="m-0 font-mono text-[0.72rem] text-white/50">
                {projectTitle} · Press ESC or click outside to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
