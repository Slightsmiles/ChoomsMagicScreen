import { Injectable } from "@angular/core";
import { CdkDrag, CdkDragDrop } from "@angular/cdk/drag-drop";
import { Item } from "../../../shared/types/item";
import { SlotType } from "../../../shared/types/SlotType.type";


export interface SlotReference {
    slotId: number;
    slotType: SlotType;
}

export interface DragContext {
    item: Item;
    source: SlotReference;
}

export interface DropTarget {
    destination: SlotReference;
}



@Injectable({ providedIn: 'root' })
export class DragDropService {
    private activeDrag: DragContext | null = null;
    startDrag(item: Item, slotId: number, slotType: SlotType): void { 
        this.activeDrag = {
            item,
            source: {
                slotId,
                slotType,
            },
        };

    }
    clearDrag(): void {
        this.activeDrag = null;
    }

    getActiveDrag(): DragContext | null {
        return this.activeDrag;
    }

    isDragging(): boolean {
        return this.activeDrag !== null;
    }

    canDrop(activeDrag : DragContext, target: SlotReference): boolean { //this should verify 2 things: is the slot empty and is the slot of a type that fits the item. (info fetched from slot/item)

        return true;
    }

    performDrop(target: SlotReference){
        if (this.activeDrag !== null){
            if (this.canDrop(this.activeDrag, target)){
                // ensure that slot is updated for item etc

                this.clearDrag();
            }
        } else {
    }
        
    }
}