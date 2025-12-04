export interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}

export interface EquipmentItem {
  id: number;
  index: string;
  name: string;
  category: EquipmentCategory;
}

export interface EquipmentResultProps {
  item: EquipmentItem | null;
}

export interface Cost {
  quantity: number,
  unit: string

}