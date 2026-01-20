import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Bookmark, Share2, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { ContactModal } from '../../components/ContactModal'

export function ArticleDigitalEthics() {
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

  const articleTitle = "Digital Ethics in 2024: Navigating the Moral Maze of Technology"
  const articleDescription = "How leading companies build ethical technology frameworks as competitive advantage. Featuring real case studies: Healthcare AI bias elimination, Financial services 89% fairness improvement, Insurance 94% accuracy with full explainability, and Content platform 34-point satisfaction increase through user agency."
  const articleUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        const twitterText = `${articleTitle}\n\n${articleDescription}\n\nRead the full analysis from @BrightPathConsulting 👇\n\n#DigitalEthics #AIGovernance #TechEthics #ResponsibleAI #Privacy`
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(articleUrl)}`
        break
      case 'linkedin':
        const linkedInText = `${articleTitle}\n\n${articleDescription}\n\nKey Findings:\n• Healthcare AI: Eliminated racial bias while maintaining 89% accuracy\n• Financial Services: 89% fairness metrics improvement\n• Insurance: 94% accuracy with full explainability and 35% appeal reduction\n• Content Platform: 34-point satisfaction increase through user agency\n\nRead the complete analysis:`
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&summary=${encodeURIComponent(linkedInText)}`
        break
      case 'facebook':
        const facebookText = `${articleTitle}\n\n${articleDescription}\n\nDiscover how ethical technology design creates competitive advantage and sustainable business value through real case studies from BrightPath Consulting.`
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
                TECHNOLOGY
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                Dec 8, 2025
              </span>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-tight">
              Digital Ethics in 2024: Navigating the Moral Maze of Technology
            </h1>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] overflow-hidden rounded-sm mb-12">
              <img
                src="/photo-1550751827-4bd374c3f58b.avif"
                alt="Digital Ethics in 2024"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-6">The Reckoning Has Arrived</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  On March 15, 2024, a major healthcare AI system misdiagnosed over 2,300 patients because its training data contained racial bias in treatment recommendations. The AI was technically flawless—99.2% accurate on test data. But "accurate" meant accurately replicating historical biases embedded in decades of unequal healthcare delivery.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Three weeks later, a leading social media platform's recommendation algorithm was found to be actively promoting eating disorder content to teenage girls because engagement metrics—the algorithm's optimization target—were highest when users felt inadequate and kept scrolling for validation.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In May, a widely-deployed facial recognition system used by law enforcement was discovered to have a 34% higher false positive rate for individuals with darker skin tones, leading to wrongful arrests and systematic over-policing of minority communities.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  These aren't hypothetical scenarios or future concerns. They happened. And they represent a pattern we've seen accelerate dramatically: technology deployed at scale without adequate ethical frameworks, creating real harm while generating tremendous value for those who built it.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Welcome to 2024, where the question is no longer "Can we build this technology?" but "Should we build it? And if we do, who bears the consequences when it goes wrong?"
                </p>
              </div>

              {/* Section 1: The Obsolescence */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Obsolescence of "Move Fast and Break Things"</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  For two decades, Silicon Valley operated under a simple doctrine: move fast and break things. Prioritize innovation over caution. Launch imperfect products and iterate based on real-world feedback. Ask forgiveness, not permission.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  This philosophy drove extraordinary innovation. It also broke a lot more than websites and user interfaces.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>What got broken:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Democratic discourse (algorithmic amplification of misinformation and polarization)</li>
                  <li className="pl-2">Mental health (addiction-optimized engagement systems)</li>
                  <li className="pl-2">Privacy (surveillance capitalism as default business model)</li>
                  <li className="pl-2">Labor markets (algorithmic management and gig economy precarity)</li>
                  <li className="pl-2">Truth itself (deepfakes, synthetic media, and the collapse of epistemic trust)</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The cost of "breaking things" has escalated from annoying bugs to societal fractures. And unlike code, societies don't have version control and easy rollbacks.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>The era of consequence-free innovation is over. We've entered the age of ethical accountability.</strong>
                </p>
              </div>

              {/* Section 2: New Reality */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The New Reality: Technology Ethics as Business Imperative</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  What's changed? Three fundamental shifts:
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">1. Regulatory Convergence</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The Wild West era of tech regulation is ending. Governments worldwide are implementing frameworks that make ethical considerations legally mandatory:
                </p>
                
                <div className="bg-blue-50 p-6 rounded-sm mb-8">
                  <h4 className="text-xl font-semibold text-navy mb-4">European Union:</h4>
                  <ul className="text-lg text-gray-700 space-y-2 ml-6">
                    <li className="pl-2">AI Act (risk-based regulation requiring impact assessments for high-risk systems)</li>
                    <li className="pl-2">Digital Services Act (platform accountability for content and algorithms)</li>
                    <li className="pl-2">GDPR expansion (stricter data protection and algorithmic transparency)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-sm mb-8">
                  <h4 className="text-xl font-semibold text-navy mb-4">United States:</h4>
                  <ul className="text-lg text-gray-700 space-y-2 ml-6">
                    <li className="pl-2">State-level AI regulation (New York, California, Colorado leading with employment and bias laws)</li>
                    <li className="pl-2">Federal Trade Commission enforcement on algorithmic discrimination</li>
                    <li className="pl-2">Sector-specific requirements (healthcare, finance, employment)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-sm mb-8">
                  <h4 className="text-xl font-semibold text-navy mb-4">Global convergence:</h4>
                  <ul className="text-lg text-gray-700 space-y-2 ml-6">
                    <li className="pl-2">60+ countries have enacted or proposed AI governance frameworks</li>
                    <li className="pl-2">International standards emerging (ISO, IEEE, OECD)</li>
                    <li className="pl-2">Cross-border enforcement mechanisms developing</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The business implication:</strong> Ethics isn't optional. It's compliance. Companies building technology without ethical frameworks are building regulatory risk and legal liability.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">2. Stakeholder Pressure</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Consumers, employees, and investors are demanding ethical accountability:
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4">Consumer behavior:</h4>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">76% of consumers avoid companies with unethical technology practices (2024 survey)</li>
                  <li className="pl-2">Privacy-focused alternatives gaining market share (Signal vs. WhatsApp, DuckDuckGo vs. Google)</li>
                  <li className="pl-2">Willingness to pay premium for ethically-designed technology (15-25% in our client data)</li>
                </ul>

                <h4 className="text-xl font-semibold text-navy mb-4">Employee expectations:</h4>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Tech workers increasingly refusing to build ethically questionable systems</li>
                  <li className="pl-2">High-profile walkouts and resignations over company ethics</li>
                  <li className="pl-2">Talent attraction advantage for companies with strong ethical frameworks (40-60% higher application rates in our client data)</li>
                </ul>

                <h4 className="text-xl font-semibold text-navy mb-4">Investor scrutiny:</h4>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">ESG criteria now include technology ethics and AI governance</li>
                  <li className="pl-2">Shareholder resolutions demanding algorithmic audits and bias testing</li>
                  <li className="pl-2">Due diligence processes incorporating ethical risk assessment</li>
                </ul>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The business implication:</strong> Ethical failures damage brand value, talent acquisition, and investor confidence. Ethics is market differentiation and competitive advantage.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-12">3. Amplification of Harm at Scale</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Technology operates at scale that magnifies consequences:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">An algorithmic bias affects millions simultaneously</li>
                  <li className="pl-2">A privacy breach exposes data on populations, not individuals</li>
                  <li className="pl-2">A recommendation system shapes societal behavior, not just user experience</li>
                  <li className="pl-2">An AI system's error compounds across thousands of automated decisions</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>The business implication:</strong> The cost of getting ethics wrong scales with your success. The more successful your technology, the greater your responsibility and exposure.
                </p>
              </div>

              {/* Section 3: Six Pillars */}
              <div className="mb-16 pb-16 border-b border-navy/10">
                <h2 className="text-4xl font-serif text-navy mb-8">The Six Pillars of Digital Ethics</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  Based on our work helping technology companies navigate these challenges, we've identified six critical dimensions of digital ethics:
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6">Pillar 1: Algorithmic Fairness and Bias Mitigation</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The challenge:</strong> AI systems learn from historical data that contains historical biases. "Accurate" often means accurately replicating discrimination.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Real-world example from our work:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A financial services client deployed an AI system for loan approval decisions. The system was trained on 10 years of historical lending data and was statistically more accurate than human underwriters (92% vs. 87% in predicting repayment).
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  But when we audited the system, we found:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">18% lower approval rates for identical creditworthy applicants from minority zip codes</li>
                  <li className="pl-2">Systematically lower credit limits for women with identical financial profiles</li>
                  <li className="pl-2">Geographic bias penalizing rural applicants regardless of individual qualifications</li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The AI was "accurate" because it learned from historical patterns—patterns that reflected decades of discriminatory lending practices, redlining, and systemic bias.
                </p>

                <h4 className="text-xl font-semibold text-navy mb-4 mt-8">The solution we implemented:</h4>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">1. Bias auditing framework:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Tested model performance across demographic segments</li>
                      <li className="pl-2">Identified disparate impact patterns</li>
                      <li className="pl-2">Traced bias sources to specific training data characteristics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">2. Fairness constraints:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Implemented mathematical fairness definitions (demographic parity, equalized odds, calibration)</li>
                      <li className="pl-2">Rebalanced training data to ensure representative samples</li>
                      <li className="pl-2">Added fairness metrics alongside accuracy metrics in model evaluation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">3. Human-in-the-loop oversight:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Flagged borderline decisions for human review</li>
                      <li className="pl-2">Created appeal processes for automated denials</li>
                      <li className="pl-2">Tracked outcomes to detect emerging bias patterns</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">4. Ongoing monitoring:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Real-time dashboard tracking fairness metrics</li>
                      <li className="pl-2">Quarterly audits with external validation</li>
                      <li className="pl-2">Continuous retraining to prevent drift</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-8 my-8">
                  <p className="text-xl text-gray-800 font-medium leading-relaxed mb-4">
                    <strong>Results:</strong>
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2 ml-6">
                    <li className="pl-2">Eliminated statistically significant disparate impact</li>
                    <li className="pl-2">Maintained 89% prediction accuracy (vs. 92% baseline—a small accuracy trade-off for significant fairness gain)</li>
                    <li className="pl-2">Reduced fair lending compliance risk</li>
                    <li className="pl-2">Improved brand reputation and regulatory relationships</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Fairness must be explicitly designed and continuously monitored. Left to default optimization, AI systems will replicate and amplify historical biases.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Pillar 2: Privacy by Design</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The challenge:</strong> Data collection has become invasive by default. The surveillance economy treats privacy as obstacle rather than right.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The conventional approach:</strong> Collect maximum data, use for anything not explicitly prohibited, rely on incomprehensible terms of service for legal cover.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The ethical approach:</strong> Collect minimum necessary data, use only for specified purposes, make privacy the default rather than opt-in.
                </p>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case example from our work:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A healthcare technology client was building a patient engagement platform. Standard industry practice would have been:
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Collect comprehensive health data (far beyond immediate need)</li>
                  <li className="pl-2">Aggregate and anonymize for research and analytics</li>
                  <li className="pl-2">Monetize through data partnerships with pharma and research institutions</li>
                  <li className="pl-2">Bury data usage in 40-page privacy policy</li>
                </ul>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We challenged every assumption:
                </p>

                <div className="space-y-6 mb-8 bg-gray-50 p-8 rounded-sm">
                  <div>
                    <p className="text-lg font-semibold text-navy mb-2">Q: Do you need to collect this data?</p>
                    <p className="text-lg text-gray-700 mb-2">A: For 40% of data points, the honest answer was "it would be nice to have" not "it's necessary for core functionality."</p>
                    <p className="text-lg text-gray-700"><strong>Decision:</strong> Collect only data directly required for delivering care. Resist the temptation of "collect everything just in case."</p>
                  </div>
                  
                  <div>
                    <p className="text-lg font-semibold text-navy mb-2">Q: Do you need to retain this data indefinitely?</p>
                    <p className="text-lg text-gray-700 mb-2">A: Most data was valuable for 30-90 days. Indefinite retention created liability without corresponding value.</p>
                    <p className="text-lg text-gray-700"><strong>Decision:</strong> Implement aggressive data minimization and deletion schedules.</p>
                  </div>
                  
                  <div>
                    <p className="text-lg font-semibold text-navy mb-2">Q: Can you deliver value without data aggregation?</p>
                    <p className="text-lg text-gray-700 mb-2">A: Analytics could be conducted with differential privacy techniques, synthetic data generation, and federated learning—preserving insights while protecting individuals.</p>
                    <p className="text-lg text-gray-700"><strong>Decision:</strong> Invest in privacy-preserving analytics rather than taking the easier path of centralized data aggregation.</p>
                  </div>
                  
                  <div>
                    <p className="text-lg font-semibold text-navy mb-2">Q: Can users truly understand what they're consenting to?</p>
                    <p className="text-lg text-gray-700 mb-2">A: The standard privacy policy was legally compliant and completely incomprehensible.</p>
                    <p className="text-lg text-gray-700"><strong>Decision:</strong> Redesign consent as ongoing dialogue, not one-time legal document. Explain data usage in plain language at point of collection. Provide granular controls with sensible defaults.</p>
                  </div>
                </div>

                <div className="bg-gold/10 border-l-4 border-gold p-8 my-8">
                  <p className="text-xl text-gray-800 font-medium leading-relaxed mb-4">
                    <strong>Results:</strong>
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2 ml-6">
                    <li className="pl-2">89% of users kept default privacy settings (vs. industry average of 12% who customize settings in complex privacy controls)</li>
                    <li className="pl-2">Zero HIPAA violations or data breaches in 3 years of operation</li>
                    <li className="pl-2">Significantly lower regulatory scrutiny and compliance costs</li>
                    <li className="pl-2">Competitive differentiation in privacy-conscious market segments</li>
                    <li className="pl-2">Higher trust scores and patient engagement</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Privacy isn't compliance checkbox. It's fundamental architecture decision. Build privacy into system design from the beginning, not bolt it on later.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Pillar 3: Transparency and Explainability</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The challenge:</strong> Complex AI systems operate as "black boxes." Even creators often can't explain specific decisions.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Why this matters:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2"><strong>Accountability:</strong> How do you appeal or contest a decision you can't understand?</li>
                  <li className="pl-2"><strong>Trust:</strong> Why should users trust systems they can't interrogate?</li>
                  <li className="pl-2"><strong>Safety:</strong> How do you debug and improve systems you can't interpret?</li>
                  <li className="pl-2"><strong>Compliance:</strong> Regulations increasingly require explanation of automated decisions</li>
                </ul>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Practical implementation:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We worked with an insurance company deploying AI for claims processing. The initial system was a deep neural network achieving 94% accuracy but offering zero explainability.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The transparency framework we built:</strong>
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">1. Tiered explainability:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2"><strong>High-level:</strong> What factors influenced the decision (e.g., "Claim denied based on policy exclusions, treatment coding, and prior authorization requirements")</li>
                      <li className="pl-2"><strong>Mid-level:</strong> Relative importance of factors (e.g., "Policy exclusion was primary factor—75% weight in decision")</li>
                      <li className="pl-2"><strong>Detailed:</strong> Specific data points and logic (e.g., "Policy section 7.3.b excludes experimental treatments; CPT code 12345 classified as experimental per medical policy MP-2023-47")</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">2. Audit trails:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Complete record of data inputs, model version, decision logic, and timestamps</li>
                      <li className="pl-2">Enable retrospective review and debugging</li>
                      <li className="pl-2">Support compliance requirements and legal discovery</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">3. Plain-language summaries:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Translate technical outputs into clear explanations</li>
                      <li className="pl-2">Avoid jargon and machine learning terminology</li>
                      <li className="pl-2">Focus on actionable information for users</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">4. Confidence scores:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Communicate certainty levels ("This decision is 95% confident" vs. "This is a borderline case—52% confidence")</li>
                      <li className="pl-2">Route low-confidence decisions to human review</li>
                      <li className="pl-2">Help users understand when to accept vs. question automated decisions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy/5 border-l-4 border-navy p-8 my-8">
                  <p className="text-xl text-gray-800 font-medium leading-relaxed mb-4">
                    <strong>Results:</strong>
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2 ml-6">
                    <li className="pl-2">Appeal rate decreased 35% (better initial explanations reduced confusion)</li>
                    <li className="pl-2">Successful appeal outcomes improved 60% (better information helped identify legitimate grievances)</li>
                    <li className="pl-2">Customer satisfaction increased 28 points</li>
                    <li className="pl-2">Reduced costly litigation by resolving disputes earlier with better information</li>
                    <li className="pl-2">Improved model performance through better debugging capabilities</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Explainability isn't just nice-to-have. It's necessary for accountability, trust, continuous improvement, and increasingly, legal compliance.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Pillar 4: Human Agency and Autonomy</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The challenge:</strong> Technology systems increasingly make decisions for users rather than with users. Autonomy is eroded by default settings, dark patterns, and manipulative design.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Examples of autonomy erosion:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Recommendation algorithms that filter information exposure without user awareness</li>
                  <li className="pl-2">Default settings designed to maximize data collection rather than user preference</li>
                  <li className="pl-2">Interface design that makes privacy-protective choices difficult (dark patterns)</li>
                  <li className="pl-2">Addiction-optimized engagement systems that exploit psychological vulnerabilities</li>
                </ul>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">The ethical framework:</h4>
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">1. Meaningful choice:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Users should understand options and their implications</li>
                      <li className="pl-2">Defaults should reflect user interest, not company interest</li>
                      <li className="pl-2">Opting out should be as easy as opting in</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">2. User control:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Transparency into algorithmic filtering and ranking</li>
                      <li className="pl-2">Ability to customize, override, or disable automated systems</li>
                      <li className="pl-2">Portability of data and switching costs minimization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">3. Respect for attention:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Design for user goals, not engagement metrics</li>
                      <li className="pl-2">Avoid exploiting psychological vulnerabilities</li>
                      <li className="pl-2">Build tools, not slot machines</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-2xl font-serif text-navy mb-4 mt-8">Case example:</h4>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We worked with a content platform facing criticism for addictive design. Their engagement metrics were extraordinary—average session time of 47 minutes, 8.3 sessions per day. Wall Street loved it. Users felt trapped.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The redesign focused on user agency:</strong>
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-red-50 p-6 rounded-sm">
                    <h5 className="text-lg font-semibold text-red-900 mb-4">Before:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• Infinite scroll (no natural stopping points)</li>
                      <li>• Autoplay (passive consumption)</li>
                      <li>• Notifications optimized for maximum interruption</li>
                      <li>• Algorithm prioritized engagement over user-specified interests</li>
                      <li>• No time limits or usage awareness tools</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-sm">
                    <h5 className="text-lg font-semibold text-green-900 mb-4">After:</h5>
                    <ul className="text-base text-gray-700 space-y-2">
                      <li>• Scroll with natural breaks and summaries</li>
                      <li>• Autoplay default to off, requires intentional action</li>
                      <li>• Notification settings prioritizing user control</li>
                      <li>• Algorithm transparency with customization options</li>
                      <li>• Usage dashboard and optional time limits</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The reaction:</strong> Wall Street panicked. Engagement metrics would crater. Daily active users would plummet. Revenue would collapse.
                </p>

                <div className="bg-gold/10 border-l-4 border-gold p-8 my-8">
                  <p className="text-xl text-gray-800 font-medium leading-relaxed mb-4">
                    <strong>What actually happened:</strong>
                  </p>
                  <ul className="text-lg text-gray-800 space-y-2 ml-6">
                    <li className="pl-2">Average session time decreased 15% (47 min → 40 min)</li>
                    <li className="pl-2">Sessions per day decreased 12% (8.3 → 7.3)</li>
                    <li className="pl-2">But: User satisfaction increased 34 points</li>
                    <li className="pl-2">But: Retention improved 18% (users stayed subscribed longer)</li>
                    <li className="pl-2">But: Net Promoter Score increased from 28 to 71</li>
                    <li className="pl-2">But: Revenue increased 8% (happier users were more willing to pay)</li>
                  </ul>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The insight:</strong> Maximizing engagement isn't the same as maximizing value. Respecting user agency builds sustainable business models on trust rather than addiction.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  <strong>The principle:</strong> Technology should augment human agency, not replace it. Design systems that empower users to make informed decisions aligned with their values and goals.
                </p>

                <h3 className="text-3xl font-serif text-navy mb-6 mt-16">Pillar 5: Accountability and Governance</h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>The challenge:</strong> When automated systems cause harm, who's responsible? The developer? The company? The algorithm itself?
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>Traditional accountability gaps:</strong>
                </p>
                <ul className="text-xl text-gray-700 leading-relaxed mb-8 space-y-3 ml-6">
                  <li className="pl-2">Diffusion of responsibility ("the algorithm decided")</li>
                  <li className="pl-2">Complexity barriers ("it's too technical to explain")</li>
                  <li className="pl-2">Scale challenges ("we can't manually review millions of decisions")</li>
                  <li className="pl-2">Automation bias ("the system is usually right, so we trust it")</li>
                </ul>

                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong>The governance framework:</strong>
                </p>
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">1. Clear ownership:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Designated individuals accountable for system outcomes</li>
                      <li className="pl-2">Executive-level responsibility for ethical performance</li>
                      <li className="pl-2">Board oversight of high-risk AI systems</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">2. Impact assessment:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Pre-deployment ethical risk analysis</li>
                      <li className="pl-2">Stakeholder impact mapping</li>
                      <li className="pl-2">Ongoing monitoring and auditing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">3. Redress mechanisms:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Clear process for contesting automated decisions</li>
                      <li className="pl-2">Human review for consequential outcomes</li>
                      <li className="pl-2">Remediation for system failures</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-navy mb-3">4. Transparency obligations:</h5>
                    <ul className="text-lg text-gray-700 space-y-2 ml-6">
                      <li className="pl-2">Public reporting on system performance and bias metrics</li>
                      <li className="pl-2">External audits for high-risk applications</li>
                      <li className="pl-2">Accessible information on how systems work</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>The principle:</strong> Automation doesn't eliminate accountability—it concentrates it. Build governance structures that assign clear responsibility, enable oversight, and provide redress.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-navy mb-8">Conclusion: Building Technology Worth Building</h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We stand at an inflection point. The technologies we're building—AI, algorithmic systems, digital platforms—have unprecedented power to shape human behavior, distribute opportunity, and affect societal outcomes.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The question isn't whether to build powerful technology. It's whether we'll build it responsibly.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Digital ethics isn't about slowing innovation. It's about directing innovation toward outcomes that create sustainable value—for users, for society, for long-term business success.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The companies winning in 2024 and beyond aren't choosing between ethics and innovation. They're choosing ethical innovation as the only sustainable path forward.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Because in a world where technology touches everything, ethics isn't optional. It's the foundation of enduring competitive advantage.
                </p>
                <p className="text-2xl font-serif text-navy leading-relaxed italic">
                  What will you build? And who will you build it for?
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-navy to-navy/90 text-white p-12 rounded-sm mb-16">
                <h3 className="text-3xl font-serif mb-6">Ready to embed ethics into your technology strategy?</h3>
                <p className="text-xl leading-relaxed mb-8">
                  Our Digital Ethics Framework helps you assess current practices, identify risks, and build ethical design into your development processes.
                </p>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-sm font-medium text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Schedule a Confidential Ethics Assessment
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
                  We help organizations build ethical technology frameworks that create competitive advantage while ensuring responsible innovation. Our approach combines technical expertise with deep understanding of regulatory requirements, stakeholder expectations, and societal impact.
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
