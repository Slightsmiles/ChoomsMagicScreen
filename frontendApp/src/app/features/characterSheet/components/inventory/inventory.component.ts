import { Component, Signal, Input } from "@angular/core";
import { InventorySlot } from "../inventory-slot/inventory-slot.component";
import { Item } from "../../../../shared/types/item";

@Component({
    selector: 'inventory-full',
    imports: [InventorySlot],
    templateUrl: './inventory.component.html',

})

export class Inventory {

    slots = Array.from({ length: 20}, (_,i) => ({
        index: i,
        item: null as Item | null
    }));
}