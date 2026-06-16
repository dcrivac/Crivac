'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImagineWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Clipso.app',
      description:
        'An intelligent clipboard manager for macOS with AI-powered semantic search. Find clipboard items by meaning, not just keywords, using 100% local, on-device machine learning with zero cloud dependency. Features AES-256-GCM encryption and a privacy-first architecture.',
      image: 'https://clipso.app/og-image.png',
      technologies: ['Swift', 'SwiftUI', 'CoreML', 'Core Data', 'NLEmbedding', 'AES-256-GCM'],
      github: 'https://github.com/dcrivac/Clipso',
      live: 'https://clipso.app/',
      featured: true,
    },
    {
      title: 'Yard Picker Pro',
      description:
        'AI-powered junkyard profitability analyzer for Pick-Your-Part salvage yards. Paste a yard inventory URL, select cars, and get a ranked pull list — 5 most profitable parts per vehicle with full eBay cost breakdowns and net profit math. No car knowledge needed.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['PHP', 'JavaScript', 'HTML/CSS', 'eBay API', 'Web Scraping'],
      github: 'https://github.com/dcrivac/yard-picker-pro',
      live: 'https://crivac.com/yp2.html',
      featured: true,
    },
    {
      title: 'MetricPulse',
      description:
        'Native iOS app for GrubHub delivery drivers to track Premier tier metrics — On-Time Meals, Same-day Cancellation Rate, and Order Completion Rate — over a rolling 14-day window. Built entirely with first-party Apple frameworks, zero third-party dependencies.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'iOS'],
      github: 'https://github.com/dcrivac/MetricPulse',
      live: 'https://github.com/dcrivac/MetricPulse',
      featured: false,
    },
    {
      title: 'Route Optimizer',
      description:
        'Flutter app that optimizes delivery routes for gig workers on Shipt, DoorDash, and Instacart. Uses Nearest Neighbor + 2-opt algorithms, Google Places autocomplete, and one-tap Google Maps handoff. Supports unlimited stops with time and distance estimates.',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'Google Maps', 'Google Places', 'Hive', 'Provider'],
      github: 'https://github.com/dcrivac/Route',
      live: 'https://github.com/dcrivac/Route',
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
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
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
            Here are some of my recent projects that showcase my skills and passion for web
            development
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
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl text-white transition-colors duration-300 group-hover:text-emerald-400">
                    {project.title}
                  </h3>
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
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.live}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-emerald-500"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="mb-2 text-lg text-white transition-colors duration-300 group-hover:text-emerald-400">
                    {project.title}
                  </h4>
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
