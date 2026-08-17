import { motion } from 'framer-motion'
import { FiClipboard, FiBarChart2, FiRefreshCw, FiLayers, FiMail } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { useContact } from '../ui/ContactModal'

const offerings = [
  {
    icon: FiClipboard,
    title: 'Case management & intake',
    description:
      'Client records, referrals, and intake flows built around how your team actually works — not the other way around.',
  },
  {
    icon: FiBarChart2,
    title: 'Dashboards & reporting',
    description:
      'Funder-ready reports and live program dashboards from the data you already collect.',
  },
  {
    icon: FiRefreshCw,
    title: 'Integrations & automation',
    description:
      "Connect the systems you're stuck with — EHRs, spreadsheets, email — and automate the copy-paste in between.",
  },
  {
    icon: FiLayers,
    title: 'Web apps, end to end',
    description:
      'From first conversation to deployed product: design, build, hosting, and the unglamorous essentials like backups and secure logins.',
  },
]

const steps = [
  {
    title: 'A short discovery call',
    description:
      "Thirty minutes, plain language, free. You describe the problem; I'll tell you honestly whether custom software is the right answer — sometimes it isn't.",
  },
  {
    title: 'A fixed-scope proposal',
    description:
      'What gets built, what it costs, and when it ships — in writing, before any money moves.',
  },
  {
    title: 'Build, with weekly check-ins',
    description:
      'You see working software every week, and nothing launches without your sign-off. After launch, I stay reachable for support.',
  },
]

function Services() {
  const openContact = useContact()
  return (
    <section id="services" className="py-20 md:py-32 bg-stone-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What I Build"
          subtitle="Custom software for non-profits and healthcare teams — scoped in plain language, shipped with care."
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {offerings.map((offer, index) => (
            <motion.div
              key={offer.title}
              className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-2xl p-6 hover:border-terracotta/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <offer.icon className="text-terracotta-light mb-4" size={28} aria-hidden="true" />
              <h3 className="text-lg font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-stone-400">{offer.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="border-l-4 border-terracotta bg-stone-800/30 rounded-r-2xl px-6 py-5 text-stone-300 text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          I've built systems that handle protected health information — column-level
          encryption, audit trails, passkey login. HIPAA isn't an afterthought here;
          it's a starting assumption.
        </motion.p>

        <h3 className="text-xl font-semibold text-stone-300 mb-8 text-center">
          How an engagement runs
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="text-4xl font-bold text-terracotta-light block mb-3">
                {index + 1}
              </span>
              <h4 className="text-white font-semibold mb-2">{step.title}</h4>
              <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={openContact} icon={FiMail} size="lg">
            Start a Conversation
          </Button>
          <p className="text-stone-500 text-sm mt-4">
            Engagements contract through Cabro Insight LLC.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
