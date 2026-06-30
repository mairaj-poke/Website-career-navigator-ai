import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "I uploaded my resume and within seconds the AI extracted everything, scored my profile, and showed me exactly what was missing. My resume score jumped from 62% to 91% after following the suggestions.",
    name: 'Priya Sharma',
    title: 'Software Developer, Bangalore',
    initials: 'PS',
    gradient: 'from-brand-green to-brand-purple',
  },
  {
    quote: "The personalized job matching is incredible. Instead of scrolling through hundreds of irrelevant listings, I got jobs with 90%+ match scores. I landed interviews at three companies within my first week.",
    name: 'Arjun Desai',
    title: 'Data Analyst, Mumbai',
    initials: 'AD',
    gradient: 'from-brand-purple to-brand-violet',
  },
  {
    quote: "As a final-year student with zero work experience, I was worried no platform would help me. Career Navigator AI factored in my projects, certifications, and skills to generate meaningful career paths.",
    name: 'Sneha Patil',
    title: 'Computer Science Student, Pune',
    initials: 'SP',
    gradient: 'from-brand-violet to-brand-green',
  },
  {
    quote: "The mock interview feature with AI feedback transformed my confidence. By my actual interview, I felt like I had already practiced every possible question. Got the offer on my first attempt.",
    name: 'Rahul Mehta',
    title: 'Cloud Engineer, Hyderabad',
    initials: 'RM',
    gradient: 'from-brand-green to-brand-green-light',
  },
  {
    quote: "The salary insights tool helped me negotiate a 30% higher package. I could see exactly what companies were paying for my role, experience level, and location before I even walked into the discussion.",
    name: 'Kavita Joshi',
    title: 'Product Manager, Delhi',
    initials: 'KJ',
    gradient: 'from-brand-purple to-brand-green',
  },
  {
    quote: "The AI Career Advisor answered every question I had — from which certifications to pursue to whether I should go for higher studies. It felt like having a personal career counselor available 24/7.",
    name: 'Vikram Singh',
    title: 'Career Switcher, Jaipur',
    initials: 'VS',
    gradient: 'from-brand-violet to-brand-purple',
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-hero-glow opacity-20" />
      <div className="max-w-7xl mx-auto px-5 relative" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex"><Quote className="w-3.5 h-3.5" /> Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Real Users, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Stories from students, graduates, and professionals who used Career Navigator AI to land their dream roles.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i*0.1 }} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 flex flex-col">
              <Quote className="w-8 h-8 text-brand-purple/30 mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-navy-950`}>{t.initials}</div>
                <div><div className="text-sm font-semibold">{t.name}</div><div className="text-xs text-gray-500">{t.title}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
