import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ArticleSustainableInnovation } from './pages/ArticleSustainableInnovation'

createRoot(document.getElementById('article-root')!).render(
  <StrictMode>
    <ArticleSustainableInnovation />
  </StrictMode>,
)
