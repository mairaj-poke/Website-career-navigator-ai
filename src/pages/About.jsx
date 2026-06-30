import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Sparkles, Heart, Eye, Target, Shield, BookOpen, Users, Award, Lightbulb, Star, Linkedin, Rocket, Globe } from 'lucide-react'

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hero-glow opacity-40" /></div>
      <div className="max-w-4xl mx-auto px-5 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="section-badge mb-4 inline-flex"><Sparkles className="w-3.5 h-3.5" /> About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6">
            The Team Behind <span className="gradient-text">Career Navigator AI</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Career Navigator AI is an AI-powered career guidance and job search platform designed to help students, fresh graduates, and professionals make smarter career decisions through personalized recommendations, resume analysis, interview preparation, salary insights, and AI-powered career assistance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Founder() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-glow opacity-20" />
      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/20 to-brand-purple/20 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img src={import.meta.env.BASE_URL + "assets/founder.jpg"} alt="Mairaj Poke — Founder, Career Navigator AI" className="w-full aspect-[3/4] object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-bold">Mairaj Poke</div>
                  <div className="text-xs text-brand-green font-medium">Founder, Career Navigator AI</div>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/mairaj-poke/" target="_blank" rel="noopener noreferrer" className="absolute -bottom-3 -right-3 glass-card rounded-xl p-2.5 flex items-center gap-2 hover:border-brand-purple/30 transition-all duration-300">
                <Linkedin className="w-4 h-4 text-blue-400" /><span className="text-xs font-medium">Connect</span>
              </a>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="section-badge mb-4 inline-flex">Meet the Founder</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-6">Mairaj Poke</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>Mairaj Poke founded Career Navigator AI with a singular vision: to build the world's most intelligent AI career companion that helps people discover the right opportunities, improve their professional profiles, and successfully achieve their career goals.</p>
              <p>Having witnessed how talented students and early-career professionals often struggle with a lack of accessible, personalized career guidance, Mairaj set out to create a platform that combines artificial intelligence with career development tools — making smart career decisions available to everyone, not just those who can afford private counselors.</p>
              <p>Under his leadership, Career Navigator AI has grown into a comprehensive platform that analyzes resumes with AI, delivers personalized job matches with compatibility scores, prepares users for interviews with AI-powered mock sessions, and provides real-time salary intelligence — all designed for college students, fresh graduates, working professionals, career switchers, and internship seekers.</p>
              <p className="text-white font-medium italic border-l-2 border-brand-green pl-4">
                "Technology should make career guidance accessible to everyone. Career Navigator AI exists to ensure that your skills and ambition — not your circumstances — determine your future."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6"><Rocket className="w-8 h-8 text-brand-green" /></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">Our <span className="gradient-text">Mission</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">To provide AI-powered, personalized career guidance that helps every individual — students, graduates, professionals, and career switchers — make smarter career decisions by combining resume analysis, intelligent job matching, interview preparation, salary insights, and AI career advising in one accessible platform.</p>
            <p className="text-gray-400 leading-relaxed">We believe that the right career guidance at the right time can transform lives. Our mission is to make that guidance intelligent, personalized, and available to everyone.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="glass-card rounded-2xl p-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6"><Eye className="w-8 h-8 text-brand-purple" /></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">Our <span className="gradient-text-reverse">Vision</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">To become the world's most intelligent AI career companion — a platform that helps people discover the right opportunities, improve their professional profiles, and successfully achieve their career goals regardless of their background or location.</p>
            <p className="text-gray-400 leading-relaxed">We envision a future where no career decision is made without data, no resume goes unoptimized, and no interview catches anyone off guard — because intelligent career guidance is available to all.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Goals() {
  const { ref, isVisible } = useReveal()
  const goals = [
    { icon: Globe, title: 'Global Reach', desc: 'Expand to 50+ countries, supporting AI career guidance in multiple languages for a global workforce.' },
    { icon: Users, title: 'One Million Guided', desc: 'Help one million students, graduates, and professionals land roles that match their skills and ambitions.' },
    { icon: BookOpen, title: 'University Partnerships', desc: 'Partner with 1,000+ universities and colleges to embed AI career tools directly into student programs.' },
    { icon: Lightbulb, title: 'Premium AI Features', desc: 'Launch advanced features including AI resume builder, ATS checker, cover letter generator, LinkedIn profile review, and personalized career roadmaps.' },
    { icon: Shield, title: 'Ethical AI Standard', desc: 'Set the benchmark for fairness, transparency, and privacy in AI-powered career guidance.' },
    { icon: Star, title: 'Industry Intelligence', desc: 'Build the most comprehensive salary and job market intelligence database covering every industry and geography.' },
  ]

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-5">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex"><Target className="w-3.5 h-3.5" /> Our Goals</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">Where {"We're"} <span className="gradient-text">Heading</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Ambitious targets backed by a clear plan — here is what we are working toward.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {goals.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 25 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i*0.1 }} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"><g.icon className="w-6 h-6" /></div>
              <h3 className="font-bold text-base mb-2">{g.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  const { ref, isVisible } = useReveal()
  const values = [
    { icon: Lightbulb, label: 'Innovation', desc: 'We push boundaries in AI to build career tools that genuinely help people make better decisions.' },
    { icon: Shield, label: 'Integrity', desc: 'Transparent algorithms, honest recommendations, and no hidden agendas — ever.' },
    { icon: Heart, label: 'Student First', desc: 'Every feature starts with the question: does this help our users make smarter career decisions?' },
    { icon: Globe, label: 'Accessibility', desc: 'Great career guidance should never be gated by geography, background, or income.' },
    { icon: BookOpen, label: 'Continuous Learning', desc: 'Our AI learns from every interaction to deliver increasingly accurate and personalized recommendations.' },
    { icon: Users, label: 'Trust', desc: "Your data is safe. Your privacy is non-negotiable. You are a person, not a data point." },
    { icon: Award, label: 'Excellence', desc: 'We ship quality, not quantity. Every feature earns its place on the platform by delivering real value.' },
  ]

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 via-transparent to-brand-green/5" />
      <div className="max-w-7xl mx-auto px-5 relative">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex"><Heart className="w-3.5 h-3.5" /> Our Values</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">What We <span className="gradient-text">Stand For</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div key={v.label} initial={{ opacity: 0, scale: 0.9 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: i*0.08 }} className="glass-card glass-card-hover rounded-xl p-5 text-center transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl mx-auto mb-3 bg-brand-green/10 text-brand-green flex items-center justify-center transition-transform duration-300 group-hover:scale-110"><v.icon className="w-5 h-5" /></div>
              <h3 className="font-bold text-sm mb-1">{v.label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Story() {
  const { ref, isVisible } = useReveal()
  const milestones = [
    { year: '2024', title: 'The Problem', desc: 'Mairaj Poke identifies that millions of students and professionals lack access to personalized, intelligent career guidance — and begins prototyping an AI-driven solution.' },
    { year: '2024', title: 'First Prototype', desc: 'A working prototype launches combining AI resume parsing, natural language processing, and job market data to deliver personalized career maps and job matches.' },
    { year: '2025', title: 'Platform Launch', desc: 'Career Navigator AI launches publicly with AI resume analysis, personalized job matching, application tracking, AI career advisor, interview preparation, and salary insights.' },
    { year: '2025', title: 'Rapid Adoption', desc: 'The platform crosses 10,000 active users spanning college students, fresh graduates, working professionals, career switchers, and internship seekers.' },
    { year: '2026', title: 'Global Expansion', desc: 'International rollout begins with coverage across 30+ countries and 200+ industries. University partnerships form and premium features including AI mock interviews and career roadmaps are launched.' },
  ]

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-5">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex">Our Story</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">How It All <span className="gradient-text">Started</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Career Navigator AI started with a question: why is quality career guidance still a privilege instead of a right? Here is our journey from idea to platform.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green/30 via-brand-purple/30 to-transparent" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i*0.15 }} className="relative pl-14">
                <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-navy-950 border-2 border-brand-purple flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-green" /></div>
                <div className="glass-card rounded-xl p-5">
                  <div className="text-xs font-bold text-brand-green mb-1">{m.year}</div>
                  <h3 className="font-bold text-base mb-2">{m.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <AboutHero />
      <Founder />
      <Mission />
      <Goals />
      <Values />
      <Story />
    </>
  )
}
