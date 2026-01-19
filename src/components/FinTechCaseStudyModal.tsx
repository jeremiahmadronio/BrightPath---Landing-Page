import { X, TrendingUp, Calendar, Users,  Award, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ContactModal } from './ContactModal'

interface FinTechCaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FinTechCaseStudyModal({ isOpen, onClose }: FinTechCaseStudyModalProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isContactModalOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, isContactModalOpen, onClose])

  if (!isOpen) return null

  const handleContactOpen = () => {
    setIsContactModalOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 9999, paddingTop: '80px' }}>
        <div 
          className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
          style={{ top: '80px' }}
          onClick={onClose}
        />
        
        <div 
          className="relative bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          style={{ zIndex: 10000 }}
        >
          <button
            onClick={onClose}
            className="sticky top-0 right-0 float-right m-6 p-2 text-navy/60 hover:text-navy hover:bg-navy/5 rounded-full transition-all duration-200 z-10 bg-white"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="px-8 md:px-16 py-12">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-navy/10 text-navy text-xs font-bold tracking-widest uppercase rounded-full">
                  Case Study
                </span>
                <span className="text-gold font-serif italic">FinTech Innovations</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif text-navy mb-6 leading-tight">
                Scaling Digital Infrastructure for the Next Billion Users
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                How BrightPath Helped FinTech Innovations Achieve 300% User Growth with 99.99% Uptime
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-navy/10">
                <div>
                  <div className="flex items-center gap-2 text-navy mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Duration</span>
                  </div>
                  <p className="text-2xl font-light text-navy">18 months</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-navy mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Team Size</span>
                  </div>
                  <p className="text-2xl font-light text-navy">12 consultants</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-navy mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">User Growth</span>
                  </div>
                  <p className="text-2xl font-light text-green-600">+300%</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-navy mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Uptime</span>
                  </div>
                  <p className="text-2xl font-light text-green-600">99.99%</p>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-navy mb-6">Executive Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  FinTech Innovations, a rapidly growing digital banking platform serving emerging markets, faced a critical inflection point. With 15 million users and aggressive expansion plans targeting 100 million users within three years, their legacy infrastructure was buckling under scale. Frequent outages, slow transaction processing, and inability to launch new features quickly threatened to derail their growth trajectory and damage customer trust.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  BrightPath Consulting partnered with FinTech Innovations to architect and implement a world-class cloud-native infrastructure capable of serving billions of transactions while maintaining exceptional reliability and performance. The 18-month transformation delivered extraordinary results: 300% user growth, 99.99% system uptime, 85% reduction in infrastructure costs, and the technical foundation to scale to 500 million users without fundamental architecture changes.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-navy mb-3">Key Results</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>300%</strong> user growth (15M to 60M users)</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>99.99%</strong> system uptime (from 97.2%)</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>85%</strong> reduction in infrastructure costs per user</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>400%</strong> improvement in transaction processing speed</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>$18M</strong> annual cost savings</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>94%</strong> reduction in critical incidents</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Zero data breaches or security incidents</span>
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
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Founded in 2018, FinTech Innovations pioneered digital banking services for underserved populations in Southeast Asia and Africa. The company's mission—providing accessible financial services to the unbanked—resonated strongly, driving explosive user acquisition.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-2xl font-light text-navy">15M</p>
                      <p className="text-xs text-gray-600">Active Users</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-2xl font-light text-navy">8</p>
                      <p className="text-xs text-gray-600">Countries</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-2xl font-light text-navy">$2.4B</p>
                      <p className="text-xs text-gray-600">Transaction Volume</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">The Opportunity</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    FinTech Innovations identified massive growth potential:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gold mr-3 mt-1">•</span>
                      <span>Total addressable market: 400M potential users</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gold mr-3 mt-1">•</span>
                      <span>Partnership pipeline with major mobile operators</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gold mr-3 mt-1">•</span>
                      <span>Product-market fit validated (82% monthly active users)</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-gold mr-3 mt-1">•</span>
                      <span>Strong unit economics: $12 CAC, $48 LTV</span>
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
                  <h3 className="text-xl font-semibold text-navy mb-4">Infrastructure at Breaking Point</h3>
                  <p className="text-gray-700 mb-4">
                    The legacy monolithic architecture designed for 1-2M users was creating severe limitations:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-2 border-red-400 pl-4">
                      <h4 className="font-semibold text-navy mb-2">Technical Debt</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Monolithic application making deployments risky</li>
                        <li>• Single database creating bottleneck</li>
                        <li>• Manual scaling taking 4-6 hours</li>
                        <li>• No auto-scaling capabilities</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-red-400 pl-4">
                      <h4 className="font-semibold text-navy mb-2">Performance Issues</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Transaction processing: 12 seconds (vs 2s standard)</li>
                        <li>• API response: 800ms (vs 200ms target)</li>
                        <li>• App crash rate: 4.2% (vs 1% standard)</li>
                        <li>• System slowdowns during peak hours</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-red-400 pl-4">
                      <h4 className="font-semibold text-navy mb-2">Reliability Problems</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Uptime: 97.2% (8+ hours downtime monthly)</li>
                        <li>• Critical incidents: 12-15 per month</li>
                        <li>• MTTR: 3.2 hours</li>
                        <li>• Unplanned outages: 6-8 per month</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-red-400 pl-4">
                      <h4 className="font-semibold text-navy mb-2">Business Impact</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• NPS declining: 68 → 52</li>
                        <li>• Support tickets: +230%</li>
                        <li>• Churn rate: 8% → 14%</li>
                        <li>• Cost per transaction: $0.42 (need &lt;$0.10)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    The Imperative
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    FinTech Innovations faced a binary outcome: Scale infrastructure to support 100M+ users with profitable unit economics, or face growth stall, customer exodus, and potential distressed acquisition. The Board mandated a solution within 18 months.
                  </p>
                </div>
              </div>
            </section>

            {/* The BrightPath Approach */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-navy mb-6">The BrightPath Approach</h2>
              
              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-serif text-navy mb-4">Phase 1: Infrastructure Assessment (Months 1-3)</h3>
                  <p className="text-gray-700 mb-4">
                    BrightPath deployed cloud architects and platform engineers to conduct comprehensive analysis:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                      <h4 className="font-semibold text-navy mb-2 text-sm">Technical Audit</h4>
                      <p className="text-xs text-gray-600">
                        Infrastructure topology mapping, performance profiling, bottleneck identification, security audit
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                      <h4 className="font-semibold text-navy mb-2 text-sm">Future State Design</h4>
                      <p className="text-xs text-gray-600">
                        Cloud-native architecture, microservices, event-driven design, multi-region deployment
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-100 p-5 rounded-lg">
                    <h4 className="font-semibold text-navy mb-3">Business Case: $12M Investment</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 mb-1">3-Year Value</p>
                        <p className="text-2xl font-light text-navy">$103M</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">ROI</p>
                        <p className="text-2xl font-light text-navy">758%</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Payback</p>
                        <p className="text-2xl font-light text-navy">8 mo</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Annual Savings</p>
                        <p className="text-2xl font-light text-navy">$18M</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-serif text-navy mb-4">Phase 2: Platform Build (Months 4-9)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-3">Cloud-Native Architecture</h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                          <p className="font-semibold text-navy mb-1">Multi-Cloud</p>
                          <p className="text-xs text-gray-600">AWS primary, GCP for analytics, multi-region deployment</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                          <p className="font-semibold text-navy mb-1">Microservices</p>
                          <p className="text-xs text-gray-600">40+ services, Kubernetes, container-based, service mesh</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                          <p className="font-semibold text-navy mb-1">Data Platform</p>
                          <p className="text-xs text-gray-600">Aurora, Spanner, Redis, Kafka event streaming</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="text-sm font-semibold text-navy mb-2">Target Performance Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div>
                          <p className="text-gray-600">Uptime</p>
                          <p className="text-lg font-light text-navy">99.99%</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Transaction Time</p>
                          <p className="text-lg font-light text-navy">&lt;2s</p>
                        </div>
                        <div>
                          <p className="text-gray-600">API Latency</p>
                          <p className="text-lg font-light text-navy">&lt;200ms</p>
                        </div>
                        <div>
                          <p className="text-gray-600">User Capacity</p>
                          <p className="text-lg font-light text-navy">500M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-serif text-navy mb-4">Phase 3: Migration (Months 10-15)</h3>
                  
                  <p className="text-gray-700 text-sm mb-4">
                    Used "Strangler Fig" pattern for phased migration with zero downtime:
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex gap-3 items-start">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded">Phase A</span>
                      <p className="text-sm text-gray-700">Low-risk services: Notifications, support portal, analytics</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded">Phase B</span>
                      <p className="text-sm text-gray-700">Medium-risk: Authentication, user management, profiles</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded">Phase C</span>
                      <p className="text-sm text-gray-700">High-risk core: Transaction processing, payments, fraud detection</p>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-serif text-navy mb-4">Phase 4: Optimization (Months 16-18)</h3>
                  <p className="text-gray-700 mb-4">
                    Performance tuning, cost optimization, and capability building. Training programs for cloud certification, Kubernetes, SRE practices, and DevOps culture transformation.
                  </p>
                </div>
              </div>
            </section>

            {/* The Results */}
            <section className="mb-12 bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg border border-blue-200">
              <h2 className="text-3xl font-serif text-navy mb-6">The Results</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="text-4xl font-light text-blue-600">300%</p>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">User Growth</p>
                  <p className="text-xs text-gray-500">15M → 60M users in 18 months</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-4xl font-light text-green-600 mb-2">99.99%</p>
                  <p className="text-sm text-gray-600 font-semibold mb-2">System Uptime</p>
                  <p className="text-xs text-gray-500">From 97.2%, only 4 min downtime/year</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-4xl font-light text-green-600 mb-2">$18M</p>
                  <p className="text-sm text-gray-600 font-semibold mb-2">Annual Savings</p>
                  <p className="text-xs text-gray-500">85% cost reduction per user</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy mb-3">Performance Improvements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">Transaction processing: 12s → 1.8s (400% faster)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">API response: 800ms → 145ms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">App crash rate: 4.2% → 0.4%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">Critical incidents: -94%</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy mb-3">Business Impact</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">NPS increased: 52 → 81</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">Churn rate: 14% → 5%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">Revenue: $48M → $180M annually</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">Valuation: $1.2B → $4.8B</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Client Testimonial */}
            <section className="mb-12">
              <div className="bg-navy text-white p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-gold text-6xl font-serif leading-none">"</div>
                  <div>
                    <p className="text-lg leading-relaxed mb-6 text-white/90">
                      BrightPath didn't just help us scale our infrastructure—they transformed how we think about technology. We went from reacting to fires every day to proactively building for the next billion users. The 99.99% uptime isn't just a number—it's the foundation of trust with our customers. This transformation saved our company and positioned us to become the leading digital bank in emerging markets.
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-semibold text-white">Priya Sharma</p>
                      <p className="text-white/60 text-sm">Chief Technology Officer, FinTech Innovations</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Insights */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif text-navy mb-6">Key Insights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-navy mb-2">Cloud-Native Architecture</h4>
                  <p className="text-sm text-gray-600">Designed for cloud from ground up, unlocking auto-scaling and multi-region deployment.</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-navy mb-2">Phased Migration</h4>
                  <p className="text-sm text-gray-600">Strangler fig approach minimized risk through continuous validation at each stage.</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-navy mb-2">Observability First</h4>
                  <p className="text-sm text-gray-600">Built-in monitoring and tracing enabled rapid issue detection and resolution.</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-navy mb-2">Culture Transformation</h4>
                  <p className="text-sm text-gray-600">DevOps practices and SRE principles embedded through training and capability building.</p>
                </div>
              </div>
            </section>

            {/* Scalability */}
            <section className="mb-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-navy mb-6">Built for Scale</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-light text-navy mb-2">500M</p>
                  <p className="text-sm text-gray-600">User capacity without architecture changes</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light text-navy mb-2">100K</p>
                  <p className="text-sm text-gray-600">Transactions per second capability</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light text-navy mb-2">&lt;5min</p>
                  <p className="text-sm text-gray-600">Auto-scale from 1K to 100K TPS</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="border-t border-navy/10 pt-12">
              <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-serif mb-4">Ready to Scale Your Infrastructure?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Learn how BrightPath can help you build cloud-native infrastructure that scales with your growth.
                </p>
                <button
                  onClick={handleContactOpen}
                  className="bg-gold text-navy px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-200 font-semibold"
                >
                  Schedule Your Infrastructure Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isContactModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 11000 }}>
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </div>
      )}
    </>
  )
}
