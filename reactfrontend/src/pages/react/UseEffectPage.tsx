//src/pages/UseEffectPage.tsx
// Import useState and useEffect hooks
import { useState, useEffect } from 'react'

// UseEffectPage component - teaching useEffect hook with examples
function UseEffectPage() {
  // State for counter in Example 1
  const [count, setCount] = useState(0)
  // State for timer in Example 3
  const [seconds, setSeconds] = useState(0)
  // State to control timer running/stopped
  const [isRunning, setIsRunning] = useState(false)
  // State for window width tracking in Example 4
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Example 1: Effect runs on EVERY render (no dependency array)
  useEffect(() => {
    // Update document title whenever count changes
    document.title = `Count: ${count}`
  }) // No dependency array = runs after every render

  // Example 2: Effect runs ONCE on mount (empty dependency array)
  useEffect(() => {
    // This console.log only runs when component first mounts
    console.log('Komponente wurde gemountet!')
  }, []) // Empty array = only runs on mount

  // Example 3: Timer effect with cleanup function
  useEffect(() => {
    // Don't run if timer is not active
    if (!isRunning) return

    // Create interval that increments seconds every 1000ms
    const interval = setInterval(() => {
      // Use functional update to ensure we have latest state
      setSeconds(prev => prev + 1)
    }, 1000)

    // Cleanup function - runs before next effect and on unmount
    return () => {
      // Clear interval to prevent memory leaks
      clearInterval(interval)
    }
  }, [isRunning]) // Only re-run when isRunning changes

  // Example 4: Event listener with cleanup
  useEffect(() => {
    // Event handler function
    const handleResize = () => {
      // Update state with current window width
      setWindowWidth(window.innerWidth)
    }

    // Add event listener to window
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove event listener
    return () => {
      // Remove listener to prevent memory leaks
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array = setup once on mount, cleanup on unmount

  return (
    <>
      {/* Page title */}
      <h1 className="page-title">useEffect Hook</h1>

      {/* Example 1: Effect on Every Render */}
      <div className="lesson-box">
        <h2>1. Effect bei jedem Render</h2>
        {/* Code example showing useEffect without dependencies */}
        <div className="code-box">
          <code>
{`useEffect(() => {
  document.title = \`Count: \${count}\`
})`}
          </code>
        </div>
        <p>Der Document Title ändert sich mit jedem Count!</p>
        {/* Display current count */}
        <div className="demo-result">Count: {count}</div>
        {/* Buttons to modify count state */}
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>

      {/* Example 2: Effect Only on Mount */}
      <div className="lesson-box">
        <h2>2. Effect nur beim Mount</h2>
        {/* Code example showing useEffect with empty dependency array */}
        <div className="code-box">
          <code>
{`useEffect(() => {
  console.log('Komponente wurde gemountet!')
}, [])`}
          </code>
        </div>
        <p>Schau in die Browser-Konsole (F12) - die Nachricht erscheint nur einmal!</p>
        <p>Das leere Array [] bedeutet: nur beim ersten Render ausführen.</p>
      </div>

      {/* Example 3: Timer with Cleanup */}
      <div className="lesson-box">
        <h2>3. Timer mit Cleanup</h2>
        {/* Code example showing cleanup function */}
        <div className="code-box">
          <code>
{`useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => prev + 1)
  }, 1000)
  
  return () => clearInterval(interval)
}, [isRunning])`}
          </code>
        </div>
        {/* Display timer seconds */}
        <div className="demo-result">Timer: {seconds}s</div>
        {/* Toggle button for start/stop */}
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        {/* Reset button */}
        <button className="secondary" onClick={() => setSeconds(0)}>Reset</button>
      </div>

      {/* Example 4: Event Listener with Cleanup */}
      <div className="lesson-box">
        <h2>4. Event Listener mit Cleanup</h2>
        {/* Code example showing event listener cleanup */}
        <div className="code-box">
          <code>
{`useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])`}
          </code>
        </div>
        {/* Display current window width */}
        <div className="demo-result">
          Fensterbreite: {windowWidth}px
        </div>
        <p>Ändere die Fenstergröße, um die Breite zu aktualisieren!</p>
      </div>

      {/* Explanation Section - Key Concepts */}
      <div className="lesson-box">
        <h2>📚 Wichtige Konzepte</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Ohne Dependency Array:</strong> Läuft bei jedem Render</li>
          <li><strong>Leeres Array []:</strong> Läuft nur beim Mount (einmal)</li>
          <li><strong>Mit Dependencies [count]:</strong> Läuft wenn sich count ändert</li>
          <li><strong>Cleanup Function:</strong> return () =&gt; ... wird beim Unmount ausgeführt</li>
          <li><strong>Anwendungsfälle:</strong> API-Calls, Timer, Event Listener, Subscriptions</li>
        </ul>
      </div>
    </>
  )
}

// Export UseEffectPage component as default
export default UseEffectPage