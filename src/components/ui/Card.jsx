import { motion } from 'framer-motion'

function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}) {
  const baseStyles = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden'

  const hoverStyles = hover
    ? 'hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300'
    : ''

  const gradientStyles = gradient
    ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80'
    : ''

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
      whileHover={hover ? { y: -5 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
