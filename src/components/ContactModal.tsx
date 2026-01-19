import { useState, useEffect } from 'react'
import { X, Send, Clock, Shield, CheckCircle2, Calendar, Upload } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedService?: string
}

export function ContactModal({ isOpen, onClose, preSelectedService }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    service: preSelectedService || '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    newsletter: false,
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, isSubmitting])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        newsletter: false,
      })
      setSelectedFile(null)
      onClose()
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Limit to 10MB
      if (file.size <= 10 * 1024 * 1024) {
        setSelectedFile(file)
      } else {
        alert('File size must be less than 10MB')
      }
    }
  }

  if (!isOpen) return null

  return (
      <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 10000, paddingTop: '60px' }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
        style={{ top: '60px' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 10001 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right m-4 sm:m-6 p-2 text-navy/60 hover:text-navy hover:bg-navy/5 rounded-full transition-all duration-200 z-50 bg-white shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left Side - Info */}
          <div className="lg:col-span-2 bg-navy text-white p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">
              Let's Start Your
              <span className="block text-gold italic">Transformation</span>
            </h2>
            
            <p className="text-white/70 mb-8 leading-relaxed">
              Partner with strategists who deliver quantifiable results. We'll discuss your growth objectives and chart a path forward.
            </p>

            {/* What to Expect */}
            <div className="space-y-6 mb-10">
              <h3 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">
                What to Expect
              </h3>
              
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">24-Hour Response</p>
                  <p className="text-white/60 text-sm">
                    We'll reach out within one business day
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">No-Obligation Consultation</p>
                  <p className="text-white/60 text-sm">
                    Free 30-minute discovery call to explore possibilities
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Your Privacy Matters</p>
                  <p className="text-white/60 text-sm">
                    All information is kept strictly confidential
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                Or Contact Us Directly
              </p>
              <a
                href="mailto:hello@brightpath.com"
                className="text-white hover:text-gold transition-colors text-lg font-serif block mb-2"
              >
                hello@brightpath.com
              </a>
              <a
                href="tel:+14155551234"
                className="text-white/70 hover:text-gold transition-colors block"
              >
                +1 (415) 555-1234
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif text-navy mb-4">Thank You!</h3>
                <p className="text-gray-600 max-w-md">
                  We've received your message and will be in touch within 24 hours to discuss your transformation journey.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-navy mb-2">
                    Tell Us About Your Needs
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll schedule your consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-navy mb-2">
                    Industry/Sector *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology & Software</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare & Life Sciences</option>
                    <option value="manufacturing">Manufacturing & Industrial</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="energy">Energy & Utilities</option>
                    <option value="consulting">Professional Services</option>
                    <option value="nonprofit">Non-Profit & Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                  >
                    <option value="">Which service interests you?</option>
                    <option value="strategic-consulting">Strategic Consulting</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="innovation-labs">Innovation Labs</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                {/* Calendar Integration */}
                <div className="border-t border-navy/10 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-gold" />
                    <h4 className="text-sm font-semibold text-navy">
                      Preferred Consultation Time
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-navy mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-semibold text-navy mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy"
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="late-afternoon">Late Afternoon (3:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">
                    * Times shown in your local timezone. We'll confirm availability via email.
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Tell Us About Your Challenges *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white text-navy resize-none"
                    placeholder="Describe your current challenges, goals, or what you're looking to achieve..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Supporting Documents <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-3 w-full px-4 py-3 border-2 border-dashed border-navy/20 rounded-sm hover:border-gold transition-colors cursor-pointer bg-gray-50"
                    >
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedFile ? selectedFile.name : 'Upload RFP, Brief, or Relevant Documents'}
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Accepted formats: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX (Max 10MB)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-gold border-navy/20 rounded focus:ring-gold"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for insights on strategic transformation, innovation trends, and exclusive thought leadership content.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white py-4 rounded-sm hover:bg-gold transition-colors duration-200 font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Schedule Your Consultation
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}
