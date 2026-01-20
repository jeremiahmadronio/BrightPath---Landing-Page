import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Share2, Bookmark } from 'lucide-react'

interface ArticleLayoutProps {
  children: ReactNode
  showBookmark?: boolean
  showShare?: boolean
}

export function ArticleLayout({ children, showBookmark = true, showShare = true }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-navy/10 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-navy hover:text-gold transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            {showBookmark && (
              <button className="text-navy hover:text-gold transition-colors duration-200">
                <Bookmark className="w-5 h-5" />
              </button>
            )}
            {showShare && (
              <button className="text-navy hover:text-gold transition-colors duration-200">
                <Share2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <article className="pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {children}
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
  )
}
