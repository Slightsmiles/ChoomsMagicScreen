import React, {useState} from "react";
import Draggable from "../../hooks/Draggable";
import {Droppable} from "../../hooks/Droppable";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
export function DummyInventory() {
  const EquipmentSlots = ["head" , "eyes" , "neck" , "weapon" , "chest" , "ring" , "arms" , "shoulder" , "torso" , "body" , "waist" , "feet" , "misc"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="head">Drag me</Draggable>
  );
  const draggableEyes = (
    <Draggable id="eyes">Drag my eyes</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
        
      {EquipmentSlots.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};