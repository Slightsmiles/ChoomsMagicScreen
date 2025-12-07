import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from "./app.module.css"
import InputField from './components/InputField/InputField'
import SearchField from './components/SearchField/SearchField'
import EquipmentResult from './components/EquipmentResult/EquipmentResult'
import EquipmentSearchPage from './components/EquipmentSearchPage/EquipmentSearchPage'


import { Droppable } from './hooks/Droppable'
import Draggable from './hooks/Draggable'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import EquipmentSlot from './components/EquipmentSlot/EquipmentSlot'

import { DummyEquipment } from './components/DummyEquipment/DummyEquipment'
import { DummyBagOfHolding } from './components/DummyBagOfHolding/DummyBagOfHolding'
import type { InventoryState } from './types/InventoryState'
import type { DraggableItem } from './types/DraggableItem'

function App() {
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const backendUrl: string = "http://localhost:5067/api/" //rememberoo change this


  const [draggables, setDraggables] = useState<DraggableItem[]>([
    { id: "HoD", name: "Helmet Of Doom", slot: "head", parent: null },
    { id: "HoMD", name: "Helmet Of MORE DOOM", slot: "head", parent: null },
    { id: "GoD", name: "Glasses of Doom", slot: "eyes", parent: null },
    { id: "PENIS", name: "Glasses of Penis", slot: "misc", parent: null }
  ]);


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


  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    if (!over) return;

    const slotId = String(over.id);
    const slotFilled = draggables.some(item => item.parent === slotId);
    if (slotFilled) {

    }
    // Find the dragged item
    const draggedItem = draggables.find(item => item.id === active.id);
    if (!draggedItem) return;

    // Enforce that the item's slot matches the target (breaks with bagofholding current)
    const isBagSlot = slotId.startsWith("invSlot-");
    // If it's an equipment slot, enforce type match
    if (!isBagSlot && draggedItem.slot !== slotId) return;

    //Updates parent
    setDraggables(prev =>
      prev.map(item =>
        item.id === active.id
          ? { ...item, parent: slotId } // moving dragged item into slot
          : item.parent === slotId
            ? { ...item, parent: null } // move existing item out
            : item
      )
    );
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
      <DndContext onDragEnd={handleDragEnd}>
        <DummyEquipment draggables={draggables} />
        <DummyBagOfHolding draggables={draggables} />

      </DndContext>


    </>

  )
}

export default App
