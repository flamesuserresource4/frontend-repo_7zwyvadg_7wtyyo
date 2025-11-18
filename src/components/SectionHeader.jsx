import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-200 ring-1 ring-white/10">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-3 text-3xl sm:text-4xl font-bold text-white">
        {title}
      </motion.h2>
      {description && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 text-slate-300 max-w-2xl">
          {description}
        </motion.p>
      )}
    </div>
  )
}
