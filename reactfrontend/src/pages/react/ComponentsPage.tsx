//src/pages/react/ComponentsPage.tsx
// Import useState hook for managing state
import { useState } from 'react'

// Example 1: Simple component with Props
// Define TypeScript interface for button props
interface ButtonProps {
  text: string; // Button text content
  onClick: () => void; // Click handler function
  variant?: 'primary' | 'secondary' | 'danger'; // Optional style variant
}

// CustomButton component - reusable button with props
function CustomButton({ text, onClick, variant = 'primary' }: ButtonProps) {
  return (
    // Render button with className matching variant
    <button className={variant} onClick={onClick}>
      {text}
    </button>
  )
}

// Example 2: Component with Children prop
// Define interface for Card component props
interface CardProps {
  title: string; // Card title
  children: React.ReactNode; // Any valid React content (JSX, text, etc.)
}

// Card component - wrapper with title and flexible content
function Card({ title, children }: CardProps) {
  return (
    // Render card container
    <div className="lesson-box">
      <h3>{title}</h3>
      {/* Render whatever is passed as children */}
      {children}
    </div>
  )
}

// ComponentsPage - main component teaching React component concepts
function ComponentsPage() {
  // State for tracking button clicks
  const [clickCount, setClickCount] = useState(0)
  // State for message input example
  const [message, setMessage] = useState('')

  return (
    <>
      {/* Page title */}
      <h1 className="page-title">React Components</h1>

      {/* Example 1: Simple Component with Props */}
      <div className="lesson-box">
        <h2>1. Einfache Komponente mit Props</h2>
        {/* Code example showing component definition */}
        <div className="code-box">
          <code>
{`interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

function CustomButton({ text, onClick, variant }: ButtonProps) {
  return <button className={variant} onClick={onClick}>
    {text}
  </button>
}`}
          </code>
        </div>
        {/* Display current click count */}
        <div className="demo-result">Clicks: {clickCount}</div>
        {/* Use CustomButton component with different props */}
        <CustomButton 
          text="Primary Button" 
          onClick={() => setClickCount(clickCount + 1)} 
        />
        <CustomButton 
          text="Secondary Button" 
          onClick={() => setClickCount(clickCount + 2)} 
          variant="secondary"
        />
        <CustomButton 
          text="Reset" 
          onClick={() => setClickCount(0)} 
          variant="danger"
        />
      </div>

      {/* Example 2: Component with Children */}
      <div className="lesson-box">
        <h2>2. Komponente mit Children</h2>
        {/* Code example showing children prop */}
        <div className="code-box">
          <code>
{`interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}`}
          </code>
        </div>
        {/* Use Card component with different children content */}
        <Card title="Beispiel Card 1">
          <p>Dies ist der Inhalt der ersten Card.</p>
          <p>Children können beliebiger Content sein!</p>
        </Card>
        <Card title="Beispiel Card 2">
          <ul style={{ marginLeft: '20px' }}>
            <li>Flexibel</li>
            <li>Wiederverwendbar</li>
            <li>Type-Safe</li>
          </ul>
        </Card>
      </div>

      {/* Example 3: Component with Local State and Events */}
      <div className="lesson-box">
        <h2>3. Komponente mit lokalem State</h2>
        {/* Code example showing component with state */}
        <div className="code-box">
          <code>
{`function MessageInput() {
  const [message, setMessage] = useState('')
  
  return (
    <div>
      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Nachricht: {message}</p>
    </div>
  )
}`}
          </code>
        </div>
        {/* Controlled input - value synced with state */}
        <input 
          type="text"
          value={message}
          // Update state on every input change
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Gib eine Nachricht ein..."
        />
        {/* Display message or placeholder */}
        <div className="demo-result">
          {message || 'Keine Nachricht'}
        </div>
      </div>

      {/* Explanation Section - Key Concepts */}
      <div className="lesson-box">
        <h2>📚 Wichtige Konzepte</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Props:</strong> Daten von Parent an Child übergeben</li>
          <li><strong>Children:</strong> Verschachtelte Inhalte ermöglichen</li>
          <li><strong>TypeScript Interfaces:</strong> Props typisieren für Type-Safety</li>
          <li><strong>Optional Props:</strong> Mit ? markieren (z.B. variant?)</li>
          <li><strong>Default Values:</strong> Mit = setzen in Destructuring</li>
          <li><strong>React.ReactNode:</strong> Typ für Children (JSX, String, Number, etc.)</li>
        </ul>
      </div>
    </>
  )
}

// Export ComponentsPage component as default
export default ComponentsPage