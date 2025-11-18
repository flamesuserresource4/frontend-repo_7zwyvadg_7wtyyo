import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (keep pointer-events none so Spline stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-blue-200 ring-1 ring-white/15">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            Software Developer crafting delightful, performant web apps with React, TypeScript, and cloud-native backends.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-white font-semibold shadow-[0_10px_40px_-10px_rgba(34,211,238,0.7)] hover:bg-cyan-400 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
