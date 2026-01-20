import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Pages
import { Home } from './pages/Home'

// Articles
import { ArticleSustainableInnovation } from './pages/articles/SustainableInnovation'
import { ArticleAsymmetricAdvantage } from './pages/articles/AsymmetricAdvantage'
import { ArticleDigitalEthics } from './pages/articles/DigitalEthics'
import { ArticleHumanCentricLeadership } from './pages/articles/HumanCentricLeadership'

// Case Studies
import { CaseStudyGlobalLogistics } from './pages/case-studies/GlobalLogistics'
import { CaseStudyFinTech } from './pages/case-studies/FinTech'
import { CaseStudyEcoEnergy } from './pages/case-studies/EcoEnergy'

// Services
import { ServiceStrategicConsulting } from './pages/services/StrategicConsulting'
import { ServiceDigitalTransformation } from './pages/services/DigitalTransformation'
import { ServiceInnovationLabs } from './pages/services/InnovationLabs'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        
        {/* Articles */}
        <Route path="/articles/sustainable-innovation" element={<ArticleSustainableInnovation />} />
        <Route path="/articles/asymmetric-advantage" element={<ArticleAsymmetricAdvantage />} />
        <Route path="/articles/digital-ethics" element={<ArticleDigitalEthics />} />
        <Route path="/articles/human-centric-leadership" element={<ArticleHumanCentricLeadership />} />
        
        {/* Case Studies */}
        <Route path="/case-studies/global-logistics" element={<CaseStudyGlobalLogistics />} />
        <Route path="/case-studies/fintech" element={<CaseStudyFinTech />} />
        <Route path="/case-studies/ecoenergy" element={<CaseStudyEcoEnergy />} />
        
        {/* Services */}
        <Route path="/services/strategic-consulting" element={<ServiceStrategicConsulting />} />
        <Route path="/services/digital-transformation" element={<ServiceDigitalTransformation />} />
        <Route path="/services/innovation-labs" element={<ServiceInnovationLabs />} />
        
        {/* Fallback - redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}