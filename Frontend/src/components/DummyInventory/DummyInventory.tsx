import React, { act, useState } from "react";
import Draggable from "../../hooks/Draggable";
import { Droppable } from "../../hooks/Droppable";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { createDraggable } from "../../types/DraggableItem";

import type { DraggableItem } from "../../types/DraggableItem";
import type { InventoryState } from "../../types/InventoryState";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";
export function DummyInventory() {
    const EquipmentSlots = ["head", "eyes", "neck", "weapon", "chest", "ring", "arms", "shoulder", "torso", "body", "waist", "feet", "misc"] as const;

    const [draggables, setDraggables] = useState<DraggableItem[]>([
        { id: "head", name: "Helmet Of Doom", parent: null },
        { id: "eyes", name: "Glasses of Doom", parent: null }
    ]);

    const emptyInventory: InventoryState = { //used to manage whether the slot is filled or not
        head: null, eyes: null, neck: null, weapon: null, chest: null, ring: null, arms: null, shoulder: null, torso: null, body: null, waist: null, feet: null, misc: null
    };

    const [inventory, setInventory] = useState<InventoryState>(emptyInventory);


    return (

        <DndContext onDragEnd={handleDragEnd}>
            {/* Floating draggables (not in a slot) */}
            {draggables
                .filter(item => item.parent === null)
                .map(item => (
                    <Draggable key={item.id} id={item.id}>
                        {item.name}
                    </Draggable>
                ))
            }
            {EquipmentSlots.map(slot => (
                <EquipmentSlot
                    key={slot}
                    id={slot}
                    type={slot}
                    item={draggables.find(item => item.parent === slot) || null} // single item
                />
            ))}
            {/* {EquipmentSlots.map(slot => (
                <Droppable key={slot} id={slot}>
                    {inventory[slot]
                        ? <Draggable id={inventory[slot]!.id}>{inventory[slot]!.name}</Draggable>
                        : "Drop here"}
                </Droppable>
            ))} */}

        </DndContext>
    );




    function handleDragEnd(event: DragEndEvent) {
        const { over, active } = event;
        if (!over) return;

        const slotId = over.id as keyof InventoryState;


        // Optional: enforce matching type
        if (slotId !== active.id) return;
        
        setDraggables(prev =>
            prev.map(item =>
                item.id === active.id ? { ...item, parent: slotId } : item
            )
        );
        
    }

};