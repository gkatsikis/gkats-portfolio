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
  return (
    <ContactProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
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
  )
}

export default App
