import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";
import DraggableItemView from "../Item/DraggableItemView";
import Draggable from "../../hooks/Draggable";
import type { DraggableItem } from "../../types/DraggableItem";
import type { EquipmentSlotId } from "../../types/EquipmentState";

interface DummyBagOfHoldingProps {
  draggables: DraggableItem[];
  onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
}

export function DummyBagOfHolding({ draggables, onUpdateItem }: DummyBagOfHoldingProps) {
  const rows = 8;
  const cols = 12;

  // Generate slot IDs (example: invSlot-0, invSlot-1, …)
  const bagSlots = Array.from({ length: rows * cols }, (_, i) => `invSlot-${i}` as EquipmentSlotId);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 60px)`,
        gridTemplateRows: `repeat(${rows}, 60px)`,
        gap: "2px"
      }}
    >
      {/* Render empty slots */}
      {bagSlots.map(slot => (
        <EquipmentSlot
          key={slot}
          id={slot}
          slotId="bag"
          item={draggables.find(item => item.parent === slot) || null}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </div>
  );
}
