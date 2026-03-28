import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      { title: 'About — Md Taufik Khan' },
      {
        name: 'description',
        content:
          'Learn about Md Taufik Khan — a Full Stack Developer from Dhaka specializing in TanStack Start, Hono, Drizzle ORM, and modern TypeScript.',
      },
    ],
  }),
})

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function About() {
  const contactLinks = [
    { icon: MapPin, text: 'Dhaka, Bangladesh', href: null },
    {
      icon: Mail,
      text: 'info@khanmdtaufik.dev',
      href: 'mailto:info@khanmdtaufik.dev',
    },
    {
      icon: Github,
      text: 'github.com/kmdtaufik',
      href: 'https://github.com/kmdtaufik',
    },
    {
      icon: Linkedin,
      text: 'linkedin.com/in/khanmdtaufik',
      href: 'https://www.linkedin.com/in/khanmdtaufik/',
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4">About</p>
          <h1 className="heading-lg text-foreground">A bit about me</h1>
        </motion.div>

        {/* Main Grid - Split layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Image column */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="relative">
                {/* Decorative accent frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 rounded-xl" />
                <img
                  src="/avatar.jpg"
                  alt="Portrait of Md Taufik Khan, Full Stack Developer"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="relative rounded-xl w-full"
                />
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-3 space-y-12">
            {/* Bio */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Hi, I'm Taufik 👋
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A passionate Full Stack Developer specializing in building
                  modern, performant web applications. I focus on clean
                  architecture, type-safe development, and cutting-edge
                  technologies.
                </p>
                <p>
                  Currently working with TanStack Start, Bun, Drizzle ORM, and
                  Hono to create next-generation web experiences. I believe in
                  performance-first development and building systems that scale.
                </p>
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="highlight-bar"
            >
              <p className="font-serif text-xl text-foreground italic">
                "Building thoughtful digital experiences with attention to craft
                and detail."
              </p>
            </motion.blockquote>

            {/* Contact */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h3 className="text-sm text-muted-foreground mb-6">Contact</h3>
              <div className="space-y-3">
                {contactLinks.map((item) => {
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent transition-colors group">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      <span className="text-foreground group-hover:text-accent transition-colors">
                        {item.text}
                      </span>
                    </div>
                  )

                  return item.href ? (
                    <a
                      key={item.text}
                      href={item.href}
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.text}>{content}</div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
