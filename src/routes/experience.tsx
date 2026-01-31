import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Briefcase, Code2 } from 'lucide-react'

export const Route = createFileRoute('/experience')({ component: Experience })

const paperFoldVariants = {
  hidden: { opacity: 0, rotateX: -90, transformOrigin: 'top', y: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

function Experience() {
  const skills = [
    { name: 'TypeScript', level: 90 },
    { name: 'React / Next.js', level: 85 },
    { name: 'Node.js / Bun', level: 80 },
    { name: 'TanStack Start', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Drizzle ORM', level: 70 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-8"
            >
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">
                CAREER
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-foreground mb-6"
            >
              Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground"
            >
              Skills & professional background
            </motion.p>
          </div>

          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={paperFoldVariants}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm mb-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={paperFoldVariants}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-lg"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Full Stack Developer
            </h3>
            <p className="text-primary mb-4">2023 - Present</p>
            <p className="text-muted-foreground leading-relaxed">
              Specializing in modern web application development using
              cutting-edge technologies. Building performant, type-safe
              applications with focus on user experience and maintainable
              architecture.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
