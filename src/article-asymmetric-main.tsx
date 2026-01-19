import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ArticleAsymmetricAdvantage } from './pages/ArticleAsymmetricAdvantage'

createRoot(document.getElementById('article-root')!).render(
  <StrictMode>
    <ArticleAsymmetricAdvantage />
  </StrictMode>,
)
