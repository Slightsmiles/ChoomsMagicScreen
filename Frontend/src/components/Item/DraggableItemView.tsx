import { useState } from "react";
import type { DraggableItem } from "../../types/DraggableItem";
import type { EquipmentSlotId } from "../../types/EquipmentState";
import styles from "./DraggableItemView.module.css"
interface DraggableItemViewProps {
  item: DraggableItem;
  onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
  onDrop?: (slot: EquipmentSlotId) => void; // might use
  className?: string;
}

function DraggableItemView({ item, onUpdateItem, className }: DraggableItemViewProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      draggable
      onDragEnd={() => onUpdateItem(item.id, { parent: "head" })} // replace "head" dynamically later
      className={`${className} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item.name}
    </div>
  );
}

export default DraggableItemView;
