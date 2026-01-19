import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ArticleDigitalEthics } from './pages/ArticleDigitalEthics'

createRoot(document.getElementById('article-root')!).render(
  <StrictMode>
    <ArticleDigitalEthics />
  </StrictMode>,
)
