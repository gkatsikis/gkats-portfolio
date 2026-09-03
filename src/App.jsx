import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { ContactProvider } from './components/ui/ContactModal'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import SocialWork from './components/sections/SocialWork'
import Technologies from './components/sections/Technologies'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'

function App() {
  // feeds --mx/--my to the .glass-panel::after specular highlight
  useEffect(() => {
    const onMove = (e) => {
      const el = e.target.closest?.('.glass-panel')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
    <ContactProvider>
      <div className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] liquid-glass liquid-glass-tinted px-4 py-2 text-white font-medium"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Projects />
          <SocialWork />
          <Experience />
          <Technologies />
        </main>
        <Footer />
      </div>
    </ContactProvider>
    </MotionConfig>
  )
}

export default App
