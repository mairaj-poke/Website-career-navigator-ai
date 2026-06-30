import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Compass } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const isHome = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Features', to: '/#features' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/#contact' },
  ]

  const handleNavClick = (to) => {
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '')
      if (isHome) {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = base + '/' + '#' + id
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-green to-brand-purple flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Compass className="w-5 h-5 text-navy-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight leading-tight">Career Navigator</span>
            <span className="text-[10px] font-medium text-brand-green tracking-widest uppercase">AI</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to.startsWith('/#') ? '#' : link.to}
              onClick={(e) => {
                if (link.to.startsWith('/#')) { e.preventDefault(); handleNavClick(link.to) }
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                (link.to === '/' && isHome) || (link.to === '/about' && location.pathname.includes('/about'))
                  ? 'text-brand-green' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://careernavigatorai.org" className="btn-primary text-white text-sm">Get Started Free</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors" aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to.startsWith('/#') ? '#' : link.to}
              onClick={(e) => {
                if (link.to.startsWith('/#')) { e.preventDefault(); handleNavClick(link.to) }
              }}
              className="px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <a href="https://careernavigatorai.org" className="btn-primary text-white text-sm mt-3 justify-center">Get Started Free</a>
        </div>
      </div>
    </nav>
  )
}
