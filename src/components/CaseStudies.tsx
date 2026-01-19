import { useState } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
const cases = [
  {
    id: 1,
    client: 'Global Logistics Corp',
    title: 'Redefining Supply Chain Resilience in a Volatile Market',
    category: 'Operations',
    stats: [
      { label: 'Efficiency Gain', value: '45%' },
      { label: 'Cost Reduction', value: '$12M' },
    ],
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1586528116311-ad8dd3c8310d.avif',
  },
  {
    id: 2,
    client: 'FinTech Innovations',
    title: 'Scaling Digital Infrastructure for the Next Billion Users',
    category: 'Technology',
    stats: [
      { label: 'User Growth', value: '300%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1551288049-bebda4e38f71.avif',
  },
  {
    id: 3,
    client: 'EcoEnergy Systems',
    title: 'Transforming Renewable Energy Distribution Networks',
    category: 'Sustainability',
    stats: [
      { label: 'Carbon Offset', value: '2.5M' },
      { label: 'Grid Efficiency', value: '92%' },
    ],
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1473341304170-971dccb5ac1e.avif',
  },
]

export function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="case-studies"
      className="py-32 bg-navy text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Impact in Action
            </h2>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center text-white/70 hover:text-gold transition-colors duration-200 mt-8 md:mt-0 group"
          >
            <span className="border-b border-transparent group-hover:border-gold pb-0.5 transition-all duration-200">
              View all cases
            </span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {cases.map((study, index) => (
            <article
              key={study.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-lg relative will-change-transform">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transform-gpu transition-all duration-500 ease-out"
                      style={{
                        transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                        filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(15%)',
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                <div className="lg:col-span-5 flex flex-col h-full justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 border border-white/20 text-xs tracking-widest uppercase text-white/80 rounded-full bg-white/5 backdrop-blur-sm">
                      {study.category}
                    </span>
                    <span className="text-gold font-serif italic flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight group-hover:text-gold transition-colors duration-300">
                    {study.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-auto">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="relative">
                        <div className="flex items-baseline gap-1 mb-1">
                          <p className="text-4xl md:text-5xl font-light text-white">
                            {stat.value}
                          </p>
                          {i === 0 && (
                            <TrendingUp className="w-4 h-4 text-green-400 mb-1" />
                          )}
                        </div>
                        <p className="text-sm text-white/50 uppercase tracking-wider font-medium">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-10 overflow-hidden">
                    <span className="text-gold text-sm font-medium flex items-center gap-2">
                      Read full case study <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 md:hidden text-center">
          <a
            href="#"
            className="inline-flex items-center text-white hover:text-gold transition-colors duration-200 px-6 py-3 border border-white/20 rounded-sm"
          >
            View all cases <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
