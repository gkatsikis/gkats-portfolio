import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const values = [
  {
    name: 'Trauma-Informed',
    tip: 'Assume everyone arrives carrying something. In software that means no dark patterns, no surprise states, nothing that punishes a wrong click.',
  },
  {
    name: 'Harm Reduction',
    tip: "Meet people where they are instead of demanding they change first. It's why I build around your existing spreadsheet instead of ripping out your workflow.",
  },
  {
    name: 'Restorative Justice',
    tip: 'Repair over punishment. In engineering terms, blameless debugging. Fix the system that allowed the mistake, not the person who made it.',
  },
  {
    name: 'Cultural Humility',
    tip: "Staying a student of other people's contexts. I build for organizations whose work I don't presume to understand better than they do.",
  },
  {
    name: 'LGBTQIA+ Affirming',
    tip: "In care and in code alike, names can change, pronouns aren't a binary dropdown, and forms never misgender the person filling them out.",
  },
  {
    name: 'Person-Centered',
    tip: 'The person defines the goal, not the framework. In software, the outcome for the human on the other side of the screen beats the feature list.',
  },
  {
    name: 'Relational',
    tip: 'The work happens inside the relationship. Long engagements over handoffs; I stay reachable after launch.',
  },
  {
    name: 'Non-Pathologizing',
    tip: "People aren't problems to diagnose. If users are 'doing it wrong,' the confusing software is the bug, not the person.",
  },
  {
    name: 'Somatic-Aware',
    tip: 'Bodies keep the score, screens included. Calm interfaces, no alarm-red everywhere, motion that respects reduced-motion settings.',
  },
  {
    name: 'Mutual Aid',
    tip: "Communities keeping each other going without gatekeepers. It's why my pricing slides for non-profits.",
  },
  {
    name: 'Community Care',
    tip: "Care as infrastructure, not one person's burden. I build tools that lighten a whole team's load instead of minting a single hero.",
  },
  {
    name: 'Abolitionist-Leaning',
    tip: 'Question systems that punish by default. In tech that means no surveillance features, and no tracking beyond what serves the person being tracked.',
  },
  {
    name: 'Decolonizing Practice',
    tip: "Asking whose defaults became 'the default.' I question who a form assumes you are, from family structure to language to name order.",
  },
]

function SocialWork() {
  return (
    <section id="social-work" className="ambient-glow py-20 md:py-32 bg-stone-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Social Work Side" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            You won't find a timeline or bullet points here, that's on purpose.
            This side of me isn't corporate, and it never was. Social work, as a mentor once told me,
            isn't what I do, it's <em>how</em> I do it.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            I'm trained in mindfulness-based interventions, EFT (Emotionally Focused Therapy), DBT, and I approach care through an attachment
            lens. As a mixed-race child of immigrants, cultural humility isn't a
            framework I studied, it's the house I grew up in.
          </p>
          <p className="text-stone-300 text-lg leading-relaxed mb-10">
            These values follow me everywhere, including into the software I
            build.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {values.map((value, index) => (
              <motion.span
                key={value.name}
                tabIndex={0}
                className="group relative glass-panel rounded-full px-5 py-2.5 text-stone-200 border-terracotta/30 font-medium cursor-default hover:border-terracotta/60 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {value.name}
                <span
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 glass-panel bg-stone-900/85 rounded-xl px-4 py-3 text-sm text-stone-200 font-normal text-left leading-relaxed opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 z-10"
                >
                  {value.tip}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialWork
