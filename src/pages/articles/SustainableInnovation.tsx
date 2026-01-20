import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactModal } from '../../components/ContactModal'

export function ArticleSustainableInnovation() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const articleTitle = "Sustainable Innovation: Building the Future Without Compromising Tomorrow"
  const articleDescription = "How leading companies are transforming sustainability from constraint into competitive advantage. Featuring real case studies: EcoEnergy's 2.5M ton carbon offset, Global Logistics' 45% efficiency gain, and FinTech's 300% growth story."
  const articleUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        const twitterText = `${articleTitle}\n\n${articleDescription}\n\nRead the full analysis from @BrightPathConsulting 👇\n\n#Innovation #Sustainability #BusinessStrategy #GreenTech #ESG`
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(articleUrl)}`
        break
      case 'linkedin':
        const linkedInText = `${articleTitle}\n\n${articleDescription}\n\nKey Findings:\n• EcoEnergy: 2.5M tons carbon offset, 92% grid efficiency\n• Global Logistics: $12M savings, 45% efficiency improvement\n• FinTech: 300% user growth, 99.99% uptime\n\nRead the complete analysis:`
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&summary=${encodeURIComponent(linkedInText)}`
        break
      case 'facebook':
        const facebookText = `${articleTitle}\n\n${articleDescription}\n\nDiscover how sustainability drives competitive advantage through real case studies from BrightPath Consulting.`
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}&quote=${encodeURIComponent(facebookText)}`
        break
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-navy/10 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-navy hover:text-gold transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-navy hover:text-gold transition-colors duration-200">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="text-navy hover:text-gold transition-colors duration-200">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <article className="pt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Category Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase">
                STRATEGY
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                Nov 5, 2025
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-tight">
              Sustainable Innovation: Building the Future Without Compromising Tomorrow
            </h1>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-12">
              <img
                src="/photo-1497366216548-37526070297c.avif"
                alt="Sustainable Innovation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-6">Introduction: The Reckoning</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In the summer of 2024, a mid-sized manufacturing client came to us with what they believed was a straightforward request: help them innovate faster to compete with emerging market disruptors. Six weeks into our diagnostic phase, we uncovered something far more urgent than competitive positioning. Their entire supply chain was built on assumptions that would be untenable within five years—rising carbon costs, resource scarcity, regulatory shifts, and changing consumer preferences were converging to make their current business model economically unviable.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  They weren't asking the right question. The issue wasn't how to innovate faster. It was how to innovate in a way that would still be relevant, profitable, and operational in 2030.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This realization has become a defining pattern in our work. From renewable energy providers managing distributed grid systems to logistics companies rethinking transportation networks, the most successful transformations we've guided share a common thread: they don't just solve today's problems—they build systems designed to thrive in tomorrow's constraints.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Welcome to the era of sustainable innovation. Not as a moral imperative (though it is), not as a branding exercise (though it helps), but as the fundamental architecture of competitive advantage in the 21st century.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Death of "Innovation at Any Cost"</h2>
                
                <h3 className="text-2xl font-serif text-navy mb-4">The Old Playbook Is Broken</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  For decades, Silicon Valley codified a particular innovation philosophy: move fast and break things. Iterate rapidly. Fail forward. Capture market share at any cost, worry about unit economics later. Optimize for growth, externalize costs, let someone else clean up the mess.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This model worked—until it didn't.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We're now witnessing the consequences of innovation divorced from sustainability:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Tech platforms struggling with the societal damage of algorithms optimized purely for engagement</li>
                  <li className="pl-2">E-commerce giants facing the environmental costs of same-day delivery expectations</li>
                  <li className="pl-2">Fast fashion brands confronting the waste streams of ultra-cheap, disposable clothing</li>
                  <li className="pl-2">Food delivery apps realizing that $12 deliveries requiring $18 in actual costs aren't sustainable businesses</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  The pattern is consistent: innovations that create value by externalizing costs eventually face a reckoning when those costs come home.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-12">The New Imperative</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Our work with EcoEnergy Systems illuminated a different path. When we began the engagement, they faced what appeared to be a classic technology scaling challenge: their legacy grid infrastructure couldn't handle the intermittency and distribution complexity of renewable energy sources. The conventional solution would have been incremental upgrades—more robust systems, better batteries, manual management protocols.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Instead, we asked a different question: What would a grid look like if it were designed from first principles to handle 100% renewable energy at massive scale while maintaining 99%+ reliability and improving unit economics?
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The answer required rethinking everything:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">AI-powered predictive systems that anticipate generation patterns 72 hours in advance</li>
                  <li className="pl-2">Distributed battery storage that turns intermittency from liability to asset</li>
                  <li className="pl-2">Demand response programs that create virtual capacity without building new infrastructure</li>
                  <li className="pl-2">Smart metering that transforms every customer into an active grid participant</li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-600 p-8 my-8">
                  <p className="text-xl text-gray-800 font-medium leading-relaxed">
                    The results tell the story: 2.5M tons of annual carbon offset, 92% grid efficiency (up from 74%), $22M in annual savings, and 250% capacity growth—all while improving reliability from 91% to 99.4%.
                  </p>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  This is sustainable innovation. Not innovation despite sustainability constraints, but innovation because of sustainability constraints. The limits become the design parameters that force breakthrough thinking.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Three Pillars of Sustainable Innovation</h2>

                <h3 className="text-3xl font-serif text-navy mb-6">Pillar 1: Resource Optimization as Competitive Advantage</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The traditional growth model assumes resources are infinite and cheap. Sustainable innovation recognizes that the most valuable innovations make more from less.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Consider our engagement with Global Logistics Corp. They operated 12 distribution centers processing 2,500 daily shipments with steadily declining margins (12% to 7% over three years) and increasing costs (+22% transportation, +15% labor). The knee-jerk response would be: cut costs, reduce headcount, squeeze suppliers.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We took a different approach: optimize the entire system for resource efficiency.
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Analysis</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Our diagnostic revealed staggering waste:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">62% warehouse capacity utilization (meaning 38% of their real estate and associated costs were underutilized)</li>
                  <li className="pl-2">18% of costs came from expedited shipping (failures of planning, not operational necessity)</li>
                  <li className="pl-2">40% of processes were still paper-based, requiring manual data entry across 7 disparate systems</li>
                  <li className="pl-2">Route planning done manually each morning, often suboptimal by 15-20%</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  These weren't isolated inefficiencies. They were symptoms of a system designed for a different era—when labor was cheap, fuel was cheap, and real estate was cheap.
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Transformation</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We redesigned their network using AI-powered optimization:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Consolidated from 12 to 9 strategically positioned facilities (28% reduction in inventory carrying costs, massive real estate savings)</li>
                  <li className="pl-2">Implemented predictive analytics that moved route planning from reactive to proactive (reducing planning time from 90 minutes to 15 minutes while improving efficiency by 35%)</li>
                  <li className="pl-2">Automated 40% of manual processes (eliminating errors and freeing staff for higher-value work)</li>
                  <li className="pl-2">Created a unified technology platform that provided real-time visibility across the entire supply chain</li>
                </ul>

                <div className="bg-gold/10 border-l-4 border-gold p-8 my-8">
                  <p className="text-xl text-gray-800 leading-relaxed mb-4">
                    <strong>The financial impact was dramatic:</strong> $12M in annual cost reductions, 45% improvement in operational efficiency, 99.2% on-time delivery (up from 87%).
                  </p>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    But the strategic impact was more profound: they transformed from a commodity logistics provider competing on price to a technology-enabled partner competing on reliability and intelligence.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Lesson</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Resource optimization isn't about doing less with less. It's about doing more with less. Every dollar saved on waste is a dollar that can be reinvested in capabilities that drive revenue. Every efficiency gain reduces environmental impact while improving margins. Every system optimization makes you more resilient to external shocks.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  When fuel prices spiked 40% in early 2024, Global Logistics Corp's competitors saw margin compression. They saw minimal impact because their optimized routes and consolidated facilities had already designed out unnecessary fuel consumption.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>This is sustainable innovation as competitive moat.</strong>
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h3 className="text-3xl font-serif text-navy mb-6">Pillar 2: Long-Term Systems Thinking</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Short-term optimization often creates long-term fragility. Sustainable innovation requires designing for durability.
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4">The Infrastructure Dilemma</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  When FinTech Innovations approached us, they were experiencing what many high-growth tech companies face: their infrastructure was buckling under scale. With 15 million users and aggressive expansion targets (100M users within three years), their legacy monolithic architecture was failing:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">System uptime: 97.2% (8+ hours of downtime monthly)</li>
                  <li className="pl-2">Transaction processing: 12 seconds (vs. 2-second industry standard)</li>
                  <li className="pl-2">Critical incidents: 12-15 per month</li>
                  <li className="pl-2">Manual scaling taking 4-6 hours</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The path of least resistance would have been incremental scaling—add more servers, patch the bottlenecks, hire more engineers to manually manage the complexity. Many companies take this approach. It's faster in the short term, cheaper upfront, and easier to justify to stakeholders focused on quarterly results.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>It's also a death sentence.</strong>
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Systems Redesign</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We convinced FinTech Innovations to invest $12M in a complete architectural transformation. Not a patch. Not an upgrade. A rebuild from first principles with a 10-year horizon.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The cloud-native infrastructure we designed had several critical characteristics:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2"><strong>Auto-scaling from day one:</strong> The system automatically adjusts capacity based on real-time demand, scaling from 1,000 to 100,000 transactions per second in under 5 minutes without human intervention.</li>
                  <li className="pl-2"><strong>Microservices architecture:</strong> Instead of a monolithic application where changes are risky and deployments are traumatic events, we created 40+ independent services that can be updated, scaled, and optimized independently.</li>
                  <li className="pl-2"><strong>Multi-region deployment:</strong> Geographic distribution that reduces latency for global users while providing redundancy (if one region fails, others seamlessly absorb the load).</li>
                  <li className="pl-2"><strong>Event-driven design:</strong> Systems communicate through message queues, creating natural buffers that prevent cascading failures and enable sophisticated analytics.</li>
                  <li className="pl-2"><strong>Built-in observability:</strong> Real-time monitoring and tracing that identifies issues before they become outages.</li>
                </ul>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Payoff</h4>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-8">
                  <p className="text-xl text-gray-800 leading-relaxed mb-4">
                    The 18-month transformation delivered extraordinary results:
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2">
                    <li>• 300% user growth (15M to 60M users)</li>
                    <li>• 99.99% uptime (only 4 minutes of downtime annually)</li>
                    <li>• Transaction processing: 12 seconds → 1.8 seconds</li>
                    <li>• Infrastructure cost per user: 85% reduction</li>
                    <li>• Critical incidents: 94% reduction</li>
                    <li>• Valuation: $1.2B → $4.8B</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  But the real value isn't captured in those metrics. The real value is this: FinTech Innovations now has infrastructure that can scale to 500M users without fundamental architectural changes. They won't need to undergo this painful transformation again. They won't hit a wall at 80M users and scramble to rebuild while trying to maintain operations.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  They built once, properly, with a long-term view. Now they can focus on product, customers, and growth instead of constantly firefighting infrastructure crises.
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Principle</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Systems thinking means understanding that:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">The cheapest solution today is often the most expensive over time</li>
                  <li className="pl-2">Quick fixes create technical debt that compounds</li>
                  <li className="pl-2">Fragile systems optimized for efficiency fail catastrophically under stress</li>
                  <li className="pl-2">Resilient systems designed for durability outperform over any meaningful timeframe</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Sustainable innovation prioritizes system resilience over short-term optimization. It designs for the lifespan of the solution, not the attention span of the market.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h3 className="text-3xl font-serif text-navy mb-6">Pillar 3: Stakeholder Value Creation</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The shareholder primacy doctrine—the idea that companies exist solely to maximize returns for equity holders—is giving way to stakeholder capitalism. Not because of ideology, but because stakeholder value creation is better business.
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4">The Comprehensive Value Framework</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Our work with EcoEnergy Systems demonstrates this evolution. The transformation we designed created value across multiple dimensions:
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="bg-gray-50 p-6 rounded-sm">
                    <h5 className="text-lg font-semibold text-navy mb-4">For Customers:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• 23% reduction in average energy bills</li>
                      <li>• 99.4% reliability (eliminating outages)</li>
                      <li>• Real-time energy usage data and control</li>
                      <li>• Demand response programs that pay them</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-sm">
                    <h5 className="text-lg font-semibold text-navy mb-4">For Employees:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• 180 new high-skilled jobs created</li>
                      <li>• Comprehensive training programs</li>
                      <li>• Improved job satisfaction</li>
                      <li>• Turnover reduced from 22% to 9%</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-sm">
                    <h5 className="text-lg font-semibold text-navy mb-4">For Communities:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• 2.5M tons annual carbon offset</li>
                      <li>• Local infrastructure investment</li>
                      <li>• Educational partnerships</li>
                      <li>• Improved air quality</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-sm">
                    <h5 className="text-lg font-semibold text-navy mb-4">For Investors:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• Revenue: $420M → $680M annually</li>
                      <li>• EBITDA margin: 18% → 34%</li>
                      <li>• Market position: regional → industry leader</li>
                      <li>• Valuation multiple expansion</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The Strategic Implication</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Companies that create value for all stakeholders build natural constituencies that support and accelerate growth:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">Loyal customers become advocates and provide word-of-mouth marketing</li>
                  <li className="pl-2">Engaged employees become innovators who continuously improve operations</li>
                  <li className="pl-2">Supportive communities provide social license to operate and expand</li>
                  <li className="pl-2">Satisfied investors provide patient capital for long-term investments</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This isn't feel-good corporate social responsibility. This is strategic advantage through aligned incentives.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  When EcoEnergy wanted to expand into a new state, they didn't face the typical utility provider headwinds. Community organizations actively supported their entry. Environmental groups endorsed them. Local governments fast-tracked permitting. Customers in adjacent markets requested their service. They had built a coalition of stakeholders who wanted them to succeed because their success created broader value.
                </p>
              </div>

              {/* Business Case Section */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Business Case: Why Sustainable Innovation Wins</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Let's address the elephant in the room: does sustainable innovation actually perform better financially? The data is increasingly clear—yes, dramatically so.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">Market Access and Regulatory Advantage</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Regulatory environments worldwide are shifting to favor sustainable operations. The EU's Carbon Border Adjustment Mechanism, California's climate disclosure requirements, and increasing ESG reporting standards aren't future concerns—they're current realities.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Companies building sustainability into their innovation frameworks gain:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">Preferential access to markets with strict environmental standards</li>
                  <li className="pl-2">Lower cost of capital from ESG-focused investors (a 50-basis-point advantage in debt financing can save millions)</li>
                  <li className="pl-2">Reduced regulatory risk and compliance costs</li>
                  <li className="pl-2">Faster permitting and smoother government relations</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our clients report 25-40% faster market entry in jurisdictions with strict sustainability requirements compared to competitors still retrofitting compliance.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">Risk Mitigation and Resilience</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Climate change, resource scarcity, and social inequality aren't abstract future threats—they're material business risks today.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Global Logistics Corp's transformation wasn't just about efficiency—it was about resilience. When port congestion spiked in 2023-2024, their competitors experienced 30-45% increases in delivery times. Global Logistics Corp experienced a 7% increase because their system was designed to route around problems.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">Talent Acquisition and Retention</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The war for talent is real, especially in technology, engineering, and specialized domains. Top performers increasingly prioritize working for organizations whose values align with their own.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Our clients systematically report:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">40-60% higher application rates when leading with sustainability mission</li>
                  <li className="pl-2">25-35% better retention among high performers</li>
                  <li className="pl-2">Reduced recruiting costs from stronger employer brand</li>
                  <li className="pl-2">Access to specialized talent that won't consider unsustainable companies</li>
                </ul>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">Customer Loyalty and Premium Pricing</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The data from our engagements:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">15-25% premium pricing for demonstrably sustainable solutions</li>
                  <li className="pl-2">30-50% higher Net Promoter Scores when sustainability is core to value proposition</li>
                  <li className="pl-2">2-3x higher customer lifetime value from increased loyalty and reduced churn</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  EcoEnergy's customer retention increased from 82% to 94% after their transformation. Their NPS went from 58 to 84. Customers became advocates, generating 35% of new customer acquisition through referrals.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">Operational Efficiency and Margin Expansion</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Perhaps the most direct business case: sustainable practices almost always reduce waste, optimize resources, and improve margins.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Every engagement we've conducted shows the same pattern:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-6 space-y-3 ml-6">
                  <li className="pl-2">Energy efficiency improvements reducing operating costs 20-40%</li>
                  <li className="pl-2">Waste reduction improving material yields 15-30%</li>
                  <li className="pl-2">Process optimization reducing labor requirements 25-45%</li>
                  <li className="pl-2">Resource efficiency reducing supply chain costs 10-25%</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  The idea that sustainability costs more is outdated. Our data shows the opposite. The upfront investment in sustainable innovation delivers returns within 12-24 months and continues compounding thereafter.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-8">Conclusion: Innovation as Legacy</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Every innovation is ultimately a choice about what kind of future we're creating. The most successful companies we work with have reframed the question from "Can we afford to innovate sustainably?" to "Can we afford not to?"
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The answer is increasingly clear across every dimension:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2"><strong>Economically:</strong> Sustainable innovation delivers superior financial returns over any meaningful timeframe through efficiency gains, risk reduction, premium pricing, and market access.</li>
                  <li className="pl-2"><strong>Strategically:</strong> Sustainable innovation creates competitive moats through stakeholder alignment, regulatory advantage, talent access, and operational resilience.</li>
                  <li className="pl-2"><strong>Operationally:</strong> Sustainable innovation optimizes resource utilization, reduces waste, improves processes, and builds more robust systems.</li>
                  <li className="pl-2"><strong>Culturally:</strong> Sustainable innovation attracts and retains top talent, creates organizational pride, and aligns teams around meaningful mission.</li>
                </ul>

                <div className="bg-navy text-white p-12 my-12 rounded-sm">
                  <p className="text-2xl font-serif mb-6 leading-relaxed">
                    "The future belongs to organizations that understand a fundamental truth: the most innovative companies aren't just building better products. They're building a better world. And in doing so, they're building better, more resilient, more valuable businesses."
                  </p>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The question for your organization isn't whether to pursue sustainable innovation. It's how quickly you can make it core to everything you do. Because make no mistake—this isn't a trend. It's the new standard.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  And in business, as in nature, you either adapt or you're replaced by something better suited to the environment.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The environment has changed. Sustainable innovation is no longer optional. It's the price of admission to enduring relevance.
                </p>
                <p className="text-2xl font-serif text-navy mb-8">
                  What will you build?
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-navy to-navy/90 text-white p-12 rounded-sm mb-16">
                <h3 className="text-3xl font-serif mb-6">Take Action</h3>
                <p className="text-lg mb-8 opacity-90">
                  Ready to transform your innovation approach? Our 90-Day Innovation Sprint helps you identify, validate, and launch sustainable revenue streams that create value across all stakeholder dimensions.
                </p>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Your Innovation Assessment
                </button>
              </div>

              {/* Social Share */}
              <div className="border-t border-b border-navy/10 py-8 mb-16">
                <h4 className="text-xl font-serif text-navy mb-6">Share this article:</h4>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-6 py-3 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all duration-200"
                  >
                    <Twitter className="w-5 h-5 text-navy" />
                    <span className="text-navy font-medium">Twitter</span>
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 px-6 py-3 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-navy" />
                    <span className="text-navy font-medium">LinkedIn</span>
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-6 py-3 border border-navy/20 rounded-sm hover:border-navy hover:bg-navy/5 transition-all duration-200"
                  >
                    <Facebook className="w-5 h-5 text-navy" />
                    <span className="text-navy font-medium">Facebook</span>
                  </button>
                </div>
              </div>

              {/* About the Author */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <h3 className="text-2xl font-serif text-navy mb-4">About the Author</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This article draws on insights from BrightPath Consulting's work with organizations across energy, technology, logistics, and manufacturing sectors. Our team combines strategy consulting expertise with deep domain knowledge in sustainable business practices, helping clients build innovations that deliver both business value and positive impact.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-navy text-white py-12 mt-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-lg mb-4">© 2025 BrightPath Consulting. All rights reserved.</p>
            <Link to="/" className="text-gold hover:text-gold/80 transition-colors duration-200">
              Return to Homepage
            </Link>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-navy text-white p-4 rounded-full shadow-lg hover:bg-navy/90 transition-all duration-200 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div style={{ zIndex: 11000 }}>
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </div>
      )}
    </>
  )
}
