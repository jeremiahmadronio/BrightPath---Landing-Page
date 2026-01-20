import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactModal } from '../../components/ContactModal'

export function ServiceStrategicConsulting() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactOpen = () => {
    setIsContactModalOpen(true)
  }

  const handleDownload = () => {
    // Direct download of actual PDF file
    const link = document.createElement('a')
    link.href = '/pdf/brightpath-strategic-planning.pdf'
    link.download = 'BrightPath-Strategic-Planning-Framework.pdf'
    link.click()
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
                  Strategic Consulting
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  Architecting Growth for Tomorrow's Leaders
                </p>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-4">Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  We partner with C-suite executives to identify high-impact opportunities and eliminate strategic blind spots. Our data-driven approach delivers actionable roadmaps that drive 3-5 year growth trajectories, optimize resource allocation, and increase market share.
                </p>
              </div>

              {/* What We Deliver */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">What We Deliver</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Strategic Growth Planning</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Market entry and expansion strategies</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Portfolio optimization and business model innovation</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>M&A strategy and due diligence support</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>3-5 year growth roadmaps with financial modeling</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Competitive Intelligence</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Industry landscape mapping and trend analysis</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Competitive benchmarking and positioning</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Value proposition refinement</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Market opportunity assessment</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Organizational Strategy</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Operating model design and optimization</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Digital transformation roadmaps</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Process improvement and efficiency gains</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Change management frameworks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 1: Discovery (Weeks 1-2)</h4>
                    <p className="text-gray-700 mb-2">
                      Executive interviews, stakeholder mapping, market analysis, and internal capability assessment.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Comprehensive diagnostic report
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 2: Strategy Development (Weeks 3-6)</h4>
                    <p className="text-gray-700 mb-2">
                      Strategic options development, financial modeling, risk assessment, and scenario planning.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Strategic roadmap with clear KPIs
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 3: Implementation Planning (Weeks 7-8)</h4>
                    <p className="text-gray-700 mb-2">
                      Phased execution plan, resource allocation, and 90-day action plans.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Implementation playbook
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 4: Execution Support (Ongoing)</h4>
                    <p className="text-gray-700 mb-2">
                      Quarterly reviews, performance tracking, and strategic pivots as needed.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Monthly dashboards and insights
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Real Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Healthcare Provider - $45M Revenue Growth</h4>
                    <p className="text-sm text-gray-700">
                      Identified new revenue opportunities through adjacency analysis, resulting in 23% CAGR over 3 years.
                    </p>
                  </div>
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">B2B SaaS - 34% Pipeline Increase</h4>
                    <p className="text-sm text-gray-700">
                      Repositioned messaging from feature-focused to outcome-based, driving significant qualified lead growth in 6 months.
                    </p>
                  </div>
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Professional Services Firm - 18% Cost Reduction</h4>
                    <p className="text-sm text-gray-700">
                      Organizational restructuring that reduced costs while improving employee engagement by 12 points.
                    </p>
                  </div>
                </div>
              </div>

              {/* Who This Is For */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Who This Is For</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">C-suite executives navigating major transitions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Board members seeking strategic clarity</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Private equity partners developing value creation plans</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High-growth companies scaling to $100M+ revenue</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-12 bg-gold/10 p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-serif text-navy mb-6">Investment</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Project-Based:</span> $75K-$250K (8-16 weeks)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Advisory Retainer:</span> $15K-$35K/month
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Transformation Partnership:</span> Custom outcome-based pricing
                  </p>
                  <p className="text-sm text-navy/70 italic mt-4">
                    All engagements begin with a complimentary 60-minute strategy session
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactOpen}
                  className="flex-1 bg-navy text-white px-8 py-4 rounded hover:bg-navy/90 transition-colors duration-200 font-medium text-lg"
                >
                  Schedule Free Strategy Session
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 border-2 border-navy text-navy px-8 py-4 rounded hover:bg-navy/5 transition-colors duration-200 font-medium text-lg"
                >
                  Download Strategic Planning Framework
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        preSelectedService="Strategic Consulting"
      />
    </>
  )
}
