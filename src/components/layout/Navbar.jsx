import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMail } from 'react-icons/fi'
import { useContact } from '../ui/ContactModal'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Social Work', href: '#social-work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#technologies' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const openContact = useContact()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          scrolled
            ? 'mt-3 glass-panel bg-stone-900/60 rounded-2xl px-4 sm:px-6 shadow-lg'
            : 'px-1 sm:px-2 lg:px-4'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl md:text-3xl font-semibold font-display text-stone-100"
            aria-label="Georgios Katsikis home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            γκ<span className="text-terracotta">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="liquid-glass px-4 py-2 text-stone-300 hover:text-white font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={openContact}
              className="liquid-glass liquid-glass-tinted ml-3 flex items-center gap-2 text-white px-4 py-2 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FiMail className="text-lg" />
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel bg-stone-900/85 rounded-2xl mt-2 max-w-7xl mx-auto overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-stone-300 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="flex items-center gap-2 text-terracotta-light hover:text-terracotta transition-colors duration-200 font-medium py-2"
                onClick={() => {
                  setIsOpen(false)
                  openContact()
                }}
              >
                <FiMail />
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
