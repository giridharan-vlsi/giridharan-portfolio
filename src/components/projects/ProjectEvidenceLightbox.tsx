'use client'

import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ease } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'
import type { ProjectEvidence } from '@/config/projects'

interface Props {
  isOpen: boolean
  images: ProjectEvidence[]
  currentIndex: number
  projectTitle: string
  onClose: () => void
  onSelectIndex: (index: number) => void
}

export default function ProjectEvidenceLightbox({
  isOpen,
  images,
  currentIndex,
  projectTitle,
  onClose,
  onSelectIndex,
}: Props) {
  const reduced = usePrefersReducedMotion()
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const currentImage = images[currentIndex] || images[0]
  const total = images.length

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + total) % total)
  }, [currentIndex, total, onSelectIndex])

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % total)
  }, [currentIndex, total, onSelectIndex])

  // ESC and Arrow Key handling
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') handlePrev()
      else if (e.key === 'ArrowRight') handleNext()
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
  }, [isOpen, onClose, handlePrev, handleNext])

  if (!isOpen || !currentImage) return null

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${projectTitle} — stage evidence ${currentIndex + 1} of ${total}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-2 sm:p-4 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex h-full max-h-[95svh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/20 bg-[#121211] text-white shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#181816] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="rounded bg-signal px-2 py-0.5 font-mono text-[0.68rem] font-bold text-white uppercase">
                STAGE {currentIndex + 1} OF {total}
              </span>
              <span className="font-mono text-[0.78rem] font-bold text-white truncate max-w-xs sm:max-w-md">
                {currentImage.stage}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close evidence viewer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-mono text-sm text-white hover:bg-signal hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/80 p-2 sm:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              loading="eager"
              decoding="async"
              className="max-h-[68svh] w-auto max-w-full rounded object-contain"
            />

            {/* Navigation Arrows */}
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous evidence image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 font-mono text-lg text-white backdrop-blur-xs transition-all hover:bg-signal sm:left-4"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next evidence image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 font-mono text-lg text-white backdrop-blur-xs transition-all hover:bg-signal sm:right-4"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* Stage Description Bar */}
          {currentImage.description && (
            <div className="border-t border-white/10 bg-[#161614] px-4 py-2 font-mono text-[0.72rem] text-white/80">
              <span className="text-signal font-bold mr-1.5">Evidence Details:</span>
              {currentImage.description}
            </div>
          )}

          {/* Thumbnail Strip */}
          {total > 1 && (
            <div className="flex shrink-0 items-center gap-2 overflow-x-auto border-t border-white/10 bg-[#141413] p-2.5">
              {images.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => onSelectIndex(idx)}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded border transition-all ${
                    idx === currentIndex
                      ? 'border-signal ring-2 ring-signal/50 scale-105'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
