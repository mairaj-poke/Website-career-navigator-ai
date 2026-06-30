import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { FileSearch, BarChart3, Target, Search, ClipboardList, MessageSquare, Mic, DollarSign, LayoutDashboard, UserCog, Bookmark, Brain, Rocket } from 'lucide-react'

const features = [
  {
    icon: FileSearch,
    title: 'AI Resume Analysis',
    desc: 'Upload your resume and let AI automatically extract your skills, education, experience, and certifications. Missing info is flagged instantly, and your profile is auto-filled.',
    color: 'brand-green',
  },
  {
    icon: BarChart3,
    title: 'Resume Score',
    desc: 'Get a dynamic profile score based on resume completeness, skills, experience, education, ATS optimization, and more — with clear suggestions to improve it.',
    color: 'brand-purple',
  },
  {
    icon: Target,
    title: 'Personalized Job Matching',
    desc: 'No random listings. AI matches jobs to your resume, skills, experience, location, and salary expectations — each with a match percentage like 95%, 88%, or 76%.',
    color: 'brand-green',
  },
  {
    icon: Search,
    title: 'Smart Job Search',
    desc: 'Search and filter jobs by role, industry, location, remote, hybrid, or on-site. Save jobs for later or apply instantly — all from one place.',
    color: 'brand-purple',
  },
  {
    icon: ClipboardList,
    title: 'Application Tracker',
    desc: 'Monitor every application from Applied to Offer Received. Track statuses like Under Review, Shortlisted, Interview Scheduled, and more in real time.',
    color: 'brand-green',
  },
  {
    icon: MessageSquare,
    title: 'AI Career Advisor',
    desc: 'An intelligent chatbot that answers career questions — resume improvement, career roadmaps, skill recommendations, higher studies guidance, portfolio review, and career transitions.',
    color: 'brand-purple',
  },
  {
    icon: Mic,
    title: 'Interview Preparation',
    desc: 'Practice with HR, technical, behavioral, and coding questions. Get AI-powered mock interviews with real-time feedback and company-specific preparation.',
    color: 'brand-green',
  },
  {
    icon: DollarSign,
    title: 'Salary Insights',
    desc: 'Search salaries by job title, experience, location, and company. See average, highest, and lowest salary data alongside current market trends.',
    color: 'brand-purple',
  },
]

export default function Features() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hero-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex"><Rocket className="w-3.5 h-3.5" /> Core Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            One Platform, <span className="gradient-text">Every Career Tool</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From AI-powered resume analysis to personalized job matching, interview prep, and salary insights — everything you need to land your dream role.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 group cursor-default">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${f.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-purple/10 text-brand-purple'}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
