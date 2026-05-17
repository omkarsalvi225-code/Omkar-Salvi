import { sectionIds } from './lib/sections'
import { useActiveSection } from './hooks/useActiveSection'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="min-h-dvh">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
