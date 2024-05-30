import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@stellar-ui/st-sdk/button';
import { CardComponent } from '@stellar-ui/st-sdk/card';


export interface AccordionItem {
  title: string;
  content: string;
}


@Component({
  selector: 'st-accordion',
  standalone: true,
  imports: [CardComponent, NgClass, ButtonComponent],
  template: `
  <div class="accordion">
    @for (item of items;track item;let i=$index) {
    <st-card>
        <div class="card-header" (click)="toggleItem(i)">
            {{ item.title }}
            <st-button [ngClass]="{'active': activeIndex === i}">
                {{ activeIndex === i ? 'Collapse' : 'Expand' }}
            </st-button>
        </div>
        @if (activeIndex === i) {
        <div class="card-body">
            {{ item.content }}
        </div>
        }
    </st-card>
    }
</div>
  `,
  styles: []
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  activeIndex: number = -1;

  toggleItem(index: number) {
    if (index === this.activeIndex) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }
}
