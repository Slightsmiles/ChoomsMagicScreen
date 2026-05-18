import { Item } from "../types/item";
import { SlotType } from "../types/SlotType.type";

export interface Slot {
  id: number;
  item: Item | null;
  slotType: SlotType;
}
