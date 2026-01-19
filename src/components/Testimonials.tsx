import { Quote } from 'lucide-react'
const testimonials = [
  {
    id: 1,
    quote:
      "BrightPath didn't just advise us; they transformed how we think about our future. Their strategic foresight is unmatched in the industry.",
    author: 'Elena Rodriguez',
    role: 'CEO, Vertex Dynamics',
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1573496359142-b8d87734a5a2.avif',
    companyLogo: 'Vertex',
  },
  {
    id: 2,
    quote:
      'The level of sophistication and depth they brought to our digital transformation initiative was extraordinary. A truly premium partnership.',
    author: 'James Chen',
    role: 'Director of Innovation, FutureScale',
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1472099645785-5658abf4ff4e.avif',
    companyLogo: 'FutureScale',
  },
]
export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-warm-white overflow-hidden relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1a2332 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold font-medium tracking-widest uppercase text-sm block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy">
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
                  <p className="text-2xl md:text-3xl font-serif italic text-navy leading-relaxed">
                    "{item.quote}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-6 border-t border-navy/5 pt-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-full h-full object-cover"
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
