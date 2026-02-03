import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, FolderGit2, Github } from 'lucide-react'

export const Route = createFileRoute('/projects')({ component: Projects })

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">
                  PORTFOLIO
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-foreground mb-6"
            >
              Projects
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Featured work and applications showcasing modern web development
            </motion.p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto border border-border"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-secondary border border-border rounded-xl text-sm text-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-accent rounded-xl transition-colors text-foreground font-medium border border-border"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 rounded-xl transition-colors text-primary-foreground font-medium shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
