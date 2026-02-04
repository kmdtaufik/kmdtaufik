import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Boxes, Database, Server, Code2, Zap } from 'lucide-react'

export const Route = createFileRoute('/stack')({ component: Stack })

const smoothEase = [0.22, 1, 0.36, 1] as const

function Stack() {
  const categories = [
    {
      name: 'Framework',
      icon: Boxes,
      items: [
        { name: 'TanStack Start', description: 'Full-stack React framework' },
        { name: 'TanStack Router', description: 'Type-safe routing' },
      ],
    },
    {
      name: 'Runtime',
      icon: Zap,
      items: [
        { name: 'Bun', description: 'Fast JavaScript runtime' },
      ],
    },
    {
      name: 'Backend',
      icon: Server,
      items: [
        { name: 'Hono', description: 'Lightweight web framework' },
      ],
    },
    {
      name: 'Database',
      icon: Database,
      items: [
        { name: 'Drizzle ORM', description: 'Type-safe SQL ORM' },
        { name: 'Neon', description: 'Serverless Postgres' },
      ],
    },
    {
      name: 'UI & Styling',
      icon: Code2,
      items: [
        { name: 'Tailwind CSS', description: 'Utility-first CSS' },
        { name: 'Framer Motion', description: 'Animation library' },
        { name: 'shadcn/ui', description: 'Component library' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4">Technologies</p>
          <h1 className="heading-lg text-foreground mb-4">
            Tech Stack
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Modern, performance-first tools for building exceptional web experiences.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.section
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + catIndex * 0.1,
                duration: 0.6,
                ease: smoothEase
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary">
                  <category.icon className="w-4 h-4 text-foreground" />
                </div>
                <h2 className="font-medium text-foreground">{category.name}</h2>
              </div>

              {/* Items grid - using CSS transitions only to avoid flash */}
              <div className="grid sm:grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-lg border border-border bg-card hover:bg-secondary/30 hover:border-accent hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                  >
                    <h3 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}
