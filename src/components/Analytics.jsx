import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { TrendingUp, BarChart3 } from 'lucide-react'

const barData = [
  { label: 'Jan', value: 45 }, { label: 'Feb', value: 52 }, { label: 'Mar', value: 58 },
  { label: 'Apr', value: 68 }, { label: 'May', value: 78 }, { label: 'Jun', value: 82 },
  { label: 'Jul', value: 90 }, { label: 'Aug', value: 98 },
]

const donutSegments = [
  { label: 'College Students', pct: 30, color: '#7c6bf0' },
  { label: 'Fresh Graduates', pct: 25, color: '#00d97e' },
  { label: 'Working Professionals', pct: 22, color: '#a78bfa' },
  { label: 'Career Switchers', pct: 15, color: '#34e89e' },
  { label: 'Internship Seekers', pct: 8, color: '#4b5563' },
]

const metrics = [
  { label: 'Resumes Analyzed by AI', value: '850K+', growth: '+34%' },
  { label: 'Personalized Job Matches', value: '1.2M+', growth: '+41%' },
  { label: 'Mock Interviews Completed', value: '420K+', growth: '+52%' },
  { label: 'Applications Tracked', value: '2.1M+', growth: '+28%' },
]

export default function Analytics() {
  const { ref, isVisible } = useReveal()
  let cum = 0
  const donutPaths = donutSegments.map((s) => { const start = cum; cum += s.pct; return { ...s, start } })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-hero-glow opacity-20" />
      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex"><BarChart3 className="w-3.5 h-3.5" /> Platform Analytics</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Real Impact, <span className="gradient-text">Measured Daily</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every resume analyzed, every job matched, every interview practiced — here is how Career Navigator AI is helping thousands make smarter career decisions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i*0.1 }} className="glass-card rounded-xl p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{m.value}</div>
              <div className="text-sm text-gray-400 mb-2">{m.label}</div>
              <div className="inline-flex items-center gap-1 text-xs text-brand-green font-medium"><TrendingUp className="w-3 h-3" /> {m.growth} this quarter</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div><h3 className="font-bold text-sm">User Growth</h3><p className="text-xs text-gray-500 mt-0.5">Monthly active users (thousands)</p></div>
              <div className="text-xs text-brand-green font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +46% YoY</div>
            </div>
            <div className="flex items-end justify-between gap-2 h-40">
              {barData.map((d, i) => (
                <div key={d.label} className="flex flex-col items-center gap-2 flex-1">
                  <motion.div className="w-full rounded-t-md min-h-[4px]" style={{ background: 'linear-gradient(to top, #7c6bf0, #00d97e)' }} initial={{ height: 0 }} animate={isVisible ? { height: `${d.value}%` } : {}} transition={{ duration: 0.8, delay: 0.5+i*0.08 }} />
                  <span className="text-[10px] text-gray-500">{d.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="glass-card rounded-2xl p-6">
            <div className="mb-6"><h3 className="font-bold text-sm">User Distribution</h3><p className="text-xs text-gray-500 mt-0.5">By audience type</p></div>
            <div className="flex items-center gap-8">
              <div className="relative w-36 h-36 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  {donutPaths.map((seg, i) => (
                    <motion.circle key={i} cx="18" cy="18" r="15.915" fill="none" stroke={seg.color} strokeWidth="3" strokeDasharray={`${seg.pct} ${100-seg.pct}`} strokeDashoffset={-seg.start} strokeLinecap="round" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6+i*0.15 }} />
                  ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center"><div className="text-lg font-bold">100%</div><div className="text-[9px] text-gray-500">Users</div></div>
              </div>
              <div className="space-y-2.5 flex-1">
                {donutSegments.map((seg) => (
                  <div key={seg.label} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: seg.color }} />
                    <span className="text-xs text-gray-400 flex-1">{seg.label}</span>
                    <span className="text-xs font-semibold">{seg.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="glass-card rounded-2xl p-6 mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div><h3 className="font-bold text-sm">User Satisfaction</h3><p className="text-xs text-gray-500 mt-0.5">Based on 12,400+ survey responses</p></div>
            <div className="text-3xl font-extrabold text-brand-green">96.8%</div>
          </div>
          <div className="mt-4 h-3 rounded-full bg-navy-800 overflow-hidden">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-green via-brand-purple to-brand-green" initial={{ width: 0 }} animate={isVisible ? { width: '96.8%' } : {}} transition={{ duration: 1.5, delay: 0.7 }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
