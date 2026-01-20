import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Bookmark, Share2, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { ContactModal } from '../../components/ContactModal'

export function ArticleAsymmetricAdvantage() {
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

  const articleTitle = "The Asymmetric Advantage: Why Information Imbalance Is Your Greatest Strategic Asset"
  const articleDescription = "How leading companies win not through information access, but through superior interpretation. Featuring real case studies: B2B SaaS 67% win rate, Healthcare 40% faster profitability, and Professional Services 55% revenue increase through proprietary intelligence frameworks."
  const articleUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        const twitterText = `${articleTitle}\n\n${articleDescription}\n\nRead the full analysis from @BrightPathConsulting 👇\n\n#Strategy #CompetitiveAdvantage #BusinessIntelligence #MarketAnalysis #StrategicThinking`
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(articleUrl)}`
        break
      case 'linkedin':
        const linkedInText = `${articleTitle}\n\n${articleDescription}\n\nKey Findings:\n• B2B SaaS: 67% competitive win rate through behavioral data analysis\n• Healthcare: 40% faster profitability via unconventional signal detection\n• Professional Services: 55% revenue increase from cross-industry insights\n• Retail: 12-18 month early warning through network intelligence\n\nRead the complete analysis:`
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&summary=${encodeURIComponent(linkedInText)}`
        break
      case 'facebook':
        const facebookText = `${articleTitle}\n\n${articleDescription}\n\nDiscover how proprietary intelligence frameworks create unassailable competitive advantages through real case studies from BrightPath Consulting.`
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
                MARKETS
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                Nov 20, 2025
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                6 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-tight">
              The Asymmetric Advantage: Why Information Imbalance Is Your Greatest Strategic Asset
            </h1>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-12">
              <img
                src="/photo-1486312338219-ce68d2c6f44d.avif"
                alt="The Asymmetric Advantage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-8">Introduction: When Information Becomes Intelligence</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In the summer of 2023, two competitors bid for the same mid-market acquisition target. Company A offered $340M based on standard financial multiples and public information. Company B offered $285M—15% less—and won.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  How?
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Company B had spent six months cultivating relationships with the target's key customers, understanding their pain points, and mapping the competitive landscape in granular detail. They knew which revenue streams were vulnerable, which customer relationships were at risk, and which operational inefficiencies were hidden in the financials. They knew the business better than the business knew itself.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  More importantly, they knew something the seller didn't: three of the target's largest customers were planning to consolidate suppliers within 18 months. That "stable" revenue base representing 40% of EBITDA was about to evaporate.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Company A paid for reported earnings. Company B paid for actual value. Six months after the acquisition, when those customer contracts failed to renew, Company A's "bargain" became a write-down. Company B's "overpay" became a case study in value creation through strategic repositioning.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This is the asymmetric advantage. It's not about having more information—it's about having <em>better</em> information. More precisely, it's about understanding what others don't, seeing what others miss, and acting on insights before they become obvious.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  In markets where information appears democratized—where everyone has access to the same data, research, and analysis—competitive advantage increasingly comes from proprietary insight, unconventional perspective, and the discipline to look where others aren't looking.
                </p>
              </div>

              {/* Section 1: The Information Paradox */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Information Paradox</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We live in an era of unprecedented information abundance. Every company has access to:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Real-time market data and analytics</li>
                  <li className="pl-2">Comprehensive competitive intelligence tools</li>
                  <li className="pl-2">Industry research and expert networks</li>
                  <li className="pl-2">Customer data and behavioral insights</li>
                  <li className="pl-2">AI-powered analysis and pattern recognition</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  And yet, most companies make remarkably similar strategic decisions. They chase the same opportunities, deploy the same playbooks, and arrive at the same conclusions.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Why? Because they're all looking at the same information through the same lens.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>The paradox:</strong> information abundance has created information conformity. When everyone has access to everything, differentiation comes not from access but from interpretation—from asking different questions, looking in unconventional places, and connecting dots others don't see.
                </p>
              </div>

              {/* Section 2: The Four Dimensions */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Four Dimensions of Asymmetric Advantage</h2>

                <h3 className="text-3xl font-serif text-navy mb-6">1. Proprietary Data Creation</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The conventional approach:</strong> Rely on publicly available data, industry reports, and purchased research.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The asymmetric approach:</strong> Generate proprietary data that competitors can't access or replicate.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case Example: B2B SaaS Repositioning</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A B2B SaaS client came to us facing commoditization pressure. Their product was strong, but competitors were matching features and undercutting price. Standard market research suggested their value proposition was sound—good product, fair pricing, decent customer satisfaction.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We took a different approach. Instead of surveying customers about satisfaction, we analyzed their actual usage patterns. We instrumented their platform to understand not what customers said they valued, but what they actually used.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The findings were striking:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Features customers rated as "most important" in surveys were used less than 10% of the time</li>
                  <li className="pl-2">Features customers rarely mentioned were being used daily and correlating with 80% lower churn</li>
                  <li className="pl-2">Power users (top 20% by engagement) generated 4x the lifetime value but represented only 12% of acquisition spend</li>
                  <li className="pl-2">The workflow creating the most value wasn't the intended use case at all—customers had discovered an unintended application</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This proprietary usage data revealed something competitors' surveys couldn't: the real value proposition was completely different from the marketed one.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We repositioned the entire company around the high-engagement use case, rebuilt the product roadmap around power user workflows, and reallocated marketing spend toward segments demonstrating early power user behaviors.
                </p>

                <div className="bg-gold/10 border-l-4 border-gold p-8 my-8">
                  <p className="text-xl text-gray-800 leading-relaxed mb-4">
                    <strong>Results within 12 months:</strong>
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2 ml-6">
                    <li className="pl-2">Pipeline increased 34% despite 20% reduction in marketing spend</li>
                    <li className="pl-2">Average deal size increased 60% by focusing on high-value segments</li>
                    <li className="pl-2">Churn decreased 45% by setting proper expectations and delivering to actual use cases</li>
                    <li className="pl-2">Competitive win rate improved from 40% to 67%</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Don't ask customers what they want. Observe what they do. Behavioral data beats survey data every time.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">2. Unconventional Signal Detection</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The conventional approach:</strong> Monitor standard industry metrics, competitor announcements, and market trends.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The asymmetric approach:</strong> Identify leading indicators that predict market movements before they're obvious.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case Example: Healthcare Provider Market Entry</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A healthcare provider was evaluating geographic expansion opportunities. Standard analysis suggested targeting major metropolitan areas with demographic growth, high income levels, and underserved markets.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We looked at different signals:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Medicare Advantage penetration rates (indicating consumer sophistication and willingness to switch)</li>
                  <li className="pl-2">Telemedicine adoption curves (indicating openness to healthcare innovation)</li>
                  <li className="pl-2">Direct primary care clinic density (indicating market dissatisfaction with traditional models)</li>
                  <li className="pl-2">Corporate employer concentrations (indicating B2B partnership opportunities)</li>
                  <li className="pl-2">Local health system merger activity (indicating competitive disruption opportunities)</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  These unconventional indicators pointed to mid-sized markets our client had dismissed—cities like Boise, Raleigh, and Austin that didn't rank highly on traditional metrics but showed strong signals for the specific business model our client was deploying.
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 p-8 my-8">
                  <p className="text-xl text-gray-800 font-medium leading-relaxed">
                    The result: entry into markets 18 months before competitors recognized the opportunity, establishing market leadership before competition intensified, and achieving profitability 40% faster than projections based on "optimal" markets.
                  </p>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> The best opportunities are often invisible to standard analysis. Develop proprietary frameworks for signal detection that competitors aren't monitoring.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">3. Information Arbitrage</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The conventional approach:</strong> Compete within your defined industry using industry-standard benchmarks and best practices.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The asymmetric approach:</strong> Import insights and strategies from adjacent industries facing similar challenges earlier.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case Example: Professional Services Firm Transformation</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A mid-sized professional services firm faced commoditization pressure. Clients were demanding lower fees, projects were becoming transactional, and differentiation was eroding.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Instead of studying other professional services firms (all facing the same pressures), we studied industries that had already navigated this transition:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2"><strong>Software industry:</strong> The shift from project-based custom development to productized platforms</li>
                  <li className="pl-2"><strong>Manufacturing:</strong> The transition from custom builds to mass customization</li>
                  <li className="pl-2"><strong>Hospitality:</strong> The evolution from personalized service to systematized experience delivery</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  These industries had developed playbooks for maintaining premium positioning while increasing efficiency and scalability:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Productization of common deliverables</li>
                  <li className="pl-2">Modular service architectures allowing customization within standardized frameworks</li>
                  <li className="pl-2">Technology-enabled delivery reducing labor intensity</li>
                  <li className="pl-2">Outcome-based pricing decoupling value from hours</li>
                  <li className="pl-2">Capability-building models creating long-term client relationships</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We adapted these strategies to professional services context:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Developed proprietary methodologies and tools (productizing expertise)</li>
                  <li className="pl-2">Created modular service offerings that could be configured for client needs</li>
                  <li className="pl-2">Implemented technology platforms that automated routine analysis</li>
                  <li className="pl-2">Shifted from hourly billing to value-based pricing</li>
                  <li className="pl-2">Designed advisory retainers that generated recurring revenue</li>
                </ul>

                <div className="bg-navy/5 border-l-4 border-navy p-8 my-8">
                  <p className="text-xl text-gray-800 leading-relaxed mb-4">
                    <strong>Results over 24 months:</strong>
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2 ml-6">
                    <li className="pl-2">Revenue per consultant increased 55%</li>
                    <li className="pl-2">Project margins improved from 28% to 42%</li>
                    <li className="pl-2">Client retention increased from 62% to 85%</li>
                    <li className="pl-2">45% of revenue became recurring vs. 100% project-based</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Your industry's future exists in adjacent industries' present. Import proven strategies before competitors recognize the pattern.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">4. Network Intelligence</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The conventional approach:</strong> Rely on direct customer feedback and formal market research.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The asymmetric approach:</strong> Build intelligence networks that provide early warning signals and nuanced market understanding.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case Example: Retail Chain Strategic Repositioning</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A specialty retail chain was experiencing declining foot traffic but customer satisfaction scores remained high. Conventional analysis suggested the business was healthy—good products, happy customers, strong brand.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We built an intelligence network across the ecosystem:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2"><strong>Landlords and property managers:</strong> Provided insights on lease negotiations, foot traffic patterns, and competitor activity across multiple properties</li>
                  <li className="pl-2"><strong>Adjacent retailers:</strong> Shared customer shopping behaviors and cross-shopping patterns</li>
                  <li className="pl-2"><strong>Suppliers:</strong> Revealed which retailers were growing orders vs. declining (6-month leading indicator)</li>
                  <li className="pl-2"><strong>Former employees:</strong> Provided unfiltered perspectives on operational realities</li>
                  <li className="pl-2"><strong>Industry journalists:</strong> Shared off-the-record insights on competitive strategies</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  This network revealed what surveys missed:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Customers were "satisfied" but shopping less frequently (behavior vs. sentiment divergence)</li>
                  <li className="pl-2">Foot traffic decline was masked by temporary factors that were reversing</li>
                  <li className="pl-2">Three competitors were testing formats that would intensify pressure within 18 months</li>
                  <li className="pl-2">Suppliers were seeing order increases from online competitors in the category</li>
                  <li className="pl-2">The brand's core customer demographic was aging out faster than new customers were entering</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The intelligence network provided 12-18 months of advance warning on trends that would eventually show up in financial statements—when it would be too late for proactive response.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Armed with these insights, we helped the client:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Accelerate e-commerce investment (18 months ahead of original timeline)</li>
                  <li className="pl-2">Reposition brand to appeal to younger demographic</li>
                  <li className="pl-2">Pilot experiential retail concepts to drive foot traffic</li>
                  <li className="pl-2">Optimize real estate portfolio based on landlord intelligence</li>
                  <li className="pl-2">Develop partnerships with complementary brands to share customer acquisition costs</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>The principle:</strong> The most valuable information doesn't come from surveys and reports. It comes from systematic relationship-building across your business ecosystem.
                </p>
              </div>

              {/* Section 3: Practical Framework */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">Building Your Asymmetric Advantage: A Practical Framework</h2>

                <h3 className="text-2xl font-serif text-navy mb-4">Step 1: Map Your Information Landscape</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Audit your current information sources:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">What data are you collecting?</li>
                  <li className="pl-2">What analysis are you conducting?</li>
                  <li className="pl-2">What insights are you generating?</li>
                  <li className="pl-2">Where are your blind spots?</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Identify information commonalities:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">What sources do all competitors access?</li>
                  <li className="pl-2">What analysis frameworks are industry-standard?</li>
                  <li className="pl-2">What assumptions are universally shared?</li>
                  <li className="pl-2">Where is everyone looking?</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Find the white space:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">What questions aren't being asked?</li>
                  <li className="pl-2">What data isn't being collected?</li>
                  <li className="pl-2">What perspectives are missing?</li>
                  <li className="pl-2">Where is nobody looking?</li>
                </ul>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-12">Step 2: Develop Proprietary Intelligence Capabilities</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Create unique data assets:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">Instrument your products/services to capture behavioral data</li>
                  <li className="pl-2">Develop customer insight programs that go beyond satisfaction surveys</li>
                  <li className="pl-2">Build scenario modeling capabilities that stress-test conventional wisdom</li>
                  <li className="pl-2">Establish systematic competitor intelligence beyond public information</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Cultivate information networks:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">Identify ecosystem participants with valuable perspectives</li>
                  <li className="pl-2">Develop systematic relationship-building protocols</li>
                  <li className="pl-2">Create value exchange frameworks (what you offer in return for insights)</li>
                  <li className="pl-2">Build trust through consistency and confidentiality</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Invest in analytical differentiation:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">Hire for unconventional backgrounds and perspectives</li>
                  <li className="pl-2">Develop proprietary analytical frameworks</li>
                  <li className="pl-2">Challenge assumptions systematically</li>
                  <li className="pl-2">Reward contrarian thinking that proves correct</li>
                </ul>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-12">Step 3: Act on Asymmetric Insights</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Develop conviction:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">Distinguish between weak signals and strong patterns</li>
                  <li className="pl-2">Size the opportunity/risk quantitatively</li>
                  <li className="pl-2">Identify trigger points for action</li>
                  <li className="pl-2">Build confidence through triangulation</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Move before consensus:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">Accept that acting on unique insights feels risky (because it is)</li>
                  <li className="pl-2">Size initial bets appropriately to manage risk</li>
                  <li className="pl-2">Build credibility through small wins before large bets</li>
                  <li className="pl-2">Maintain discipline when markets don't immediately validate</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Create feedback loops:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-2 ml-6">
                  <li className="pl-2">Measure outcomes against predictions</li>
                  <li className="pl-2">Learn from both successes and failures</li>
                  <li className="pl-2">Refine intelligence gathering based on what proves predictive</li>
                  <li className="pl-2">Continuously improve analytical models</li>
                </ul>
              </div>

              {/* Section 4: Discipline */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Discipline of Divergent Thinking</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The asymmetric advantage requires intellectual courage—the willingness to:
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">Think differently when thinking the same is easier</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Consensus feels safe. Contrarian positions feel risky. But consensus opportunities are competed away before you arrive.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4">Look where others aren't looking</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The best insights come from unconventional sources. Talk to people outside your industry. Study adjacent markets. Question fundamental assumptions.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4">Act on conviction when evidence is incomplete</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Perfect information comes with perfect competition. Asymmetric advantage requires acting when you see patterns others don't—before they're obvious.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4">Accept being wrong sometimes</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Not every unconventional insight proves correct. Build a portfolio of bets. Learn from failures. Refine your models.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4">Resist the pull of conventional wisdom</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Markets punish short-term divergence from consensus. Maintain discipline and conviction when your insights haven't yet been validated.
                </p>
              </div>

              {/* Section 5: Better Questions */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Competitive Moat of Better Questions</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  In our work across industries—from B2B SaaS to healthcare to retail to professional services—the pattern is consistent. Competitive advantage doesn't come from better answers to standard questions. It comes from better questions that others aren't asking.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-gray-300 pl-6">
                    <p className="text-lg text-gray-600 mb-2">Standard question: "How satisfied are our customers?"</p>
                    <p className="text-lg text-navy font-medium">Better question: "What behaviors predict which customers will generate the most lifetime value?"</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <p className="text-lg text-gray-600 mb-2">Standard question: "What markets are growing fastest?"</p>
                    <p className="text-lg text-navy font-medium">Better question: "What markets show early signals that predict growth before it's obvious?"</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <p className="text-lg text-gray-600 mb-2">Standard question: "What are our competitors doing?"</p>
                    <p className="text-lg text-navy font-medium">Better question: "What are companies in adjacent industries doing that will eventually disrupt our industry?"</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <p className="text-lg text-gray-600 mb-2">Standard question: "What do customers say they want?"</p>
                    <p className="text-lg text-navy font-medium">Better question: "What do customer behaviors reveal about unarticulated needs?"</p>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  The asymmetric advantage is ultimately about the discipline of divergent thinking—consistently, systematically, rigorously.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-8">Conclusion: Information as Strategic Weapon</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In markets where everyone has access to the same information, competitive advantage comes from:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Creating proprietary data that competitors can't access</li>
                  <li className="pl-2">Detecting signals that predict trends before they're obvious</li>
                  <li className="pl-2">Importing insights from adjacent contexts before others recognize the pattern</li>
                  <li className="pl-2">Cultivating intelligence networks that provide nuanced, early-warning understanding</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This is the asymmetric advantage. Not information superiority through access, but information superiority through interpretation, synthesis, and action.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The companies winning in the next decade won't be those with the most data. They'll be those asking the best questions, looking in the most unconventional places, and acting on insights before they become consensus.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The asymmetric advantage isn't given. It's built—through systematic intelligence gathering, analytical rigor, intellectual courage, and the discipline to act on conviction when others are still seeking consensus.
                </p>
                <p className="text-2xl font-serif text-navy leading-relaxed italic">
                  What questions are you asking that your competitors aren't?
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-navy to-navy/90 text-white p-12 rounded-sm mb-16">
                <h3 className="text-3xl font-serif mb-6">Ready to develop your asymmetric advantage?</h3>
                <p className="text-xl leading-relaxed mb-8">
                  Our Strategic Intelligence Framework helps you identify blind spots, develop proprietary insights, and build competitive advantages based on information asymmetry.
                </p>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-sm font-medium text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Schedule a Confidential Strategy Session
                </button>
              </div>

              {/* Share Section */}
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

              {/* Author Bio */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <p className="text-sm text-gray-600 uppercase tracking-widest mb-4">About BrightPath Consulting</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We help organizations develop asymmetric competitive advantages through proprietary intelligence frameworks, unconventional market analysis, and strategic repositioning. Our approach combines deep industry expertise with cross-sector insights to identify opportunities others miss.
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
