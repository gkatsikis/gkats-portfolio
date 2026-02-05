import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../data/experience'

function ExperienceCard({ company, role, location, startDate, endDate, description, highlights, technologies, color, index }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline connector */}
      {index < experience.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-slate-600 to-transparent hidden md:block" />
      )}

      <div
        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-opacity-50 transition-all duration-300 relative overflow-hidden group"
        style={{ '--accent-color': color }}
      >
        {/* Accent border */}
        <div
          className="absolute top-0 left-0 w-full h-1 opacity-80"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />

        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          {/* Timeline dot */}
          <div
            className="hidden md:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>

          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{role}</h3>
                <p className="text-lg font-medium" style={{ color }}>{company}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-gray-500" />
                  {startDate} - {endDate}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="text-gray-500" />
                  {location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-4">{description}</p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-gray-300 border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
        />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
