import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from '@stellar-ui/st-sdk/accordion';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `<st-accordion [items]="accordionData"></st-accordion>`,
  styles: [],
  imports: [RouterOutlet, AccordionComponent]
})
export class AppComponent {
  accordionData: any[] = [
    {
      title: 'Section 1: Introduction',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna risus, pulvinar vitae magna eget, ullamcorper porta lorem. Donec sed odio dui. Vivamus at augue eget arcu congue rutrum vitae id libero. Pellentesque pulvinar libero eget leo hendrerit, quis sagittis velit laoreet.`
    },
    {
      title: 'Section 2: Getting Started',
      content: `Mauris ultrices enim at quam venenatis vulputate. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus.`
    },
    {
      title: 'Section 3: Advanced Features',
      content: `Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque sed, egestas sed magna. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.`
    }
  ];
}
