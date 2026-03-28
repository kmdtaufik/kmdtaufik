import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/experience')({
  component: Experience,
  head: () => ({
    meta: [
      { title: 'Experience — Md Taufik Khan' },
      {
        name: 'description',
        content:
          'Professional experience and technical skills of Md Taufik Khan — TypeScript, React, TanStack, Node.js, Bun, PostgreSQL, and more.',
      },
    ],
  }),
})

const smoothEase = [0.22, 1, 0.36, 1]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: smoothEase,
    },
  }),
}

function Experience() {
  const skills = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TanStack', category: 'Framework' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Bun', category: 'Runtime' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Drizzle ORM', category: 'ORM' },
    { name: 'Prisma', category: 'ORM' },
    { name: 'Hono', category: 'Backend' },
  ]

  const experience = [
    {
      role: 'Full Stack Developer',
      period: '2023 — Present',
      description:
        'Specializing in modern web application development using cutting-edge technologies. Building performant, type-safe applications with focus on user experience and maintainable architecture.',
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: smoothEase }}
            className="text-sm text-muted-foreground mb-4"
          >
            Career
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: smoothEase }}
            className="heading-lg text-foreground"
          >
            Experience
          </motion.h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-muted-foreground mb-8"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.04,
                  duration: 0.5,
                  ease: smoothEase,
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'var(--accent)',
                  transition: { duration: 0.2 },
                }}
                className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <p className="font-medium text-foreground mb-1">{skill.name}</p>
                <p className="text-xs text-muted-foreground">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: smoothEase }}
          className="h-px bg-border mb-16 origin-left"
        />

        {/* Experience Timeline */}
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-sm text-muted-foreground mb-8"
          >
            Work History
          </motion.h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.2 + index * 0.15,
                  duration: 0.7,
                  ease: smoothEase,
                }}
                className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors duration-500"
              >
                {/* Timeline dot with pulse effect */}
                <motion.div
                  className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-accent"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <h3 className="font-serif text-xl text-foreground">
                    {job.role}
                  </h3>
                  <motion.span
                    className="text-sm text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    {job.period}
                  </motion.span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
