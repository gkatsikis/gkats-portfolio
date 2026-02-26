import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [visitCount, setVisitCount] = useState(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('portfolio-visit-count')
    if (cached) {
      setVisitCount(Number(cached))
      return
    }

    fetch('https://api.counterapi.dev/v1/gkats-portfolio/visits/up')
      .then((res) => {
        if (!res.ok) throw new Error('Counter API error')
        return res.json()
      })
      .then((data) => {
        if (typeof data.count === 'number') {
          setVisitCount(data.count)
          sessionStorage.setItem('portfolio-visit-count', String(data.count))
        }
      })
      .catch(() => {})
  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/gkatsikis',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/georgios-katsikis',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      href: 'georgioscabro@gmail.com',
      icon: FaEnvelope,
    },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-gradient">GK</span>
            <p className="text-gray-400 text-sm mt-2">
              Building digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-full"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        {visitCount !== null && (
          <p className="text-center text-gray-600 text-xs mt-8">
            {visitCount.toLocaleString()} {visitCount === 1 ? 'visit' : 'visits'}
          </p>
        )}
      </div>
    </footer>
  )
}

export default Footer
