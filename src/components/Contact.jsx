import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus(data.detail || 'Something went wrong.')
      }
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-2 text-slate-300">Tell me about your project. I’ll respond within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" required />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows="5" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" required />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-400 transition-colors">
            <Send size={18} /> Send Message
          </button>
          {status && <p className="text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
