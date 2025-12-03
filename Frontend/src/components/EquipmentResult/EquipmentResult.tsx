import React from "react";
import type { EquipmentResultProps, EquipmentCategory, EquipmentItem } from "../../types/Equipment";


const EquipmentResult: React.FC<EquipmentResultProps> = ({ item }) => {
  if (!item) return null;

  return (
    <div className="p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-2">{item.name}</h2>
      <p className="mb-1">ID: {item.id}</p>
      <p className="mb-1">Index: {item.index}</p>
      <div className="mt-2">
        <h3 className="font-semibold">Category</h3>
        <p>Name: {item.category.name}</p>
        <p>Index: {item.category.index}</p>
        <p>URL: {item.category.url}</p>
      </div>
    </div>
  );
};

export default EquipmentResult;
