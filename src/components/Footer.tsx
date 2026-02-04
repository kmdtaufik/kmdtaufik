import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/kmdtaufik', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/khanmdtaufik/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:info@khanmdtaufik.dev', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mt-32"
    >
      {/* Top border line */}
      <div className="h-px bg-border" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Signature & tagline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="signature text-3xl text-foreground mb-4"
            >
              Md Taufik Khan
            </motion.p>
            <p className="text-muted-foreground max-w-sm">
              Full Stack Developer crafting thoughtful digital experiences with modern technologies.
            </p>
          </div>

          {/* Right - Links */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground mb-4">Connect</p>
            <div className="flex md:justify-end gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Md Taufik Khan
          </p>
          <p className="text-sm text-muted-foreground">
            Built with TanStack Start
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
