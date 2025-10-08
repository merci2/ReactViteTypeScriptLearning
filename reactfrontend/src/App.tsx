//src/App.tsx

// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Import custom components
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Import main page
import HomePage from './pages/HomePage'

// Import React pages
import UseStatePage from './pages/react/UseStatePage'
import UseEffectPage from './pages/react/UseEffectPage'
import ComponentsPage from './pages/react/ComponentsPage'

// Import Vite pages
import SetupPage from './pages/vite/SetupPage'
import BuildPage from './pages/vite/BuildPage'

// Import TypeScript pages
import BasicsPage from './pages/typescript/BasicsPage'
import TypesPage from './pages/typescript/TypesPage'

// Import CSS pages
import FlexboxPage from './pages/css/FlexboxPage'
import GridPage from './pages/css/GridPage'

// Main App component
function App() {
  return (
    // BrowserRouter enables routing in the app
    <BrowserRouter>
      {/* Navigation component - sticky header */}
      <Navigation />
      
      {/* Main content container */}
      <div className="container">
        {/* Routes wrapper for all page routes */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />
          
          {/* React Routes - all React-related learning pages */}
          <Route path="/react/usestate" element={<UseStatePage />} />
          <Route path="/react/useeffect" element={<UseEffectPage />} />
          <Route path="/react/components" element={<ComponentsPage />} />
          
          {/* Vite Routes - build tool learning pages */}
          <Route path="/vite/setup" element={<SetupPage />} />
          <Route path="/vite/build" element={<BuildPage />} />
          
          {/* TypeScript Routes - type system learning pages */}
          <Route path="/typescript/basics" element={<BasicsPage />} />
          <Route path="/typescript/types" element={<TypesPage />} />
          
          {/* CSS Routes - styling and layout learning pages */}
          <Route path="/css/flexbox" element={<FlexboxPage />} />
          <Route path="/css/grid" element={<GridPage />} />
        </Routes>
      </div>
      
      {/* Footer component - bottom of page */}
      <Footer />
    </BrowserRouter>
  )
}

// Export App component as default
export default App