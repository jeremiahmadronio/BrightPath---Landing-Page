import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { CaseStudies } from '../components/CaseStudies'
import { Testimonials } from '../components/Testimonials'
import { Insights } from '../components/insights'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Insights />
      </main>
      <Footer />
    </div>
  )
}
