//src/pages/react/UseEffectPage.tsx
// Import useState hook for state management
import { useState } from 'react'

// UseStatePage component - teaching useState hook with examples
function UseStatePage() {
  // Example 1: Simple counter state (number)
  const [count, setCount] = useState(0)
  
  // Example 2: String state for text input
  const [name, setName] = useState('')
  
  // Example 3: Array state with TypeScript type annotation
  const [items, setItems] = useState<string[]>([])
  
  // State for new item input field
  const [newItem, setNewItem] = useState('')

  // Function to add new item to the list
  const addItem = () => {
    // Check if input is not empty (trim whitespace)
    if (newItem.trim()) {
      // Create new array with spread operator (immutability)
      setItems([...items, newItem])
      // Clear input field after adding
      setNewItem('')
    }
  }

  return (
    <>
      {/* Page title */}
      <h1 className="page-title">useState Hook</h1>

      {/* Example 1: Simple Counter */}
      <div className="lesson-box">
        <h2>1. Einfacher Counter</h2>
        {/* Code example showing useState syntax */}
        <div className="code-box">
          <code>{`const [count, setCount] = useState(0)`}</code>
        </div>
        {/* Display current count value */}
        <div className="demo-result">Count: {count}</div>
        {/* Button to increment count */}
        <button onClick={() => setCount(count + 1)}>+1</button>
        {/* Button to decrement count */}
        <button onClick={() => setCount(count - 1)}>-1</button>
        {/* Button to reset count to 0 */}
        <button className="secondary" onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* Example 2: String State with Input */}
      <div className="lesson-box">
        <h2>2. Text Input mit State</h2>
        {/* Code example for string state */}
        <div className="code-box">
          <code>{`const [name, setName] = useState('')`}</code>
        </div>
        {/* Controlled input - value from state, onChange updates state */}
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} // Update state on every keystroke
          placeholder="Gib deinen Namen ein"
        />
        {/* Display greeting or placeholder text */}
        <div className="demo-result">
          {name ? `Hallo, ${name}!` : 'Noch kein Name eingegeben'}
        </div>
      </div>

      {/* Example 3: Array State - Todo List */}
      <div className="lesson-box">
        <h2>3. Liste verwalten (Array State)</h2>
        {/* Code example showing TypeScript array type */}
        <div className="code-box">
          <code>{`const [items, setItems] = useState<string[]>([])`}</code>
        </div>
        {/* Input field for new item */}
        <input 
          type="text" 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Neues Item"
          // Add item on Enter key press
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
        />
        {/* Button to add item to list */}
        <button onClick={addItem}>Hinzufügen</button>
        {/* Button to clear entire list */}
        <button className="danger" onClick={() => setItems([])}>Alle löschen</button>
        
        {/* Display list or empty message */}
        <div className="demo-result">
          {items.length === 0 ? (
            // Show message when list is empty
            <p>Keine Items vorhanden</p>
          ) : (
            // Map through items array to render list
            <ul style={{ textAlign: 'left', listStyle: 'none' }}>
              {items.map((item, index) => (
                // Each list item needs unique key (using index here)
                <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>
                  {item}
                  {/* Delete button for each item */}
                  <button 
                    className="danger" 
                    // Filter out item at this index to delete it
                    onClick={() => setItems(items.filter((_, i) => i !== index))}
                    style={{ marginLeft: '10px', padding: '5px 10px', fontSize: '14px' }}
                  >
                    Löschen
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Explanation Section - Key Concepts */}
      <div className="lesson-box">
        <h2>📚 Wichtige Konzepte</h2>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>State ist lokal:</strong> Jede Komponente hat ihren eigenen State</li>
          <li><strong>Immutability:</strong> Bei Arrays/Objekten immer neue Kopien erstellen</li>
          <li><strong>setState löst Re-Render aus:</strong> Die Komponente wird neu gezeichnet</li>
          <li><strong>TypeScript:</strong> Mit &lt;string[]&gt; den Typ definieren</li>
        </ul>
      </div>
    </>
  )
}

// Export UseStatePage component as default
export default UseStatePage