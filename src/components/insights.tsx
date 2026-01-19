
import { ArrowRight, Clock, Calendar } from 'lucide-react'
const articles = [
  {
    id: 1,
    title: 'The Renaissance of Human-Centric Leadership',
    excerpt:
      'In an AI-driven world, the most valuable asset remains the human touch. Exploring the shift towards empathy in executive decision making.',
    category: 'Leadership',
    readTime: '8 min read',
    date: 'Oct 12, 2025',
    image:
      '/photo-1507679799987-c73779587ccf.avif',
    featured: true,
  },
  {
    id: 2,
    title: 'Sustainable Innovation',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'Sep 28, 2025',
    image:
      '/photo-1497366216548-37526070297c.avif',
  },
  {
    id: 3,
    title: 'The Asymmetric Advantage',
    category: 'Markets',
    readTime: '6 min read',
    date: 'Sep 15, 2025',
    image:
      '/photo-1486312338219-ce68d2c6f44d.avif',
  },
  {
    id: 4,
    title: 'Digital Ethics in 2024',
    category: 'Technology',
    readTime: '4 min read',
    date: 'Aug 30, 2025 ',
    image:
      '/photo-1550751827-4bd374c3f58b.avif',
  },
]

export function Insights() {
  return (
    <section
      id="insights"
      className="py-32 bg-white border-t border-navy/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-navy">
              The Editorial
            </h2>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center text-navy font-medium hover:text-gold transition-colors duration-200 group"
          >
            <span className="border-b border-navy/20 group-hover:border-gold pb-1 transition-colors duration-200">
              Read all articles
            </span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden mb-8 rounded-sm shadow-lg will-change-transform">
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-6 left-6 z-20">
                <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-navy text-xs font-bold tracking-widest uppercase shadow-sm">
                  {articles[0].category}
                </span>
              </div>
            </div>

            <div className="pr-8">
              <h3 className="text-3xl md:text-5xl font-serif text-navy mb-6 group-hover:text-gold transition-colors duration-300 leading-tight">
                {articles[0].title}
              </h3>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl leading-relaxed">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 gap-6 border-t border-navy/5 pt-6">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {articles[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {articles[0].readTime}
                </span>
                <span className="ml-auto text-gold font-medium group-hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-4 flex flex-col gap-12 border-l border-navy/5 pl-0 lg:pl-12">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="group cursor-pointer flex gap-6 items-start"
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm will-change-transform">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform-gpu group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <span className="text-gold text-[10px] font-bold tracking-widest uppercase mb-2 block">
                    {article.category}
                  </span>
                  <h4 className="text-xl font-serif text-navy mb-2 leading-tight group-hover:text-gold transition-colors duration-200">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 gap-3">
                    <span>{article.date}</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-auto pt-8 border-t border-navy/5">
              <h4 className="font-serif text-xl text-navy mb-4">
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-b border-navy/20 py-2 px-0 w-full focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-gray-400"
                />
                <button className="text-navy hover:text-gold transition-colors duration-200 font-medium text-sm uppercase tracking-widest">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}