'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Apple platforms',
      accent: 'from-emerald-400 to-emerald-600',
      note: 'Native macOS and iOS apps',
      skills: [
        'Swift',
        'SwiftUI',
        'SwiftData',
        'Core Data',
        'Vision OCR',
        'PDFKit',
        'NaturalLanguage',
        'Keychain',
        'Swift Package Manager',
        'Xcode',
      ],
    },
    {
      title: 'Web & cross-platform',
      accent: 'from-blue-400 to-blue-600',
      note: 'Front ends and mobile apps beyond Apple',
      skills: ['Flutter', 'Dart', 'React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Backend & services',
      accent: 'from-purple-400 to-pink-500',
      note: 'APIs, payments and deployment',
      skills: [
        'PHP',
        'MySQL',
        'Node.js',
        'Claude API',
        'eBay API',
        'Google Maps Platform',
        'Stripe',
        'Paddle',
        'Cloudflare Workers',
        'GitHub Actions',
        'Sentry',
      ],
    },
  ]

  return (
    <section id="skills" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl text-white md:text-5xl">Skills & Technologies</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            The tools behind the projects below, grouped by where they run
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full border-white/10 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div
                  className={`mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r ${category.accent}`}
                />
                <h3 className="text-center text-xl text-white">{category.title}</h3>
                <p className="mt-1 mb-6 text-center text-sm text-gray-400">{category.note}</p>
                <ul className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.04,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors duration-300 hover:bg-white/10"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
