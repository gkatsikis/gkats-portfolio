import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaImages, FaGooglePlay } from 'react-icons/fa'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

function ProjectCard({ title, description, technologies, githubUrl, liveUrl, liveLabel, comingSoon, featured, image, imageFit, screens, onOpenScreens, index }) {
  const preview = image ? (
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      className={
        imageFit === 'contain'
          ? 'w-full h-full object-contain p-4'
          : 'w-full h-full object-cover object-top'
      }
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-6xl font-bold text-bone/10">{title.charAt(0)}</span>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col" gradient>
        {/* Project preview */}
        <div className="relative h-48 bg-gradient-to-br from-terracotta/15 to-obsidian/60 overflow-hidden">
          {screens ? (
            <button
              type="button"
              onClick={onOpenScreens}
              aria-label={`See ${title} screens`}
              className="block w-full h-full cursor-zoom-in"
            >
              {preview}
            </button>
          ) : (
            preview
          )}
          {featured && (
            <span className="liquid-glass liquid-glass-tinted absolute top-4 right-4 px-3 py-1 text-xs font-medium text-bone">
              Featured
            </span>
          )}
          {screens && (
            <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-obsidian/75 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-bone pointer-events-none">
              <FaImages /> {screens.length} screens
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-bone mb-3">{title}</h3>
          <p className="text-stone-400 mb-4 flex-1">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="glass-panel rounded-md px-2.5 py-1 text-xs font-medium text-bone border-terracotta/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {screens && !liveUrl && (
              <Button
                onClick={onOpenScreens}
                variant="primary"
                size="sm"
                icon={FaImages}
                className="flex-1"
              >
                See it in action
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                external
                variant="secondary"
                size="sm"
                icon={FaGithub}
                className="flex-1"
              >
                Code
              </Button>
            )}
            {liveUrl && (
              <Button
                href={liveUrl}
                external
                variant="primary"
                size="sm"
                icon={FaExternalLinkAlt}
                className="flex-1"
              >
                {liveLabel || 'Live Demo'}
              </Button>
            )}
            {comingSoon && (
              <Button
                variant="secondary"
                size="sm"
                icon={FaGooglePlay}
                className="flex-1 opacity-60 pointer-events-none"
                disabled
              >
                {comingSoon}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Lightbox for projects with no public URL: `project.screens` is [{ src, alt, caption }]
function ScreensModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const panelRef = useRef(null)
  const previousFocus = useRef(null)
  const screens = project?.screens ?? []
  const step = (delta) => setIndex((i) => (i + delta + screens.length) % screens.length)

  useEffect(() => {
    if (!project) return
    previousFocus.current = document.activeElement
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('button')?.focus()
    return () => {
      setIndex(0) // reset on close, so the next open never flashes the last screen
      document.body.style.overflow = ''
      previousFocus.current?.focus?.()
    }
  }, [project])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') onClose()
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
    if (event.key === 'Tab') {
      const focusable = panelRef.current?.querySelectorAll('button')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
  }

  const screen = screens[index]

  // Portal: the section's ancestors form a stacking context, which would put the nav above the
  // overlay and anchor `fixed` to the section instead of the viewport. Nothing renders on the server.
  if (typeof document === 'undefined') return null
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-obsidian-deep/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} screens`}
            className="w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg md:text-xl font-bold text-bone">{project.title}</h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="liquid-glass p-1.5 text-stone-400 hover:text-bone"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden">
              <img
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-3 mt-4">
              <button
                onClick={() => step(-1)}
                aria-label="Previous screen"
                className="liquid-glass p-2 text-stone-300 hover:text-bone flex-shrink-0"
              >
                <FiChevronLeft size={22} />
              </button>
              <p className="text-stone-300 text-sm md:text-base text-center flex-1">
                {screen.caption}
                <span className="block text-stone-500 text-xs mt-1">
                  {index + 1} of {screens.length}
                </span>
              </p>
              <button
                onClick={() => step(1)}
                aria-label="Next screen"
                className="liquid-glass p-2 text-stone-300 hover:text-bone flex-shrink-0"
              >
                <FiChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="ambient-glow py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              onOpenScreens={() => setOpen(project)}
            />
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            href="https://github.com/gkatsikis"
            external
            variant="outline"
            size="lg"
            icon={FaGithub}
          >
            View More on GitHub
          </Button>
        </motion.div>
      </div>

      <ScreensModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}

export default Projects
