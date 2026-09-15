'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/lib/hooks'
import type { ProjectData } from '@/config/projects'

interface Props {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
  onOpenEvidence: (stageIndex?: number) => void
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onOpenEvidence,
}: Props) {
  const reduced = usePrefersReducedMotion()
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
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
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const { deepDive } = project
  const hasGallery = Boolean(project.gallery && project.gallery.length > 0)

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — Detailed Engineering Specification`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-xs"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex h-full max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-ink/20 bg-paper shadow-2xl"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-ink/15 bg-white/80 p-4 sm:p-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[0.72rem] font-bold text-signal">
                  {project.num}
                </span>
                <span className="h-px w-3 bg-ink/20" />
                <span className="rounded bg-ink px-2 py-0.5 font-mono text-[0.65rem] font-bold text-paper">
                  {project.badge}
                </span>
                <span className="h-px w-3 bg-ink/20" />
                <span className="font-mono text-[0.7rem] font-semibold text-graphite">
                  {project.date}
                </span>
              </div>
              <h2 className="display m-0 mt-1.5 text-ink text-xl sm:text-2xl font-bold tracking-tight">
                {project.title}
              </h2>
              <p className="m-0 mt-0.5 font-mono text-[0.75rem] text-graphite uppercase tracking-wide">
                {project.subtitle}
              </p>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-white font-mono text-sm text-ink hover:border-signal hover:text-signal transition-colors ml-3"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Engineering Role & Overview */}
            <div className="rounded-lg border border-ink/10 bg-white/70 p-4">
              <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-signal uppercase mb-1">
                ENGINEERING ROLE &amp; SCOPE
              </span>
              <p className="m-0 font-mono text-[0.82rem] font-bold text-ink">
                {project.role}
              </p>
              {project.roleNotes && (
                <p className="m-0 mt-1.5 rounded bg-signal/5 border border-signal/15 p-2 font-mono text-[0.72rem] text-signal font-semibold">
                  {project.roleNotes}
                </p>
              )}
              <p className="m-0 mt-2.5 font-mono text-[0.85rem] text-graphite leading-relaxed">
                {deepDive.overview}
              </p>
            </div>

            {/* Technical Specification Highlights */}
            {project.specHighlights && project.specHighlights.length > 0 && (
              <div>
                <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-ink/60 uppercase mb-2">
                  TECHNICAL SPECIFICATION MATRIX
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.specHighlights.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded border border-ink/10 bg-white/80 p-2.5 font-mono text-[0.72rem]"
                    >
                      <span className="block text-[0.65rem] text-ink/60 uppercase font-semibold">
                        {spec.label}
                      </span>
                      <span className="block font-bold text-ink mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Pipeline Strip */}
            <div>
              <span className="block font-mono text-[0.68rem] font-bold tracking-wider text-ink/60 uppercase mb-2">
                IMPLEMENTATION FLOW
              </span>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[0.72rem]">
                {project.flow.map((step, idx) => (
                  <div key={step} className="flex items-center gap-1.5">
                    <span className="rounded border border-ink/20 bg-white px-2.5 py-1 font-bold text-ink shadow-2xs">
                      {step}
                    </span>
                    {idx < project.flow.length - 1 && (
                      <span className="text-signal font-bold">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom VLSI Flow (for Project 06) */}
            {deepDive.customFlow && (
              <div className="border-t border-ink/10 pt-4">
                <span className="block font-mono text-[0.72rem] font-bold tracking-wider text-signal uppercase mb-2">
                  CUSTOM VLSI IMPLEMENTATION &amp; VERIFICATION FLOW
                </span>
                <div className="space-y-2">
                  {deepDive.customFlow.map((flowStep) => (
                    <div
                      key={flowStep.step}
                      className="rounded border border-ink/10 bg-white/80 p-3 font-mono text-[0.72rem]"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-1.5 mb-1.5">
                        <span className="font-bold text-ink">
                          {flowStep.step}. {flowStep.name}
                        </span>
                        <span className="rounded bg-ink/5 px-2 py-0.5 text-[0.65rem] font-semibold text-signal">
                          {flowStep.tools}
                        </span>
                      </div>
                      <p className="m-0 text-graphite leading-relaxed">
                        {flowStep.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subsystem / Module Breakdown (for Custom VLSI, Vision Speak, Air Mouse) */}
            {deepDive.systemModules && (
              <div className="border-t border-ink/10 pt-4">
                <span className="block font-mono text-[0.72rem] font-bold tracking-wider text-signal uppercase mb-2">
                  SYSTEM MODULES &amp; ARCHITECTURAL SUBSYSTEMS
                </span>
                <div className="overflow-x-auto rounded border border-ink/15 bg-white/80">
                  <table className="w-full font-mono text-[0.72rem] text-left border-collapse">
                    <thead>
                      <tr className="border-b border-ink/10 bg-ink/5">
                        <th className="p-2.5 font-bold text-ink">Subsystem / Domain</th>
                        <th className="p-2.5 font-bold text-ink">Components &amp; Tools</th>
                        <th className="p-2.5 font-bold text-ink">Engineering Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deepDive.systemModules.map((mod) => (
                        <tr key={mod.category} className="border-b border-ink/5 hover:bg-ink/5">
                          <td className="p-2.5 font-bold text-signal whitespace-nowrap">{mod.category}</td>
                          <td className="p-2.5 font-semibold text-ink">{mod.components}</td>
                          <td className="p-2.5 text-graphite">{mod.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Architecture Section (if present) */}
            {deepDive.architecture && (
              <div className="border-t border-ink/10 pt-4">
                <span className="block font-mono text-[0.72rem] font-bold tracking-wider text-signal uppercase mb-1.5">
                  ARCHITECTURE &amp; MICROARCHITECTURE
                </span>
                <p className="m-0 font-mono text-[0.82rem] text-graphite leading-relaxed">
                  {deepDive.architecture.description}
                </p>

                {/* Submodules if CPU / RISC-V */}
                {deepDive.architecture.submodules && (
                  <div className="mt-3 overflow-x-auto rounded border border-ink/15 bg-white/80">
                    <table className="w-full font-mono text-[0.72rem] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-ink/10 bg-ink/5">
                          <th className="p-2 font-bold text-ink">Module</th>
                          <th className="p-2 font-bold text-ink">Source File</th>
                          <th className="p-2 font-bold text-ink">Role in CPU Execution</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deepDive.architecture.submodules.map((mod) => (
                          <tr key={mod.file} className="border-b border-ink/5 hover:bg-ink/5">
                            <td className="p-2 font-bold text-signal">{mod.name}</td>
                            <td className="p-2 text-ink/70">{mod.file}</td>
                            <td className="p-2 text-graphite">{mod.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Opcodes if ALU */}
                {deepDive.architecture.opcodes && (
                  <div className="mt-3 overflow-x-auto rounded border border-ink/15 bg-white/80">
                    <table className="w-full font-mono text-[0.72rem] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-ink/10 bg-ink/5">
                          <th className="p-2 font-bold text-ink">Opcode</th>
                          <th className="p-2 font-bold text-ink">Operation</th>
                          <th className="p-2 font-bold text-ink">Verilog RTL Expression</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deepDive.architecture.opcodes.map((op) => (
                          <tr key={op.code} className="border-b border-ink/5 hover:bg-ink/5">
                            <td className="p-2 font-bold text-signal">{op.code}</td>
                            <td className="p-2 font-bold text-ink">{op.op}</td>
                            <td className="p-2 text-graphite">{op.operation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Verification Section */}
            {deepDive.verification && (
              <div className="border-t border-ink/10 pt-4">
                <span className="block font-mono text-[0.72rem] font-bold tracking-wider text-signal uppercase mb-1.5">
                  FUNCTIONAL VERIFICATION &amp; WAVEFORMS
                </span>
                <p className="m-0 font-mono text-[0.82rem] text-graphite leading-relaxed">
                  {deepDive.verification.description}
                </p>
                <ul className="mt-2.5 list-disc pl-5 font-mono text-[0.74rem] text-graphite space-y-1">
                  {deepDive.verification.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
                {deepDive.verification.waveformNotes && (
                  <div className="mt-2.5 rounded bg-ink/5 p-2.5 font-mono text-[0.72rem] text-ink/80">
                    <strong className="text-ink">Waveform Debug Notes: </strong>
                    {deepDive.verification.waveformNotes}
                  </div>
                )}
              </div>
            )}

            {/* Physical Design Section */}
            {deepDive.physicalDesign && (
              <div className="border-t border-ink/10 pt-4">
                <span className="block font-mono text-[0.72rem] font-bold tracking-wider text-signal uppercase mb-1.5">
                  RTL → GDSII / OASIS PHYSICAL IMPLEMENTATION
                </span>
                <p className="m-0 font-mono text-[0.78rem] text-ink font-bold">
                  Primary EDA Environment: {deepDive.physicalDesign.tool}
                </p>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {deepDive.physicalDesign.flowStages.map((stg) => (
                    <div key={stg} className="rounded border border-ink/10 bg-white/70 p-2 font-mono text-[0.72rem] text-graphite">
                      ✓ {stg}
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded border border-signal/20 bg-signal/5 p-2.5 font-mono text-[0.72rem] text-ink/90">
                  <strong className="text-signal font-bold">Report Reviews: </strong>
                  {deepDive.physicalDesign.reportHighlights.join(' • ')}
                </div>
              </div>
            )}

            {/* Key Learnings */}
            {deepDive.keyLearnings && deepDive.keyLearnings.length > 0 && (
              <div className="border-t border-ink/10 pt-4">
                <span className="block font-mono text-[0.72rem] font-bold tracking-wider text-signal uppercase mb-1.5">
                  KEY ENGINEERING TAKEAWAYS
                </span>
                <ul className="m-0 list-disc pl-5 font-mono text-[0.74rem] text-graphite space-y-1">
                  {deepDive.keyLearnings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 bg-white/80 p-4">
            {hasGallery ? (
              <button
                type="button"
                onClick={() => onOpenEvidence(0)}
                className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2 font-mono text-[0.75rem] font-bold text-paper transition-all hover:bg-signal hover:border-signal shadow-xs"
              >
                <span>{project.evidenceLabel || 'EXPLORE STAGE EVIDENCE ↗'}</span>
              </button>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-paper px-3.5 py-1.5 font-mono text-[0.72rem] font-bold text-graphite">
                <span>VERIFIED SPECIFICATION</span>
              </span>
            )}

            {project.oasis && (
              <a
                href={project.oasis}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/30 bg-white px-3.5 py-2 font-mono text-[0.72rem] font-bold text-ink transition-colors hover:border-ink hover:bg-paper"
              >
                <span>DOWNLOAD OASIS FILE (.oasis) ↓</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
