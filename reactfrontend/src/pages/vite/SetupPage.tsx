//src/pages/vite/SetupPage.tsx
// SetupPage component - teaching Vite setup and configuration
function SetupPage() {
  return (
    <>
      {/* Page title */}
      <h1 className="page-title">Vite Setup ⚡</h1>

      {/* Section: What is Vite */}
      <div className="lesson-box">
        <h2>Was ist Vite?</h2>
        <p>
          Vite ist ein modernes Build-Tool für Web-Projekte, das extrem schnell ist.
          Es nutzt native ES-Modules im Browser und bietet:
        </p>
        {/* List of Vite features */}
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>⚡ Blitzschneller Dev-Server</li>
          <li>🔥 Hot Module Replacement (HMR)</li>
          <li>📦 Optimiertes Production-Build</li>
          <li>🔧 Zero-Config für TypeScript, JSX, CSS</li>
        </ul>
      </div>

      {/* Section: Creating new project */}
      <div className="lesson-box">
        <h2>1. Neues Projekt erstellen</h2>
        {/* Code example showing various package manager commands */}
        <div className="code-box">
          <code>
{`# With npm
npm create vite@latest

# With yarn
yarn create vite

# With pnpm
pnpm create vite

# Direct with template
npm create vite@latest my-app -- --template react-ts`}
          </code>
        </div>
        {/* Explanation of prompts */}
        <p style={{ marginTop: '15px' }}>
          Vite fragt dich nach:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Projektname</li>
          <li>Framework (React, Vue, Svelte, etc.)</li>
          <li>Variant (JavaScript, TypeScript)</li>
        </ul>
      </div>

      {/* Section: Installing dependencies */}
      <div className="lesson-box">
        <h2>2. Dependencies installieren</h2>
        {/* Commands to install dependencies */}
        <div className="code-box">
          <code>
{`cd my-app
npm install`}
          </code>
        </div>
      </div>

      {/* Section: Starting dev server */}
      <div className="lesson-box">
        <h2>3. Development Server starten</h2>
        {/* Command to start dev server */}
        <div className="code-box">
          <code>
{`npm run dev

# Server läuft auf:
# http://localhost:5173`}
          </code>
        </div>
        {/* List dev server features */}
        <p style={{ marginTop: '15px' }}>
          Der Dev-Server startet in Sekunden und bietet:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Instant Hot Module Replacement</li>
          <li>Schnelle Änderungen ohne Full-Reload</li>
          <li>Optimierte Entwickler-Experience</li>
        </ul>
      </div>

      {/* Section: Project structure */}
      <div className="lesson-box">
        <h2>4. Typische Projektstruktur</h2>
        {/* Visual representation of folder structure */}
        <div className="code-box">
          <code>
{`my-app/
├── node_modules/
├── public/              # Static assets
│   └── vite.svg
├── src/                 # Source code
│   ├── App.tsx
│   ├── main.tsx         # Entry point
│   └── styles/
├── index.html           # HTML template
├── package.json
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── .gitignore`}
          </code>
        </div>
      </div>

      {/* Section: Vite configuration */}
      <div className="lesson-box">
        <h2>5. Vite Konfiguration (vite.config.ts)</h2>
        {/* Example Vite config file */}
        <div className="code-box">
          <code>
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Custom port
    open: true         // Auto-open browser
  },
  build: {
    outDir: 'dist',    // Output folder
    sourcemap: true    // Generate source maps
  }
})`}
          </code>
        </div>
      </div>

      {/* Section: Important commands */}
      <div className="lesson-box">
        <h2>6. Wichtige Commands</h2>
        {/* List of common Vite commands */}
        <div className="code-box">
          <code>
{`# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type-check (TypeScript)
tsc --noEmit`}
          </code>
        </div>
      </div>

      {/* Explanation Section - Vite advantages */}
      <div className="lesson-box">
        <h2>📚 Vorteile von Vite</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Geschwindigkeit:</strong> Native ES-Modules = kein Bundling im Dev</li>
          <li><strong>HMR:</strong> Änderungen sofort sichtbar ohne Reload</li>
          <li><strong>TypeScript:</strong> Out-of-the-box Support</li>
          <li><strong>Optimiert:</strong> Rollup für Production Build</li>
          <li><strong>Modern:</strong> Fokus auf moderne Browser</li>
        </ul>
      </div>
    </>
  )
}

// Export SetupPage component as default
export default SetupPage