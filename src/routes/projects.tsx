import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () => ({
    meta: [
      { title: 'Projects — Md Taufik Khan' },
      {
        name: 'description',
        content:
          'Featured projects by Md Taufik Khan showcasing modern web development with Next.js, TanStack Start, TypeScript, and more.',
      },
    ],
  }),
})

const smoothEase = [0.22, 1, 0.36, 1] as const

function Projects() {
  const projects = [
    {
      title: 'Easy LMS',
      description:
        'A modern learning management system with course creation, student tracking, and progress monitoring features. Built with Next.js for optimal performance.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Prisma'],
      github: 'https://github.com/kmdtaufik/easy-lms-frontend',
      live: 'https://easy-lms-frontend.vercel.app/',
      image: '/easy-lms-mokup.png',
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
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
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: smoothEase }}
            className="heading-lg text-foreground mb-4"
          >
            Selected Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground max-w-lg"
          >
            Featured projects showcasing modern web development practices.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.15,
                duration: 0.8,
                ease: smoothEase
              }}
              className="group"
            >
              {/* Project image - full width with enhanced hover */}
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: smoothEase }}
                className="block relative overflow-hidden rounded-xl border border-border mb-8"
              >
                <motion.img
                  src={project.image}
                  alt={`${project.title} — ${project.description.slice(0, 60)}`}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full transition-transform duration-700"
                  whileHover={{ scale: 1.03 }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-background border border-border opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.a>

              {/* Project info */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tech stack */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm border border-border rounded-lg text-foreground hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-all duration-300"
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
