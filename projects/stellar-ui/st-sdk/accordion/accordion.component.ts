import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '@stellar-ui/st-sdk/card';
import { ButtonComponent } from '@stellar-ui/st-sdk/button';


export interface AccordionItem {
  title: string;
  content: string;
}


@Component({
  selector: 'st-accordion',
  standalone: true,
  imports: [CardComponent, NgClass, NgFor, NgIf, ButtonComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
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
