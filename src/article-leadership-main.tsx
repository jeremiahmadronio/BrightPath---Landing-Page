import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ArticleHumanCentricLeadership } from './pages/ArticleHumanCentricLeadership'

createRoot(document.getElementById('article-root')!).render(
  <StrictMode>
    <ArticleHumanCentricLeadership />
  </StrictMode>,
)
