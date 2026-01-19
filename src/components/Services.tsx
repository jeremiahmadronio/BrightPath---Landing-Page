import { ArrowUpRight } from 'lucide-react'
 interface Service {
  id: number
  title: string
  description: string
  image: string
  quote?: string
  align: 'left' | 'right'
}

const services: Service[] = [
  {
    id: 1,
    title: 'Strategic Consulting',
    description:
      'We partner with C-suite executives to identify high-impact opportunities and eliminate strategic blind spots. Our data-driven approach delivers actionable roadmaps that drive 3-5 year growth trajectories, optimize resource allocation, and increase market share.',
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1552664730-d307ca884978.avif',
    quote:
      'True strategy is about making bold decisions that others avoid—turning constraints into competitive advantages.',
    align: 'left',
  },
  {
    id: 2,
    title: 'Digital Transformation',
    description:
      'Technology that scales with precision. We architect enterprise-grade digital infrastructures that reduce operational costs by 30-40%, accelerate time-to-market, and create frictionless customer experiences. Our solutions integrate seamlessly with your existing systems while future-proofing your operations.',
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1519389950473-47ba0277781c.avif',
    align: 'right',
  },
  {
    id: 3,
    title: 'Innovation Labs',
    description:
      'Controlled experimentation that generates revenue. Our innovation framework combines design thinking with lean methodologies to rapidly test, validate, and scale new revenue streams. From concept to commercialization in 90 days—with built-in risk mitigation and measurable KPIs at every stage.',
    image:
      'https://brightpath-assets.sfo3.digitaloceanspaces.com/photo-1531482615713-2afd69097998.avif',
    align: 'left',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div
      className={`flex flex-col ${service.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center relative`}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy/5 hidden md:block -z-10" />

      <div className="w-full md:w-3/5 group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl will-change-transform">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          <div
            className={`absolute ${service.align === 'left' ? '-right-8' : '-left-8'} top-12 z-20 hidden md:block`}
          >
            <div className="bg-white p-6 shadow-xl border border-navy/5 max-w-[200px] rounded">
              <span className="text-4xl font-serif text-gold/40 font-bold block mb-2">
                0{index + 1}
              </span>
              <span className="text-xs uppercase tracking-widest text-navy font-bold">
                Key Service
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/5">
        <div className="flex items-baseline gap-4 mb-6 border-b border-navy/10 pb-6">
          <span className="text-5xl font-serif text-gold/40 md:hidden">
            0{index + 1}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-navy">
            {service.title}
          </h3>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
          {service.description}
        </p>

        {service.quote && (
          <blockquote className="border-l-2 border-gold pl-6 py-2 mb-8 my-8 bg-gold/5 p-6 rounded">
            <p className="font-serif italic text-xl text-navy leading-relaxed relative">
              <span className="absolute -top-4 -left-2 text-4xl text-gold/30">
                "
              </span>
              {service.quote}
            </p>
          </blockquote>
        )}

        <a
          href="#"
          className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors duration-200 group text-lg"
        >
          <span className="border-b border-navy/20 group-hover:border-gold pb-1 transition-colors duration-200">
            Learn more about {service.title}
          </span>
          <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:mb-40 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Our Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-navy leading-[1.1]">
            Crafting the architecture of{' '}
            <span className="italic text-green-600 relative inline-block">
              sustainable growth
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-green-600/30"
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
            .
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo Page
export default function SmoothPage() {
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
      `}</style>
     
      <Services />
    </div>
  )
}