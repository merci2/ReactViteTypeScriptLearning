//src/pages/vite/BuildPage.tsx
function BuildPage() {
  return (
    <>
      <h1 className="page-title">Vite Build & Deploy 🚀</h1>

      {/* Production Build */}
      <div className="lesson-box">
        <h2>1. Production Build erstellen</h2>
        <div className="code-box">
          <code>
{`# Build für Production
npm run build

# Output in 'dist' Folder:
dist/
├── assets/
│   ├── index-abc123.js
│   ├── index-def456.css
│   └── ...
└── index.html`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          Der Build-Prozess:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Minifiziert JavaScript und CSS</li>
          <li>Optimiert Assets (Bilder, Fonts)</li>
          <li>Generiert Hash-Namen für Cache-Busting</li>
          <li>Tree-Shaking für kleinere Bundles</li>
        </ul>
      </div>

      {/* Preview */}
      <div className="lesson-box">
        <h2>2. Production Build testen</h2>
        <div className="code-box">
          <code>
{`# Preview des Production Builds
npm run preview

# Läuft auf: http://localhost:4173`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          Wichtig: Immer das Production Build testen, bevor du deployest!
        </p>
      </div>

      {/* Build Optimierung */}
      <div className="lesson-box">
        <h2>3. Build-Optimierung (vite.config.ts)</h2>
        <div className="code-box">
          <code>
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,          // Keine Source Maps in Prod
    minify: 'terser',          // Bessere Minification
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom']
        }
      }
    }
  }
})`}
          </code>
        </div>
      </div>

      {/* Deploy auf Vercel */}
      <div className="lesson-box">
        <h2>4. Deploy auf Vercel</h2>
        <div className="code-box">
          <code>
{`# 1. Vercel CLI installieren
npm i -g vercel

# 2. In Projektordner wechseln
cd my-app

# 3. Deploy
vercel

# Folge den Anweisungen:
# - Login mit GitHub/GitLab/Bitbucket
# - Projekt verknüpfen
# - Automatisches Deploy bei Git Push`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          Vercel erkennt Vite automatisch und konfiguriert alles!
        </p>
      </div>

      {/* Deploy auf Netlify */}
      <div className="lesson-box">
        <h2>5. Deploy auf Netlify</h2>
        <div className="code-box">
          <code>
{`# 1. Netlify CLI installieren
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Build und Deploy
netlify deploy --prod

# Build Command: npm run build
# Publish Directory: dist`}
          </code>
        </div>
      </div>

      {/* Deploy auf GitHub Pages */}
      <div className="lesson-box">
        <h2>6. Deploy auf GitHub Pages</h2>
        <div className="code-box">
          <code>
{`# 1. In vite.config.ts Base setzen
export default defineConfig({
  base: '/repo-name/',  // Dein Repository Name
  // ... rest
})

# 2. gh-pages Package installieren
npm install -D gh-pages

# 3. Script in package.json hinzufügen
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# 4. Deploy
npm run deploy`}
          </code>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="lesson-box">
        <h2>7. Environment Variables</h2>
        <div className="code-box">
          <code>
{`# .env Datei erstellen
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-key-here

# In Code verwenden:
const apiUrl = import.meta.env.VITE_API_URL

# Wichtig: 
# - Prefix VITE_ ist notwendig!
# - Niemals Secrets in .env committen
# - Nutze .env.local für lokale Secrets`}
          </code>
        </div>
      </div>

      {/* Erklärung */}
      <div className="lesson-box">
        <h2>📚 Best Practices</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Immer testen:</strong> Nutze preview vor dem Deploy</li>
          <li><strong>Chunk-Splitting:</strong> Große Libraries separat bundeln</li>
          <li><strong>Source Maps:</strong> In Production deaktivieren</li>
          <li><strong>Environment Variables:</strong> VITE_ Prefix verwenden</li>
          <li><strong>CI/CD:</strong> Automatisches Deploy bei Git Push einrichten</li>
          <li><strong>.gitignore:</strong> dist/, node_modules/, .env.local</li>
        </ul>
      </div>
    </>
  )
}

export default BuildPage