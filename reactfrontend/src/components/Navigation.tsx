//src/components/Navigation.tsx
// Import useState hook for managing component state
import { useState } from 'react'
// Import NavLink for active link styling and Link for navigation
import { NavLink, Link } from 'react-router-dom'
// Import navigation-specific styles
import '../styles/navigation.css'

// Navigation component - main navigation bar with dropdown menus
function Navigation() {
  // State for mobile menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // State for tracking which submenu is open (null = none open)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu and all submenus
  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }

  // Toggle specific submenu (close if already open, open if closed)
  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  return (
    // Main navigation element with sticky positioning
    <nav className="nav">
      {/* Navigation container with max-width */}
      <div className="nav-container">
        {/* Brand/Logo - links to home page */}
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span>⚛️</span>
          React Lern-App
        </Link>

        {/* Mobile menu toggle button (hamburger/close icon) */}
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Show X when open, hamburger when closed */}
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Main navigation list - hidden on mobile unless 'open' class added */}
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          {/* Home navigation item */}
          <li className="nav-item">
            <NavLink 
              to="/" 
              // Add 'active' class when on this route
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          {/* React Submenu - dropdown for React-related pages */}
          <li className="nav-item nav-item-dropdown">
            {/* Dropdown toggle button */}
            <button 
              className="nav-link nav-dropdown-toggle"
              onClick={() => toggleSubmenu('react')}
            >
              {/* Show up arrow when open, down arrow when closed */}
              React {openSubmenu === 'react' ? '▲' : '▼'}
            </button>
            {/* Dropdown menu - shown when this submenu is open */}
            <ul className={`nav-dropdown ${openSubmenu === 'react' ? 'open' : ''}`}>
              <li>
                <NavLink 
                  to="/react/usestate" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  useState
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/react/useeffect" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  useEffect
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/react/components" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Components
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Vite Submenu - dropdown for Vite build tool pages */}
          <li className="nav-item nav-item-dropdown">
            <button 
              className="nav-link nav-dropdown-toggle"
              onClick={() => toggleSubmenu('vite')}
            >
              Vite {openSubmenu === 'vite' ? '▲' : '▼'}
            </button>
            <ul className={`nav-dropdown ${openSubmenu === 'vite' ? 'open' : ''}`}>
              <li>
                <NavLink 
                  to="/vite/setup" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Setup
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/vite/build" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Build & Deploy
                </NavLink>
              </li>
            </ul>
          </li>

          {/* TypeScript Submenu - dropdown for TypeScript pages */}
          <li className="nav-item nav-item-dropdown">
            <button 
              className="nav-link nav-dropdown-toggle"
              onClick={() => toggleSubmenu('typescript')}
            >
              TypeScript {openSubmenu === 'typescript' ? '▲' : '▼'}
            </button>
            <ul className={`nav-dropdown ${openSubmenu === 'typescript' ? 'open' : ''}`}>
              <li>
                <NavLink 
                  to="/typescript/basics" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Basics
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/typescript/types" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Types & Interfaces
                </NavLink>
              </li>
            </ul>
          </li>

          {/* CSS Submenu - dropdown for CSS layout pages */}
          <li className="nav-item nav-item-dropdown">
            <button 
              className="nav-link nav-dropdown-toggle"
              onClick={() => toggleSubmenu('css')}
            >
              CSS {openSubmenu === 'css' ? '▲' : '▼'}
            </button>
            <ul className={`nav-dropdown ${openSubmenu === 'css' ? 'open' : ''}`}>
              <li>
                <NavLink 
                  to="/css/flexbox" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Flexbox
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/css/grid" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Grid
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// Export Navigation component as default
export default Navigation