import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto px-5">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-navy-800 to-brand-green/10" />
          <div className="absolute inset-0 bg-navy-900/40" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-green/10 rounded-full blur-3xl" />

          <div className="relative p-10 sm:p-16 text-center">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="inline-block mb-6">
              <Sparkles className="w-10 h-10 text-brand-green" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-balance">
              Ready to Let AI Guide Your Career?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Upload your resume, get your AI-powered score, receive personalized job matches, and start applying — all for free. Your smarter career starts now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://careernavigatorai.org" className="btn-primary text-white text-base px-9 py-4">
                Get Started — It's Free <ArrowRight className="w-5 h-5" />
              </a>
              <a href="mailto:Info@careernavigatorai.org" className="btn-secondary text-white text-base px-9 py-4">Talk to Us</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
