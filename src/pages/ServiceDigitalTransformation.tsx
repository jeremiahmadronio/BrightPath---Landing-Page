import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { ContactModal } from '../components/ContactModal'

export function ServiceDigitalTransformation() {
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
            <a
              href="/"
              className="flex items-center gap-2 text-navy hover:text-gold transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </a>
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
                  Digital Transformation
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  Technology That Scales with Precision
                </p>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-4">Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  We architect enterprise-grade digital infrastructures that reduce operational costs by 30-40%, accelerate time-to-market, and create frictionless customer experiences. Our solutions integrate seamlessly with your existing systems while future-proofing your operations.
                </p>
              </div>

              {/* What We Deliver */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">What We Deliver</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Technology Roadmapping</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Digital maturity assessment and gap analysis</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Technology stack optimization and modernization</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Cloud migration and infrastructure design</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>API and integration architecture</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Process Automation</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Workflow automation and RPA implementation</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>AI/ML integration for predictive analytics</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Custom software development and platform builds</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Legacy system modernization</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Customer Experience Transformation</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Omnichannel experience design</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Self-service portal development</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Mobile-first application development</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Personalization engines and recommendation systems</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Data & Analytics Infrastructure</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Data warehouse and lake architecture</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Business intelligence and dashboarding</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Real-time analytics and reporting</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Data governance and security frameworks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Approach */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 1: Digital Assessment (Weeks 1-3)</h4>
                    <p className="text-gray-700 mb-2">
                      Technology audit, process mapping, stakeholder interviews, and ROI modeling.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Digital transformation blueprint
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 2: Solution Design (Weeks 4-8)</h4>
                    <p className="text-gray-700 mb-2">
                      Architecture design, vendor selection, integration planning, and prototyping.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Technical specifications and project roadmap
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 3: Implementation (Months 3-9)</h4>
                    <p className="text-gray-700 mb-2">
                      Agile development sprints, testing, training, and phased rollouts.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Production-ready systems
                    </p>
                  </div>

                  <div className="border-l-2 border-gold pl-6 py-2">
                    <h4 className="text-lg font-semibold text-navy mb-2">Phase 4: Optimization (Ongoing)</h4>
                    <p className="text-gray-700 mb-2">
                      Performance monitoring, user feedback integration, and continuous improvement.
                    </p>
                    <p className="text-sm text-gold font-medium">
                      Deliverable: Monthly performance reports
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Real Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Retail Chain - $3.2M Inventory Savings</h4>
                    <p className="text-sm text-gray-700">
                      Implemented predictive analytics reducing inventory costs while increasing fulfillment accuracy to 96%.
                    </p>
                  </div>
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Financial Services - 42% Processing Speed</h4>
                    <p className="text-sm text-gray-700">
                      Automated loan approval workflows, reducing processing time from 5 days to 3 hours.
                    </p>
                  </div>
                  <div className="bg-navy/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Manufacturing - 30% Operational Efficiency</h4>
                    <p className="text-sm text-gray-700">
                      IoT-enabled production monitoring system reduced downtime and improved output quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies We Work With */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Technologies We Work With</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Cloud:</h4>
                    <p className="text-gray-700">AWS, Azure, Google Cloud Platform</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Data:</h4>
                    <p className="text-gray-700">Snowflake, Databricks, Power BI, Tableau</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Automation:</h4>
                    <p className="text-gray-700">UiPath, Power Automate, Zapier</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Development:</h4>
                    <p className="text-gray-700">React, Node.js, Python, .NET</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">AI/ML:</h4>
                    <p className="text-gray-700">TensorFlow, scikit-learn, OpenAI APIs</p>
                  </div>
                </div>
              </div>

              {/* Who This Is For */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-navy mb-6">Who This Is For</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Organizations with legacy systems hindering growth</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Companies seeking operational efficiency gains</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Businesses facing digital disruption in their industry</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Teams lacking internal technical expertise</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-12 bg-gold/10 p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-serif text-navy mb-6">Investment</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Assessment & Roadmap:</span> $25K-$50K (4-6 weeks)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Full Implementation:</span> $150K-$750K (6-18 months)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-navy">Managed Services:</span> $8K-$25K/month
                  </p>
                  <p className="text-sm text-navy/70 italic mt-4">
                    Proof-of-concept pilots available starting at $15K
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactOpen}
                  className="flex-1 bg-navy text-white px-8 py-4 rounded hover:bg-navy/90 transition-colors duration-200 font-medium text-lg"
                >
                  Request Digital Readiness Assessment
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        preSelectedService="Digital Transformation"
      />
    </>
  )
}
