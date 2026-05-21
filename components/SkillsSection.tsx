'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Vue.js', level: 75, color: 'from-green-400 to-green-600' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'PostgreSQL', level: 80, color: 'from-indigo-400 to-indigo-600' },
        { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-800' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 92, color: 'from-gray-400 to-gray-600' },
        { name: 'Docker', level: 82, color: 'from-blue-600 to-blue-800' },
        { name: 'AWS', level: 75, color: 'from-orange-400 to-orange-600' },
        { name: 'GraphQL', level: 70, color: 'from-pink-400 to-pink-600' },
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
            Here are the technologies and tools I use to bring ideas to life
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
            >
              <Card className="border-white/10 bg-gray-900/50 p-6 backdrop-blur-sm">
                <h3 className="mb-6 text-center text-xl text-white">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} relative rounded-full`}
                        >
                          <div className="absolute inset-0 animate-pulse bg-white/20"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="mb-8 text-2xl text-white">Technologies I Work With</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'Next.js',
              'Python',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'AWS',
              'Git',
              'Tailwind',
              'GraphQL',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-white/10"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
