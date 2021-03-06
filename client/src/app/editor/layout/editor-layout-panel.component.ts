import { Component } from '@angular/core';

@Component({
  selector: 'ml-editor-layout-panel',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
    :host {
      display: flex;
      position: relative;
      width: 100%;
    }
  `
  ]
})
export class EditorLayoutPanelComponent {}
