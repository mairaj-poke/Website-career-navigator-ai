import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp, Users, FileSearch, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-hero-glow opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-glow opacity-40" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div className="absolute top-32 left-[10%] w-3 h-3 rounded-full bg-brand-green/40" animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute top-48 right-[15%] w-2 h-2 rounded-full bg-brand-purple/50" animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
      <motion.div className="absolute bottom-32 left-[20%] w-4 h-4 rounded-full bg-brand-purple/30" animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />

      <div className="relative max-w-7xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-badge mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-powered career guidance for serious job seekers
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Your AI <span className="gradient-text">Career Companion</span> for Smarter Decisions
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8">
              Upload your resume, get AI-powered analysis, receive personalized job matches, prepare for interviews with AI coaching, and track every application — all in one platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="https://careernavigatorai.org" className="btn-primary text-white">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </a>
              <button className="btn-secondary text-white">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-950" style={{ background: `linear-gradient(135deg, ${['#7c6bf0', '#00d97e', '#a78bfa', '#34e89e'][i]}, ${['#6354d4', '#00b368', '#7c6bf0', '#00d97e'][i]})` }} />
                  ))}
                </div>
                <span>10,000+ active users</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-green fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-1">4.9/5 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-xs text-gray-500">Career Navigator AI — Dashboard</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-navy-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                        <FileSearch className="w-5 h-5 text-brand-green" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Resume Score</div>
                        <div className="text-xs text-gray-500">AI-analyzed profile strength</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-brand-green">87%</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-navy-800/50 text-center">
                      <div className="text-lg font-bold">24</div>
                      <div className="text-[10px] text-gray-500">Jobs Matched</div>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-800/50 text-center">
                      <div className="text-lg font-bold text-brand-purple">12</div>
                      <div className="text-[10px] text-gray-500">Applied</div>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-800/50 text-center">
                      <div className="text-lg font-bold text-brand-green">3</div>
                      <div className="text-[10px] text-gray-500">Interviews</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-800/50">
                    <div className="text-xs text-gray-500 mb-2">Top Job Match</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">Frontend Developer</div>
                        <div className="text-xs text-gray-500">TechCorp • Remote • ₹12-18 LPA</div>
                      </div>
                      <div className="text-sm font-bold text-brand-green">95%</div>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-navy-700 overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-purple" initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1.5, delay: 0.8 }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-green/5 border border-brand-green/10">
                    <Zap className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <div className="text-xs text-gray-300">
                      <span className="font-semibold text-brand-green">AI Insight:</span>{' '}
                      Add 2 more certifications to boost your resume score to 94%. Start now →
                    </div>
                  </div>
                </div>
              </div>

              <motion.div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 w-44" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-brand-purple" />
                  <span className="text-xs font-medium">Active Users</span>
                </div>
                <div className="text-lg font-bold">10,847</div>
                <div className="text-[10px] text-brand-green flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3 h-3" /> +23% this month
                </div>
              </motion.div>

              <motion.div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3" animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-brand-purple" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">AI Career Advisor</div>
                    <div className="text-[10px] text-gray-500">24/7 career coaching</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
