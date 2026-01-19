import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      name: 'Services',
      href: '#services',
    },
    {
      name: 'Case Studies',
      href: '#case-studies',
    },
    {
      name: 'Insights',
      href: '#insights',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }
  
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-warm-white/95 backdrop-blur-sm py-4 shadow-lg border-b border-navy/10' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 relative group ${isScrolled ? 'text-navy' : 'text-white'}`}
          >
            BrightPath<span className="text-gold">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold group ${isScrolled ? 'text-charcoal' : 'text-white/90'}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-gold transform -translate-x-1/2 transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100`}
                />
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-6 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 border ${isScrolled ? 'border-navy text-navy hover:bg-navy hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-navy'}`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-navy w-6 h-6" />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-slide-in">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-3xl font-serif text-navy hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 px-8 py-3 bg-navy text-white rounded-sm hover:bg-gold transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  )
}
