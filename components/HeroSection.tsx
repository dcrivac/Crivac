'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  const titles = [
    'Modern Web Developer',
    'Software Engineer',
    'iOS Developer',
    'Full-Stack Engineer',
  ]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="animate-gradient-slow absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />

        {/* Cursor-following light effect */}
        <motion.div
          className="pointer-events-none absolute h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
          style={{
            left: smoothMouseX,
            top: smoothMouseY,
            x: '-50%',
            y: '-50%',
          }}
        />
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          {/* Letter-by-letter greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg tracking-wider text-emerald-400"
          >
            {"Hello, I'm".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Name with gradient shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative text-5xl text-white md:text-7xl"
          >
            <span className="animate-gradient bg-gradient-to-r from-white via-emerald-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent">
              David Kenji Crivac
            </span>
          </motion.h1>

          {/* Rotating titles with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex min-h-[60px] items-center justify-center py-2 text-2xl text-gray-300 md:min-h-[80px] md:text-4xl"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="inline-block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mx-auto max-w-2xl pt-2 pb-8 text-lg text-gray-400"
          >
            I craft exceptional digital experiences using cutting-edge technologies like React,
            Node.js, and TypeScript. Passionate about clean code, user experience, and bringing
            ideas to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Button
              onClick={scrollToProjects}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 text-white shadow-lg shadow-emerald-500/50 transition-all duration-300"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/dcrivac' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:davidkenji@gmail.com' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-gradient-slow {
          animation: gradient-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
