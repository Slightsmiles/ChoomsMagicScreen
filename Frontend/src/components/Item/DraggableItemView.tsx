import { useState } from "react";
import type { DraggableItem } from "../../types/DraggableItem";
import type { EquipmentSlotId } from "../../types/InventoryState";

interface DraggableItemViewProps {
  item: DraggableItem;
  onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
  onDrop?: (slot: EquipmentSlotId) => void; // optional if you want
}

function DraggableItemView({ item, onUpdateItem }: DraggableItemViewProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      draggable
      onDragEnd={() => onUpdateItem(item.id, { parent: "head" })} // replace "head" dynamically later
    >
      {item.name}
    </div>
  );
}

export default DraggableItemView;
