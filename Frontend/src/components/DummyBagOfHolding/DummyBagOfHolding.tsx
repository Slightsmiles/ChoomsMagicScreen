import { useState } from "react";
import type { DraggableItem } from "../../types/DraggableItem";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";
import Draggable from "../../hooks/Draggable";


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
                gridTemplateColumns: `repeat(${cols}, 60px)`, // 60px per column (love me some magic numbering)
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

            {/* used for generating draggable items already occupying a slot */}
            {equipmentSlots.map(slot => {
                    const item = draggables.find(d => d.parent === slot);
                    return item ? (
                        <Draggable key={item.id} id={item.id} item={item} />
                    ) : null;
                })}
        </div>

    )
}