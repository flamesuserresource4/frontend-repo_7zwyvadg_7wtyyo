import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })
  const scale = useSpring(1, { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
  }

  function handleMouseEnter() {
    scale.set(1.02)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
    scale.set(1)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
      className={`[perspective:1000px] ${className}`}
    >
      {/* glare */}
      <motion.div
        aria-hidden
        style={{
          background:
            'radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.2), transparent 40%)',
        }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
      />
      <div className="relative will-change-transform" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
