import { Component } from '@angular/core';

@Component({
  selector: 'st-card',
  standalone: true,
  imports: [],
  template: `
  <div class="card">
    <div class="container"><ng-content></ng-content></div>
  </div>
  `,
  styles: [
    `
    .card {
      position: relative;
      height: 12rem;
      box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, 0.05);
    }

    .card .container {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background: #ffffff;
        color: black;
    }
    `]
})
export class CardComponent { }
