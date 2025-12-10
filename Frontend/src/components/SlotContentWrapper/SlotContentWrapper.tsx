import Draggable from "../../hooks/Draggable";
import DraggableItemView from "../Item/DraggableItemView";
import type { DraggableItem } from "../../types/DraggableItem";
import itemStyles from "../Item/DraggableItemView.module.css";

// Maybe just yeet this?
// might use it for seperation of concerns 


interface SlotContentProps {
  item: DraggableItem | null;
  slotType: string; // "head", "ring", "bag"
  onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
}

export default function SlotContent({ item, slotType, onUpdateItem, isDraggable }: SlotContentProps & { isDraggable: boolean }) {
  if (!item) return <p>Slot type: {slotType}</p>;

  if (isDraggable) {
    return (
      <Draggable id={item.id}>
        <DraggableItemView
          item={item}
          onUpdateItem={onUpdateItem}
          className={itemStyles.slotItemOverlay}
        />
      </Draggable>
    );
  }

  // Static rendering, no drag behavior
  return <DraggableItemView item={item} onUpdateItem={onUpdateItem} />;
}
