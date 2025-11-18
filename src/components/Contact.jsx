import { useState } from 'react'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', msg: 'Thanks! I will get back to you soon.' })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus({ type: 'error', msg: data.detail || 'Something went wrong.' })
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Unable to send right now.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Let’s work together" description="Tell me about your project. I’ll respond within 24 hours." />

        <motion.form onSubmit={onSubmit} className="grid gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.input whileFocus={{ scale: 1.01 }} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" required />
          <motion.input whileFocus={{ scale: 1.01 }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" required />
          <motion.textarea whileFocus={{ scale: 1.005 }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows="5" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" required />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-400 transition-colors">
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />} Send Message
          </motion.button>
          {status && (
            <div className={`inline-flex items-center gap-2 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
              {status.type === 'success' ? <CheckCircle2 size={18} /> : null}
              {status.msg}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
