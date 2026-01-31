import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  Briefcase,
  User,
  FolderGit2,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

interface NavCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay: number
}

function NavCard({ title, description, icon, href, delay }: NavCardProps) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Link to={href}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="group relative p-8 rounded-3xl border border-border bg-card hover:bg-card/80 backdrop-blur-sm transition-all duration-300 h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          
          <div className="relative">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              {description}
            </p>
            
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span className="text-sm">View</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

function App() {
  const navCards = [
    {
      title: 'Projects',
      description: 'Explore my portfolio of full-stack applications and web platforms.',
      icon: <FolderGit2 className="w-7 h-7 text-primary" />,
      href: '/projects',
    },
    {
      title: 'About',
      description: 'Learn about my journey as a Full Stack Developer.',
      icon: <User className="w-7 h-7 text-primary" />,
      href: '/about',
    },
    {
      title: 'Experience',
      description: 'View my professional background and technical skills.',
      icon: <Briefcase className="w-7 h-7 text-primary" />,
      href: '/experience',
    },
    {
      title: 'Active Agents',
      description: 'System daemons powering this platform.',
      icon: <Cpu className="w-7 h-7 text-primary" />,
      href: '/agents',
    },
    {
      title: 'Tech Stack',
      description: 'Modern technologies and tools I work with.',
      icon: <Code2 className="w-7 h-7 text-primary" />,
      href: '/stack',
    },
    {
      title: 'Admin',
      description: 'Secure dashboard with TOTP authentication.',
      icon: <ShieldCheck className="w-7 h-7 text-primary" />,
      href: '/login',
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/kmdtaufik',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/khanmdtaufik/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:khanmdtaufik@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="mb-32 pt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Md Taufik Khan
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Full Stack Developer crafting high-performance web applications
                with modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-secondary hover:bg-accent border border-border transition-all flex items-center gap-2 font-medium"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <img
                  src="/avatar.jpg"
                  alt="Md Taufik Khan"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto border border-border"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Grid */}
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Explore
            </h2>
            <p className="text-xl text-muted-foreground">
              Navigate through my work and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navCards.map((card, index) => (
              <NavCard key={card.title} {...card} delay={index + 3} />
            ))}
          </div>
        </section>

        {/* Tech Stack Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-32"
        >
          <div className="p-12 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['TanStack Start', 'Bun', 'Drizzle ORM', 'Hono', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Neon'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 rounded-xl bg-secondary border border-border text-center font-medium text-foreground hover:bg-accent transition-colors cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
