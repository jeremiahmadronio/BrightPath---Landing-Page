import { ArrowRight } from 'lucide-react'

// Hero Component - Optimized for smooth performance
export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy"
    >
      {/* Background Image - GPU Accelerated */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90 z-10 pointer-events-none" />
        <img
          src="/photo-1486406146926-c627a92ad1ab.avif"
          alt="Modern architecture"
          className="w-full h-full object-cover transform-gpu"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-[1px] w-12 bg-gold/60" />
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
            Strategic Consulting & Innovation
          </span>
          <span className="h-[1px] w-12 bg-gold/60" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
          Strategic Vision for <br />
          <span className="italic font-light text-white/90 relative inline-block">
            Tomorrow's Leaders
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-gold"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Partnering with visionary organizations to architect growth, drive transformation, and unlock new possibilities in an evolving marketplace.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#services"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-navy hover:bg-gold hover:text-white transition-colors duration-200 rounded-sm overflow-hidden will-change-transform"
          >
            <span className="relative z-10 font-medium tracking-wide">
              Discover Our Expertise
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white hover:border-white transition-colors duration-200 rounded-sm will-change-transform"
          >
            <span className="font-medium tracking-wide">Start a Conversation</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <div className="w-[1px] h-24 bg-white/10 overflow-hidden mt-8">
          <div className="w-full h-1/2 bg-gold" />
        </div>
      </div>
    </section>
  )
}