import { Component, signal } from "@angular/core";

@Component({
    selector: 'stat-sheet',
    imports: [],
    template: `
    <h1> Stat Sheet </h1>
    <p> This is the stat sheet of {{userName()}} </p>
    `,
})

export class StatSheetComponent {
    userName = signal('Choom the OG');
}