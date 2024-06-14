import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'st-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button class="st-button" [ngClass]="buttonClass" role="button"><ng-content></ng-content></button>`,
  styles: [`
    .st-button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .primary {
      background-color: #007bff;
      color: white;
    }
    .secondary {
      background-color: #6c757d;
      color: white;
    }
    .emoji {
      background-color: #ffc107;
      color: white;
    }
    .st-button:hover {
      opacity: 0.8;
    }
  `],
  host: {
    '[style.color]': 'color'
  }
})
export class ButtonComponent {
  @Input() buttonClass: string = 'primary';
  @Input() color!: string
}
