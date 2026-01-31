import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock } from 'lucide-react'

export const Route = createFileRoute('/login')({ component: Login })

const paperFoldVariants = {
  hidden: { opacity: 0, rotateX: -90, transformOrigin: 'top', y: -20 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function Login() {
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
          >
            <ShieldCheck className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl font-black text-foreground mb-2"
          >
            Admin Login
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground"
          >
            TOTP-based authentication
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={paperFoldVariants}
          className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-lg"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <Lock className="w-5 h-5 text-primary" />
              <p className="text-sm text-primary">
                No password required. TOTP verification only.
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                TOTP Code
              </label>
              <input
                type="text"
                placeholder="Enter 6-digit code"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                maxLength={6}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-lg"
            >
              Verify & Login
            </motion.button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Access restricted to authorized administrators only
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
