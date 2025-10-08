//src/pages/css/GridPage.tsx
import { useState } from 'react'

function GridPage() {
  const [columns, setColumns] = useState(3)
  const [gap, setGap] = useState(20)

  return (
    <>
      <h1 className="page-title">CSS Grid 🎨</h1>

      {/* Was ist Grid */}
      <div className="lesson-box">
        <h2>Was ist CSS Grid?</h2>
        <p>
          CSS Grid ist ein zweidimensionales Layout-System, das die Anordnung 
          von Elementen in Zeilen UND Spalten gleichzeitig ermöglicht.
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>📊 Zweidimensionales Layout</li>
          <li>🎯 Präzise Platzierung</li>
          <li>📱 Responsive Layouts</li>
          <li>🏗️ Perfekt für komplexe Layouts</li>
        </ul>
      </div>

      {/* Basis Setup */}
      <div className="lesson-box">
        <h2>1. Grid aktivieren</h2>
        <div className="code-box">
          <code>
{`.container {
  display: grid;  /* Aktiviert Grid */
}`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          Mit <code>display: grid</code> werden alle direkten Kinder zu Grid-Items.
        </p>
      </div>

      {/* Grid Template Columns */}
      <div className="lesson-box">
        <h2>2. Grid Template Columns (Spalten)</h2>
        <div className="code-box">
          <code>
{`.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;  /* 3 Spalten à 200px */
  grid-template-columns: 1fr 1fr 1fr;        /* 3 gleiche Spalten */
  grid-template-columns: 1fr 2fr 1fr;        /* Mittlere doppelt so breit */
  grid-template-columns: repeat(3, 1fr);     /* 3 gleiche Spalten */
  grid-template-columns: auto 1fr auto;      /* Außen auto, Mitte flexibel */
}`}
          </code>
        </div>
        <div style={{ marginTop: '20px' }}>
          <label>Spalten: {columns}</label>
          <input 
            type="range" 
            min="1" 
            max="6" 
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            style={{ marginLeft: '10px', width: '200px' }}
          />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '10px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <div key={num} style={{ 
              padding: '30px', 
              backgroundColor: 'var(--color-primary)', 
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Grid Gap */}
      <div className="lesson-box">
        <h2>3. Grid Gap (Abstand)</h2>
        <div className="code-box">
          <code>
{`.container {
  display: grid;
  gap: 20px;              /* Abstand zwischen allen Items */
  row-gap: 10px;          /* Nur vertikaler Abstand */
  column-gap: 20px;       /* Nur horizontaler Abstand */
}`}
          </code>
        </div>
        <div style={{ marginTop: '20px' }}>
          <label>Gap: {gap}px</label>
          <input 
            type="range" 
            min="0" 
            max="50" 
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            style={{ marginLeft: '10px', width: '200px' }}
          />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: `${gap}px`,
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div key={num} style={{ 
              padding: '30px', 
              backgroundColor: 'var(--color-secondary)', 
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Grid Template Areas */}
      <div className="lesson-box">
        <h2>4. Grid Template Areas (Named Areas)</h2>
        <div className="code-box">
          <code>
{`.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}
          </code>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateAreas: `
            "header header header"
            "sidebar main main"
            "footer footer footer"
          `,
          gridTemplateColumns: '200px 1fr 1fr',
          gridTemplateRows: 'auto 1fr auto',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px',
          minHeight: '300px'
        }}>
          <div style={{ gridArea: 'header', padding: '20px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>
            Header
          </div>
          <div style={{ gridArea: 'sidebar', padding: '20px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px' }}>
            Sidebar
          </div>
          <div style={{ gridArea: 'main', padding: '20px', backgroundColor: 'var(--color-danger)', borderRadius: '4px' }}>
            Main Content
          </div>
          <div style={{ gridArea: 'footer', padding: '20px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>
            Footer
          </div>
        </div>
      </div>

      {/* Grid Column/Row */}
      <div className="lesson-box">
        <h2>5. Grid Column & Row Spanning</h2>
        <div className="code-box">
          <code>
{`.item {
  grid-column: 1 / 3;     /* Spalte 1 bis 3 */
  grid-column: span 2;    /* 2 Spalten überspannen */
  
  grid-row: 1 / 3;        /* Zeile 1 bis 3 */
  grid-row: span 2;       /* 2 Zeilen überspannen */
}`}
          </code>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <div style={{ 
            gridColumn: 'span 2', 
            padding: '30px', 
            backgroundColor: 'var(--color-primary)', 
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            Span 2 Spalten
          </div>
          <div style={{ padding: '30px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px', textAlign: 'center' }}>3</div>
          <div style={{ padding: '30px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px', textAlign: 'center' }}>4</div>
          <div style={{ padding: '30px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px', textAlign: 'center' }}>5</div>
          <div style={{ 
            gridColumn: 'span 3', 
            padding: '30px', 
            backgroundColor: 'var(--color-danger)', 
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            Span 3 Spalten
          </div>
        </div>
      </div>

      {/* Auto-fit & Auto-fill */}
      <div className="lesson-box">
        <h2>6. Responsive Grid (auto-fit / auto-fill)</h2>
        <div className="code-box">
          <code>
{`.container {
  display: grid;
  /* Automatisch so viele Spalten wie möglich, min 200px */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}`}
          </code>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div key={num} style={{ 
              padding: '30px', 
              backgroundColor: 'var(--color-primary)', 
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              Card {num}
            </div>
          ))}
        </div>
        <p style={{ marginTop: '15px', color: 'var(--color-text-muted)' }}>
          💡 Ändere die Fenstergröße - Grid passt sich automatisch an!
        </p>
      </div>

      {/* Erklärung */}
      <div className="lesson-box">
        <h2>📚 Grid Cheatsheet</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>display: grid</strong> → Aktiviert Grid auf Container</li>
          <li><strong>grid-template-columns</strong> → Spalten definieren</li>
          <li><strong>grid-template-rows</strong> → Zeilen definieren</li>
          <li><strong>fr</strong> → Flexible Einheit (fraction)</li>
          <li><strong>repeat()</strong> → Wiederholung von Spalten/Zeilen</li>
          <li><strong>grid-template-areas</strong> → Benannte Bereiche</li>
          <li><strong>span</strong> → Über mehrere Spalten/Zeilen</li>
          <li><strong>auto-fit/auto-fill</strong> → Responsive Grids</li>
        </ul>
      </div>

      {/* Grid vs Flexbox */}
      <div className="lesson-box" style={{ borderColor: 'var(--color-secondary)' }}>
        <h2>🤔 Grid vs Flexbox - Wann was?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <div>
            <h3 style={{ color: 'var(--color-primary)' }}>Flexbox nutzen für:</h3>
            <ul style={{ marginLeft: '20px' }}>
              <li>Navigation Bars</li>
              <li>Buttons nebeneinander</li>
              <li>Listen</li>
              <li>Eindimensionale Layouts</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-secondary)' }}>Grid nutzen für:</h3>
            <ul style={{ marginLeft: '20px' }}>
              <li>Komplexe Page-Layouts</li>
              <li>Card-Grids</li>
              <li>Dashboards</li>
              <li>Zweidimensionale Layouts</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridPage