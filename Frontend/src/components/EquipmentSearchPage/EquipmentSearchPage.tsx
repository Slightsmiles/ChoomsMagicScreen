import { useState } from "react";
import SearchField from "../SearchField/SearchField";
import EquipmentResult from "../EquipmentResult/EquipmentResult"
import type { EquipmentCategory, EquipmentItem, EquipmentResultProps } from "../../types/Equipment";


const EquipmentSearchPage = () => {
  const [item, setItem] = useState<EquipmentItem | null>(null);
  const backendUrl: string = "http://localhost:5067/api/"
  const handleSearch = async (query: string) => {
    const res = await fetch(backendUrl + `equipment/${query}`);
    const data = await res.json();

    const { id, index, name, equipment_category } = data;

    setItem({
      id,
      index,
      name,
      category: {
        ...equipment_category,
      }
    });
  };

    return (
    <div>
      <SearchField onSearch={handleSearch} />
      {item && <EquipmentResult item={item} />}
    </div>
  );
};

export default EquipmentSearchPage;