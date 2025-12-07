import { useState } from "react"
import type { DraggableItem } from "../../types/DraggableItem";
import { useDroppable } from "@dnd-kit/core";
import styles from "./EquipmentSlot.module.css";

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
            className={styles.slot}
            style={{ backgroundColor: getBackgroundColor() }}
        >
            <p>Slot type: {type}</p>
            {item ? <div className={styles.slotItem}>{item.name}</div> : "Drop here"}
        </div>
    );
}
