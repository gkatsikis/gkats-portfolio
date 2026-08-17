import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiSend } from 'react-icons/fi'
import Button from './Button'

const EMAIL = 'georgioscabro@gmail.com'

const ContactContext = createContext(() => {})

export function useContact() {
  return useContext(ContactContext)
}

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <ContactContext.Provider value={() => setOpen(true)}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactContext.Provider>
  )
}

const inputClasses =
  'w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-terracotta transition-colors'

function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const panelRef = useRef(null)
  const previousFocus = useRef(null)

  useEffect(() => {
    if (!open) return
    previousFocus.current = document.activeElement
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('input')?.focus()
    return () => {
      document.body.style.overflow = ''
      previousFocus.current?.focus?.()
    }
  }, [open])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') onClose()
    if (event.key === 'Tab') {
      const focusable = panelRef.current?.querySelectorAll(
        'button, input, textarea, a[href]'
      )
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return // bot filled the honeypot; drop silently
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: 'New inquiry via gkats.dev' }),
      })
      if (!res.ok) throw new Error(`FormSubmit ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const handleClose = () => {
    setStatus('idle')
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="bg-stone-900 border border-stone-700 rounded-2xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 id="contact-modal-title" className="text-2xl font-bold text-white">
                Start a conversation
              </h3>
              <button
                onClick={handleClose}
                aria-label="Close"
                className="text-stone-400 hover:text-white p-1.5 hover:bg-stone-800 rounded-md transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {status === 'sent' ? (
              <div className="py-8 text-center">
                <p className="text-stone-100 text-lg mb-2">Message sent.</p>
                <p className="text-stone-400">I'll get back to you within a day.</p>
              </div>
            ) : (
              <>
                <p className="text-stone-400 mb-6">
                  Tell me a bit about what you're working on — I reply within a day.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* honeypot — hidden from humans, bots fill it */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-stone-400 mb-1.5">
                      Name <span className="text-terracotta-light">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-stone-400 mb-1.5">
                      Email <span className="text-terracotta-light">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm text-stone-400 mb-1.5">
                      Phone <span className="text-stone-500">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-stone-400 mb-1.5">
                      Message <span className="text-terracotta-light">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows="4"
                      className={inputClasses}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-terracotta-light text-sm">
                      Something went wrong sending this. Email me directly at{' '}
                      <span className="underline">{EMAIL}</span>.
                    </p>
                  )}

                  <Button
                    type="submit"
                    icon={FiSend}
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
