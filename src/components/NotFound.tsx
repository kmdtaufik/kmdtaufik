import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'

const smoothEase = [0.22, 1, 0.36, 1] as const

// Twinkling star
function Star({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, background: 'var(--accent)' }}
      animate={{ opacity: [0.15, 0.6, 0.15], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const stars = [
  { delay: 0, x: '8%', y: '20%', size: 3 },
  { delay: 0.5, x: '88%', y: '15%', size: 2 },
  { delay: 1, x: '78%', y: '70%', size: 3 },
  { delay: 1.5, x: '15%', y: '75%', size: 2 },
  { delay: 0.8, x: '55%', y: '8%', size: 2 },
  { delay: 2, x: '92%', y: '45%', size: 2 },
]

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Floating stars */}
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}

      {/* Astronaut as background — large, faded, floating */}
      <motion.img
        src="/lost-astronaut.png"
        alt=""
        aria-hidden="true"
        width={420}
        height={420}
        className="absolute right-[-2%] bottom-[-5%] opacity-[0.07] dark:opacity-[0.05] pointer-events-none select-none"
        style={{ filter: 'grayscale(0.3)' }}
        animate={{ y: [0, 0, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-16 max-w-lg">
        {/* 404 number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="font-serif text-[7rem] sm:text-[9rem] font-bold leading-none text-foreground/10 select-none mb-2"
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 0px transparent',
                '2px 0 var(--accent)',
                '-2px 0 transparent',
                '0 0 0px transparent',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            404
          </motion.span>
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: smoothEase }}
        >
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Lost in Space
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto mb-8 leading-relaxed">
            This page drifted off into the void. Let's get you back on course.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: smoothEase }}
          className="flex items-center justify-center gap-3"
        >
          <Link to="/">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Home
            </motion.div>
          </Link>

          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle orbit ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-border/15 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
