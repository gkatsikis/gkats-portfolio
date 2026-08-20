import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Button from '../ui/Button'
import { useContact } from '../ui/ContactModal'

// ponytail: "next season" = nearest upcoming of Mar/Jun/Sep/Dec, so the
// availability line always advertises the season ahead (Jul → "fall 2026",
// Sep → "winter 2026", Dec → "spring 2027").
function nextSeason() {
  const now = new Date()
  const starts = [
    [2, 'spring'],
    [5, 'summer'],
    [8, 'fall'],
    [11, 'winter'],
  ]
  const next = starts.find(([month]) => month > now.getMonth())
  const [, name] = next || starts[0]
  return `${name} ${next ? now.getFullYear() : now.getFullYear() + 1}`
}

function Hero() {
  const openContact = useContact()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-terracotta rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-dusk rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-terracotta-dark rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" />
      </div>

      {/* Main content */}
      {/* pt clears the fixed navbar, pb reserves the scroll-indicator zone on short screens */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24 pb-32">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-14 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* edges feather into the ground via radial mask — no ring, no border */}
          <img
            src="/headshot.jpg"
            alt="Georgios Katsikis"
            className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex-shrink-0 object-cover [mask-image:radial-gradient(circle_closest-side,black_72%,transparent_98%)] [-webkit-mask-image:radial-gradient(circle_closest-side,black_72%,transparent_98%)]"
          />

          <div className="min-w-0">
          <motion.p
            className="text-terracotta-light text-lg md:text-xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-stone-100">Georgios Katsikis<span className="text-terracotta">.</span></span>
          </h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl text-stone-300 font-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Software Engineer
            <br />
            Social Worker, LMSW
          </motion.h2>

          <motion.p
            className="font-display italic text-stone-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Engineer with a social worker's heart. I build custom software for non-profits and healthcare organizations—tools shaped by years of working with the people on the other end.
          </motion.p>

          <motion.p
            className="text-stone-300 text-sm md:text-base mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 align-middle"
              aria-hidden="true"
            />
            Taking on projects for {nextSeason()} · I reply within a day
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              href="#projects"
              size="lg"
            >
              See My Work
            </Button>
            <Button
              onClick={openContact}
              variant="outline"
              size="lg"
              icon={FiMail}
            >
              Get in Touch
            </Button>
          </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-stone-400 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <FaChevronDown />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
