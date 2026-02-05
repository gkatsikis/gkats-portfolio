import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a software engineer with a background in clinical social work and training
              as a meditation teacher. This unique combination shapes how I approach
              building software—with empathy, user-centered thinking, and a focus on
              creating tools that genuinely help people.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Across the full stack, I specialize in Python, Django, FastAPI, React, and
              TypeScript. I'm particularly drawn to health-tech and wellness spaces where
              my technical skills and human services background intersect.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me training Brazilian jiu jitsu, teaching
              meditation, or reading outside on a sunny day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/resume.pdf"
                external
                icon={FiDownload}
                variant="primary"
              >
                Download Resume
              </Button>
              <Button
                href="mailto:hello@example.com"
                icon={FiMail}
                variant="secondary"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>

          {/* Stats / Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Shipped' },
              { number: '✓', label: 'Stack Agnostic' },
              { number: '✓', label: 'Architecture First' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-gradient block mb-2">
                  {stat.number}
                </span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
