import { useState } from "react";
import type { DraggableItem } from "../../types/DraggableItem";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";


interface DummyBagOfHoldingProps {
    draggables: DraggableItem[];
}

export function DummyBagOfHolding({draggables}: DummyBagOfHoldingProps) {
    const rows = 8;
    const cols = 12;

    // Generate slot IDs (example: slot-0, slot-1, …)
    const equipmentSlots = Array.from({ length: rows * cols }, (_, i) => `invSlot-${i}`);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 60px)`, // 60px per column
                gridTemplateRows: `repeat(${rows}, 60px)`,
                gap: "2px"
            }}
        >
            {equipmentSlots.map(slot => (
                <EquipmentSlot
                    key={slot}
                    id={slot}
                    type="misc" 
                    item={draggables.find(item => item.parent === slot) || null}
                />
            ))}
        </div>

    )
}