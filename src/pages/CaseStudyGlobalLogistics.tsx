import { ArrowLeft, TrendingUp, Calendar, Users, DollarSign, Award } from 'lucide-react'
import { useState } from 'react'
import { ContactModal } from '../components/ContactModal'

export function CaseStudyGlobalLogistics() {
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
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-navy/10 text-navy text-xs font-bold tracking-widest uppercase rounded-full">
                    Case Study
                  </span>
                  <span className="text-gold font-serif italic">Global Logistics Corp</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
                  Redefining Supply Chain Resilience in a Volatile Market
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                  How BrightPath Helped Global Logistics Corp Achieve 45% Efficiency Gains and $12M in Cost Reductions
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-navy/10">
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Duration</span>
                    </div>
                    <p className="text-2xl font-light text-navy">14 months</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Team Size</span>
                    </div>
                    <p className="text-2xl font-light text-navy">8 consultants</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Efficiency</span>
                    </div>
                    <p className="text-2xl font-light text-green-600">+45%</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Savings</span>
                    </div>
                    <p className="text-2xl font-light text-green-600">$12M</p>
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">Executive Summary</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Global Logistics Corp, a mid-sized third-party logistics provider managing over 2,500 daily shipments across North America, faced critical operational challenges that threatened its competitive position and profitability. Supply chain disruptions, rising operational costs, and increasing customer demands for real-time visibility required a fundamental transformation of their operational model.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    BrightPath Consulting partnered with Global Logistics Corp to redesign their end-to-end supply chain operations, implement advanced technology solutions, and build organizational capabilities for sustained excellence. The 14-month engagement delivered remarkable results: 45% improvement in operational efficiency, $12M in annual cost reductions, and a 34% increase in customer satisfaction scores.
                  </p>
                  
                  <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-navy mb-3">Key Results</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span><strong>45%</strong> operational efficiency improvement</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span><strong>$12M</strong> annual cost reduction</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span><strong>34%</strong> increase in customer satisfaction (NPS from 42 to 76)</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span><strong>99.2%</strong> on-time delivery rate (up from 87%)</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span><strong>28%</strong> reduction in inventory carrying costs</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span><strong>52%</strong> decrease in supply chain disruptions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Client Background */}
              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-serif text-navy mb-6">Client Background</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">Company Overview</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Founded in 1998, Global Logistics Corp grew from a regional freight forwarder into a comprehensive logistics provider serving over 400 enterprise clients across manufacturing, retail, and e-commerce sectors. With 12 distribution centers, 450 employees, and annual revenues of $180M, the company had established a solid market position but faced mounting pressures from market disruption and evolving customer expectations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">Market Context</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      The logistics industry was experiencing unprecedented volatility:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Port congestion and international shipping delays</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Driver shortages and rising labor costs</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Customer demands for real-time tracking and faster delivery</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>E-commerce growth requiring last-mile delivery capabilities</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Increased competition from technology-enabled logistics startups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* The Challenge */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">The Challenge</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-4">Operational Inefficiencies</h3>
                    <p className="text-gray-700 mb-4">
                      Global Logistics Corp's legacy systems and processes created significant operational drag:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Fragmented Technology</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• 7 disparate systems requiring manual data entry</li>
                          <li>• No real-time visibility across supply chain</li>
                          <li>• 40% paper-based processes</li>
                          <li>• Limited system integration</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Reactive Planning</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Manual day-of route planning</li>
                          <li>• No predictive analytics</li>
                          <li>• 62% warehouse capacity utilization</li>
                          <li>• 18% costs from expedited shipping</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Performance Gaps</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• 87% on-time delivery (vs 95% benchmark)</li>
                          <li>• 4.2 hour average processing time</li>
                          <li>• 6+ hour customer service response</li>
                          <li>• 3.2% order error rate</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Financial Pressure</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Margins declined from 12% to 7%</li>
                          <li>• +22% transportation costs (3 years)</li>
                          <li>• +15% annual labor costs</li>
                          <li>• $1.8M in late delivery penalties</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Strategic Implications
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Without intervention, Global Logistics Corp faced continued margin erosion threatening profitability, loss of major accounts to competitors, inability to compete for new business requiring advanced capabilities, difficulty attracting and retaining operational talent, and potential acquisition at a significant discount to fair value.
                    </p>
                  </div>
                </div>
              </section>

              {/* The BrightPath Approach */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">The BrightPath Approach</h2>
                
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 1: Comprehensive Diagnostic (Weeks 1-6)</h3>
                    <p className="text-gray-700 mb-4">
                      BrightPath deployed a cross-functional team to conduct an in-depth analysis of Global Logistics Corp's operations:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-navy/5 p-4 rounded">
                        <h4 className="font-semibold text-navy mb-2 text-sm">Process Mapping</h4>
                        <p className="text-xs text-gray-600">
                          47 core processes mapped, time-motion studies, 18 months of data analyzed, 23 inefficiencies identified
                        </p>
                      </div>
                      <div className="bg-navy/5 p-4 rounded">
                        <h4 className="font-semibold text-navy mb-2 text-sm">Stakeholder Engagement</h4>
                        <p className="text-xs text-gray-600">
                          60+ employee interviews, 25 customer interviews, supplier assessments, leadership workshops
                        </p>
                      </div>
                      <div className="bg-navy/5 p-4 rounded">
                        <h4 className="font-semibold text-navy mb-2 text-sm">Benchmarking</h4>
                        <p className="text-xs text-gray-600">
                          Competitive analysis, technology assessment, cost structure comparison, best practices identification
                        </p>
                      </div>
                    </div>

                    <div className="bg-gold/20 p-5 rounded-lg">
                      <h4 className="font-semibold text-navy mb-3">ROI Business Case</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Annual Savings</p>
                          <p className="text-2xl font-light text-navy">$12-15M</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Revenue Upside</p>
                          <p className="text-2xl font-light text-navy">$8M</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Investment</p>
                          <p className="text-2xl font-light text-navy">$6M</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Payback</p>
                          <p className="text-2xl font-light text-navy">18 mo</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 2: Solution Design (Weeks 7-16)</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-navy mb-3">Technology Architecture</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                            <p className="font-semibold text-navy mb-2">TMS & WMS</p>
                            <p className="text-sm text-gray-600">Cloud-based systems with AI route optimization, RFID tracking, automated workflows</p>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                            <p className="font-semibold text-navy mb-2">Customer Portal</p>
                            <p className="text-sm text-gray-600">Self-service tracking, automated notifications, document management, mobile-responsive</p>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                            <p className="font-semibold text-navy mb-2">Analytics Platform</p>
                            <p className="text-sm text-gray-600">Centralized data warehouse, predictive analytics, real-time dashboards, KPI tracking</p>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                            <p className="font-semibold text-navy mb-2">Network Optimization</p>
                            <p className="text-sm text-gray-600">Consolidated 12 to 9 facilities, optimized inventory positioning, redesigned routes</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-navy mb-3">Change Management Strategy</h4>
                        <p className="text-gray-700 text-sm">
                          Recognizing that technology alone wouldn't drive transformation, BrightPath developed a comprehensive change management program including executive coaching, frontline training, change champion networks, communication campaigns, and performance incentive alignment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 3: Implementation (Months 5-12)</h3>
                    
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-32">
                          <span className="inline-block px-3 py-1 bg-navy text-white text-xs rounded-full">Months 5-6</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-1">Foundation</h4>
                          <p className="text-sm text-gray-600">Infrastructure setup, data migration, training, pilot site preparation</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-32">
                          <span className="inline-block px-3 py-1 bg-navy text-white text-xs rounded-full">Months 7-8</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-1">Pilot Launch</h4>
                          <p className="text-sm text-gray-600">2 distribution centers, intensive support, validation, refinements</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-32">
                          <span className="inline-block px-3 py-1 bg-navy text-white text-xs rounded-full">Months 9-11</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-1">Full Rollout</h4>
                          <p className="text-sm text-gray-600">Remaining 7 facilities, staggered go-live, hypercare support, legacy decommissioning</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-32">
                          <span className="inline-block px-3 py-1 bg-navy text-white text-xs rounded-full">Month 12</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-1">Optimization</h4>
                          <p className="text-sm text-gray-600">Performance tuning, continuous improvement, knowledge transfer</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 4: Sustained Excellence (Months 13-14+)</h3>
                    <p className="text-gray-700 mb-4">
                      BrightPath worked to ensure Global Logistics Corp could sustain and build upon the transformation through comprehensive training, capability building, knowledge transfer, and establishment of a Continuous Improvement Office.
                    </p>
                  </div>
                </div>
              </section>

              {/* The Results */}
              <section className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
                <h2 className="text-3xl font-serif text-navy mb-6">The Results</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <p className="text-4xl font-light text-green-600">45%</p>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Overall Efficiency</p>
                    <p className="text-xs text-gray-500">Processing time: 4.2h → 2.3h<br/>Route planning: 90m → 15m</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-4xl font-light text-green-600 mb-2">$12M</p>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Annual Savings</p>
                    <p className="text-xs text-gray-500">Transportation, labor, inventory, facility costs</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-4xl font-light text-green-600 mb-2">99.2%</p>
                    <p className="text-sm text-gray-600 font-semibold mb-2">On-Time Delivery</p>
                    <p className="text-xs text-gray-500">Up from 87%, exceeding industry benchmark</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Customer Experience</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">NPS increased from 42 to 76</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Customer retention: 82% → 94%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Issue resolution: 6h → 45min</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Customer complaints: -72%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Employee Engagement</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Engagement score: 62 → 81</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Voluntary turnover: 28% → 14%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Internal promotions: +45%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Safety incidents: -41%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Client Testimonial */}
              <section className="mb-12">
                <div className="bg-navy text-white p-8 rounded-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-gold text-4xl sm:text-5xl md:text-6xl font-serif leading-none">"</div>
                    <div>
                      <p className="text-lg leading-relaxed mb-6 text-white/90">
                        BrightPath didn't just give us a strategy document and walk away. They rolled up their sleeves, worked side-by-side with our teams in the warehouses, and stayed with us through every challenge. The results speak for themselves—we're now the logistics provider our customers recommend to others. This transformation saved our company and positioned us for the future.
                      </p>
                      <div className="border-t border-white/20 pt-4">
                        <p className="font-semibold text-white">Michael Rodriguez</p>
                        <p className="text-white/60 text-sm">Chief Operating Officer, Global Logistics Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Insights */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">Key Insights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-2 border-gold pl-4">
                    <h4 className="font-semibold text-navy mb-2">Data-Driven Decisions</h4>
                    <p className="text-sm text-gray-600">Every recommendation grounded in rigorous analysis with clear ROI.</p>
                  </div>
                  <div className="border-l-2 border-gold pl-4">
                    <h4 className="font-semibold text-navy mb-2">Balanced Approach</h4>
                    <p className="text-sm text-gray-600">Technology enabled transformation, but process and change management were equally critical.</p>
                  </div>
                  <div className="border-l-2 border-gold pl-4">
                    <h4 className="font-semibold text-navy mb-2">Frontline Engagement</h4>
                    <p className="text-sm text-gray-600">Most valuable insights came from warehouse workers and drivers.</p>
                  </div>
                  <div className="border-l-2 border-gold pl-4">
                    <h4 className="font-semibold text-navy mb-2">Phased Implementation</h4>
                    <p className="text-sm text-gray-600">Pilot sites validated concepts before full deployment, managing risk effectively.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="border-t border-navy/10 pt-12">
                <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-serif mb-4">Ready to Transform Your Operations?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Learn how BrightPath can help you achieve breakthrough performance and sustainable competitive advantage.
                  </p>
                  <button
                    onClick={handleContactOpen}
                    className="bg-gold text-navy px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-200 font-semibold"
                  >
                    Schedule Your Complimentary Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {isContactModalOpen && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </>
  )
}
