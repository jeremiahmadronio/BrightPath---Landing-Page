import { useState } from 'react'
import { X, Mail, CheckCircle } from 'lucide-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)

    // Reset after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gold/10 rounded-full">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-navy">
                    Subscribe to Our Newsletter
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get the latest insights on strategy, innovation, and leadership delivered directly to your inbox. Join our community of forward-thinking executives.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-navy/20 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-navy hover:bg-navy/90 text-white py-3 rounded-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </form>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif text-navy mb-2">
                Welcome Aboard!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thank you for subscribing. Check your inbox for a confirmation email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
