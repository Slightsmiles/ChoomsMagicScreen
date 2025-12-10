import type { EquipmentSlotId, EquipmentState } from "./EquipmentState";
import EquipmentSlot from "../components/EquipmentSlot/EquipmentSlot";

export interface DraggableItem {
  id: string; // unique identifier
  name: string;
  slot: EquipmentSlotId; //"head", "shoulder" "ring" etc
  parent: string | null; // null if floating
}


export function createDraggable(id: string, name: string, slot: keyof EquipmentState): DraggableItem {
  return { id, name, slot, parent: null };
}
