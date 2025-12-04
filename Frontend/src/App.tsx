import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InputField from './components/InputField/InputField'
import SearchField from './components/SearchField/SearchField'
import EquipmentResult from './components/EquipmentResult/EquipmentResult'
import EquipmentSearchPage from './components/EquipmentSearchPage/EquipmentSearchPage'


import Droppable from './hooks/Droppable'
import  Draggable  from './hooks/Draggable'
import { DndContext } from '@dnd-kit/core'
import EquipmentSlot from './components/EquipmentSlot/EquipmentSlot'


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

      <div className="card">

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
    <div className="App">
      <EquipmentSearchPage />
    </div>
        <div>
              <DndContext>
      <Droppable> <EquipmentSlot type="head" id="head"></EquipmentSlot></Droppable>
      <Draggable> i am a helmet</Draggable>
    </DndContext>
        </div>
    </>
  )
}

export default App
