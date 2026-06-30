import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const advantages = [
  {
    title: 'AI-Driven, Not Generic',
    desc: 'Every job recommendation, resume suggestion, and career insight is personalized to your skills, experience, and goals — not random listings.',
  },
  {
    title: 'Resume to Jobs in Minutes',
    desc: 'Upload your resume, let AI extract and analyze it, auto-fill your profile, calculate your score, and start receiving matched jobs — all automatically.',
  },
  {
    title: 'Complete Career Toolkit',
    desc: 'Resume analysis, job matching, application tracking, interview prep, salary insights, and AI career advising — everything in one platform.',
  },
  {
    title: 'Real Match Percentages',
    desc: 'See exactly how well each job fits you with AI-calculated match scores like 95%, 88%, or 76% — so you apply where it matters.',
  },
  {
    title: 'AI That Learns With You',
    desc: 'The system continuously improves recommendations based on your skills, applications, resume updates, saved jobs, and search behavior.',
  },
  {
    title: 'Built for Everyone',
    desc: 'Whether you are a college student, fresh graduate, working professional, career switcher, or internship seeker — the platform adapts to your stage.',
  },
]

export default function WhyChoose() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-glow opacity-20" />

      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="section-badge mb-4 inline-flex">Why Career Navigator AI</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-5">
              Not Another Job Portal — <span className="gradient-text">A Career Intelligence Platform</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Traditional job portals show you thousands of irrelevant listings. Career Navigator AI combines artificial intelligence with career development tools to deliver personalized recommendations, actionable insights, and real career guidance.
            </p>
            <a href="https://careernavigatorai.org" className="btn-green inline-flex">
              Start Using It Free <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid gap-4">
            {advantages.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card glass-card-hover rounded-xl p-5 flex gap-4 transition-all duration-300 group">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
