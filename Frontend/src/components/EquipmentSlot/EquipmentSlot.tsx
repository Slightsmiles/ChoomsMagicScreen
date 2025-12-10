import { useDroppable } from "@dnd-kit/core";
import type { DraggableItem } from "../../types/DraggableItem";
import DraggableItemView from "../Item/DraggableItemView";
import styles from "./EquipmentSlot.module.css";
import itemStyles from "../Item/DraggableItemView.module.css"
import Draggable from "../../hooks/Draggable";
import type { EquipmentSlotId } from "../../types/EquipmentState";

interface EquipmentSlotProps {
  slotId: EquipmentSlotId // Identifier for slotType ("head, "weapon", "ring")
  id: string;  // Unique identifier
  item: DraggableItem | null; // Contained item
  onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
}

export default function EquipmentSlot({ slotId: type, id, item, onUpdateItem }: EquipmentSlotProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const backgroundColor = item ? "lightblue" : isOver ? "lightgreen" : "white";
  

  return (
    <div
      ref={setNodeRef}
      className={styles.slot}
      style={{ backgroundColor }}
    >
     {/*Condtionally renders the slot type if no item is present*/}
      {!item && <p>{id.startsWith("invSlot") ? "bag slot" : id + " slot"}</p>} 

      {/* Conditionally render DraggableItemView if there is an item */}
      {item && (
        <Draggable id={item.id}>
        <DraggableItemView
          item={item}
          onUpdateItem={onUpdateItem}
          className={itemStyles.slotItemOverlay} // absolute positioning over slot
        /></Draggable>
      )}
    </div>
  );
}
