import type { InventoryState } from "./InventoryState";

export interface DraggableItem {
  id: string; // unique identifier
  name: string;
  slot: keyof InventoryState;
  parent: string | null; // null if floating
}


export function createDraggable(id: string, name: string, slot: keyof InventoryState): DraggableItem {
  return { id, name, slot, parent: null };
}
