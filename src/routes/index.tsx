import { Link, createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Code2,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  User,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

// Smooth spring config
const spring = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
}

const smoothEase = [0.22, 1, 0.36, 1] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      duration: 0.8,
      ease: smoothEase,
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
}

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
}

interface NavCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay: number
  size?: 'normal' | 'large'
}

function NavCard({ title, description, icon, href, delay, size = 'normal' }: NavCardProps) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={size === 'large' ? 'md:col-span-2' : ''}
    >
      <Link to={href}>
        <motion.div
          whileHover={{
            y: -6,
            transition: { duration: 0.3, ease: smoothEase }
          }}
          className="group h-full p-8 rounded-xl border border-border bg-card hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
        >
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="p-3 rounded-lg bg-secondary text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={spring}
            >
              {icon}
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0.5 }}
              whileHover={{ x: 4, opacity: 1 }}
              className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  )
}

// Animated text component
function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-block' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.8])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98])

  const navCards = [
    {
      title: 'Projects',
      description: 'Featured work and applications showcasing modern web development.',
      icon: <FolderGit2 className="w-5 h-5" />,
      href: '/projects',
      size: 'large' as const,
    },
    {
      title: 'About',
      description: 'My journey as a developer.',
      icon: <User className="w-5 h-5" />,
      href: '/about',
    },
    {
      title: 'Experience',
      description: 'Skills & background.',
      icon: <Briefcase className="w-5 h-5" />,
      href: '/experience',
    },
    {
      title: 'Tech Stack',
      description: 'Modern tools and technologies I work with daily.',
      icon: <Code2 className="w-5 h-5" />,
      href: '/stack',
      size: 'large' as const,
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kmdtaufik', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/khanmdtaufik/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:info@khanmdtaufik.dev', label: 'Email' },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.section
          className="mb-24"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: smoothEase }}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: smoothEase }}
                className="text-muted-foreground mb-6"
              >
                Full Stack Developer — Dhaka, Bangladesh
              </motion.p>

              {/* Name with letter animation */}
              <h1 className="heading-xl text-foreground mb-8">
                <AnimatedText text="Md Taufik" />
                <br />
                <motion.span
                  className="text-accent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: smoothEase }}
                >
                  Khan
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: smoothEase }}
                className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
              >
                Building performant web applications with modern technologies.
                Focused on clean architecture and exceptional user experiences.
              </motion.p>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: smoothEase }}
                className="flex items-center gap-3"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.4, ease: smoothEase }}
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: smoothEase }}
              className="lg:col-span-2 order-1 lg:order-2"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Animated accent border */}
                <motion.div
                  className="absolute -inset-3 border border-accent/30 rounded-2xl"
                  animate={{
                    borderColor: ['rgba(180, 93, 72, 0.3)', 'rgba(180, 93, 72, 0.5)', 'rgba(180, 93, 72, 0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.img
                  src="/avatar.jpg"
                  alt="Md Taufik Khan"
                  className="relative rounded-xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: smoothEase }}
          className="h-px bg-border mb-16 origin-left"
        />

        {/* Navigation Grid - Bento style */}
        <section>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6, ease: smoothEase }}
            className="text-sm text-muted-foreground mb-8"
          >
            Explore
          </motion.p>

          <div className="grid md:grid-cols-4 gap-4">
            {navCards.map((card, index) => (
              <NavCard key={card.title} {...card} delay={index + 6} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
