import EngineeringSnapshot from '@/components/hero/EngineeringSnapshot'
import Hero from '@/components/hero/Hero'
import IntroSection from '@/components/intro/IntroSection'
import SkillsSection from '@/components/skills/SkillsSection'
import RtlToGdsiiSection from '@/components/flow/RtlToGdsiiSection'
import ProjectsSection from '@/components/projects/ProjectsSection'
import TechnicalExperienceSection from '@/components/technical-experience/TechnicalExperienceSection'
import InternshipSection from '@/components/internships/InternshipSection'
import HackathonsSection from '@/components/hackathons/HackathonsSection'
import WorkshopsSection from '@/components/workshops/WorkshopsSection'
import EducationSection from '@/components/education/EducationSection'
import NameStrip from '@/components/name/NameStrip'
import StudioSection from '@/components/studio/StudioSection'
import ConnectCard from '@/components/ui/ConnectCard'
import SiteFooter from '@/components/footer/SiteFooter'
import PaperRun from '@/components/paper/PaperRun'

export default function Page() {
  return (
    <>
      <main>
        {/* One continuous sheet of warm graph paper running the height of the document */}
        <PaperRun>
          {/* 1. ENGINEERING SNAPSHOT / TELEMETRY */}
          <EngineeringSnapshot />

          {/* 2. HERO */}
          <Hero />

          {/* 3. ABOUT */}
          <IntroSection />

          {/* 4. TECHNICAL SKILLS */}
          <SkillsSection />

          {/* 5. RTL → GDSII FLOW */}
          <RtlToGdsiiSection />

          {/* 6. FEATURED PROJECTS (ALU & CPU Separate) */}
          <ProjectsSection />

          {/* 7. TECHNICAL EXPERIENCE / ASSIGNMENTS (Tessent, Custom IC, FPGA) */}
          <TechnicalExperienceSection />

          {/* 8. INTERNSHIP EXPERIENCE (Infosys Springboard 6.0) */}
          <InternshipSection />

          {/* 9. HACKATHONS & COMPETITIONS (InnoClash'26, Smart India Hackathon) */}
          <HackathonsSection />

          {/* 10. WORKSHOPS & TECHNICAL EVENTS (ProV Logic, SIMATS Nexora, Synopsys CIT) */}
          <WorkshopsSection />

          {/* 11. EDUCATION (RIT B.Tech, 12th, 10th, Languages) */}
          <EducationSection />

          {/* TRANSITION ACCENTS */}
          <NameStrip />
          <StudioSection />

          {/* 12. CONTACT & DIRECT MESSAGE */}
          <SiteFooter />
        </PaperRun>
      </main>
      <ConnectCard />
    </>
  )
}
