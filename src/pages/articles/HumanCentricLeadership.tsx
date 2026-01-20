import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Bookmark, Share2, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { ContactModal } from '../../components/ContactModal'

export function ArticleHumanCentricLeadership() {
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

  const articleTitle = "The Renaissance of Human-Centric Leadership: Rediscovering Empathy in the Age of Algorithms"
  const articleDescription = "How empathy became the most valuable leadership competency in an AI-driven world. Featuring real case studies: 40-50% lower turnover, 2.3x more breakthrough innovations, 21% higher profitability, and 42% better crisis resilience through human-centric leadership."
  const articleUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        const twitterText = `${articleTitle}\n\n${articleDescription}\n\nRead the full analysis from @BrightPathConsulting 👇\n\n#Leadership #Empathy #HumanCentricLeadership #OrganizationalCulture #FutureOfWork`
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(articleUrl)}`
        break
      case 'linkedin':
        const linkedInText = `${articleTitle}\n\n${articleDescription}\n\nKey Findings:\n• 40-50% lower voluntary turnover with empathetic leaders\n• 2.3x more breakthrough innovations\n• 21% higher profitability in top quartile for empathetic leadership\n• 42% more likely to maintain revenue during crisis\n\nRead the complete analysis:`
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&summary=${encodeURIComponent(linkedInText)}`
        break
      case 'facebook':
        const facebookText = `${articleTitle}\n\n${articleDescription}\n\nDiscover why empathy is the most valuable leadership competency in an AI-driven world through compelling research and real case studies from BrightPath Consulting.`
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
                LEADERSHIP
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                Dec 15, 2025
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-tight">
              The Renaissance of Human-Centric Leadership: Rediscovering Empathy in the Age of Algorithms
            </h1>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-12">
              <img
                src="/photo-1507679799987-c73779587ccf.avif"
                alt="The Renaissance of Human-Centric Leadership"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-8">The Paradox of Our Time</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We live in an era of unprecedented technological sophistication. AI systems can predict market movements, optimize supply chains, and process millions of data points in microseconds. Algorithms can identify patterns invisible to human perception. Automation handles tasks with precision no human could match.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  And yet, the most critical business challenges of our time—retaining top talent, fostering innovation, navigating uncertainty, building organizational resilience—remain stubbornly human problems requiring human solutions.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In boardrooms across the world, a quiet revolution is underway. After decades of viewing leadership through the lens of metrics, efficiency, and optimization, a fundamental realization is emerging: the most valuable leadership competency isn't analytical prowess or strategic vision. It's empathy.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This isn't sentimentality disguised as strategy. It's recognition of a profound truth that our data is finally confirming: in an AI-driven world, the most valuable asset remains the human touch.
                </p>
              </div>

              {/* Section 1: The Limits */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Limits of Algorithmic Leadership</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  For the past two decades, leadership development has been dominated by a particular philosophy: data-driven decision making, KPI optimization, and systematic process improvement. The ideal leader was essentially a high-performing algorithm in human form—objective, analytical, metrics-focused, emotionally neutral.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This model worked reasonably well in stable, predictable environments where success meant executing known playbooks efficiently. But it's catastrophically failing in our current reality.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">Why algorithmic leadership is breaking down:</h3>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">The Innovation Crisis</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Our client work reveals a disturbing pattern: companies with the most sophisticated analytics and process optimization are often the least innovative.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  A Fortune 500 technology client we worked with had extraordinary operational metrics:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>98.2% on-time project delivery</li>
                  <li>92% resource utilization</li>
                  <li>Industry-leading efficiency scores</li>
                  <li>Comprehensive dashboards tracking 200+ KPIs</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  They also had:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Zero major product innovations in 4 years</li>
                  <li>34% turnover among top engineering talent</li>
                  <li>Declining market share to more innovative competitors</li>
                  <li>Employee engagement scores in the 23rd percentile</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  What happened? Leadership had optimized for execution at the expense of exploration. Every decision was data-driven, every project justified by ROI projections, every risk quantified and minimized.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Innovation requires tolerating ambiguity, funding ideas without proven business cases, allowing teams to pursue hunches, and accepting that most experiments fail. None of these behaviors are supported by algorithmic leadership frameworks.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  The company had become extraordinarily good at doing what they'd always done. They'd lost the ability to do anything new.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">The Retention Crisis</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Another client—a high-growth SaaS company—faced catastrophic turnover. Exit interviews revealed a pattern:
                </p>
                <div className="bg-gray-50 border-l-4 border-navy/20 p-6 my-8 space-y-4">
                  <p className="text-lg text-gray-700 italic">"I don't feel seen as a person, just a resource to be optimized."</p>
                  <p className="text-lg text-gray-700 italic">"Every conversation is about metrics and targets, never about growth or purpose."</p>
                  <p className="text-lg text-gray-700 italic">"My manager can tell you my utilization rate but has no idea what motivates me."</p>
                  <p className="text-lg text-gray-700 italic">"I'm a line item on a dashboard, not a human being with aspirations."</p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Leadership had become transactional. Employees were "human resources" to be allocated efficiently, not individuals with unique talents, motivations, and developmental needs.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  The irony: the company's retention crisis cost 3-4x an employee's annual salary for every departure—recruiting costs, onboarding time, lost productivity, knowledge loss, and impact on team morale. The "efficient" approach to people management was economically catastrophic.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">The Meaning Crisis</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Perhaps most fundamentally: people aren't motivated by dashboards and KPIs. They're motivated by purpose, belonging, growth, and meaning.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Algorithmic leadership optimizes for output. Human-centric leadership optimizes for why people care about the output in the first place.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  This isn't soft or touchy-feely. It's the hard reality that sustainable high performance requires intrinsic motivation, and intrinsic motivation requires human connection, purpose, and meaning.
                </p>
              </div>

              {/* Section 2: What Human-Centric Leadership Means */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">What Human-Centric Leadership Actually Means</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Let's be precise about what we mean by human-centric leadership, because the term gets misused:
                </p>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">What it's NOT:</h3>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Being "nice" or conflict-avoidant</li>
                  <li>Lowering standards or avoiding difficult decisions</li>
                  <li>Prioritizing comfort over performance</li>
                  <li>Sentimentality replacing rigor</li>
                  <li>Abandoning metrics and data</li>
                </ul>

                <h3 className="text-2xl font-serif text-navy mb-4 mt-8">What it IS:</h3>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li><strong>Seeing people fully:</strong> Understanding that every employee is a complete human being with unique motivations, strengths, challenges, and aspirations—not just a role or skill set</li>
                  <li><strong>Leading with empathy:</strong> Genuinely understanding others' perspectives, experiences, and emotions—then using that understanding to make better decisions</li>
                  <li><strong>Creating meaning:</strong> Connecting individual work to larger purpose and helping people see how their contributions matter</li>
                  <li><strong>Developing people:</strong> Investing in growth and potential, not just extracting current productivity</li>
                  <li><strong>Building psychological safety:</strong> Creating environments where people can take risks, voice concerns, admit mistakes, and bring their authentic selves</li>
                  <li><strong>Balancing humanity with accountability:</strong> High standards and compassionate support aren't opposites—they're complements</li>
                </ul>
              </div>

              {/* Section 3: Business Case */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Business Case: Why Empathy Wins</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Let's address the skeptic's question: Does this actually drive business results? Or is it feel-good HR theater?
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The data is increasingly clear: human-centric leadership dramatically outperforms algorithmic leadership across every meaningful business metric.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">Innovation and Creativity</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Companies with high empathy leadership (measured by validated assessment instruments):
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-8 my-8">
                  <ul className="text-lg text-gray-800 leading-relaxed space-y-3">
                    <li><strong>2.3x</strong> more likely to develop breakthrough innovations</li>
                    <li><strong>60%</strong> higher R&D productivity (innovations per dollar invested)</li>
                    <li><strong>45%</strong> faster time-to-market for new products</li>
                    <li><strong>3.1x</strong> more employee-initiated innovation ideas</li>
                  </ul>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  Why? Innovation requires psychological safety to propose unconventional ideas, tolerance for productive failure, intrinsic motivation to solve hard problems, and collaborative environments where diverse perspectives are valued. All require empathetic leadership.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">Talent Retention and Engagement</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Companies with empathetic leaders:
                </p>
                <div className="bg-gold/10 border-l-4 border-gold p-8 my-8">
                  <ul className="text-lg text-gray-800 leading-relaxed space-y-3">
                    <li><strong>40-50%</strong> lower voluntary turnover</li>
                    <li><strong>34%</strong> higher employee engagement scores</li>
                    <li><strong>2.5x</strong> higher internal mobility and promotion rates</li>
                    <li><strong>57%</strong> better performance review ratings of managers</li>
                  </ul>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>Economic impact:</strong> For a 1,000-person company with $100K average salary and 20% turnover, improving retention by 40% saves $8-12M annually in turnover costs alone—not counting productivity gains, institutional knowledge retention, and morale benefits.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">Financial Performance</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Companies in top quartile for empathetic leadership (multi-year analysis across industries):
                </p>
                <div className="bg-navy/5 border-l-4 border-navy p-8 my-8">
                  <ul className="text-lg text-gray-800 leading-relaxed space-y-3">
                    <li><strong>21%</strong> higher profitability</li>
                    <li><strong>17%</strong> higher productivity per employee</li>
                    <li><strong>29%</strong> higher customer satisfaction scores</li>
                    <li><strong>2.1x</strong> higher total shareholder returns over 5-year periods</li>
                  </ul>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  This isn't correlation without causation. Longitudinal studies show that improvements in leadership empathy precede improvements in business performance, with effects compounding over 2-3 year periods.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">Crisis Resilience</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The ultimate test: how organizations perform under extreme stress.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  During the 2020 pandemic and subsequent disruptions, companies with human-centric leadership cultures demonstrably outperformed:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>42% more likely to maintain or grow revenue during crisis periods</li>
                  <li>67% better employee retention during restructuring</li>
                  <li>3.4x faster operational recovery post-disruption</li>
                  <li>56% higher adaptability scores (ability to pivot business models)</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Why? Crisis requires trust, transparency, collective effort, and willingness to go above-and-beyond. These emerge from strong human connections and empathetic leadership, not from transactional management relationships.
                </p>
              </div>

              {/* Section 4: Five Practices */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Five Practices of Human-Centric Leaders</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  Based on our work with organizations transforming their leadership cultures, we've identified five core practices that distinguish human-centric leaders:
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6">Practice 1: Deep Listening</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Algorithmic leaders listen for:</strong> Information to make decisions, confirmation of assumptions, data points to track.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Human-centric leaders listen for:</strong> Understanding, unspoken concerns, emotional subtext, what's not being said.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case example:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A technology executive we coached—let's call him David—was technically brilliant but struggled with retention. His direct reports described him as "smart but distant."
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We shadowed his one-on-one meetings. Pattern we observed:
                </p>
                <div className="bg-gray-50 p-6 rounded-sm mb-6">
                  <p className="text-lg text-gray-700 mb-2"><strong>Employee:</strong> "The project is on track, but the team is feeling pretty burned out from the pace."</p>
                  <p className="text-lg text-gray-700"><strong>David:</strong> "Okay, so we're on track. Good. Let's discuss Q3 priorities..."</p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  He heard "on track" and moved on. He missed "team is burned out"—the real message.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  We worked with David on active listening. Revised approach:
                </p>
                <div className="bg-green-50 p-6 rounded-sm mb-6">
                  <p className="text-lg text-gray-700 mb-2"><strong>Employee:</strong> "The project is on track, but the team is feeling pretty burned out from the pace."</p>
                  <p className="text-lg text-gray-700 mb-4"><strong>David:</strong> "I hear the project is progressing, but I'm more concerned about what you said about burnout. Tell me more about that. What's driving it? How is it showing up? What would help?"</p>
                  <p className="text-lg text-gray-700 mb-2"><strong>Employee:</strong> [long pause, surprised to be asked] "Honestly, we've been shipping features at an unsustainable pace. Quality is suffering, people are working weekends, and morale is dropping. I'm worried about what happens after launch."</p>
                  <p className="text-lg text-gray-700"><strong>David:</strong> "I appreciate you being direct about this. It sounds like we need to recalibrate our timeline and expectations. Help me understand what a sustainable pace looks like..."</p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  This conversation led to:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Adjusting timeline to reduce crunch pressure</li>
                  <li>Adding resources to critical path items</li>
                  <li>Creating recovery time post-launch</li>
                  <li>Improving planning processes to avoid future burnout cycles</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The outcome: Six months later, David's team had highest engagement scores in the organization, lowest turnover, and delivered higher quality work despite slightly extended timelines.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Deep listening means hearing what people actually mean, not just what they literally say. It requires presence, curiosity, and genuine interest in understanding others' experiences.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Practice 2: Vulnerability and Authenticity</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Algorithmic leaders project:</strong> Confidence, certainty, having all the answers, appearing invulnerable.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Human-centric leaders share:</strong> Uncertainty when it exists, mistakes they've made, challenges they're facing, their own humanity.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Why this matters:
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Vulnerability from leaders creates psychological safety for teams. If the leader can admit uncertainty and mistakes, others can too. This enables:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Honest risk assessment (not just optimistic projections)</li>
                  <li>Learning from failures (not hiding them)</li>
                  <li>Asking for help (not pretending competence)</li>
                  <li>Innovation (which requires tolerating not knowing)</li>
                </ul>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case example:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A CEO client—we'll call her Maria—led a company facing significant market headwinds. The conventional CEO playbook would be: project confidence, emphasize the strategy, rally the troops, show no doubt.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Maria took a different approach. In an all-hands meeting, she said:
                </p>
                <div className="bg-navy/5 border-l-4 border-navy p-6 my-8">
                  <p className="text-lg text-gray-700 italic">
                    "I want to be honest with you. Our market is changing faster than we anticipated. Some of our assumptions about the next 18 months were wrong. I don't have all the answers about how we navigate this. What I do have is confidence in this team, commitment to figuring it out together, and transparency about what I know and what I don't know. Here's what we're seeing... here's what we're uncertain about... here's how we're going to make decisions in ambiguity... and here's what I need from all of you."
                  </p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The reaction? Not panic—relief.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Employees knew the market was challenging. Maria's honesty validated what they were experiencing and seeing. Her vulnerability created space for honest dialogue about the challenges rather than pretending problems didn't exist.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The results over the following 12 months:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Innovation initiatives increased 3x (people felt safe proposing new ideas)</li>
                  <li>Cross-functional collaboration improved dramatically (silos broke down when everyone acknowledged shared uncertainty)</li>
                  <li>Employee engagement increased despite challenging business conditions</li>
                  <li>The company successfully pivoted its business model with broad organizational support</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Vulnerability isn't weakness—it's strength. It creates trust, psychological safety, and permission for others to bring their authentic selves.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Practice 3: Individualized Development</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Algorithmic leaders treat employees as:</strong> Interchangeable resources with skill sets.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Human-centric leaders understand employees as:</strong> Unique individuals with distinct strengths, motivations, and developmental needs.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The shift:
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-2">
                  <strong>Stop asking:</strong> "What does this role require?"
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  <strong>Start asking:</strong> "What does this individual need to thrive and grow?"
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Implementation:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A financial services client we worked with transformed their talent development approach:
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-red-50 p-6 rounded-sm">
                    <h5 className="text-xl font-semibold text-navy mb-4">Old model:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• Standardized training programs by level/role</li>
                      <li>• Annual performance reviews with ratings and rankings</li>
                      <li>• Generic development plans ("improve communication skills")</li>
                      <li>• Promotion criteria based primarily on tenure</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-sm">
                    <h5 className="text-xl font-semibold text-navy mb-4">New model:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• Individualized development conversations exploring motivations</li>
                      <li>• Quarterly check-ins focused on growth, not just performance</li>
                      <li>• Customized development paths leveraging individual strengths</li>
                      <li>• Projects aligned with personal aspirations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The results:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Internal promotion rate increased 60%</li>
                  <li>External recruiting costs decreased 45%</li>
                  <li>Employee engagement increased 38 points</li>
                  <li>Performance improved across metrics as people worked in areas of strength and interest</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The insight:</strong> People don't develop in standardized ways. Human-centric leaders invest time understanding each person's unique potential and creating conditions for it to flourish.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Practice 4: Meaning-Making</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Algorithmic leaders communicate:</strong> Tasks, deadlines, metrics, and expectations.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Human-centric leaders communicate:</strong> Purpose, impact, significance, and "why this matters."
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The difference:
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Compare these two ways of assigning work:
                </p>
                <div className="bg-red-50 p-6 rounded-sm mb-4">
                  <p className="text-lg font-semibold text-navy mb-2">Algorithmic approach:</p>
                  <p className="text-base text-gray-700 italic">"I need you to analyze our customer support ticket data from Q3 and create a report with key metrics and trends. Due Friday."</p>
                </div>
                <div className="bg-green-50 p-6 rounded-sm mb-8">
                  <p className="text-lg font-semibold text-navy mb-2">Human-centric approach:</p>
                  <p className="text-base text-gray-700 italic">"We're seeing some concerning patterns in customer satisfaction, and I think we're missing something important that our support data might reveal. I'd like your help analyzing Q3 ticket data to understand what our customers are really struggling with. This could shape our entire product roadmap for next year and help us serve customers better. Would you be willing to dig into this? I'm thinking Friday for initial findings, but let me know if you need more time to do it well."</p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Same task. Radically different framing. The second version provides:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li><strong>Context:</strong> Why this matters</li>
                  <li><strong>Impact:</strong> How it connects to larger goals</li>
                  <li><strong>Agency:</strong> Respect for the person's judgment</li>
                  <li><strong>Meaning:</strong> Invitation to contribute to something significant</li>
                </ul>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case example:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A healthcare client was struggling with physician burnout. Doctors were increasingly viewing their work as "checking boxes" and meeting documentation requirements rather than healing patients.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Leadership intervention:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Weekly huddles starting with patient impact stories ("Here's how our care changed someone's life this week")</li>
                  <li>Reconnecting clinical protocols to patient outcomes</li>
                  <li>Reducing administrative burden where possible</li>
                  <li>Creating space for physicians to discuss meaning and purpose in their work</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Results:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Burnout scores decreased 34%</li>
                  <li>Patient satisfaction increased 28 points</li>
                  <li>Quality metrics improved across the board</li>
                  <li>Physician retention improved dramatically</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> People aren't motivated by tasks—they're motivated by purpose. Leaders create meaning by connecting daily work to larger impact and significance.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Practice 5: Courageous Compassion</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Algorithmic leaders think compassion means:</strong> Being soft, avoiding difficult conversations, lowering standards.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Human-centric leaders understand compassion means:</strong> Caring enough to have hard conversations, holding high standards because you believe in people's potential, supporting people through challenges rather than abandoning them.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The nuance: Compassion without accountability is enabling. Accountability without compassion is harsh. Courageous compassion is both—simultaneously caring deeply about people AND holding them to high standards.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case example:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A leader we coached—we'll call him James—had a high-performing team member who was becoming toxic. Sarah was brilliant technically but increasingly dismissive of colleagues, creating tension in the team.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Algorithmic approach would be: Document performance issues, follow HR process, manage out if behavior doesn't improve. Efficient, clean, transactional.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  James' human-centric approach:
                </p>
                <div className="bg-navy/5 border-l-4 border-navy p-6 my-8">
                  <p className="text-lg text-gray-700 italic">
                    "Sarah, I need to have a difficult conversation with you because I care about you and this team. You're exceptionally talented—your technical skills are among the best I've seen. And I'm observing behavior patterns that concern me. In the last three meetings, you've interrupted colleagues, dismissed their ideas without consideration, and created an environment where people are hesitant to speak up. This isn't who I know you to be, and it's impacting the team. I want to understand what's happening for you and how we can address this together. But I also need to be clear: this behavior has to change. Tell me what's going on."
                  </p>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  This opened a conversation revealing:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Sarah was overwhelmed and stressed from personal challenges</li>
                  <li>She was frustrated by what she perceived as slower pace from others</li>
                  <li>She didn't realize the impact of her behavior</li>
                  <li>She wanted to change but didn't know how</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The intervention:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Temporary workload adjustment during personal crisis</li>
                  <li>Coaching on leadership and communication</li>
                  <li>Clear expectations and accountability for behavioral change</li>
                  <li>Regular check-ins and feedback</li>
                  <li>Support while also maintaining standards</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The outcome:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li>Sarah's behavior transformed over 3 months</li>
                  <li>Team dynamics improved dramatically</li>
                  <li>Sarah became a mentor to junior team members</li>
                  <li>Performance remained high while collaboration improved</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The alternative: Without compassionate intervention, algorithmic leadership would have managed Sarah out. The company would have lost exceptional talent. Sarah would have carried behavioral patterns to her next role. Nobody wins.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>The principle:</strong> Courageous compassion means caring enough to have difficult conversations, investing in people's growth even when it's hard, and believing in potential while holding people accountable.
                </p>
              </div>

              {/* Section 5: Conclusion */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-8">Conclusion: The Most Human-Centric Leadership Is the Most Strategic</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The renaissance of human-centric leadership isn't nostalgia or reaction against technology. It's recognition that in an increasingly automated world, the most valuable and defensible competitive advantages are irreducibly human.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Algorithms can optimize. Only humans can innovate.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Data can inform. Only humans can inspire.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Processes can execute. Only humans can adapt.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Metrics can measure. Only humans can create meaning.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The leaders succeeding in this era understand a profound truth: empathy isn't the opposite of strategic thinking—it's the foundation of it.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Because the most strategic question facing any organization is: How do we create conditions where talented people choose to bring their best selves, commit their discretionary effort, and invest their creativity in our shared mission?
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The answer isn't found in spreadsheets and KPIs. It's found in the quality of human relationships, the depth of trust, the presence of psychological safety, the clarity of purpose, and the authenticity of leadership.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This is the renaissance of human-centric leadership. Not a rejection of data and rigor, but an integration of humanity and excellence.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The future belongs to leaders who understand that in an AI-driven world, the most valuable asset remains the human touch.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The question isn't whether to embrace human-centric leadership. It's how quickly you can transform your leadership culture before your competitors do.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  What kind of leader will you be? And what kind of organization will you build?
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-navy to-navy/90 text-white p-12 rounded-sm mb-16">
                <h3 className="text-3xl font-serif mb-4">Ready to Transform Your Leadership Culture?</h3>
                <p className="text-lg mb-8 text-white/90 leading-relaxed">
                  Our Leadership Development Program helps executives develop the empathy, authenticity, and people-development skills required for human-centric leadership. Schedule a leadership assessment to explore how human-centric leadership can strengthen your organizational culture and business performance.
                </p>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Leadership Assessment
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
                <h4 className="text-xl font-serif text-navy mb-4">About This Article</h4>
                <p className="text-gray-700 leading-relaxed">
                  This piece draws on BrightPath Consulting's experience guiding leadership transformations across technology, healthcare, financial services, and professional services organizations. Our work combines executive coaching, organizational development, and culture transformation to build human-centric leadership capabilities that drive business results.
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
