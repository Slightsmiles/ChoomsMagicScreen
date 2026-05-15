import { Component } from "@angular/core";
import { StatSheetComponent } from "../../components/stat-sheet/stat-sheet.component";
import { Inventory } from "../../components/inventory/inventory.component";
@Component({
    selector: 'character-sheet',
    imports: [StatSheetComponent, Inventory],
    templateUrl: './character-sheet.component.html'
})

export class CharacterSheetComponent {

}