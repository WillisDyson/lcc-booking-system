import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/resets.scss'
import './index.scss'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Ensure a <div id='root'> exists in index.html.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
