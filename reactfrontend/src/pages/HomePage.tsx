//src/pages/HomePage.tsx
// Import Link component for internal navigation
import { Link } from 'react-router-dom'

// HomePage component - main landing page with overview of all sections
function HomePage() {
  return (
    <>
      {/* Main page title */}
      <h1 className="page-title">React + TypeScript + Vite Lern-App 🚀</h1>
      
      {/* Welcome section */}
      <div className="lesson-box">
        <h2>Willkommen zur vollständigen Web-Development Lern-Plattform!</h2>
        <p>
          Diese App hilft dir, moderne Web-Entwicklung mit den wichtigsten 
          Technologien zu lernen: React, TypeScript, Vite und CSS.
        </p>
      </div>

      {/* React Section - overview of React learning content */}
      <div className="lesson-box">
        <h2>⚛️ React</h2>
        <p>Lerne die fundamentalen React Konzepte und Hooks:</p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          {/* Link to useState lesson */}
          <li>
            <Link to="/react/usestate" style={{ color: 'var(--color-primary)' }}>
              useState
            </Link> - State-Management in Komponenten
          </li>
          {/* Link to useEffect lesson */}
          <li>
            <Link to="/react/useeffect" style={{ color: 'var(--color-primary)' }}>
              useEffect
            </Link> - Side Effects und Lifecycle
          </li>
          {/* Link to Components lesson */}
          <li>
            <Link to="/react/components" style={{ color: 'var(--color-primary)' }}>
              Components
            </Link> - Komponenten-Architektur
          </li>
        </ul>
      </div>

      {/* Vite Section - overview of Vite build tool content */}
      <div className="lesson-box">
        <h2>⚡ Vite</h2>
        <p>Moderne Build-Tools und Development-Setup:</p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          {/* Link to Vite Setup lesson */}
          <li>
            <Link to="/vite/setup" style={{ color: 'var(--color-primary)' }}>
              Setup
            </Link> - Projekt-Initialisierung und Konfiguration
          </li>
          {/* Link to Vite Build lesson */}
          <li>
            <Link to="/vite/build" style={{ color: 'var(--color-primary)' }}>
              Build & Deploy
            </Link> - Production-Ready bauen
          </li>
        </ul>
      </div>

      {/* TypeScript Section - overview of TypeScript content */}
      <div className="lesson-box">
        <h2>📘 TypeScript</h2>
        <p>Type-Safety für robuste Anwendungen:</p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          {/* Link to TypeScript Basics lesson */}
          <li>
            <Link to="/typescript/basics" style={{ color: 'var(--color-primary)' }}>
              Basics
            </Link> - Grundlagen und erste Schritte
          </li>
          {/* Link to TypeScript Types lesson */}
          <li>
            <Link to="/typescript/types" style={{ color: 'var(--color-primary)' }}>
              Types & Interfaces
            </Link> - Fortgeschrittene Typen
          </li>
        </ul>
      </div>

      {/* CSS Section - overview of CSS layout content */}
      <div className="lesson-box">
        <h2>🎨 CSS</h2>
        <p>Modernes Layout und Styling:</p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          {/* Link to Flexbox lesson */}
          <li>
            <Link to="/css/flexbox" style={{ color: 'var(--color-primary)' }}>
              Flexbox
            </Link> - Flexible Box Layout
          </li>
          {/* Link to Grid lesson */}
          <li>
            <Link to="/css/grid" style={{ color: 'var(--color-primary)' }}>
              Grid
            </Link> - CSS Grid Layout
          </li>
        </ul>
      </div>

      {/* Quick Start Section - code example with syntax highlighting */}
      <div className="lesson-box" style={{ borderColor: 'var(--color-secondary)' }}>
        <h2>🚀 Quick Start</h2>
        {/* Code example box with React + TypeScript example */}
        <div className="code-box">
          <code>
{`// Typisches React + TypeScript Beispiel
import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<User>({ 
    name: 'Max', 
    age: 25 
  });
  
  return <h1>Hallo, {user.name}!</h1>
}`}
          </code>
        </div>
        {/* Call to action */}
        <p style={{ marginTop: '20px' }}>
          👉 Nutze die Navigation oben, um zu den verschiedenen Lektionen zu gelangen.
        </p>
      </div>
    </>
  )
}

// Export HomePage component as default
export default HomePage