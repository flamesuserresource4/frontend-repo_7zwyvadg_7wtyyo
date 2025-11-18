import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import TiltCard from './TiltCard'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Full-stack chat application with websockets, authentication, and message persistence.',
    tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
    link: '#',
  },
  {
    title: 'AI Code Assistant',
    description: 'In-browser AI coding helper with context-aware suggestions and code generation.',
    tags: ['TypeScript', 'OpenAI', 'Vite'],
    link: '#',
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D configurator powered by Spline & Three.js with smooth animations.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={<span className="inline-flex items-center gap-2"><Sparkles size={14} /> Highlights</span>}
          title="Featured Projects"
          description="A selection of things I loved building recently."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-blue-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <TiltCard className="relative group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="text-slate-400 group-hover:text-white" size={18} />
                </div>
                <p className="mt-2 text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200 ring-1 ring-white/15">
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
