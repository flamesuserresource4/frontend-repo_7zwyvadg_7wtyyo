import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Dynamic particles background */}
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen">
        <Particles />
      </div>

      {/* Soft glow accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
