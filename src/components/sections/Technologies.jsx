import { motion } from 'framer-motion'
import {
  SiPython, SiTypescript, SiGo, SiSwift,
  SiDjango, SiFastapi, SiFlask, SiReact, SiPostgresql, SiRedis,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiGithubactions,
  SiAnsible, SiVagrant,
  SiCelery, SiPydantic, SiPytest, SiPandas, SiSqlalchemy,
} from 'react-icons/si'
import SectionHeading from '../ui/SectionHeading'
import { technologies, technologyCategories } from '../../data/technologies'

// ponytail: static map instead of `import * as Si` — the namespace import kept
// all ~3,200 si icons in the bundle (5 MB). New icons in technologies.js must
// be added here too.
const icons = {
  SiPython, SiTypescript, SiGo, SiSwift,
  SiDjango, SiFastapi, SiFlask, SiReact, SiPostgresql, SiRedis,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiGithubactions,
  SiAnsible, SiVagrant,
  SiCelery, SiPydantic, SiPytest, SiPandas, SiSqlalchemy,
}

function TechIcon({ name, icon, color }) {
  const IconComponent = icons[icon]

  if (!IconComponent) {
    return null
  }

  return (
    <motion.div
      className="group flex flex-col items-center gap-3 p-4"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <div
        className="p-4 rounded-2xl bg-stone-800/50 border border-stone-700 group-hover:border-current transition-all duration-300"
        style={{ '--tw-border-opacity': 0.5 }}
      >
        <IconComponent
          size={40}
          style={{ color }}
          className="transition-all duration-300 group-hover:drop-shadow-lg"
        />
      </div>
      <span className="text-stone-400 text-sm font-medium group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

function Technologies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="technologies" className="py-20 md:py-32 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technologies"
          subtitle="Some tools and technologies I work with"
        />

        <div className="space-y-16">
          {technologyCategories.map((category) => (
            <motion.div
              key={category.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
            >
              <h3 className="text-xl font-semibold text-stone-300 mb-6 text-center">
                {category.label}
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-2 md:gap-4"
                variants={containerVariants}
              >
                {technologies[category.key].map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants}>
                    <TechIcon {...tech} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
