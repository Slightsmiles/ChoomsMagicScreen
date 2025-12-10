import React, { act, useState } from "react";
import Draggable from "../../hooks/Draggable";
import { Droppable } from "../../hooks/Droppable";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { createDraggable } from "../../types/DraggableItem";
import type { DraggableItem } from "../../types/DraggableItem";
import type { EquipmentState } from "../../types/EquipmentState";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";
import DraggableItemView from "../Item/DraggableItemView";
import itemStyles from '../Item/DraggableItemView.module.css'

import { EquipmentSlots } from "../../types/EquipmentSlots";
interface DummyEquipmentProps {
    draggables: DraggableItem[];
    onUpdateItem: (id: string, updates: Partial<DraggableItem>) => void;
}
export function DummyEquipment({ draggables, onUpdateItem }: DummyEquipmentProps) {






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
                {EquipmentSlots.map((slot) => (
                    <EquipmentSlot
                        key={slot.slotId}
                        id={slot.slotId}
                        slotId={slot.slotType}
                        item={draggables.find(item => item.parent === slot.slotId) || null}
                        onUpdateItem={onUpdateItem}
                    />
                ))}


            </div>
        </div>
    );
}

