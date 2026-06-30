import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyChoose from '../components/WhyChoose'
import HowItWorks from '../components/HowItWorks'
import AICapabilities from '../components/AICapabilities'
import Analytics from '../components/Analytics'
import SuccessMetrics from '../components/SuccessMetrics'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChoose />
      <HowItWorks />
      <AICapabilities />
      <Analytics />
      <SuccessMetrics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
