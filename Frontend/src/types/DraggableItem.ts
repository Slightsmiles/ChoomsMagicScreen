import type { EquipmentSlotId, InventoryState } from "./InventoryState";
import EquipmentSlot from "../components/EquipmentSlot/EquipmentSlot";

export interface DraggableItem {
  id: string; // unique identifier
  name: string;
  slot: EquipmentSlotId;
  parent: EquipmentSlotId | null; // null if floating
}


export function createDraggable(id: string, name: string, slot: keyof InventoryState): DraggableItem {
  return { id, name, slot, parent: null };
}
