import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Cpu, Activity, Zap, Shield } from 'lucide-react'

export const Route = createFileRoute('/agents')({ component: Agents })

const paperFoldVariants = {
  hidden: { opacity: 0, rotateX: -90, transformOrigin: 'top', y: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

function Agents() {
  const agents = [
    {
      name: 'The Architect',
      role: 'Lead Full-Stack Engineer',
      status: 'active',
      description:
        'Primary system agent responsible for code generation, architecture decisions, and protocol enforcement.',
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      name: 'Performance Monitor',
      role: 'System Optimization',
      status: 'active',
      description:
        'Monitors application performance, analyzes bottlenecks, and suggests optimizations.',
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      name: 'Build System',
      role: 'Compilation & Deployment',
      status: 'active',
      description:
        'Handles build processes, type checking, and deployment pipeline automation.',
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-8"
            >
              <Cpu className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">
                SYSTEM CORE
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-foreground mb-6"
            >
              Active Agents
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground"
            >
              System daemons & protocol handlers
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={paperFoldVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-secondary">
                    {agent.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 text-xs font-medium uppercase">
                      {agent.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {agent.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{agent.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {agent.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={paperFoldVariants}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-lg"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Protocol Status
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Architecture</p>
                <p className="text-2xl font-bold text-primary">
                  Performance First
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Animation</p>
                <p className="text-2xl font-bold text-primary">
                  Origami Protocol
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Theme</p>
                <p className="text-2xl font-bold text-primary">
                  Aurora Midnight
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
