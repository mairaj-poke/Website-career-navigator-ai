import { Link } from 'react-router-dom'
import { Compass, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerLinks = {
    Platform: [
      { label: 'Features', href: '/#features' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'AI Resume Analyzer', href: '#' },
      { label: 'AI Career Advisor', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '/#contact' },
    ],
    Resources: [
      { label: 'Interview Preparation', href: '#' },
      { label: 'Salary Insights', href: '#' },
      { label: 'Career Guides', href: '#' },
      { label: 'Resume Templates', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-green to-brand-purple flex items-center justify-center">
                <Compass className="w-4 h-4 text-navy-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight leading-tight">Career Navigator</span>
                <span className="text-[9px] font-medium text-brand-green tracking-widest uppercase">AI</span>
              </div>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
              AI-powered career guidance and job search platform. Personalized job matching, resume analysis, interview prep, and salary insights.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link to={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</Link>
                    ) : (
                      <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {year} Career Navigator AI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
              <a key={s} href="#" className="text-xs text-gray-600 hover:text-brand-green transition-colors flex items-center gap-1">{s}<ArrowUpRight className="w-3 h-3" /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
