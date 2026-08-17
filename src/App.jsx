import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import SocialWork from './components/sections/SocialWork'
import Technologies from './components/sections/Technologies'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'

function App() {
  return (
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
  )
}

export default App
