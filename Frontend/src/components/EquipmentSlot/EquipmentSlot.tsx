import { useState } from "react"
import type { DraggableItem } from "../../types/DraggableItem";
import { useDroppable } from "@dnd-kit/core";

interface EquipmentSlotProps { //misc represents tomes and other niche items
    type: "head" | "eyes" | "neck" | "weapon" | "chest" | "ring" | "arms" | "shoulder" | "torso" | "body" | "waist" | "feet" | "misc";
    id: string;
    item: DraggableItem | null;
}




export default function EquipmentSlot({ type, id, item }: EquipmentSlotProps) {
    const { isOver, setNodeRef } = useDroppable({ id });


    function getBackgroundColor() {
        if (item) return "lightblue";
        if (isOver) return "lightgreen";
        return "white";
    }
    return (
        <div
            ref={setNodeRef}
            style={{
                textEmphasisColor: "black",
                border: "1px solid gray",
                padding: "8px",
                minHeight: "40px",
                minWidth: "20px",
                backgroundColor: getBackgroundColor()

            }}
        >
            <p>Slot type: {type}</p>
            {item ? <div>{item.name}</div> : "Drop here"}

        </div>
    );
}
