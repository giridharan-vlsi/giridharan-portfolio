'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { site } from '@/config/site'
import { assets } from '@/config/assets'

export interface NavItem {
  label: string
  shortLabel?: string
  hash: string
  num: string
  id: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', shortLabel: 'Home', hash: '#home', num: '01', id: 'home' },
  { label: 'About', shortLabel: 'About', hash: '#about', num: '02', id: 'about' },
  { label: 'Skills', shortLabel: 'Skills', hash: '#skills', num: '03', id: 'skills' },
  { label: 'RTL → GDSII', shortLabel: 'RTL→GDSII', hash: '#flow', num: '04', id: 'flow' },
  { label: 'Projects', shortLabel: 'Projects', hash: '#projects', num: '05', id: 'projects' },
  { label: 'Technical Exp', shortLabel: 'Tech Exp', hash: '#experience', num: '06', id: 'experience' },
  { label: 'Internship', shortLabel: 'Internship', hash: '#internship', num: '07', id: 'internship' },
  { label: 'Hackathons', shortLabel: 'Hackathons', hash: '#hackathons', num: '08', id: 'hackathons' },
  { label: 'Workshops', shortLabel: 'Workshops', hash: '#workshops', num: '09', id: 'workshops' },
  { label: 'Education', shortLabel: 'Education', hash: '#education', num: '10', id: 'education' },
  { label: 'Contact', shortLabel: 'Contact', hash: '#contact', num: '11', id: 'contact' },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const drawerRef = useRef<HTMLElement>(null)
  const toggleBtnRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    toggleBtnRef.current?.focus()
  }, [])

  // Keyboard support: ESC to close
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  // Active section indicator via IntersectionObserver (Zero scroll listener overhead!)
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          // Sort by top position or intersection ratio
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault()
      close()
      setTimeout(() => {
        if (hash === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          history.pushState(null, '', '#home')
          return
        }
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          history.pushState(null, '', hash)
        }
      }, 100)
    },
    [close]
  )

  return (
    <>
      {/* ─── DESKTOP FLOATING TECHNICAL DOCK (min-width: 1024px) ─── */}
      <header
        aria-label="Main Navigation"
        className="fixed top-3 inset-x-0 z-40 hidden lg:flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper/85 px-3 py-1.5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          {/* Brand Badge */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/75 px-3 py-1 text-ink transition-colors hover:border-ink/30 hover:bg-white"
          >
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse" aria-hidden="true" />
            <span className="font-mono text-[0.72rem] font-bold tracking-wider">
              {site.firstName}
            </span>
            <span className="rounded bg-ink px-1.5 py-0.2 font-mono text-[0.62rem] font-bold text-paper">
              VLSI
            </span>
          </a>

          <div className="h-4 w-px bg-ink/15 mx-1" aria-hidden="true" />

          {/* Nav Links */}
          <nav className="flex items-center gap-0.5" aria-label="Desktop primary sections">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.hash}
                  onClick={(e) => handleNavClick(e, item.hash)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-2.5 py-1 font-mono text-[0.72rem] font-semibold transition-all ${
                    isActive
                      ? 'bg-ink text-paper shadow-xs font-bold'
                      : 'text-graphite hover:text-ink hover:bg-ink/5'
                  }`}
                >
                  {item.shortLabel ?? item.label}
                  {isActive && (
                    <span className="sr-only"> (current section)</span>
                  )}
                </a>
              )
            })}
          </nav>

          <div className="h-4 w-px bg-ink/15 mx-1" aria-hidden="true" />

          {/* Quick CTAs */}
          <div className="flex items-center gap-1.5">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-ink/25 bg-white px-2.5 py-1 font-mono text-[0.7rem] font-bold text-ink transition-all hover:border-signal hover:text-signal"
              title="View / Download Resume"
            >
              <span>RESUME</span>
              <span className="text-[0.65rem]">↓</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 rounded-full bg-signal px-3 py-1 font-mono text-[0.7rem] font-bold text-white transition-all hover:bg-ink shadow-xs"
            >
              <span>CONNECT</span>
              <span className="text-[0.65rem]">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─── MOBILE / TABLET STICKY TOP BAR (max-width: 1023px) ─── */}
      <header
        aria-label="Mobile Navigation Bar"
        className="fixed top-0 inset-x-0 z-40 flex lg:hidden items-center justify-between border-b border-ink/15 bg-paper/95 px-4 py-2.5 backdrop-blur-md"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 text-left"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.avatar ?? '/assets/avatar.webp'}
            alt={`${site.firstName} ${site.lastName}`}
            className="h-8 w-8 rounded-full object-cover border border-signal/40"
            width={32}
            height={32}
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[0.78rem] font-bold tracking-tight text-ink">
                {site.firstName} {site.lastName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
            </div>
            <p className="font-mono text-[0.62rem] text-graphite tracking-wider m-0">
              VLSI &amp; SEMICONDUCTOR
            </p>
          </div>
        </a>

        <div className="flex items-center gap-2">
          {/* Active section badge */}
          <span className="rounded border border-ink/15 bg-white/80 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-ink uppercase">
            {NAV_ITEMS.find((n) => n.id === activeSection)?.shortLabel ?? 'VLSI'}
          </span>

          {/* Hamburger button */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="navigation-drawer"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-ink text-paper transition-all hover:bg-signal"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="h-4 w-4">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="h-4 w-4">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ─── BACKDROP ─── */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`fixed inset-0 z-49 bg-black/40 backdrop-blur-xs transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ─── SLIDE-IN NAVIGATION DRAWER ─── */}
      <nav
        id="navigation-drawer"
        ref={drawerRef}
        aria-label="Full Portfolio Navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-[21rem] flex-col border-l border-ink/15 bg-paper shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-ink/15 bg-white/60 p-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.avatar ?? '/assets/avatar.webp'}
              alt={`${site.firstName} ${site.lastName}`}
              className="h-10 w-10 rounded-full object-cover border-2 border-signal/30"
              width={40}
              height={40}
            />
            <div>
              <p className="m-0 font-mono text-[0.82rem] font-bold text-ink">
                {site.firstName} {site.lastName}
              </p>
              <p className="m-0 font-mono text-[0.65rem] text-graphite tracking-wider">
                VLSI ENGINEER
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 bg-white text-ink hover:border-signal hover:text-signal"
          >
            ✕
          </button>
        </div>

        {/* Status Callout */}
        <div className="border-b border-ink/10 bg-signal/10 px-4 py-2 font-mono text-[0.68rem] text-signal font-semibold flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
          <span>OPEN FOR VLSI INTERNSHIPS</span>
        </div>

        {/* Nav Items List */}
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <p className="px-3 pb-2 font-mono text-[0.65rem] font-bold tracking-widest text-ink/40 uppercase">
            Navigation Index
          </p>
          <ul className="space-y-1 m-0 p-0 list-none" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.hash}
                    onClick={(e) => handleNavClick(e, item.hash)}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 font-mono text-[0.78rem] transition-colors ${
                      isActive
                        ? 'bg-ink text-paper font-bold'
                        : 'text-ink hover:bg-white hover:text-signal'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`text-[0.65rem] ${
                          isActive ? 'text-signal' : 'text-graphite'
                        }`}
                      >
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-xs" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Drawer Footer Actions */}
        <div className="border-t border-ink/15 bg-white/70 p-4 space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center gap-1 rounded-md border border-ink bg-white py-2 font-mono text-[0.72rem] font-bold text-ink hover:border-signal hover:text-signal"
            >
              <span>RESUME</span>
              <span>↓</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center gap-1 rounded-md bg-signal py-2 font-mono text-[0.72rem] font-bold text-white hover:bg-ink"
            >
              <span>CONTACT</span>
              <span>↗</span>
            </a>
          </div>

          <div className="flex justify-between pt-1 font-mono text-[0.68rem] text-graphite">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-signal"
              tabIndex={isOpen ? 0 : -1}
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-signal"
              tabIndex={isOpen ? 0 : -1}
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${site.contactEmail}`}
              className="hover:text-signal"
              tabIndex={isOpen ? 0 : -1}
            >
              Email ↗
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
