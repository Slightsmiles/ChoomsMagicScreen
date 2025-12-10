import type { EquipmentItem } from "./Equipment";

export interface EquipmentState { //Might change from equipmentItem
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
  bag: EquipmentItem | null; //This should be generic item
}

export type EquipmentSlotId = keyof EquipmentState;