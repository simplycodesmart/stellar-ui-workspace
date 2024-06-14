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
      min-height: 5rem;
      -webkit-box-shadow: 5px 3px 24px 7px rgba(20,20,20,0.39);
      -moz-box-shadow: 5px 3px 24px 7px rgba(20,20,20,0.39);
      box-shadow: 5px 3px 24px 7px rgba(20,20,20,0.39);
      position: relative;
      margin: 10px;
      border-radius: 10px;
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
