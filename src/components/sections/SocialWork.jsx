import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const values = [
  'Trauma-Informed',
  'Harm Reduction',
  'Restorative Justice',
  'Cultural Humility',
  'LGBTQIA+ Affirming',
  'Person-Centered',
  'Relational',
  'Non-Pathologizing',
  'Somatic-Aware',
  'Mutual Aid',
  'Community Care',
  'Abolitionist-Leaning',
  'Decolonizing Practice',
]

function SocialWork() {
  return (
    <section id="social-work" className="py-20 md:py-32 bg-stone-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Social Work Side" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            You won't find a timeline or bullet points here—that's on purpose.
            This side of me isn't corporate, and it never was. Social work, for
            me, is less a job history than a way of seeing people.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm trained in DBT, mindfulness-based interventions, and emotionally
            focused therapy (EFT), and I approach care through an attachment
            lens. As a mixed-race child of immigrants, cultural humility isn't a
            framework I studied—it's the house I grew up in.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            These values follow me everywhere, including into the software I
            build:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {values.map((value, index) => (
              <motion.span
                key={value}
                className="px-5 py-2.5 rounded-full bg-stone-800/50 text-amber-200 border border-amber-500/20 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {value}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialWork
