'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImagineWithFallback'

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Shipped: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
    'In development': 'border-blue-400/40 bg-blue-400/15 text-blue-300',
    'Personal tool': 'border-gray-400/40 bg-gray-400/15 text-gray-300',
  }
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 text-xs ${styles[status] ?? styles['Personal tool']}`}
    >
      {status}
    </span>
  )
}

export function ProjectsSection() {
  type Project = {
    title: string
    description: string
    image: string
    imageAlt?: string
    technologies: string[]
    status?: 'Shipped' | 'In development' | 'Personal tool'
    github?: string
    live?: string
    featured: boolean
  }

  const projects: Project[] = [
    {
      title: 'PDFtoExcel Pro',
      description:
        "Turns tables in PDFs, including scanned pages, into clean Excel and CSV files. Every page is rendered and read with Apple's Vision OCR, text is grouped into rows and column positions are clustered so empty cells stay in place, and tilted scans are detected and straightened before a second read. It writes real XLSX workbooks with typed number formats and frozen header rows, and the detection logic is tested against synthetic page fixtures where the correct layout is known.",
      image: '/projects/pdftoexcel-pro.webp',
      imageAlt:
        'PDFtoExcel Pro Mac window showing one converted sample PDF with its page and table counts',
      technologies: ['Swift', 'SwiftUI', 'Vision', 'PDFKit', 'macOS', 'Swift Package Manager'],
      status: 'In development',
      github: 'https://github.com/dcrivac/PDFtoExcel-SPM',
      featured: true,
    },
    {
      title: 'Clipso',
      description:
        "A private clipboard manager for Mac that finds what you copied by meaning, not just keywords. Search results blend keyword match, semantic similarity from Apple's on-device NLEmbedding, recency and frequency, and text in copied images is read with Vision OCR. Related clips are grouped into project contexts automatically, everything stays on the Mac with AES-256-GCM encryption, and Premium licensing runs through Paddle and a small Node.js backend.",
      image: '/projects/clipso.webp',
      imageAlt:
        'Clipso menu bar window with a search field, project tag filters and recent clips of code, a link and a note, each labeled with its source app',
      technologies: [
        'Swift',
        'SwiftUI',
        'Core Data',
        'NaturalLanguage',
        'Vision',
        'Paddle',
        'Node.js',
      ],
      status: 'Shipped',
      github: 'https://github.com/dcrivac/Clipso',
      live: 'https://clipso.app/',
      featured: true,
    },
    {
      title: 'Yard Picker Pro',
      description:
        "Tells junkyard pickers which cars and parts are worth pulling, with the profit math shown. Claude picks the most profitable parts for each vehicle, and each one is priced against live eBay data and the yard's own part prices, net of labor, fees and shipping. It's a full product with user accounts, a metered credit system with Stripe Checkout, a rate-limited server-side AI proxy, error monitoring and automatic deploys from GitHub.",
      image: '/projects/yard-picker-pro.webp',
      imageAlt:
        'Yard Picker Pro add-a-car screen with a Scan VIN button and VIN, year, make and model fields',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Claude API', 'eBay API', 'Stripe', 'Sentry'],
      status: 'In development',
      github: 'https://github.com/dcrivac/yard-picker-pro',
      featured: true,
    },
    {
      title: 'QuickRoute',
      description:
        "Puts a driver's delivery stops in the fastest order and hands off to Google Maps. Addresses come in through Google Places autocomplete, routes of up to 10 stops get the exact best order, and longer ones use a nearest neighbor plus 3-opt heuristic. It flags missed delivery time windows and shows the route on a map before one-tap navigation.",
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'Google Maps Platform', 'Provider', 'Hive', 'Firebase'],
      status: 'In development',
      featured: true,
    },
    {
      title: 'Metric Pulse',
      description:
        'Shows delivery drivers where they stand on their platform tier and what it takes to keep it. It logs daily metrics, computes the rolling 14-day window, warns when a strong day is about to age out, and includes a calculator for what the coming days need to look like to reach or hold a tier. Data stays on the device with SwiftData, with local notifications and CSV export.',
      image: '/projects/metric-pulse.webp',
      imageAlt:
        'Metric Pulse iPhone dashboard showing a Premier tier, a 14-day shift window and OCR, SCR and OTM scores',
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'iOS'],
      status: 'In development',
      github: 'https://github.com/dcrivac/MetricPulse',
      featured: false,
    },
    {
      title: 'FireControl',
      description:
        'Native iOS app that turns an iPhone into a full Fire TV Stick remote over ADB Wi-Fi, plus live JBL Bluetooth speaker volume control. Implements the ADB wire protocol from scratch in Swift — RSA-2048 auth, persistent shell streams, and Keychain key storage.',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=600&h=400&fit=crop',
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'ADB', 'Network', 'AVFoundation'],
      github: 'https://github.com/dcrivac/FireControl',
      live: 'https://crivac.com/firetv',
      featured: false,
    },
    {
      title: 'AI SEO Writer',
      description:
        'Full-suite WordPress content platform for generating, refining, and repurposing SEO articles. Supports OpenAI GPT and Google Gemini, with bulk generation, internal linking via SmartLink, tone controls, and a dark-mode interface built for content teams.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      technologies: ['PHP', 'WordPress', 'OpenAI API', 'Gemini API', 'JavaScript'],
      github: 'https://github.com/dcrivac/ai-seo-writer',
      live: 'https://github.com/dcrivac/ai-seo-writer',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'This very site — a responsive developer portfolio with smooth animations, a dark theme, and optimized performance. Built as a single-page React app and continuously deployed to production on every push.',
      image: '/projects/portfolio-website.webp',
      imageAlt: 'The crivac.com home page with the name David Kenji Crivac and a short intro',
      technologies: ['Vite', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/dcrivac/Crivac',
      live: 'https://www.crivac.com',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl text-white md:text-5xl">Featured Projects</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Native apps and web products I've designed and built, from Mac utilities to full-stack
            tools
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-white/10 bg-black/50 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        aria-label={`${project.title} source on GitHub`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        aria-label={`Open ${project.title}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl text-white transition-colors duration-300 group-hover:text-emerald-400">
                      {project.title}
                    </h3>
                    {project.status && <StatusBadge status={project.status} />}
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="cursor-default rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400 transition-shadow hover:shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="mb-8 text-center text-2xl text-white">Other Projects</h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-white/10 bg-black/30 transition-all duration-300 hover:border-white/30">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label={`${project.title} source on GitHub`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        aria-label={`Open ${project.title}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h4 className="text-lg text-white transition-colors duration-300 group-hover:text-emerald-400">
                      {project.title}
                    </h4>
                    {project.status && <StatusBadge status={project.status} />}
                  </div>
                  <p className="mb-3 line-clamp-3 text-sm text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-emerald-500/50 px-8 py-3 text-emerald-400 hover:bg-emerald-500/10"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
