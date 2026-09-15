'use client'

import { site } from '@/config/site'

export default function ActivitiesSection() {
  return (
    <div className="hidden" aria-hidden="true">
      {/* Replaced by dedicated HackathonsSection and WorkshopsSection */}
      {site.workshops.heading}
    </div>
  )
}
