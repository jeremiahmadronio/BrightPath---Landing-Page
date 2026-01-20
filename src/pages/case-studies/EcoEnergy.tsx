import { ArrowLeft, TrendingUp, Calendar, Users, Award, Zap } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactModal } from '../../components/ContactModal'


export function CaseStudyEcoEnergy() {
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
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-navy/10 text-navy text-xs font-bold tracking-widest uppercase rounded-full">
                    Case Study
                  </span>
                  <span className="text-gold font-serif italic">EcoEnergy Systems</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
                  Transforming Renewable Energy Distribution Networks
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                  How BrightPath Helped EcoEnergy Systems Achieve 2.5M Tons Carbon Offset and 92% Grid Efficiency
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-navy/10">
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Duration</span>
                    </div>
                    <p className="text-2xl font-light text-navy">16 months</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Team Size</span>
                    </div>
                    <p className="text-2xl font-light text-navy">10 consultants</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Carbon Offset</span>
                    </div>
                    <p className="text-2xl font-light text-green-600">2.5M tons</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-navy mb-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Grid Efficiency</span>
                    </div>
                    <p className="text-2xl font-light text-green-600">92%</p>
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">Executive Summary</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    EcoEnergy Systems, a mid-sized renewable energy provider managing distributed solar and wind installations across 12 states, faced critical infrastructure challenges that threatened their ability to scale renewable energy adoption. Aging grid infrastructure, intermittent power management issues, and increasing demand for reliable green energy required a fundamental transformation of their distribution network and energy management systems.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    BrightPath Consulting partnered with EcoEnergy Systems to redesign their grid infrastructure, implement smart energy management technologies, and build capabilities for distributed renewable energy at scale. The 16-month engagement delivered transformative results: 92% grid efficiency, 2.5M tons of carbon emissions offset annually, 67% reduction in energy waste, and positioning as the leading renewable energy provider in their markets.
                  </p>
                  
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-navy mb-3">Key Results</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>2.5M tons</strong> annual carbon offset achieved</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>92%</strong> grid efficiency (up from 74%)</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>67%</strong> reduction in energy waste and transmission losses</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>$22M</strong> annual cost savings through optimization</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>99.4%</strong> system reliability (up from 91%)</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>250%</strong> increase in renewable energy capacity</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span><strong>58%</strong> faster grid response to demand fluctuations</span>
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
                      Founded in 2012, EcoEnergy Systems grew from a regional solar installer into a comprehensive renewable energy provider serving residential, commercial, and industrial customers across the Midwest and Southwest United States. With 850 MW of installed capacity, 180,000 customers, and annual revenues of $420M, the company had established itself as a sustainability leader but faced mounting technical challenges in managing distributed renewable resources at scale.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">Market Context</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      The renewable energy sector was experiencing unprecedented growth and complexity:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Rapid adoption of residential and commercial solar installations</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Grid integration challenges with intermittent renewable sources</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Battery storage technology advancing but costly to implement</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Regulatory pressure for carbon reduction and grid modernization</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Competition from utilities launching their own renewable programs</span>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>Customer demands for 100% uptime despite renewable intermittency</span>
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
                    <h3 className="text-xl font-semibold text-navy mb-4">Infrastructure Limitations</h3>
                    <p className="text-gray-700 mb-4">
                      EcoEnergy Systems' first-generation grid management systems created severe operational constraints:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Legacy Grid Architecture</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Point-to-point connections causing single points of failure</li>
                          <li>• Limited real-time monitoring across distributed assets</li>
                          <li>• Manual load balancing taking 20-30 minutes</li>
                          <li>• No predictive analytics for renewable generation</li>
                          <li>• 74% average grid efficiency vs 90%+ industry benchmark</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Intermittency Management</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• 18-22% energy waste during oversupply periods</li>
                          <li>• Rolling brownouts during peak demand with low generation</li>
                          <li>• Limited battery storage integration (only 15 MW capacity)</li>
                          <li>• No demand response capabilities</li>
                          <li>• Customer satisfaction dropping due to reliability concerns</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Performance Gaps</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Grid response time: 12 minutes (vs 2-3 min target)</li>
                          <li>• Transmission losses: 26% (vs 8-10% benchmark)</li>
                          <li>• System reliability: 91% (vs 99%+ standard)</li>
                          <li>• Renewable curtailment: 340 GWh annually wasted</li>
                          <li>• Operating costs: $0.08/kWh (vs $0.04/kWh optimal)</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-red-400 pl-4">
                        <h4 className="font-semibold text-navy mb-2">Scalability Barriers</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Infrastructure unable to support planned 3x capacity growth</li>
                          <li>• $180M in required upgrades identified</li>
                          <li>• Technology debt preventing smart grid features</li>
                          <li>• Limited ability to integrate new renewable sources</li>
                          <li>• Regulatory compliance risks for grid stability standards</li>
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
                      Without intervention, EcoEnergy Systems faced continued reliability issues damaging brand reputation, inability to scale renewable capacity to meet demand, competitive disadvantage as utilities modernized their grids, potential regulatory penalties for grid instability, and missed opportunity to lead the renewable energy transition.
                    </p>
                  </div>
                </div>
              </section>

              {/* The BrightPath Approach */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">The BrightPath Approach</h2>
                
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 1: Grid Assessment & Strategy (Weeks 1-8)</h3>
                    <p className="text-gray-700 mb-4">
                      BrightPath deployed renewable energy engineers, grid architects, and data scientists to conduct comprehensive analysis:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-navy mb-2 text-sm">Technical Assessment</h4>
                        <p className="text-xs text-gray-600">
                          Detailed grid topology mapping, 2 years of generation and consumption data analyzed, equipment condition assessments, renewable resource modeling
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-navy mb-2 text-sm">Stakeholder Engagement</h4>
                        <p className="text-xs text-gray-600">
                          45 employee interviews, 30 customer focus groups, regulatory body consultations, technology vendor assessments
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-navy mb-2 text-sm">Future State Design</h4>
                        <p className="text-xs text-gray-600">
                          Smart grid architecture with AI-powered optimization, DERMS, battery storage strategy, predictive maintenance platform
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-100 p-5 rounded-lg">
                      <h4 className="font-semibold text-navy mb-3">Business Case: $28M Investment</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Annual Savings</p>
                          <p className="text-2xl font-light text-navy">$22M</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Carbon Value</p>
                          <p className="text-2xl font-light text-navy">$8M</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">ROI</p>
                          <p className="text-2xl font-light text-navy">178%</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Payback</p>
                          <p className="text-2xl font-light text-navy">14 mo</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 2: Technology Implementation (Months 3-10)</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-navy mb-3">Smart Grid Infrastructure</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                            <p className="font-semibold text-navy mb-1">DERMS Platform</p>
                            <p className="text-xs text-gray-600">Real-time monitoring and control of 2,400+ distributed assets, AI-powered load forecasting, automated grid optimization</p>
                          </div>
                          <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                            <p className="font-semibold text-navy mb-1">Advanced Metering</p>
                            <p className="text-xs text-gray-600">180,000 smart meters deployed, real-time consumption data, two-way communication enabled</p>
                          </div>
                          <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                            <p className="font-semibold text-navy mb-1">Grid Sensors & IoT</p>
                            <p className="text-xs text-gray-600">1,200 grid sensors installed, real-time voltage and frequency monitoring, automated fault detection</p>
                          </div>
                          <div className="bg-gray-50 border border-gray-200 p-3 rounded text-sm">
                            <p className="font-semibold text-navy mb-1">Energy Storage</p>
                            <p className="text-xs text-gray-600">180 MW battery storage deployed, AI-optimized charging/discharging, peak shaving and load shifting</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-navy mb-3">Grid Modernization</h4>
                        <ul className="space-y-1 text-sm text-gray-700 ml-4">
                          <li>• Upgraded 340 miles of transmission infrastructure</li>
                          <li>• Installed 85 automated switching stations</li>
                          <li>• Deployed self-healing grid capabilities</li>
                          <li>• Implemented microgrid segmentation</li>
                          <li>• Enhanced interconnection with utility grids</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 3: Pilot & Rollout (Months 11-14)</h3>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs rounded">Phase A</span>
                        <div>
                          <p className="font-semibold text-navy text-sm mb-1">Pilot Phase (Months 11-12)</p>
                          <p className="text-sm text-gray-700">3 geographic regions selected (45,000 customers), full smart grid deployment and testing, battery storage integration validated</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs rounded">Phase B</span>
                        <div>
                          <p className="font-semibold text-navy text-sm mb-1">Full Deployment (Months 13-14)</p>
                          <p className="text-sm text-gray-700">Remaining 9 regions upgraded systematically, staggered rollout minimizing customer impact, 24/7 command center operational</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-serif text-navy mb-4">Phase 4: Optimization & Capability Building (Months 15-16+)</h3>
                    <p className="text-gray-700 mb-4">
                      Performance optimization through fine-tuning of AI algorithms, battery storage optimization for seasonal patterns, demand response program expansion, and comprehensive team development including certification of 45 engineers in smart grid technologies.
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
                      <p className="text-4xl font-light text-green-600">2.5M</p>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Carbon Offset</p>
                    <p className="text-xs text-gray-500">Annual tons CO₂ emissions offset</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-4xl font-light text-green-600 mb-2">92%</p>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Grid Efficiency</p>
                    <p className="text-xs text-gray-500">Up from 74%, industry-leading performance</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-4xl font-light text-green-600 mb-2">99.4%</p>
                    <p className="text-sm text-gray-600 font-semibold mb-2">System Reliability</p>
                    <p className="text-xs text-gray-500">From 91%, exceeding 99%+ standard</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Operational Excellence</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Grid efficiency: 74% → 92%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Response time: 12 min → 45 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Transmission losses: 26% → 8%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Energy waste: -67%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Business Impact</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">$22M annual cost savings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">250% renewable capacity increase</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Revenue: $420M → $680M annually</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Customer NPS: 58 → 84</span>
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
                        BrightPath transformed our vision of renewable energy from aspirational to operational reality. We went from struggling to manage intermittency to becoming the most reliable renewable provider in our markets. The smart grid technology they helped us implement isn't just reducing carbon—it's proving that renewable energy can be more reliable and cost-effective than traditional power. This transformation positioned us to lead the clean energy transition.
                      </p>
                      <div className="border-t border-white/20 pt-4">
                        <p className="font-semibold text-white">Dr. Sarah Chen</p>
                        <p className="text-white/60 text-sm">Chief Executive Officer, EcoEnergy Systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Insights */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif text-navy mb-6">Key Insights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-2 border-green-600 pl-4">
                    <h4 className="font-semibold text-navy mb-2">AI-Powered Forecasting</h4>
                    <p className="text-sm text-gray-600">Weather and consumption prediction enabled proactive grid management, reducing waste by 67%.</p>
                  </div>
                  <div className="border-l-2 border-green-600 pl-4">
                    <h4 className="font-semibold text-navy mb-2">Battery Storage Integration</h4>
                    <p className="text-sm text-gray-600">Strategic deployment of 180 MW storage turned intermittency from liability to competitive advantage.</p>
                  </div>
                  <div className="border-l-2 border-green-600 pl-4">
                    <h4 className="font-semibold text-navy mb-2">Customer Engagement</h4>
                    <p className="text-sm text-gray-600">Demand response programs created virtual capacity equivalent to new power plants at fraction of cost.</p>
                  </div>
                  <div className="border-l-2 border-green-600 pl-4">
                    <h4 className="font-semibold text-navy mb-2">Scalable Architecture</h4>
                    <p className="text-sm text-gray-600">Infrastructure designed to support 5,000 MW capacity without fundamental redesign.</p>
                  </div>
                </div>
              </section>

              {/* Environmental Leadership */}
              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-serif text-navy mb-6">Environmental Leadership</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Carbon Impact</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2.5M tons annual CO₂ offset</li>
                      <li>• Equivalent to 540,000 cars removed</li>
                      <li>• 92% clean energy delivery efficiency</li>
                      <li>• Zero emissions from operations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Recognition</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• EPA Green Power Leadership Award</li>
                      <li>• DOE Grid Modernization Excellence</li>
                      <li>• Governor's Environmental Achievement Award</li>
                      <li>• Featured in UN Climate Action Case Studies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="border-t border-navy/10 pt-12">
                <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-serif mb-4">Ready to Transform Your Energy Infrastructure?</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Learn how BrightPath can help you build sustainable, efficient energy systems that drive both environmental impact and business growth.
                  </p>
                  <button
                    onClick={handleContactOpen}
                    className="bg-gold text-navy px-8 py-4 rounded hover:bg-gold/90 transition-colors duration-200 font-semibold"
                  >
                    Schedule Your Energy Infrastructure Assessment
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
