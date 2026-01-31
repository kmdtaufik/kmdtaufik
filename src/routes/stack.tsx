import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Code2, Database, Zap, Server, Boxes } from 'lucide-react'

export const Route = createFileRoute('/stack')({ component: Stack })

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

function Stack() {
  const technologies = [
    {
      category: 'Framework',
      icon: <Boxes className="w-6 h-6 text-primary" />,
      items: [
        {
          name: 'TanStack Start',
          description: 'Full-stack React framework with type-safe server functions',
        },
        {
          name: 'TanStack Router',
          description: 'File-based routing with advanced features',
        },
      ],
    },
    {
      category: 'Runtime',
      icon: <Zap className="w-6 h-6 text-primary" />,
      items: [
        {
          name: 'Bun',
          description: 'Fast JavaScript runtime & package manager',
        },
      ],
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6 text-primary" />,
      items: [
        {
          name: 'Hono',
          description: 'Lightweight web framework for API routes',
        },
      ],
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6 text-primary" />,
      items: [
        {
          name: 'Drizzle ORM',
          description: 'Type-safe SQL ORM for TypeScript',
        },
        {
          name: 'Neon',
          description: 'Serverless Postgres for scalable data storage',
        },
      ],
    },
    {
      category: 'UI & Styling',
      icon: <Code2 className="w-6 h-6 text-primary" />,
      items: [
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework',
        },
        {
          name: 'Framer Motion',
          description: 'Animation library for React',
        },
        {
          name: 'Shadcn/ui',
          description: 'Beautifully designed components',
        },
      ],
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
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">
                TECHNOLOGIES
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-foreground mb-6"
            >
              Tech Stack
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground"
            >
              Modern performance-first architecture
            </motion.p>
          </div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={paperFoldVariants}
                className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-secondary">
                    {tech.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {tech.category}
                  </h2>
                </div>
                <div className="space-y-4">
                  {tech.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.01, x: 4 }}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <h3 className="text-lg font-semibold mb-1 text-primary">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
