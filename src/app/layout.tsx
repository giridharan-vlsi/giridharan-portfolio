import type { Metadata, Viewport } from 'next'
import { site } from '@/config/site'
import SmoothScroll from '@/components/ui/SmoothScroll'
import Cursor from '@/components/ui/Cursor'
import NavigationBar from '@/components/navigation/NavigationBar'
import './globals.css'

export const metadata: Metadata = {
  title: `${site.firstName} ${site.lastName} | VLSI Engineer · RTL Design · Physical Design · DFT`,
  description: `${site.firstName} ${site.lastName} — VLSI Engineer with hands-on RTL-to-OASIS/GDSII implementation, Synopsys Fusion Compiler, VCS/Verdi verification, and Tessent DFT expertise. Seeking semiconductor engineering internship opportunities.`,
  openGraph: {
    title: `${site.firstName} ${site.lastName} — VLSI Engineering Portfolio ${site.year}`,
    description: 'Hardware architecture from Verilog RTL to Silicon OASIS Layout.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f3f1eb',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SmoothScroll />
        <Cursor />
        <NavigationBar />
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
