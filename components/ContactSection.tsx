'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'admin@crivac.com',
      href: 'mailto:admin@crivac.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (619)800-4881',
      href: 'tel:+16198004881',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chula Vista, CA',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <section id="contact" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl text-white md:text-5xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            I'm always interested in new opportunities and interesting projects. Let's discuss how
            we can work together!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-white/10 bg-gray-900/50 p-8">
              <h3 className="mb-6 text-2xl text-white">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="border-white/20 bg-black/50 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="border-white/20 bg-black/50 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-white/20 bg-black/50 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Subject</label>
                  <Input
                    placeholder="Project discussion"
                    className="border-white/20 bg-black/50 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none border-white/20 bg-black/50 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <Button className="w-full bg-emerald-500 py-3 text-white hover:bg-emerald-600">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl text-white">Let's connect</h3>
              <p className="mb-8 leading-relaxed text-gray-400">
                I'm currently available for freelance work and full-time opportunities. Whether you
                have a project in mind or just want to chat about technology, I'd love to hear from
                you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group flex items-center space-x-4 rounded-lg border border-white/10 bg-gray-900/50 p-4 transition-all duration-300 hover:border-emerald-500/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500/30">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="mb-4 text-lg text-white">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white transition-all duration-300 hover:bg-emerald-500 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 David Crivac. Designed &amp; Built with ❤️ using React and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
