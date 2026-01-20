import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactModal } from '../../components/ContactModal'

export function ServiceInnovationLabs() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactOpen = () => {
    setIsContactModalOpen(true)
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
          </div>
        </nav>

        {/* Main Content */}
        <article className="pt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="px-0 py-12">
              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-8 bg-gold" />
                  <span className="text-gold font-medium tracking-widest uppercase text-sm">
                    Service Details
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-3">
                  Innovation Labs
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  Controlled Experimentation That Generates Revenue
                </p>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-4">Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Our innovation framework combines design thinking with lean methodologies to rapidly test, validate, and scale new revenue streams. From concept to commercialization in 90 days—with built-in risk mitigation and measurable KPIs at every stage.
                </p>
              </div>

              {/* What We Deliver */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">What We Deliver</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Rapid Prototyping & Validation</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Customer discovery and problem validation</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Minimum viable product (MVP) development</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Market testing and user feedback loops</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Pivot or persevere decision frameworks</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Innovation Strategy</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Innovation portfolio management</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Trend scouting and opportunity mapping</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Business model canvas development</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Go-to-market strategy for new offerings</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Design Thinking Workshops</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Customer journey mapping</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Ideation and brainstorming facilitation</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Rapid prototyping sessions</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>User testing and iteration</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Revenue Stream Development</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>New product/service conceptualization</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Pricing strategy and monetization models</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Partnership and ecosystem development</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Pilot program design and execution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* The 90-Day Innovation Sprint */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">The 90-Day Innovation Sprint</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Weeks 1-2: Discover</h4>
                    <p className="text-gray-700 mb-2">
                      Customer interviews, market research, pain point identification, and opportunity sizing.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Validated problem statement
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Weeks 3-5: Define</h4>
                    <p className="text-gray-700 mb-2">
                      Solution ideation, concept testing, business model design, and feasibility analysis.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Innovation brief with 3-5 concepts
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Weeks 6-10: Develop</h4>
                    <p className="text-gray-700 mb-2">
                      MVP build, prototype testing, user feedback, and iteration cycles.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Working prototype
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Weeks 11-12: Deploy</h4>
                    <p className="text-gray-700 mb-2">
                      Pilot launch, performance tracking, scaling plan, and commercialization roadmap.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Go/no-go recommendation with financial projections
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Real Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Insurance Company - $8M New Revenue Stream</h4>
                    <p className="text-sm text-gray-700">
                      Launched usage-based insurance product through 90-day innovation sprint, now 12% of annual revenue.
                    </p>
                  </div>
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Hospitality Group - 67% Higher Engagement</h4>
                    <p className="text-sm text-gray-700">
                      Developed loyalty app through design thinking workshops, achieving 40K downloads in 3 months.
                    </p>
                  </div>
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Education Platform - 3X Conversion Rate</h4>
                    <p className="text-sm text-gray-700">
                      Tested and validated freemium model through rapid experimentation, driving subscription growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovation Frameworks We Use */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Innovation Frameworks We Use</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lean Startup methodology</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Design Thinking (IDEO approach)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Jobs-to-be-Done framework</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Business Model Canvas</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Agile/Scrum for development</span>
                  </div>
                </div>
              </div>

              {/* Who This Is For */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Who This Is For</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Organizations seeking new revenue sources</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Companies facing market saturation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Teams with ideas but lacking execution frameworks</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Businesses needing to stay ahead of disruption</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-12 bg-gold/10 p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-serif text-navy mb-6">Investment</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">90-Day Innovation Sprint:</span> $85K-$150K
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Design Thinking Workshop (2-day):</span> $15K-$25K
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Innovation Lab Setup:</span> $200K-$500K (6-12 months)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Ongoing Innovation Retainer:</span> $20K-$40K/month
                  </p>
                  <p className="text-sm text-navy/70 italic mt-4">
                    Includes all materials, tools, and facilitation
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactOpen}
                  className="flex-1 bg-navy text-white px-8 py-4 rounded hover:bg-navy/90 transition-colors duration-200 font-medium text-lg"
                >
                  Launch Innovation Sprint
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        preSelectedService="Innovation Labs"
      />
    </>
  )
}
