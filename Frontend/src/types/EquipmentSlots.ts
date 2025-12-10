    type EquipmentSlotType = // Ensures no mistyping of equipmentSlots
        | "head"
        | "eyes"
        | "neck"
        | "shoulder"
        | "chest"
        | "torso"
        | "body"
        | "waist"
        | "arms"
        | "feet"
        | "ring"
        | "weapon"
        | "misc";

    interface EquipmentSlotDef {
        slotId: string;
        slotType: EquipmentSlotType;
    }





    export const EquipmentSlots: readonly EquipmentSlotDef[] = [
        { slotId: "ring-1", slotType: "ring" },
        { slotId: "ring-2", slotType: "ring" },
        { slotId: "weapon-main", slotType: "weapon" },
        { slotId: "weapon-off", slotType: "weapon" },
        { slotId: "head", slotType: "head" },
        { slotId: "head-2", slotType: "head" },
        { slotId: "neck", slotType: "neck" },
        { slotId: "shoulder", slotType: "shoulder" },
        { slotId: "chest", slotType: "chest" },
        { slotId: "torso", slotType: "torso" },
        { slotId: "body", slotType: "body" },
        { slotId: "waist", slotType: "waist" },
        { slotId: "feet", slotType: "feet" },
        { slotId: "arms", slotType: "arms" },
        { slotId: "misc", slotType: "misc" },

    ] as const;