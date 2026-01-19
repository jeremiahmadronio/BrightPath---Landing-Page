import {
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
} from 'lucide-react'
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <footer id="contact" className="bg-navy text-white pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-4xl font-serif font-bold tracking-tight mb-8 block"
            >
              BrightPath<span className="text-gold">.</span>
            </a>
            <p className="text-white/60 text-xl leading-relaxed max-w-md mb-12 font-light text-balance">
              Strategic consulting that transforms complexity into competitive advantage. Proven methodologies. Measurable outcomes. Lasting partnerships.
            </p>
            <div className="flex gap-6">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-navy hover:bg-white hover:border-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase mb-8">
              Sitemap
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  onClick={(e) => handleNavClick(e, '#case-studies')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  onClick={(e) => handleNavClick(e, '#insights')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, '#testimonials')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase mb-8">
              Start Your Transformation
            </h4>
            <p className="text-white/70 mb-8 text-lg">
              Partner with strategists who deliver quantifiable results. Let's discuss your growth objectives.
            </p>
            <a
              href="mailto:hello@brightpath.com"
              className="text-3xl font-serif hover:text-gold transition-colors inline-flex items-center group mb-12"
            >
              hello@brightpath.com
              <ArrowUpRight className="ml-2 w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <div className="bg-white/5 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
              <h5 className="text-white font-serif text-lg mb-2">
                San Francisco HQ
              </h5>
              <p className="text-white/50 font-light">
                123 Market Street, Suite 400
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} BrightPath Consulting. All rights
            reserved.
          </p>

          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>

            <button
              onClick={scrollToTop}
              className="ml-8 w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
