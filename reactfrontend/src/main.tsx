//src/main.tsx
// Import React's StrictMode for highlighting potential problems
import { StrictMode } from 'react'
// Import createRoot function to render React app
import { createRoot } from 'react-dom/client'
// Import main App component
import App from './App.tsx'
// Import global CSS styles
import './styles/global.css'

// Create root element and render app
createRoot(document.getElementById('root')!).render(
  // StrictMode wrapper for additional checks and warnings
  <StrictMode>
    {/* Main App component */}
    <App />
  </StrictMode>,
)
