import { Component, Input } from "@angular/core";
import { Item } from "../../../../shared/types/item";


@Component({
    selector: 'inventory-slot',
    imports: [],
    templateUrl: './inventory-slot.component.html'

})

export class InventorySlot{

    @Input() item: Item | null = null;
    

}