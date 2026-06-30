import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import CountUp from 'react-countup'
import { Users, Target, Award, GraduationCap, Building2, Globe } from 'lucide-react'

const counters = [
  { icon: Users, value: 10000, suffix: '+', label: 'Active Users', color: 'brand-green' },
  { icon: Target, value: 95, suffix: '%', label: 'Job Match Accuracy', color: 'brand-purple' },
  { icon: Award, value: 89, suffix: '%', label: 'Interview Success Rate', color: 'brand-green' },
  { icon: GraduationCap, value: 500, suffix: '+', label: 'Colleges & Universities', color: 'brand-purple' },
  { icon: Building2, value: 2000, suffix: '+', label: 'Companies Covered', color: 'brand-green' },
  { icon: Globe, value: 30, suffix: '+', label: 'Countries Reached', color: 'brand-purple' },
]

export default function SuccessMetrics() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 via-brand-green/5 to-brand-purple/5" />
      <div className="absolute inset-0 bg-navy-950/60" />
      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Trusted by Thousands <span className="gradient-text">Worldwide</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">From students to working professionals — Career Navigator AI is helping people at every career stage make smarter decisions.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {counters.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, scale: 0.9 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i*0.1 }} className="glass-card rounded-xl p-5 text-center group hover:border-brand-purple/20 transition-all duration-300">
              <div className={`w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${c.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-purple/10 text-brand-purple'}`}>
                <c.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold mb-1">
                {isVisible ? <CountUp end={c.value} duration={2.5} separator="," suffix={c.suffix} /> : `0${c.suffix}`}
              </div>
              <div className="text-xs text-gray-400">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
