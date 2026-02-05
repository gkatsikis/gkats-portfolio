import { motion } from 'framer-motion'
import { FaGithub, FaChevronDown } from 'react-icons/fa'
import { SiReact, SiTypescript, SiDjango, SiPython, SiFastapi } from 'react-icons/si'
import Button from '../ui/Button'

const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB', position: 'top-20 left-[10%]', delay: 0 },
  { Icon: SiTypescript, color: '#3178C6', position: 'top-32 right-[15%]', delay: 0.5 },
  { Icon: SiDjango, color: '#092E20', position: 'bottom-32 left-[20%]', delay: 1 },
  { Icon: SiPython, color: '#3776AB', position: 'bottom-40 right-[10%]', delay: 1.5 },
  { Icon: SiFastapi, color: '#009688', position: 'top-1/2 left-[5%]', delay: 2 },
]

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, position, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
            className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
          >
            <Icon size={40} style={{ color }} className="drop-shadow-md" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-teal-400 text-lg md:text-xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient">Georgios Katsikis</span>
          </h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Software Engineer
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Engineer with a social worker's heart and a collaborator's mindset. I believe the best systems are built by teams who care about the people on the other end.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              href="https://github.com/gkatsikis"
              external
              icon={FaGithub}
              size="lg"
            >
              View GitHub
            </Button>
            <Button
              href="#projects"
              variant="outline"
              size="lg"
            >
              See My Work
            </Button>
          </motion.div>
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
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
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
