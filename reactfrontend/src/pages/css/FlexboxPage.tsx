//src/pages/css/GridPage.tsx
import { useState } from 'react'

function FlexboxPage() {
  const [direction, setDirection] = useState<'row' | 'column'>('row')
  const [justify, setJustify] = useState<string>('flex-start')
  const [align, setAlign] = useState<string>('stretch')

  return (
    <>
      <h1 className="page-title">CSS Flexbox 📐</h1>

      {/* Was ist Flexbox */}
      <div className="lesson-box">
        <h2>Was ist Flexbox?</h2>
        <p>
          Flexbox ist ein eindimensionales Layout-Modell für CSS, das die 
          Anordnung von Elementen in einer Reihe oder Spalte erleichtert.
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>📏 Flexible Größenanpassung</li>
          <li>🔄 Einfache Ausrichtung</li>
          <li>📱 Responsive Layouts</li>
          <li>🎯 Perfekt für UI-Komponenten</li>
        </ul>
      </div>

      {/* Basis Setup */}
      <div className="lesson-box">
        <h2>1. Flexbox aktivieren</h2>
        <div className="code-box">
          <code>
{`.container {
  display: flex;  /* Aktiviert Flexbox */
}`}
          </code>
        </div>
        <p style={{ marginTop: '15px' }}>
          Sobald <code>display: flex</code> gesetzt ist, werden alle direkten 
          Kinder zu Flex-Items.
        </p>
      </div>

      {/* Flex Direction */}
      <div className="lesson-box">
        <h2>2. Flex Direction (Hauptachse)</h2>
        <div className="code-box">
          <code>
{`.container {
  display: flex;
  flex-direction: row;        /* horizontal (default) */
  flex-direction: column;     /* vertikal */
  flex-direction: row-reverse;    /* horizontal rückwärts */
  flex-direction: column-reverse; /* vertikal rückwärts */
}`}
          </code>
        </div>
        <div style={{ marginTop: '20px' }}>
          <label>
            <input 
              type="radio" 
              checked={direction === 'row'}
              onChange={() => setDirection('row')}
            /> Row
          </label>
          <label style={{ marginLeft: '15px' }}>
            <input 
              type="radio" 
              checked={direction === 'column'}
              onChange={() => setDirection('column')}
            /> Column
          </label>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: direction,
          gap: '10px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>1</div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px' }}>2</div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-danger)', borderRadius: '4px' }}>3</div>
        </div>
      </div>

      {/* Justify Content */}
      <div className="lesson-box">
        <h2>3. Justify Content (Hauptachse)</h2>
        <div className="code-box">
          <code>
{`.container {
  justify-content: flex-start;    /* Start (default) */
  justify-content: center;        /* Zentriert */
  justify-content: flex-end;      /* Ende */
  justify-content: space-between; /* Gleichmäßig verteilt */
  justify-content: space-around;  /* Mit Abstand außen */
  justify-content: space-evenly;  /* Gleichmäßiger Abstand */
}`}
          </code>
        </div>
        <select 
          value={justify} 
          onChange={(e) => setJustify(e.target.value)}
          style={{ marginTop: '15px', width: '200px' }}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
        <div style={{
          display: 'flex',
          justifyContent: justify,
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px',
          minHeight: '100px'
        }}>
          <div style={{ padding: '15px 30px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>1</div>
          <div style={{ padding: '15px 30px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px' }}>2</div>
          <div style={{ padding: '15px 30px', backgroundColor: 'var(--color-danger)', borderRadius: '4px' }}>3</div>
        </div>
      </div>

      {/* Align Items */}
      <div className="lesson-box">
        <h2>4. Align Items (Querachse)</h2>
        <div className="code-box">
          <code>
{`.container {
  align-items: stretch;      /* Volle Höhe (default) */
  align-items: flex-start;   /* Oben */
  align-items: center;       /* Zentriert */
  align-items: flex-end;     /* Unten */
  align-items: baseline;     /* Textbaseline */
}`}
          </code>
        </div>
        <select 
          value={align} 
          onChange={(e) => setAlign(e.target.value)}
          style={{ marginTop: '15px', width: '200px' }}
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="baseline">baseline</option>
        </select>
        <div style={{
          display: 'flex',
          alignItems: align,
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px',
          minHeight: '150px'
        }}>
          <div style={{ padding: '10px 20px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>Klein</div>
          <div style={{ padding: '30px 20px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px' }}>Mittel</div>
          <div style={{ padding: '50px 20px', backgroundColor: 'var(--color-danger)', borderRadius: '4px' }}>Groß</div>
        </div>
      </div>

      {/* Gap */}
      <div className="lesson-box">
        <h2>5. Gap (Abstand zwischen Items)</h2>
        <div className="code-box">
          <code>
{`.container {
  display: flex;
  gap: 20px;              /* Abstand zwischen allen Items */
  row-gap: 10px;          /* Nur vertikaler Abstand */
  column-gap: 20px;       /* Nur horizontaler Abstand */
}`}
          </code>
        </div>
        <div style={{
          display: 'flex',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>1</div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px' }}>2</div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-danger)', borderRadius: '4px' }}>3</div>
        </div>
      </div>

      {/* Flex Properties */}
      <div className="lesson-box">
        <h2>6. Flex Properties für Items</h2>
        <div className="code-box">
          <code>
{`.item {
  flex-grow: 1;     /* Wachsen bei freiem Platz */
  flex-shrink: 1;   /* Schrumpfen bei wenig Platz */
  flex-basis: 200px; /* Basis-Größe */
  
  /* Kurzschreibweise: */
  flex: 1;          /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 0 200px;  /* nicht wachsen, nicht schrumpfen, 200px */
}`}
          </code>
        </div>
        <div style={{
          display: 'flex',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <div style={{ flex: '0 0 100px', padding: '20px', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }}>
            Fix 100px
          </div>
          <div style={{ flex: '1', padding: '20px', backgroundColor: 'var(--color-secondary)', borderRadius: '4px' }}>
            Flexibel
          </div>
          <div style={{ flex: '2', padding: '20px', backgroundColor: 'var(--color-danger)', borderRadius: '4px' }}>
            2x größer
          </div>
        </div>
      </div>

      {/* Flex Wrap */}
      <div className="lesson-box">
        <h2>7. Flex Wrap (Umbruch)</h2>
        <div className="code-box">
          <code>
{`.container {
  flex-wrap: nowrap;    /* Kein Umbruch (default) */
  flex-wrap: wrap;      /* Umbruch erlaubt */
  flex-wrap: wrap-reverse; /* Umbruch rückwärts */
}`}
          </code>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div key={num} style={{ 
              padding: '20px 40px', 
              backgroundColor: 'var(--color-primary)', 
              borderRadius: '4px',
              minWidth: '150px'
            }}>
              Item {num}
            </div>
          ))}
        </div>
      </div>

      {/* Praktisches Beispiel */}
      <div className="lesson-box">
        <h2>8. Praktisches Beispiel: Navbar</h2>
        <div className="code-box">
          <code>
{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}`}
          </code>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Logo</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Erklärung */}
      <div className="lesson-box">
        <h2>📚 Flexbox Cheatsheet</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>display: flex</strong> → Aktiviert Flexbox auf Container</li>
          <li><strong>flex-direction</strong> → Hauptachse: row | column</li>
          <li><strong>justify-content</strong> → Ausrichtung auf Hauptachse</li>
          <li><strong>align-items</strong> → Ausrichtung auf Querachse</li>
          <li><strong>gap</strong> → Abstand zwischen Items (moderner als margin)</li>
          <li><strong>flex</strong> → Wachstum/Schrumpfen von Items</li>
          <li><strong>flex-wrap</strong> → Umbruch bei wenig Platz</li>
        </ul>
      </div>
    </>
  )
}

export default FlexboxPage