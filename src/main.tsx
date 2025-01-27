import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import { Reset } from './styles/reset.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <Reset/>
    <App />
  </StrictMode>,
)
