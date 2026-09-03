import { motion } from 'framer-motion'

function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}) {
  const baseStyles = 'glass-panel rounded-2xl overflow-hidden'

  const hoverStyles = hover
    ? 'glass-panel-hover transition-all duration-300'
    : ''

  // gradient prop kept for API compat; the glass surface supersedes it
  const gradientStyles = ''

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
