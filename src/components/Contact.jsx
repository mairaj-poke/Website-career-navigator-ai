import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Mail, MessageCircle, MapPin } from 'lucide-react'

const contactCards = [
  { icon: Mail, title: 'Email Us', desc: 'For partnerships, support, or general inquiries', value: 'Info@careernavigatorai.org', href: 'mailto:Info@careernavigatorai.org', color: 'brand-green' },
  { icon: MessageCircle, title: 'AI Career Advisor', desc: 'Get instant career guidance from our AI chatbot', value: 'Available 24/7', href: 'https://careernavigatorai.org', color: 'brand-purple' },
  { icon: MapPin, title: 'Location', desc: "Where we're building the future of career guidance", value: 'India', href: null, color: 'brand-violet' },
]

export default function Contact() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">{"Let's"} <span className="gradient-text">Connect</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Have a question, suggestion, or partnership idea? We would love to hear from you.</p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-5">
          {contactCards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i*0.12 }} className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-500 group">
              <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${c.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' : c.color === 'brand-purple' ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-violet/10 text-brand-violet'}`}>
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base mb-1">{c.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{c.desc}</p>
              {c.href ? <a href={c.href} className="text-sm font-semibold text-brand-green hover:underline underline-offset-4 transition-colors">{c.value}</a> : <span className="text-sm font-semibold text-gray-300">{c.value}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
