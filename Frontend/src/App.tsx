import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'

import SearchField from './components/SearchField/SearchField'


function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const backendUrl: string = "http://localhost:5067/api/"
  async function loadAllEquipment() {
    try {
      const res = await fetch(backendUrl + "equipment")
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setItems(data) // <-- data is already the array
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function loadEquipmentByIndex(index: string) {
    try {
      const res = await fetch(backendUrl + "equipment/" + index)
      if (!res.ok) throw new Error(` HTTP ${res.status}`)
      const data = await res.json()
      console.log(data)
      setItems([data]) // <-- wrap single item in array so map works
    } catch (err: any) {
      setError(err.message)
    }
  }




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR YEE
        </p>

        <button onClick={loadAllEquipment} style={{ marginTop: '1rem' }}>
          Load Equipment
        </button>

        <button onClick={() => void loadEquipmentByIndex("quiver")}>Load Quiver</button>

        {error && <div style={{ color: 'red' }}>Error: {error}</div>}

        <ul>
          {items.map((i) => (
            <li key={i.index}>{i.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Enter the item you want:</h1>
        <SearchField onSearch={(q) => console.log("Search for:", q)} />
      </div>
    </>
  )
}

export default App
