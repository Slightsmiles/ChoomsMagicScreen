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
  const equipmentSlots = Array.from({ length: rows * cols }, (_, i) => `invSlot-${i}` as EquipmentSlotId);

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
      {equipmentSlots.map(slot => (
        <EquipmentSlot
          key={slot}
          id={slot}
          slotId="bag"
          item={draggables.find(item => item.parent === slot) || null}
          onUpdateItem={onUpdateItem}
        />
      ))}

      {/* Render draggable items already occupying a slot */}
      {equipmentSlots.map(slot => {
        const item = draggables.find(d => d.parent === slot);
        return item ? (
          <Draggable key={item.id} id={item.id}>
            <DraggableItemView item={item} onUpdateItem={onUpdateItem} />
          </Draggable>
        ) : null;
      })}
    </div>
  );
}
