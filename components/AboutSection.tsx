'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Cpu, Lock, Package, Smartphone } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Smartphone,
      title: 'Native Apple apps',
      description:
        'Swift and SwiftUI apps for macOS and iOS, built to feel at home on the platform.',
    },
    {
      icon: Cpu,
      title: 'On-device intelligence',
      description:
        'Vision OCR and NaturalLanguage embeddings power features in Clipso and PDFtoExcel Pro.',
    },
    {
      icon: Package,
      title: 'Complete products',
      description:
        'Accounts, Stripe and Paddle payments, tests and automatic deploys, not just demos.',
    },
    {
      icon: Lock,
      title: 'Privacy first',
      description:
        'Data stays on the device, with AES-256-GCM encryption in Clipso and SwiftData in Metric Pulse.',
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
            <h3 className="mb-4 text-2xl text-white">Independent Apple platform developer</h3>
            <p className="leading-relaxed text-gray-300">
              I'm David Crivac, a San Diego developer building native apps for macOS and iOS under
              the name Crivac Creations, along with the web and mobile tools around them. Most of my
              projects start with a real problem from my own work, like pulling tables out of
              scanned PDFs or planning a delivery route, and grow into finished products with tests,
              licensing and deployment.
            </p>
            <p className="leading-relaxed text-gray-300">
              I work mainly in Swift and SwiftUI, and reach for Flutter, PHP, JavaScript and Python
              when a project needs them.
            </p>
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
