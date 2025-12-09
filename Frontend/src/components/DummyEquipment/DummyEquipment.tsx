import React, { act, useState } from "react";
import Draggable from "../../hooks/Draggable";
import { Droppable } from "../../hooks/Droppable";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { createDraggable } from "../../types/DraggableItem";
import type { DraggableItem } from "../../types/DraggableItem";
import type { InventoryState } from "../../types/InventoryState";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";
import DraggableItemView from "../Item/DraggableItemView";
import itemStyles from '../Item/DraggableItemView.module.css'

interface DummyEquipmentProps {
    draggables: DraggableItem[];
    onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
}
export function DummyEquipment({ draggables, onUpdateItem }: DummyEquipmentProps) {
    const EquipmentSlots = ["head", "eyes", "neck", "weapon", "chest", "ring", "arms", "shoulder", "torso", "body", "waist", "feet", "misc"] as const;





    return (
        <div style={{ display: 'flex', gap: '16px' }}>
            <div>
                {/* Floating draggables */}
                {draggables
                    .filter(item => item.parent === null)
                    .map(item => (
                        <Draggable key={item.id} id={item.id}>
                            <DraggableItemView
                                item={item}
                                onUpdateItem={onUpdateItem}
                                className={itemStyles.item}
                            />
                        </Draggable>
                    ))}
            </div>

            <div>
                {/* Equipment slots */}
                {EquipmentSlots.map(slot => (
                    <EquipmentSlot
                        key={slot}
                        id={slot}
                        type={slot}
                        item={draggables.find(item => item.parent === slot) || null}
                        onUpdateItem={onUpdateItem}
                    />
                ))}


            </div>
        </div>
    );
}

