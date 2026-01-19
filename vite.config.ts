  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        article: resolve(__dirname, 'article-sustainable-innovation.html'),
        articleAsymmetric: resolve(__dirname, 'article-asymmetric-advantage.html'),
        articleEthics: resolve(__dirname, 'article-digital-ethics.html'),
        articleLeadership: resolve(__dirname, 'article-leadership.html'),
        caseStudyLogistics: resolve(__dirname, 'case-study-global-logistics.html'),
        caseStudyFintech: resolve(__dirname, 'case-study-fintech.html'),
        caseStudyEcoenergy: resolve(__dirname, 'case-study-ecoenergy.html'),
        serviceStrategic: resolve(__dirname, 'service-strategic-consulting.html'),
        serviceDigital: resolve(__dirname, 'service-digital-transformation.html'),
        serviceInnovation: resolve(__dirname, 'service-innovation-labs.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
})
