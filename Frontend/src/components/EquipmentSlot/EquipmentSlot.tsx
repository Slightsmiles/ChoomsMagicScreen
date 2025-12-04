import { useState } from "react"

interface EquipmentSlotProps { //misc represents tomes and other niche items
  type: "head" | "eyes" | "neck" | "weapon" | "chest" | "ring" | "arms" | "shoulder" | "torso" | "body" | "waist" | "feet" | "misc";
  id: string;
}


// Represents an equipment slot that an item can be dragged into
function EquipmentSlot({type}: EquipmentSlotProps) {
    const [isFilled, setFilled] = useState(false);



    return (
        <div>
            <p>Slot type: {type}</p>
        </div>
    );

}

export default EquipmentSlot;