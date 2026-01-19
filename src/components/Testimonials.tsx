import { Quote } from 'lucide-react'
const testimonials = [
  {
    id: 1,
    quote:
      "Working with BrightPath was a game-changer for our supply chain operations. They helped us reduce costs by 45% while improving delivery times. Their team's expertise and hands-on approach made the entire transformation process smooth and efficient.",
    author: 'Michael Rodriguez',
    role: 'COO, Global Logistics Corp',
    image:
      '/photo-1472099645785-5658abf4ff4e.avif',
    companyLogo: 'Global Logistics',
  },
  {
    id: 2,
    quote:
      'BrightPath helped us scale our infrastructure from 15 million to 60 million users without a hitch. Their cloud architecture expertise and strategic guidance were invaluable. We achieved 99.99% uptime and saved $18M annually in infrastructure costs.',
    author: 'Sarah Chen',
    role: 'CTO, FinTech Innovations',
    image:
      '/photo-1573496359142-b8d87734a5a2.avif',
    companyLogo: 'FinTech Innovations',
  },
]
export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 bg-warm-white overflow-hidden relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1a2332 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold font-medium tracking-widest uppercase text-sm block mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy">
            Trusted by Visionaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div className="relative bg-white p-10 md:p-12 shadow-2xl shadow-navy/10 rounded-lg border border-navy/10 group hover:-translate-y-2 hover:shadow-gold/20 transition-all duration-300">
                {/* Large Quote Icon */}
                <div className="absolute -top-6 -left-6 bg-gold text-white p-4 rounded-full shadow-lg">
                  <Quote size={24} fill="currentColor" />
                </div>

                <blockquote className="mb-10 relative z-10">
                  <p className="text-xl md:text-2xl text-gray-800 leading-loose font-light">
                    "{item.quote}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-6 border-t border-navy/5 pt-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-navy tracking-wide block mb-1 text-lg">
                      {item.author}
                    </cite>
                    <span className="text-sm text-charcoal/60 uppercase tracking-widest font-medium">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
