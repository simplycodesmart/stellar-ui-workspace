import { Component } from '@angular/core';

@Component({
  selector: 'st-button',
  standalone: true,
  imports: [],
  template: `<button class="st-button" role="button"><ng-content></ng-content></button>`,
  styles: []
})
export class ButtonComponent {}
