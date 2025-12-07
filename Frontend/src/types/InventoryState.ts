import type { EquipmentItem } from "./Equipment";

export interface InventoryState { //Might change from equipmentItem
  head: EquipmentItem | null;
  eyes: EquipmentItem | null;
  neck: EquipmentItem | null;
  weapon: EquipmentItem | null;
  chest: EquipmentItem | null;
  ring: EquipmentItem | null;
  arms: EquipmentItem | null;
  shoulder: EquipmentItem | null;
  torso: EquipmentItem | null;
  body: EquipmentItem | null;
  waist: EquipmentItem | null;
  feet: EquipmentItem | null;
  misc: EquipmentItem | null;
}
