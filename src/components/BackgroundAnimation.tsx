import { motion } from 'framer-motion'

const smoothEase = [0.22, 1, 0.36, 1] as const

export function BackgroundAnimation() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Minimal geometric decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top right circle - animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
          className="absolute -top-32 -right-32 w-96 h-96 geo-circle opacity-40"
        />

        {/* Bottom left circle - larger, slower animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: smoothEase }}
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] geo-circle opacity-30"
        />

        {/* Floating accent circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
            x: [0, 5, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 1 },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full"
          style={{ background: 'var(--accent)' }}
        />

        {/* Small decorative dots with staggered animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: smoothEase }}
          className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-muted-foreground"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: smoothEase }}
          className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-muted-foreground"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 0.6, delay: 1.6, ease: smoothEase },
          }}
          className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-accent"
        />

        {/* Horizontal accent line with draw animation */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8, ease: smoothEase }}
          className="absolute top-2/3 left-0 w-1/3 h-px origin-left"
          style={{ background: 'var(--border)' }}
        />

        {/* Second horizontal line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 1.2, ease: smoothEase }}
          className="absolute top-1/2 right-0 w-1/4 h-px origin-right"
          style={{ background: 'var(--border)' }}
        />

        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1, ease: smoothEase }}
          className="absolute top-0 right-1/4 w-px h-1/4 origin-top"
          style={{ background: 'var(--border)' }}
        />

        {/* Additional subtle vertical line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 1.3, ease: smoothEase }}
          className="absolute bottom-0 left-1/3 w-px h-1/5 origin-bottom"
          style={{ background: 'var(--border)' }}
        />
      </div>
    </>
  )
}
