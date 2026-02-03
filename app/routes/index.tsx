import { Link, createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: TracingBeamPage,
})

// Mock projects data
const projects = [
  {
    id: 1,
    title: 'NeonPulse Dashboard',
    description:
      'Real-time analytics platform with WebSocket data streaming and interactive visualizations.',
    tech: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Zap,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 2,
    title: 'QuantumCommerce API',
    description:
      'High-performance e-commerce backend with microservices architecture and GraphQL.',
    tech: ['TypeScript', 'GraphQL', 'Redis', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Database,
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 3,
    title: 'AetherChat',
    description:
      'End-to-end encrypted messaging app with real-time collaboration features.',
    tech: ['React Native', 'WebRTC', 'Signal Protocol', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Globe,
    color: 'from-emerald-400 to-cyan-500',
  },
]

// Tech stack data
const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'GraphQL', category: 'API' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Tailwind', category: 'Styling' },
]

function TracingBeamPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll progress for the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring animation for the beam
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform scroll progress to SVG path length
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: '#020617' }}
    >
      {/* Custom Cursor & Trail */}
      <CustomCursor />

      {/* Aurora Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Tracing Beam SVG */}
      <div className="fixed left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 z-20 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background line (dim) */}
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100"
            stroke="#1e293b"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated beam line */}
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2="100"
            stroke="url(#beamGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
            vectorEffect="non-scaling-stroke"
            style={{
              pathLength: pathLength,
            }}
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section - System Online */}
        <HeroSection />

        {/* Tech Stack Marquee */}
        <TechStackMarquee />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
}

// Custom Cursor with Trail
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([])
  const trailId = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add trail point
      const newPoint = { x: e.clientX, y: e.clientY, id: trailId.current++ }
      setTrail((prev) => [...prev.slice(-12), newPoint])
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-8))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Trail */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {trail.map((point, index) => {
          const size = 24 - index * 2
          const opacity = (1 - index * 0.1) * 0.6
          const hue = 180 + index * 8

          return (
            <motion.div
              key={point.id}
              initial={{ scale: 1, opacity: opacity }}
              animate={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute rounded-full mix-blend-screen"
              style={{
                left: point.x - size / 2,
                top: point.y - size / 2,
                width: size,
                height: size,
                background: `radial-gradient(circle, hsl(${hue}, 100%, 70%) 0%, transparent 70%)`,
                boxShadow: `0 0 ${size}px hsl(${hue}, 100%, 60%)`,
              }}
            />
          )
        })}
      </div>

      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 30 : 12),
          y: mousePosition.y - (isHovering ? 30 : 12),
          width: isHovering ? 60 : 24,
          height: isHovering ? 60 : 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(139,92,246,0.4) 100%)',
          borderRadius: '50%',
          boxShadow:
            '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(139,92,246,0.3)',
        }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
        }}
        style={{
          width: 40,
          height: 40,
          border: '2px solid rgba(6,182,212,0.5)',
          borderRadius: '50%',
        }}
      />
    </>
  )
}

// Hero Section Component
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(
    sectionProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8],
  )
  const y = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-20 h-20 border border-cyan-500/20 rounded-lg"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-cyan-500/10 rounded-lg rotate-45"
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="text-center px-6 relative"
      >
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
          </span>
          <span className="text-cyan-400 text-sm font-mono tracking-wider">
            SYSTEM ONLINE
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Creative
          </span>
          <br />
          <span className="text-white">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-3xl mx-auto mb-12"
        >
          Crafting digital experiences with modern technologies and creative
          code
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <Terminal className="w-5 h-5" />
              View Projects
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
            >
              About Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Tech Stack Marquee
function TechStackMarquee() {
  return (
    <div className="py-16 overflow-hidden border-y border-slate-800/50 bg-slate-900/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex gap-12 items-center"
        >
          {[...techStack, ...techStack, ...techStack, ...techStack].map(
            (tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 whitespace-nowrap"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-medium">{tech.name}</span>
                <span className="text-slate-500 text-sm">{tech.category}</span>
              </div>
            ),
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-mono tracking-wider">
              FEATURED WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in full-stack
            development
          </p>
        </motion.div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectNode
              key={project.id}
              project={project}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Individual Project Node
function ProjectNode({
  project,
  index,
  isLeft,
}: {
  project: (typeof projects)[0]
  index: number
  isLeft: boolean
}) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const Icon = project.icon

  const { scrollYProgress: nodeProgress } = useScroll({
    target: nodeRef,
    offset: ['start end', 'center center'],
  })

  // Pop-in animation when beam passes
  const scale = useTransform(nodeProgress, [0, 0.5, 1], [0.8, 1, 1])
  const opacity = useTransform(nodeProgress, [0, 0.3, 1], [0, 1, 1])
  const x = useTransform(nodeProgress, [0, 1], isLeft ? [-100, 0] : [100, 0])

  return (
    <div
      ref={nodeRef}
      className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'} relative`}
    >
      {/* Connection Node on the Beam */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/50" />
      </motion.div>

      {/* Project Card */}
      <motion.div
        style={{ scale, opacity, x }}
        className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
      >
        <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Gradient Border on Hover */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
          />

          <div className="relative">
            {/* Project Icon & Number */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`p-4 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-10`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-black text-slate-800/50">
                0{index + 1}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-mono border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Contact Section Component
function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(sectionProgress, [0, 0.5], [0, 1])
  const scale = useTransform(sectionProgress, [0, 0.5], [0.9, 1])
  const y = useTransform(sectionProgress, [0, 0.5], [50, 0])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative py-32"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="text-center px-6 max-w-4xl mx-auto"
      >
        {/* Status Indicator */}
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
          </span>
          <span className="text-purple-400 text-sm font-mono tracking-wider">
            ESTABLISH CONNECTION
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
          Let's Build
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Something Great
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/5 transition-all duration-300 flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with{' '}
            <span className="text-cyan-400">TanStack Start</span> &{' '}
            <span className="text-purple-400">Framer Motion</span>
          </p>
        </div>
      </motion.div>

      {/* Final Beam Node */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-purple-500/50 animate-pulse" />
      </motion.div>
    </section>
  )
}
