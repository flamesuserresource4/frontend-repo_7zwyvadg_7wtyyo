import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900">
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,transparent_0,transparent_calc(50%-0.5px),rgba(148,163,184,0.08)_calc(50%-0.5px),rgba(148,163,184,0.08)_calc(50%+0.5px),transparent_calc(50%+0.5px)),linear-gradient(to_bottom,transparent_0,transparent_calc(50%-0.5px),rgba(148,163,184,0.06)_calc(50%-0.5px),rgba(148,163,184,0.06)_calc(50%+0.5px),transparent_calc(50%+0.5px))] bg-[length:40px_40px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" description="I love turning ideas into interactive experiences and building polished, scalable web applications." />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-slate-300 leading-relaxed">
              I’m a software developer focused on building delightful UIs and robust APIs. My toolkit includes React, TypeScript, Tailwind, FastAPI, and cloud services. I value clean code, accessibility, and thoughtful motion.
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { k: 'Years Experience', v: '5+' },
                { k: 'Projects', v: '30+' },
                { k: 'Stack', v: 'React • FastAPI' },
                { k: 'Focus', v: 'UI/UX • DX' },
              ].map((s) => (
                <motion.div key={s.k} whileHover={{ scale: 1.03 }} className="rounded-xl bg-white/5 p-4 text-slate-200 ring-1 ring-white/10">
                  <div className="text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-xs mt-1 text-slate-400">{s.k}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6">
              <div className="aspect-video w-full rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-300">
                <span className="text-sm">Drop in a photo or 3D asset here</span>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                Building with motion, accessibility, and performance top of mind.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
