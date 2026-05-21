'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional user experiences.',
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Committed to continuous learning and staying current with industry trends.',
    },
  ]

  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl text-white md:text-5xl">About Me</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="mb-4 text-2xl text-white">
              Passionate about creating digital experiences that matter
            </h3>
            <p className="leading-relaxed text-gray-300">
              With over 5 years of experience in web development, I've had the privilege of working
              with startups and established companies to bring their digital visions to life. My
              journey began with a curiosity about how websites work, and it has evolved into a
              passion for creating seamless, performant applications.
            </p>
            <p className="leading-relaxed text-gray-300">
              I specialize in React, Node.js, and modern JavaScript frameworks, but I'm always eager
              to learn new technologies that can help me build better solutions. When I'm not
              coding, you'll find me contributing to open-source projects, writing technical
              articles, or exploring the latest in web technologies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map(
                (trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400"
                  >
                    {trait}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-emerald-500/50">
                  <div className="mb-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h4 className="mb-2 text-lg text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
