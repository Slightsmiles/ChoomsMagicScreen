import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CharacterSheetComponent } from "./features/characterSheet/pages/character-sheet-page/character-sheet.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterSheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontendApp';
}
