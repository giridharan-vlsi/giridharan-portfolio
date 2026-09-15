'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, type Variants } from 'framer-motion'
import { projectsData, type ProjectData } from '@/config/projects'
import { ease, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/hooks'
import ProjectDetailModal from './ProjectDetailModal'
import ProjectEvidenceLightbox from './ProjectEvidenceLightbox'

type CategoryFilter = 'all' | 'flagship' | 'embedded'

export default function ProjectsSection() {
  const reduced = usePrefersReducedMotion()
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

  // Modal states
  const [detailProject, setDetailProject] = useState<ProjectData | null>(null)
  const [lightboxProject, setLightboxProject] = useState<ProjectData | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  const openDetail = useCallback((proj: ProjectData) => {
    setDetailProject(proj)
  }, [])

  const closeDetail = useCallback(() => {
    setDetailProject(null)
  }, [])

  const openLightbox = useCallback((proj: ProjectData, stageIndex = 0) => {
    if (!proj.gallery || proj.gallery.length === 0) return
    setLightboxProject(proj)
    setLightboxIndex(stageIndex)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxProject(null)
  }, [])

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.75, delay: i * 0.1, ease: ease.paper },
    }),
  }

  // Segment projects into primary VLSI and supporting embedded
  const flagshipProjects = useMemo(
    () => projectsData.filter((p) => p.category === 'flagship'),
    []
  )

  const embeddedProjects = useMemo(
    () => projectsData.filter((p) => p.category === 'embedded'),
    []
  )

  const displayedGroups = useMemo(() => {
    if (activeCategory === 'flagship') {
      return [
        {
          id: 'flagship',
          title: 'PRIMARY FOCUS · VLSI & SILICON IMPLEMENTATIONS',
          subtitle: 'RTL Architecture, RTL-to-OASIS Flow, Reliability Architecture & Custom CMOS VLSI',
          badge: '4 PROJECTS',
          projects: flagshipProjects,
        },
      ]
    }
    if (activeCategory === 'embedded') {
      return [
        {
          id: 'embedded',
          title: 'SUPPORTING HARDWARE · EMBEDDED SYSTEMS & EDGE PROTOTYPES',
          subtitle: 'Motion Sensing, Microcontroller Interfacing, Edge AI & Multi-Sensor Integration',
          badge: '2 PROJECTS',
          projects: embeddedProjects,
        },
      ]
    }
    return [
      {
        id: 'flagship',
        title: 'PRIMARY FOCUS · VLSI & SILICON IMPLEMENTATIONS',
        subtitle: 'RTL Architecture, RTL-to-OASIS Flow, Reliability Architecture & Custom CMOS VLSI',
        badge: '4 PROJECTS · VLSI / ASIC FOCUS',
        projects: flagshipProjects,
      },
      {
        id: 'embedded',
        title: 'SUPPORTING DOMAINS · EMBEDDED SYSTEMS & HARDWARE PROTOTYPES',
        subtitle: 'Motion Sensing, Microcontroller Interfacing, Edge AI & Multi-Sensor Integration',
        badge: '2 PROJECTS · HARDWARE & SENSORS',
        projects: embeddedProjects,
      },
    ]
  }, [activeCategory, flagshipProjects, embeddedProjects])

  return (
    <>
      <section
        id="projects"
        className="content-auto relative w-full py-[clamp(3.5rem,7vw,6.5rem)] scroll-mt-20"
        aria-label="Featured Engineering Projects"
      >
        <div className="relative z-10 mx-auto max-w-[112rem] px-[max(1.5rem,7vw)]">
          {/* Section Header */}
          <div className="mb-[clamp(2rem,4vw,3rem)] flex flex-wrap items-end justify-between gap-4 border-b border-ink/20 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[0.72rem] font-bold tracking-widest text-signal uppercase">
                  04 · ENGINEERING PROJECTS
                </span>
                <span className="h-px w-8 bg-ink/20" />
              </div>
              <h2
                className="display m-0 text-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)', letterSpacing: '-0.03em' }}
              >
                FEATURED PROJECTS
              </h2>
              <p className="m-0 mt-1 font-mono text-[0.82rem] text-graphite">
                VLSI, Physical Design, ASIC Implementation &amp; Embedded Systems
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[0.72rem] font-bold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-ink text-paper shadow-xs'
                    : 'border border-ink/20 bg-white/70 text-graphite hover:border-ink hover:text-ink'
                }`}
              >
                ALL PROJECTS (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('flagship')}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[0.72rem] font-bold transition-all ${
                  activeCategory === 'flagship'
                    ? 'bg-signal text-paper shadow-xs'
                    : 'border border-ink/20 bg-white/70 text-graphite hover:border-signal hover:text-signal'
                }`}
              >
                VLSI &amp; SILICON (4)
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('embedded')}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[0.72rem] font-bold transition-all ${
                  activeCategory === 'embedded'
                    ? 'bg-ink text-paper shadow-xs'
                    : 'border border-ink/20 bg-white/70 text-graphite hover:border-ink hover:text-ink'
                }`}
              >
                EMBEDDED &amp; HARDWARE (2)
              </button>
            </div>
          </div>

          {/* Project Groups */}
          <div className="space-y-14">
            {displayedGroups.map((group) => (
              <div key={group.id} className="space-y-6">
                {/* Group Sub-Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/15 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    <h3 className="font-mono text-[0.82rem] sm:text-[0.9rem] font-bold tracking-wide text-ink uppercase">
                      {group.title}
                    </h3>
                  </div>
                  <span className="rounded border border-ink/15 bg-white/80 px-2.5 py-0.5 font-mono text-[0.68rem] font-bold text-graphite">
                    {group.badge}
                  </span>
                </div>

                {/* Project Cards */}
                <div className="flex flex-col gap-8">
                  {group.projects.map((project, idx) => {
                    const hasGallery = Boolean(project.gallery && project.gallery.length > 0)

                    return (
                      <motion.article
                        key={project.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        custom={idx}
                        viewport={viewportOnce}
                        className="group relative rounded-xl border border-ink/15 bg-paper/90 p-5 sm:p-7 shadow-xs transition-all duration-300 hover:border-ink/35 hover:bg-paper"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                          {/* Left Info Column (7 cols) */}
                          <div className="flex flex-col justify-between lg:col-span-7">
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[0.75rem] font-bold text-signal">
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

                              <h4
                                className="display m-0 mt-2 text-ink text-xl sm:text-2xl font-bold tracking-tight"
                              >
                                {project.title}
                              </h4>

                              <p className="m-0 mt-0.5 font-mono text-[0.74rem] text-signal font-semibold uppercase tracking-wider">
                                {project.subtitle}
                              </p>

                              <p className="m-0 mt-1.5 font-mono text-[0.72rem] text-ink font-semibold">
                                Role: {project.role}
                              </p>

                              <p className="m-0 mt-3 font-mono text-[0.84rem] text-graphite leading-relaxed">
                                {project.description}
                              </p>

                              {/* Implementation Pipeline */}
                              <div className="mt-4">
                                <span className="block font-mono text-[0.65rem] font-bold tracking-wider text-ink/60 uppercase mb-1.5">
                                  FLOW / METHODOLOGY
                                </span>
                                <div className="flex flex-wrap items-center gap-1 font-mono text-[0.7rem]">
                                  {project.flow.map((step, sIdx) => (
                                    <div key={step} className="flex items-center gap-1">
                                      <span className="rounded border border-ink/15 bg-white/90 px-2 py-0.8 font-bold text-ink shadow-2xs">
                                        {step}
                                      </span>
                                      {sIdx < project.flow.length - 1 && (
                                        <span className="text-signal font-bold">→</span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Tags */}
                              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[0.68rem]">
                                {project.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded bg-ink/5 px-2 py-0.5 text-ink/80"
                                  >
                                    #{t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-ink/10 pt-4">
                              <button
                                type="button"
                                onClick={() => openDetail(project)}
                                className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2 font-mono text-[0.75rem] font-bold text-paper transition-all hover:bg-signal hover:border-signal shadow-xs"
                              >
                                <span>VIEW FULL PROJECT →</span>
                              </button>

                              {hasGallery && (
                                <button
                                  type="button"
                                  onClick={() => openLightbox(project, 0)}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/25 bg-white/85 px-4 py-2 font-mono text-[0.75rem] font-bold text-ink transition-all hover:border-ink hover:bg-white shadow-2xs"
                                >
                                  <span>{project.evidenceLabel}</span>
                                </button>
                              )}

                              {project.oasis && (
                                <a
                                  href={project.oasis}
                                  download
                                  className="inline-flex items-center gap-1 rounded-full border border-ink/20 bg-paper px-3 py-2 font-mono text-[0.72rem] font-bold text-graphite hover:text-ink hover:border-ink"
                                  title="Download OASIS Layout Artifact"
                                >
                                  <span>DOWNLOAD OASIS (.oasis) ↓</span>
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Right Column (5 cols): Layout Preview OR Dark Telemetry Console */}
                          <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-ink/25 bg-[#121211] text-paper shadow-md lg:col-span-5">
                            {/* Console Header */}
                            <div className="flex items-center justify-between border-b border-white/10 bg-[#181816] px-3.5 py-2 font-mono text-[0.7rem] text-white/70">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                                <span className="font-bold tracking-wider text-white/90">
                                  {project.tools[0] ? project.tools[0].replace(/[\s/]/g, '_').toUpperCase() : 'TELEMETRY'}
                                </span>
                              </div>
                              <span className="rounded bg-signal/20 px-1.5 py-0.5 text-[0.62rem] font-bold text-signal uppercase">
                                {project.category === 'flagship' ? 'VLSI_SPEC' : 'HW_SPEC'}
                              </span>
                            </div>

                            {/* Center Content: Either Image Lightbox Trigger or Specification Matrix */}
                            {hasGallery && project.preview ? (
                              <button
                                type="button"
                                onClick={() => openLightbox(project, 0)}
                                className="group/thumb relative block aspect-video w-full overflow-hidden bg-black/60 text-left"
                                title="Click to open full evidence lightbox"
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={project.preview}
                                  alt={`${project.title} physical design preview`}
                                  className="h-full w-full object-cover object-top opacity-90 transition-all duration-300 group-hover/thumb:scale-105 group-hover/thumb:opacity-100"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover/thumb:opacity-100">
                                  <span className="rounded-full bg-ink/90 px-3.5 py-1.5 font-mono text-[0.72rem] font-bold text-paper border border-white/20 shadow-lg">
                                    🔍 View {project.gallery?.length} Stage Evidences ↗
                                  </span>
                                  <span className="mt-1 font-mono text-[0.65rem] text-white/70">
                                    Click to inspect layout stages
                                  </span>
                                </div>
                              </button>
                            ) : (
                              <div className="p-4 flex flex-col justify-center flex-1 space-y-2.5">
                                <span className="block font-mono text-[0.65rem] font-bold tracking-wider text-white/50 uppercase border-b border-white/10 pb-1">
                                  SYSTEM ARCHITECTURE &amp; ATTRIBUTES
                                </span>
                                <div className="space-y-1.5">
                                  {project.specHighlights ? (
                                    project.specHighlights.slice(0, 4).map((spec) => (
                                      <div
                                        key={spec.label}
                                        className="flex items-start justify-between gap-2 font-mono text-[0.7rem] bg-white/5 rounded p-1.5 border border-white/5"
                                      >
                                        <span className="text-white/60 font-semibold">{spec.label}:</span>
                                        <span className="text-white text-right font-bold">{spec.value}</span>
                                      </div>
                                    ))
                                  ) : (
                                    <p className="m-0 font-mono text-[0.72rem] text-white/80">
                                      {project.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Console Footer */}
                            <div className="flex items-center justify-between border-t border-white/10 bg-[#161614] px-3.5 py-2 font-mono text-[0.68rem] text-white/70">
                              <span>
                                {project.oasis
                                  ? 'Stream: OASIS (.oasis)'
                                  : hasGallery
                                  ? 'Evidence: Fusion Compiler'
                                  : 'Verification: Documented'}
                              </span>
                              <span className="text-signal font-bold">
                                {hasGallery
                                  ? `${project.gallery?.length} Verified Views`
                                  : 'System Verified'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-depth Project Detail Modal */}
      <ProjectDetailModal
        project={detailProject}
        isOpen={detailProject !== null}
        onClose={closeDetail}
        onOpenEvidence={(stageIdx = 0) => {
          if (detailProject) {
            openLightbox(detailProject, stageIdx)
          }
        }}
      />

      {/* Stage-by-Stage Evidence Lightbox */}
      {lightboxProject && lightboxProject.gallery && (
        <ProjectEvidenceLightbox
          isOpen={lightboxProject !== null}
          images={lightboxProject.gallery}
          currentIndex={lightboxIndex}
          projectTitle={lightboxProject.title}
          onClose={closeLightbox}
          onSelectIndex={(idx) => setLightboxIndex(idx)}
        />
      )}
    </>
  )
}
