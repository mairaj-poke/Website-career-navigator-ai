import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Brain, FileText, Cpu, Target, MessageSquare, DollarSign } from 'lucide-react'

const capabilities = [
  { icon: FileText, label: 'Resume Parsing', value: 'Automatically extracts personal info, skills, education, experience, and certifications from uploaded resumes' },
  { icon: Brain, label: 'Natural Language Processing', value: 'Understands the context of your resume, cover letters, and career goals to deliver accurate insights' },
  { icon: Cpu, label: 'Skill Extraction & Gap Analysis', value: 'Identifies your current skills and flags what is missing for your target roles with improvement suggestions' },
  { icon: Target, label: 'Intelligent Job Matching', value: 'Matches you with jobs based on resume, skills, experience, location, and salary — with match percentages' },
  { icon: MessageSquare, label: 'AI Career Chatbot', value: 'Answers career questions on demand — roadmaps, skill recommendations, higher studies, certifications, and more' },
  { icon: DollarSign, label: 'Salary Intelligence', value: 'Provides real salary data by job title, experience, location, and company — including market trends' },
]

export default function AICapabilities() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-glow opacity-20" />

      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* AI Visualization */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto opacity-80">
                {[[80,60,200,100],[80,60,200,150],[80,60,200,200],[80,150,200,100],[80,150,200,150],[80,150,200,200],[80,240,200,100],[80,240,200,150],[80,240,200,200],[200,100,320,120],[200,100,320,180],[200,150,320,120],[200,150,320,180],[200,200,320,120],[200,200,320,180]].map(([x1,y1,x2,y2], i) => (
                  <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lg)" strokeWidth="1" initial={{ pathLength: 0, opacity: 0 }} animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}} transition={{ duration: 1.5, delay: i * 0.05 }} />
                ))}
                {[[80,60],[80,150],[80,240],[200,100],[200,150],[200,200],[320,120],[320,180]].map(([cx,cy], i) => (
                  <motion.circle key={i} cx={cx} cy={cy} r="8" fill={i<3?'#00d97e':i<6?'#7c6bf0':'#a78bfa'} initial={{ scale: 0, opacity: 0 }} animate={isVisible ? { scale: 1, opacity: 0.8 } : {}} transition={{ duration: 0.4, delay: 0.5+i*0.1 }} />
                ))}
                {[[320,120],[320,180]].map(([cx,cy], i) => (
                  <motion.circle key={`p-${i}`} cx={cx} cy={cy} r="8" fill="none" stroke="#a78bfa" strokeWidth="2" animate={{ r: [8,20], opacity: [0.6,0] }} transition={{ duration: 2, repeat: Infinity, delay: i*0.8 }} />
                ))}
                <defs><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00d97e"/><stop offset="100%" stopColor="#7c6bf0"/></linearGradient></defs>
              </svg>
              <div className="absolute top-6 left-6 text-xs text-gray-500 font-medium">Resume Input</div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium">AI Processing</div>
              <div className="absolute top-6 right-6 text-xs text-gray-500 font-medium">Career Output</div>
              <div className="flex justify-around mt-4 pt-4 border-t border-white/5">
                <div className="text-center"><div className="text-xl font-bold text-brand-green">99.2%</div><div className="text-[10px] text-gray-500 mt-0.5">Parse Accuracy</div></div>
                <div className="text-center"><div className="text-xl font-bold text-brand-purple">&lt;2s</div><div className="text-[10px] text-gray-500 mt-0.5">Analysis Time</div></div>
                <div className="text-center"><div className="text-xl font-bold text-brand-violet">200+</div><div className="text-[10px] text-gray-500 mt-0.5">Industries</div></div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="order-1 lg:order-2">
            <span className="section-badge mb-4 inline-flex"><Brain className="w-3.5 h-3.5" /> AI Technologies</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-5">
              Powered by AI That <span className="gradient-text">Understands Careers</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Career Navigator AI integrates multiple AI technologies — from resume parsing and NLP to intelligent job matching and salary intelligence — to deliver a career guidance experience that continuously improves with every interaction.
            </p>
            <div className="space-y-4">
              {capabilities.map((c, i) => (
                <motion.div key={c.label} initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.4+i*0.08 }} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5">{c.label}</div>
                    <div className="text-xs text-gray-400">{c.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
