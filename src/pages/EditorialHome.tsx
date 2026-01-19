import { Navigation } from  '../components/Navigation'
import { Hero } from  '../components/Hero'
import { Services } from    '../components/Services'
import { CaseStudies } from '../components/CaseStudies'
import { Testimonials } from  '../components/Testimonials'
import { Insights } from '../components/insights'
import { Footer } from '../components/Footer'
export function EditorialHome() {
  return (
 <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        html {
          scroll-behavior: smooth;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>      <Navigation />
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
