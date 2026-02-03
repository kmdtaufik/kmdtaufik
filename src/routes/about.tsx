import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin, User } from 'lucide-react'

export const Route = createFileRoute('/about')({ component: About })

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

function About() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">
                  ABOUT ME
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-foreground mb-6"
            >
              About
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Full Stack Developer from Dhaka, Bangladesh
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                  <img
                    src="/avatar.jpg"
                    alt="Md Taufik Khan"
                    className="relative rounded-3xl shadow-2xl w-full border border-border"
                  />
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 rounded-xl transition-colors text-primary-foreground font-medium shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Hi, I'm Md Taufik Khan 👋
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    A passionate Full Stack Developer specializing in building modern,
                    performant web applications. I focus on clean architecture,
                    type-safe development, and cutting-edge technologies.
                  </p>
                  <p>
                    Currently working with TanStack Start, Bun, Drizzle ORM, and Hono
                    to create next-generation web experiences. I believe in
                    performance-first development and building systems that scale.
                  </p>
                  <p>
                    Based in Dhaka, Bangladesh, I'm always exploring new technologies
                    and pushing the boundaries of what's possible on the web.
                  </p>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Dhaka, Bangladesh 🇧🇩</span>
                  </div>
                  
                  <a
                    href="mailto:khanmdtaufik@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:bg-accent transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      khanmdtaufik@gmail.com
                    </span>
                  </a>
                  
                  <a
                    href="https://github.com/kmdtaufik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:bg-accent transition-colors group"
                  >
                    <Github className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      github.com/kmdtaufik
                    </span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/khanmdtaufik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:bg-accent transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      linkedin.com/in/khanmdtaufik
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
