import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Is Career Navigator AI free to use?',
    a: "Yes — core features including AI resume analysis, personalized job matching, application tracking, and the AI career advisor are completely free. Premium features like unlimited AI resume reviews, advanced resume builder, ATS checker, AI mock interviews, and personalized career roadmaps are available in paid plans.",
  },
  {
    q: 'How does the AI resume analysis work?',
    a: "Upload your resume and our AI automatically extracts your personal information, skills, education, work experience, and certifications. It then calculates a dynamic resume score based on completeness, ATS optimization, and more — and provides specific suggestions to improve your profile.",
  },
  {
    q: 'How does personalized job matching work?',
    a: "Instead of showing random listings, the AI analyzes your resume, skills, experience, preferred location, career interests, and salary expectations to recommend jobs with a match percentage — like 95% Match, 88% Match, or 76% Match — so you know exactly where to focus.",
  },
  {
    q: 'Can I use the platform as a student with no work experience?',
    a: "Absolutely — the platform is designed for college students, fresh graduates, and internship seekers. The AI factors in your education, projects, certifications, and interests — not just paid work history — to generate meaningful career recommendations.",
  },
  {
    q: 'What can the AI Career Advisor help me with?',
    a: "The AI Career Advisor is an intelligent chatbot that can answer questions about resume improvement, career roadmaps, skill recommendations, higher studies guidance, certifications to pursue, job search strategies, portfolio review, and career transitions.",
  },
  {
    q: 'How does interview preparation work?',
    a: "The platform offers interactive preparation with HR interview questions, technical questions, behavioral questions, coding challenges, company-specific preparation, and AI-powered mock interviews with real-time feedback to help you perform at your best.",
  },
  {
    q: 'What salary information can I access?',
    a: "Search salaries by job title, experience level, location, and company. The platform displays average, highest, and lowest salary data along with current market trends to help you negotiate confidently.",
  },
  {
    q: 'Can I track my job applications?',
    a: "Yes — the Application Tracker lets you monitor every application with statuses including Applied, Under Review, Shortlisted, Interview Scheduled, Offer Received, and Rejected. You can also save jobs for later and view your complete application history.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex"><HelpCircle className="w-3.5 h-3.5" /> FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i*0.06 }} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-purple/20">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="text-sm font-semibold pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-green' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
