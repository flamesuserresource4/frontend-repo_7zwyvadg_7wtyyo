import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-slate-300 leading-relaxed">
              I’m a software developer focused on building polished, scalable web applications. I love turning ideas into interactive experiences and I’m happiest when I get to work across the stack — from crafting beautiful UIs to designing robust APIs.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              My toolkit includes React, TypeScript, Tailwind, FastAPI, and cloud services. I value clean code, accessibility, and thoughtful motion.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-6">
              <div className="grid grid-cols-2 gap-3 text-center">
                {[
                  { k: 'Years Experience', v: '5+' },
                  { k: 'Projects', v: '30+' },
                  { k: 'Stack', v: 'React • FastAPI' },
                  { k: 'Focus', v: 'UI/UX • DX' },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-white/5 p-4 text-slate-200 ring-1 ring-white/10">
                    <div className="text-2xl font-bold text-white">{s.v}</div>
                    <div className="text-xs mt-1 text-slate-400">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
