import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

function ProjectCard({ title, description, technologies, githubUrl, liveUrl, featured, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col" gradient>
        {/* Project preview */}
        <div className="relative h-48 bg-gradient-to-br from-teal-900/50 to-cyan-900/50 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-white/10">{title.charAt(0)}</span>
            </div>
          )}
          {featured && (
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 mb-4 flex-1">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-700/50 text-teal-300 border border-teal-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
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
            <Button
              href={liveUrl}
              external
              variant="primary"
              size="sm"
              icon={FaExternalLinkAlt}
              className="flex-1"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
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
    </section>
  )
}

export default Projects
