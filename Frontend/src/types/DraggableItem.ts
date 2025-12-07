import type { InventoryState } from "./InventoryState";

export interface DraggableItem {
  id: string; // unique identifier
  name: string;
  parent: keyof InventoryState | null; // null if floating
}


export function createDraggable(id: string, name: string): DraggableItem {
  return { id, name, parent: null };
}
