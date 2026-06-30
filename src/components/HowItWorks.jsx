import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { UserPlus, Upload, Brain, Target, Briefcase } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Register & Complete Profile',
    desc: 'Create your account and fill in your personal information, skills, education, experience, certifications, and career preferences.',
    color: 'brand-purple',
  },
  {
    icon: Upload,
    title: 'Upload Your Resume',
    desc: 'Upload your resume and let our AI automatically extract your details, auto-fill your profile, and calculate your resume score.',
    color: 'brand-green',
  },
  {
    icon: Brain,
    title: 'AI Analyzes & Scores',
    desc: 'The AI evaluates your resume for completeness, skills, ATS optimization, and more — then flags missing information and provides improvement suggestions.',
    color: 'brand-purple',
  },
  {
    icon: Target,
    title: 'Get Personalized Job Matches',
    desc: 'Receive job recommendations tailored to your resume, skills, experience, location, and salary expectations — each with a match percentage.',
    color: 'brand-green',
  },
  {
    icon: Briefcase,
    title: 'Apply, Track & Prepare',
    desc: 'Apply to matched jobs, track application statuses in real time, and prepare for interviews with AI-powered mock sessions and coaching.',
    color: 'brand-purple',
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-20" />

      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            From Resume Upload to <span className="gradient-text">Dream Job</span> in Five Steps
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No complicated onboarding. Upload your resume, let AI do the heavy lifting, and start applying to matched jobs within minutes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }} className="relative glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-500 group">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-navy-900 border border-brand-purple/30 flex items-center justify-center text-xs font-bold text-brand-purple">
                  {i + 1}
                </div>
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${step.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-purple/10 text-brand-purple'}`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
