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
import type { EquipmentState } from './types/EquipmentState'
import type { DraggableItem } from './types/DraggableItem'
import { EquipmentSlots } from './types/EquipmentSlots'

function App() {
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const backendUrl: string = "http://localhost:5067/api/" //rememberoo change this


  const [draggables, setDraggables] = useState<DraggableItem[]>([
    { id: "HoD", name: "Helmet Of Doom", slot: "head", parent: null },
    { id: "HoMD", name: "Helmet Of MORE DOOM", slot: "head", parent: null },
    { id: "GoD", name: "Glasses of Doom", slot: "eyes", parent: null },
    { id: "MiscItem", name: "Misc of yeet", slot: "misc", parent: null },
    { id: "weapMain", name: "one handed salami", slot: "weapon", parent: null}
  ]);


  async function loadAllEquipment() {
    try {
      const res = await fetch(backendUrl + "equipment")
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setItems(data) 
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
      setItems([data]) 
    } catch (err: any) {
      setError(err.message)
    }
  }


  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    if (!over) return;

    const slotId = String(over.id);

    const draggedItem = draggables.find(item => item.id === active.id);
    if (!draggedItem) return;

    // Normalize drop target: equipment slot or bag slot. Change this if a new type of inventory is created
    const dropTarget =
      EquipmentSlots.find(s => s.slotId === slotId) || { slotId, slotType: "bag" as const };

    // Enforce type compatibility for equipment slots
    if (dropTarget.slotType !== "bag" && draggedItem.slot !== dropTarget.slotType) return;

    // Updates the parent: move dragged item into slot, clear existing occupant if any
    setDraggables(prev =>
      prev.map(item =>
        item.id === draggedItem.id
          ? { ...item, parent: slotId }
          : item.parent === slotId
            ? { ...item, parent: null }
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
        <DummyEquipment
          draggables={draggables}
          onUpdateItem={(id, updates) =>
            setDraggables(prev =>
              prev.map(item => (item.id === id ? { ...item, ...updates } : item))
            )
          }
        />
        <DummyBagOfHolding draggables={draggables}
          onUpdateItem={(id, updates) =>
            setDraggables(prev =>
              prev.map(item => (item.id === id ? { ...item, ...updates } : item))
            )
          } />

      </DndContext>


    </>

  )
}

export default App
