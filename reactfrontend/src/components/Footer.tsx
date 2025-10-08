//src/components/Footer.tsx
// Import Link component for internal navigation
import { Link } from 'react-router-dom'
// Import footer-specific styles
import '../styles/footer.css'

// Footer component - appears at bottom of every page
function Footer() {
  // Get current year dynamically for copyright notice
  const currentYear = new Date().getFullYear()

  return (
    // Footer element with semantic HTML
    <footer className="footer">
      {/* Main footer content container - grid layout */}
      <div className="footer-container">
        
        {/* Section 1: About/Description */}
        <div className="footer-section">
          <h3>React Lern-App</h3>
          <p>
            Eine interaktive Plattform zum Lernen von React Hooks 
            mit TypeScript und Vite.
          </p>
          <p className="text-muted">
            Perfekt für Anfänger und Fortgeschrittene.
          </p>
        </div>

        {/* Section 2: Internal Navigation Links */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            {/* Link to home page */}
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* Link to useState learning page */}
            <li>
              <Link to="/react/usestate">useState Hook</Link>
            </li>
            {/* Link to useEffect learning page */}
            <li>
              <Link to="/react/useeffect">useEffect Hook</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: External Resources */}
        <div className="footer-section">
          <h3>Ressourcen</h3>
          <ul className="footer-links">
            {/* External link to React documentation */}
            <li>
              <a 
                href="https://react.dev" 
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
              >
                React Dokumentation
              </a>
            </li>
            {/* External link to TypeScript documentation */}
            <li>
              <a 
                href="https://www.typescriptlang.org/docs/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript Docs
              </a>
            </li>
            {/* External link to Vite documentation */}
            <li>
              <a 
                href="https://vitejs.dev" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Dokumentation
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media Links */}
        <div className="footer-section">
          <h3>Folge uns</h3>
          <div className="footer-social">
            {/* GitHub link with emoji icon */}
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub" // Accessibility label
            >
              💻
            </a>
            {/* Twitter link with emoji icon */}
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              🐦
            </a>
            {/* LinkedIn link with emoji icon */}
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              💼
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom section - copyright notice */}
      <div className="footer-bottom">
        <p>
          {/* Dynamic copyright year */}
          © {currentYear} React Lern-App. Erstellt mit{' '}
          {/* Heart emoji with custom color */}
          <span style={{ color: '#f56565' }}>❤️</span> und React.
        </p>
      </div>
    </footer>
  )
}

// Export Footer component as default
export default Footer